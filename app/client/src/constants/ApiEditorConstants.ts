import { ApiActionConfig } from "entities/Action";
import { DEFAULT_ACTION_TIMEOUT } from "@appsmith/constants/ApiConstants";

// This constant lists all the support HTTP methods & their color in
// the entity explorer
export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const HTTP_METHODS_COLOR: Record<HTTP_METHOD, string> = {
  GET: "#457AE6",
  POST: "#FEB811",
  PUT: "#5BB749",
  DELETE: "#E22C2C",
  PATCH: "#6D6D6D",
};

export enum API_EDITOR_TABS {
  HEADERS = "HEADERS",
  PARAMS = "PARAMS",
  BODY = "BODY",
  PAGINATION = "PAGINATION",
  SETTINGS = "SETTINGS",
  AUTHENTICATION = "AUTHENTICATION",
}

export const HTTP_METHOD_OPTIONS = Object.values(HTTP_METHOD).map((method) => ({
  value: method,
}));

export const GRAPHQL_HTTP_METHOD_OPTIONS = [
  {
    value: HTTP_METHOD.GET,
  },
  {
    value: HTTP_METHOD.POST,
  },
];

export const REST_PLUGIN_PACKAGE_NAME = "restapi-plugin";
export const GRAPHQL_PLUGIN_PACKAGE_NAME = "graphql-plugin";

export const EMPTY_KEY_VALUE_PAIRS = [
  { key: "", value: "" },
  { key: "", value: "" },
];

export enum ApiContentType {
  NONE = "none",
  JSON = "json",
  FORM_URLENCODED = "x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multi-part/form-data",
  RAW = "text/plain",
}

// This lists all the support content types in the API body. The value field is the
// value for the content-type header. In the UI, these content types are displayed in the
// order defined here.
export const POST_BODY_FORMAT_OPTIONS: Record<
  keyof typeof ApiContentType, // using the key of ApiContentType enum as the key property of this Record type.
  string
> = {
  NONE: "none",
  JSON: "application/json",
  FORM_URLENCODED: "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA: "multipart/form-data",
  RAW: "text/plain",
};

export const HTTP_METHODS_DEFAULT_FORMAT_TYPES: Record<HTTP_METHOD, string> = {
  GET: POST_BODY_FORMAT_OPTIONS.NONE,
  POST: POST_BODY_FORMAT_OPTIONS.JSON,
  PUT: POST_BODY_FORMAT_OPTIONS.JSON,
  DELETE: POST_BODY_FORMAT_OPTIONS.RAW,
  PATCH: POST_BODY_FORMAT_OPTIONS.JSON,
};

const DEFAULT_METHOD_TYPE = HTTP_METHOD.GET;

export const DEFAULT_API_ACTION_CONFIG: ApiActionConfig = {
  timeoutInMillisecond: DEFAULT_ACTION_TIMEOUT,
  encodeParamsToggle: true,
  httpMethod: DEFAULT_METHOD_TYPE,
  headers: EMPTY_KEY_VALUE_PAIRS.slice(),
  queryParameters: EMPTY_KEY_VALUE_PAIRS.slice(),
  body: "",
  bodyFormData: [],
  formData: {
    apiContentType: HTTP_METHODS_DEFAULT_FORMAT_TYPES[DEFAULT_METHOD_TYPE],
  },
  pluginSpecifiedTemplates: [
    {
      // JSON smart substitution
      value: true,
    },
  ],
};

export const DEFAULT_PROVIDER_OPTION = "Business Software";
export const CONTENT_TYPE_HEADER_KEY = "content-type";

// Graphql Pagination type
type GRAPHQL_PAGINATION_INDIVIDUAL_TYPE = {
  name?: any;
  type?: any;
  value?: any;
};
export type GRAPHQL_PAGINATION_TYPE = {
  cursorBased?: {
    next?: {
      limit?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE & { isSeparate: boolean };
      cursor?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE;
    };
    previous?: {
      limit?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE;
      cursor?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE;
    };
  };
  limitBased?: {
    limit?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE;
    offset?: GRAPHQL_PAGINATION_INDIVIDUAL_TYPE;
  };
};

