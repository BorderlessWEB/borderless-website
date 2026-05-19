declare module "react-simple-maps" {
  import { ComponentType, ReactNode, CSSProperties, SVGProps } from "react";

  export interface ComposableMapProps {
    projection?: string | (() => unknown);
    projectionConfig?: Record<string, unknown>;
    width?: number;
    height?: number;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }
  export const ComposableMap: ComponentType<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string | object | unknown[];
    children: (data: {
      geographies: GeographyType[];
      outline?: unknown;
      borders?: unknown;
      path?: unknown;
      projection?: unknown;
    }) => ReactNode;
    parseGeographies?: (geos: unknown[]) => unknown[];
    className?: string;
  }
  export const Geographies: ComponentType<GeographiesProps>;

  export interface GeographyType {
    rsmKey: string;
    properties: Record<string, string>;
    svgPath: string;
    type: string;
    geometry: unknown;
    id: string;
  }

  export interface GeographyProps {
    geography: GeographyType;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
  }
  export const Geography: ComponentType<GeographyProps>;

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
    className?: string;
  }
  export const Marker: ComponentType<MarkerProps>;

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [[number, number], [number, number]];
    onMoveStart?: (position: unknown, event: unknown) => void;
    onMove?: (position: unknown, event: unknown) => void;
    onMoveEnd?: (position: unknown, event: unknown) => void;
    filterZoomEvent?: (event: unknown) => boolean;
    className?: string;
    children?: ReactNode;
  }
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;

  export interface GraticuleProps {
    fill?: string;
    stroke?: string;
    step?: [number, number];
    className?: string;
  }
  export const Graticule: ComponentType<GraticuleProps>;

  export interface SphereProps {
    id?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
  }
  export const Sphere: ComponentType<SphereProps>;

  export interface LineProps {
    from?: [number, number];
    to?: [number, number];
    coordinates?: [number, number][];
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    className?: string;
  }
  export const Line: ComponentType<LineProps>;

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    curve?: number;
    connectorProps?: SVGProps<SVGPathElement>;
    className?: string;
    children?: ReactNode;
  }
  export const Annotation: ComponentType<AnnotationProps>;
}
