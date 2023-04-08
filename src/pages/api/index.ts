import { RequestSetting } from "@/types/components";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const headers: any = {};
        body.headers.forEach((header: RequestSetting) => {
          if (header.selected) headers[header.key] = header.value;
        });
        const parameters = body.parameters
          .map((param: RequestSetting) => {
            if (param.selected) return `${param.key}=${param.value}`;
          })
          .join("&");
        const fullUrl =
          parameters.trim() !== ""
            ? [body.url, "?", parameters].join("")
            : body.url;
        const requestObject: any = {
          method: body.requestMethod,
          headers: headers,
        };
        if (body.body && !["GET", "DELETE"].includes(body.requestMethod)) {
          requestObject["body"] = body.body;
        }
        const response = await fetch(fullUrl, requestObject);
        const parsedResponse = await response.json();
        return res.status(200).json(parsedResponse);
      } catch (error: any) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