// Graphql Default Config
export const DEFAULT_GRAPHQL_ACTION_CONFIG: ApiActionConfig = {
  timeoutInMillisecond: DEFAULT_ACTION_TIMEOUT,
  encodeParamsToggle: true,
  httpMethod: HTTP_METHOD.POST,
  headers: [
    { key: CONTENT_TYPE_HEADER_KEY, value: POST_BODY_FORMAT_OPTIONS.JSON },
    { key: "", value: "" },
  ],
  queryParameters: EMPTY_KEY_VALUE_PAIRS.slice(),
  body: "",
  formData: {
    apiContentType: POST_BODY_FORMAT_OPTIONS.JSON,
  },
  pluginSpecifiedTemplates: [
    {
      // JSON smart substitution
      value: true,
    },
    {
      // Query Variables
      value: "",
    },
    {
      /* 
        Pagination data having structure : GRAPHQL_PAGINATION_TYPE
      */
      value: {},
    },
  ],
};

// Start: Default Create API Config for Rest as well as Graphql
export type DEFAULT_CREATE_API_CONFIG_TYPE = {
  config: ApiActionConfig;
  datasource: {
    name: string;
  };
  eventData: {
    actionType: string;
  };
};

export const DEFAULT_CREATE_API_CONFIG: Record<
  string,
  DEFAULT_CREATE_API_CONFIG_TYPE
> = {
  [REST_PLUGIN_PACKAGE_NAME]: {
    config: DEFAULT_API_ACTION_CONFIG,
    datasource: {
      name: "DEFAULT_REST_DATASOURCE",
    },
    eventData: {
      actionType: "API",
    },
  },
  [GRAPHQL_PLUGIN_PACKAGE_NAME]: {
    config: DEFAULT_GRAPHQL_ACTION_CONFIG,
    datasource: {
      name: "DEFAULT_GRAPHQL_DATASOURCE",
    },
    eventData: {
      actionType: "GRAPHQL",
    },
  },
};
// End: Default Create API Config for Rest as well as Graphql

export enum ApiResponseTypes {
  JSON = "JSON",
  TABLE = "TABLE",
  RAW = "RAW",
}

// export const ApiResponseTypesOptions:
export const API_RESPONSE_TYPE_OPTIONS: {
  [key in keyof typeof ApiResponseTypes]: string;
} = {
  JSON: "JSON",
  TABLE: "TABLE",
  RAW: "RAW",
};
export const POST_BODY_FORMATS = Object.values(POST_BODY_FORMAT_OPTIONS).map(
  (option) => {
    return option;
  },
);

export const POST_BODY_FORMAT_OPTIONS_ARRAY = Object.values(
  POST_BODY_FORMAT_OPTIONS,
);

export const POST_BODY_FORMAT_TITLES = Object.entries(
  POST_BODY_FORMAT_OPTIONS,
).map((option) => {
  return { title: option[0], key: option[1] };
});

export enum MultiPartOptionTypes {
  TEXT = "Text",
  FILE = "File",
  ARRAY = "Array",
}

export interface MULTI_PART_DROPDOWN_OPTION {
  label: MultiPartOptionTypes;
  value: string;
}

export const MULTI_PART_DROPDOWN_OPTIONS: MULTI_PART_DROPDOWN_OPTION[] = [
  {
    label: MultiPartOptionTypes.TEXT,
    value: "TEXT",
  },
  {
    label: MultiPartOptionTypes.FILE,
    value: "FILE",
  },
  {
    label: MultiPartOptionTypes.ARRAY,
    value: "ARRAY",
  },
];

export const DEFAULT_MULTI_PART_DROPDOWN_WIDTH = "77px";
export const DEFAULT_MULTI_PART_DROPDOWN_HEIGHT = "100%";
export const DEFAULT_MULTI_PART_DROPDOWN_PLACEHOLDER = "Type";
