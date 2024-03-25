import type { FontAttr, PositionAttr, ResourceColor, ShapeAttr, } from '../../common/types/artUIBase';
import { Color } from '../../common/types/artUIEnum';

import type { NodeInfo, ImageProp, CustomHandler } from '../../common/types/htmlParser';


export interface TextBuilderOptions {
  node: NodeInfo;
  parentNode?: NodeInfo;
}


export interface LabelLevelBuilderOptions extends TextBuilderOptions {
  isSetOutStyle: boolean;
}

export interface NodesBuilderOptions {
  nodes?: NodeInfo[];
  parentNode?: NodeInfo;
}

export interface FancySpanOptions extends FontAttr {

  decoration?: {
    type: 0 | 1 | 2 | 3;
    color?: ResourceColor;
  };
  letterSpacing?: string;
}

export interface FancyTextOptions extends FontAttr, ShapeAttr, PositionAttr {
  zIndex?: number;
  opacity?: number;
  backgroundColor?: ResourceColor;
  backgroundImage?: string;
  decoration?: {
    type: 0 | 1 | 2 | 3;
    color?: ResourceColor;
  };
  lineHeight?: string | number;
  letterSpacing?: string;
  textAlign?: 0 | 1 | 2 | 3;
  textOverflow?: {
    overflow: 0 | 1 | 2 | 3;
  };
  maxLines?: number;
}

export interface FancyImageOptions extends ShapeAttr {
  opacity?: number;
  objectFit?: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface fancyVideoOptions {
  width?: string | number;
  height?: string | number;
}

export interface fancyTextInputOptions {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  fontColor?: ResourceColor;
}

export interface fancyTextAreaOptions {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  fontColor?: Color;
  backgroundColor?: Color | number | string | ResourceColor;
}

export interface RichTextOption {
  content: string;
  imageProp?: ImageProp;
  customHandler?: CustomHandler;
}

export interface LinkPressParame {
  text?: string;
  link: string;
}

export interface LinkPressMethod<T = LinkPressParame> {
  (arg: T): T | void
}