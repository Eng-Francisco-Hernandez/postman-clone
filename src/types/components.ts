export interface RequestBarProps {
  url: string;
  onChangeUrl: (url: string) => void;
  onChangeRequestMethod: (method: string) => void;
  sendRequest: () => void;
}

export interface RequestSetting {
  id: string;
  selected: boolean;
  key: string;
  value: string;
  description: string;
}

export interface RequestSettingsProps {
  requestSettings: RequestSetting[];
  addRequestSetting: () => void;
  deleteRequestSetting: (id: string) => void;
  onChangeRequestSetting: (id: string, key: string, value: string | boolean) => void;
}
