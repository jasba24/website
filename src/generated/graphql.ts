import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  coverPost: Array<Post>;
  coverPortfolio: Array<Portfolio>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetCoverPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetCoverPortfolioArgs = {
  where?: Maybe<PortfolioWhereInput>;
  orderBy?: Maybe<PortfolioOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  coverPost?: Maybe<PostCreateManyInlineInput>;
  coverPortfolio?: Maybe<PortfolioCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  coverPost_every?: Maybe<PostWhereInput>;
  coverPost_some?: Maybe<PostWhereInput>;
  coverPost_none?: Maybe<PostWhereInput>;
  coverPortfolio_every?: Maybe<PortfolioWhereInput>;
  coverPortfolio_some?: Maybe<PortfolioWhereInput>;
  coverPortfolio_none?: Maybe<PortfolioWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  coverPost?: Maybe<PostUpdateManyInlineInput>;
  coverPortfolio?: Maybe<PortfolioUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  coverPost_every?: Maybe<PostWhereInput>;
  coverPost_some?: Maybe<PostWhereInput>;
  coverPost_none?: Maybe<PostWhereInput>;
  coverPortfolio_every?: Maybe<PortfolioWhereInput>;
  coverPortfolio_some?: Maybe<PortfolioWhereInput>;
  coverPortfolio_none?: Maybe<PortfolioWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  Es = 'es',
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one seo */
  createSeo?: Maybe<Seo>;
  /** Update one seo */
  updateSeo?: Maybe<Seo>;
  /** Delete one seo from _all_ existing stages. Returns deleted document. */
  deleteSeo?: Maybe<Seo>;
  /** Upsert one seo */
  upsertSeo?: Maybe<Seo>;
  /** Publish one seo */
  publishSeo?: Maybe<Seo>;
  /** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeo?: Maybe<Seo>;
  /** Update many Seo documents */
  updateManySeosConnection: SeoConnection;
  /** Delete many Seo documents, return deleted documents */
  deleteManySeosConnection: SeoConnection;
  /** Publish many Seo documents */
  publishManySeosConnection: SeoConnection;
  /** Find many Seo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeosConnection: SeoConnection;
  /**
   * Update many seos
   * @deprecated Please use the new paginated many mutation (updateManySeosConnection)
   */
  updateManySeos: BatchPayload;
  /**
   * Delete many Seo documents
   * @deprecated Please use the new paginated many mutation (deleteManySeosConnection)
   */
  deleteManySeos: BatchPayload;
  /**
   * Publish many Seo documents
   * @deprecated Please use the new paginated many mutation (publishManySeosConnection)
   */
  publishManySeos: BatchPayload;
  /**
   * Unpublish many Seo documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeosConnection)
   */
  unpublishManySeos: BatchPayload;
  /** Create one portfolio */
  createPortfolio?: Maybe<Portfolio>;
  /** Update one portfolio */
  updatePortfolio?: Maybe<Portfolio>;
  /** Delete one portfolio from _all_ existing stages. Returns deleted document. */
  deletePortfolio?: Maybe<Portfolio>;
  /** Upsert one portfolio */
  upsertPortfolio?: Maybe<Portfolio>;
  /** Publish one portfolio */
  publishPortfolio?: Maybe<Portfolio>;
  /** Unpublish one portfolio from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPortfolio?: Maybe<Portfolio>;
  /** Update many Portfolio documents */
  updateManyPortfoliosConnection: PortfolioConnection;
  /** Delete many Portfolio documents, return deleted documents */
  deleteManyPortfoliosConnection: PortfolioConnection;
  /** Publish many Portfolio documents */
  publishManyPortfoliosConnection: PortfolioConnection;
  /** Find many Portfolio documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPortfoliosConnection: PortfolioConnection;
  /**
   * Update many portfolios
   * @deprecated Please use the new paginated many mutation (updateManyPortfoliosConnection)
   */
  updateManyPortfolios: BatchPayload;
  /**
   * Delete many Portfolio documents
   * @deprecated Please use the new paginated many mutation (deleteManyPortfoliosConnection)
   */
  deleteManyPortfolios: BatchPayload;
  /**
   * Publish many Portfolio documents
   * @deprecated Please use the new paginated many mutation (publishManyPortfoliosConnection)
   */
  publishManyPortfolios: BatchPayload;
  /**
   * Unpublish many Portfolio documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPortfoliosConnection)
   */
  unpublishManyPortfolios: BatchPayload;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Create one tag */
  createTag?: Maybe<Tag>;
  /** Update one tag */
  updateTag?: Maybe<Tag>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>;
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>;
  /** Publish one tag */
  publishTag?: Maybe<Tag>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>;
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection;
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateSeoArgs = {
  data: SeoCreateInput;
};


export type MutationUpdateSeoArgs = {
  where: SeoWhereUniqueInput;
  data: SeoUpdateInput;
};


export type MutationDeleteSeoArgs = {
  where: SeoWhereUniqueInput;
};


export type MutationUpsertSeoArgs = {
  where: SeoWhereUniqueInput;
  upsert: SeoUpsertInput;
};


export type MutationPublishSeoArgs = {
  where: SeoWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishSeoArgs = {
  where: SeoWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
};


export type MutationDeleteManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
};


export type MutationPublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePortfolioArgs = {
  data: PortfolioCreateInput;
};


export type MutationUpdatePortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  data: PortfolioUpdateInput;
};


export type MutationDeletePortfolioArgs = {
  where: PortfolioWhereUniqueInput;
};


export type MutationUpsertPortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  upsert: PortfolioUpsertInput;
};


export type MutationPublishPortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishPortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPortfoliosConnectionArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  data: PortfolioUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPortfoliosConnectionArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPortfoliosConnectionArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPortfoliosConnectionArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPortfoliosArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  data: PortfolioUpdateManyInput;
};


export type MutationDeleteManyPortfoliosArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
};


export type MutationPublishManyPortfoliosArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPortfoliosArgs = {
  where?: Maybe<PortfolioManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  upsert: PostUpsertInput;
};


export type MutationPublishPostArgs = {
  where: PostWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishPostArgs = {
  where: PostWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationUpdateTagArgs = {
  where: TagWhereUniqueInput;
  data: TagUpdateInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  where: TagWhereUniqueInput;
  upsert: TagUpsertInput;
};


export type MutationPublishTagArgs = {
  where: TagWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishTagArgs = {
  where: TagWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  data: TagUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  data: TagUpdateManyInput;
};


export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
};


export type MutationPublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Portfolio = Node & {
  __typename?: 'Portfolio';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Portfolio>;
  /** Get the document in other stages */
  documentInStages: Array<Portfolio>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  industry: Scalars['String'];
  technologies: Array<Scalars['String']>;
  project_url: Scalars['String'];
  body: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  cover: Asset;
  seo?: Maybe<Seo>;
  /** List of Portfolio versions */
  history: Array<Version>;
};


export type PortfolioLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type PortfolioDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PortfolioCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PortfolioUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PortfolioPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PortfolioCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PortfolioUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PortfolioPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PortfolioCoverArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PortfolioSeoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PortfolioHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PortfolioConnectInput = {
  /** Document to connect */
  where: PortfolioWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PortfolioConnection = {
  __typename?: 'PortfolioConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PortfolioEdge>;
  aggregate: Aggregate;
};

export type PortfolioCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  slug: Scalars['String'];
  /** industry input for default locale (en) */
  industry: Scalars['String'];
  technologies: Array<Scalars['String']>;
  project_url: Scalars['String'];
  /** body input for default locale (en) */
  body: Scalars['String'];
  cover: AssetCreateOneInlineInput;
  seo?: Maybe<SeoCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PortfolioCreateLocalizationsInput>;
};

export type PortfolioCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  industry: Scalars['String'];
  body: Scalars['String'];
};

export type PortfolioCreateLocalizationInput = {
  /** Localization input */
  data: PortfolioCreateLocalizationDataInput;
  locale: Locale;
};

export type PortfolioCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PortfolioCreateLocalizationInput>>;
};

export type PortfolioCreateManyInlineInput = {
  /** Create and connect multiple existing Portfolio documents */
  create?: Maybe<Array<PortfolioCreateInput>>;
  /** Connect multiple existing Portfolio documents */
  connect?: Maybe<Array<PortfolioWhereUniqueInput>>;
};

export type PortfolioCreateOneInlineInput = {
  /** Create and connect one Portfolio document */
  create?: Maybe<PortfolioCreateInput>;
  /** Connect one existing Portfolio document */
  connect?: Maybe<PortfolioWhereUniqueInput>;
};

/** An edge in a connection. */
export type PortfolioEdge = {
  __typename?: 'PortfolioEdge';
  /** The item at the end of the edge. */
  node: Portfolio;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PortfolioManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PortfolioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PortfolioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PortfolioWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  technologies?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  technologies_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  technologies_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  technologies_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  technologies_contains_none?: Maybe<Array<Scalars['String']>>;
  project_url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  project_url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  project_url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  project_url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  project_url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  project_url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  project_url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  project_url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  project_url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  project_url_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  cover?: Maybe<AssetWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

export enum PortfolioOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  IndustryAsc = 'industry_ASC',
  IndustryDesc = 'industry_DESC',
  TechnologiesAsc = 'technologies_ASC',
  TechnologiesDesc = 'technologies_DESC',
  ProjectUrlAsc = 'project_url_ASC',
  ProjectUrlDesc = 'project_url_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC'
}

export type PortfolioUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** industry input for default locale (en) */
  industry?: Maybe<Scalars['String']>;
  technologies?: Maybe<Array<Scalars['String']>>;
  project_url?: Maybe<Scalars['String']>;
  /** body input for default locale (en) */
  body?: Maybe<Scalars['String']>;
  cover?: Maybe<AssetUpdateOneInlineInput>;
  seo?: Maybe<SeoUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PortfolioUpdateLocalizationsInput>;
};

export type PortfolioUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PortfolioUpdateLocalizationInput = {
  data: PortfolioUpdateLocalizationDataInput;
  locale: Locale;
};

export type PortfolioUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PortfolioCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<PortfolioUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PortfolioUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PortfolioUpdateManyInlineInput = {
  /** Create and connect multiple Portfolio documents */
  create?: Maybe<Array<PortfolioCreateInput>>;
  /** Connect multiple existing Portfolio documents */
  connect?: Maybe<Array<PortfolioConnectInput>>;
  /** Override currently-connected documents with multiple existing Portfolio documents */
  set?: Maybe<Array<PortfolioWhereUniqueInput>>;
  /** Update multiple Portfolio documents */
  update?: Maybe<Array<PortfolioUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Portfolio documents */
  upsert?: Maybe<Array<PortfolioUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Portfolio documents */
  disconnect?: Maybe<Array<PortfolioWhereUniqueInput>>;
  /** Delete multiple Portfolio documents */
  delete?: Maybe<Array<PortfolioWhereUniqueInput>>;
};

export type PortfolioUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** industry input for default locale (en) */
  industry?: Maybe<Scalars['String']>;
  technologies?: Maybe<Array<Scalars['String']>>;
  project_url?: Maybe<Scalars['String']>;
  /** body input for default locale (en) */
  body?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PortfolioUpdateManyLocalizationsInput>;
};

export type PortfolioUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PortfolioUpdateManyLocalizationInput = {
  data: PortfolioUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PortfolioUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PortfolioUpdateManyLocalizationInput>>;
};

export type PortfolioUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PortfolioWhereInput;
  /** Update many input */
  data: PortfolioUpdateManyInput;
};

export type PortfolioUpdateOneInlineInput = {
  /** Create and connect one Portfolio document */
  create?: Maybe<PortfolioCreateInput>;
  /** Update single Portfolio document */
  update?: Maybe<PortfolioUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Portfolio document */
  upsert?: Maybe<PortfolioUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Portfolio document */
  connect?: Maybe<PortfolioWhereUniqueInput>;
  /** Disconnect currently connected Portfolio document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Portfolio document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PortfolioUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PortfolioWhereUniqueInput;
  /** Document to update */
  data: PortfolioUpdateInput;
};

export type PortfolioUpsertInput = {
  /** Create document if it didn't exist */
  create: PortfolioCreateInput;
  /** Update document if it exists */
  update: PortfolioUpdateInput;
};

export type PortfolioUpsertLocalizationInput = {
  update: PortfolioUpdateLocalizationDataInput;
  create: PortfolioCreateLocalizationDataInput;
  locale: Locale;
};

export type PortfolioUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PortfolioWhereUniqueInput;
  /** Upsert data */
  data: PortfolioUpsertInput;
};

/** Identifies documents */
export type PortfolioWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PortfolioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PortfolioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PortfolioWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  industry_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  industry_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  industry_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  industry_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  industry_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  industry_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  industry_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  industry_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  industry_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  technologies?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  technologies_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  technologies_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  technologies_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  technologies_contains_none?: Maybe<Array<Scalars['String']>>;
  project_url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  project_url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  project_url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  project_url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  project_url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  project_url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  project_url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  project_url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  project_url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  project_url_not_ends_with?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  body_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  cover?: Maybe<AssetWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

/** References Portfolio record uniquely */
export type PortfolioWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Post = Node & {
  __typename?: 'Post';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Post>;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  published: Scalars['Date'];
  body: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  cover: Asset;
  tags: Array<Tag>;
  seo?: Maybe<Seo>;
  /** List of Post versions */
  history: Array<Version>;
};


export type PostLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type PostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PostCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PostUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PostPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PostCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostCoverArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostSeoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PostConnectInput = {
  /** Document to connect */
  where: PostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PostEdge>;
  aggregate: Aggregate;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  slug: Scalars['String'];
  published: Scalars['Date'];
  /** body input for default locale (en) */
  body: Scalars['String'];
  cover: AssetCreateOneInlineInput;
  tags?: Maybe<TagCreateManyInlineInput>;
  seo?: Maybe<SeoCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PostCreateLocalizationsInput>;
};

export type PostCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostCreateLocalizationInput = {
  /** Localization input */
  data: PostCreateLocalizationDataInput;
  locale: Locale;
};

export type PostCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PostCreateLocalizationInput>>;
};

export type PostCreateManyInlineInput = {
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  published_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  published_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  published_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  published_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  published_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  published_gte?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  cover?: Maybe<AssetWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC'
}

export type PostUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Date']>;
  /** body input for default locale (en) */
  body?: Maybe<Scalars['String']>;
  cover?: Maybe<AssetUpdateOneInlineInput>;
  tags?: Maybe<TagUpdateManyInlineInput>;
  seo?: Maybe<SeoUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PostUpdateLocalizationsInput>;
};

export type PostUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostUpdateLocalizationInput = {
  data: PostUpdateLocalizationDataInput;
  locale: Locale;
};

export type PostUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PostCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<PostUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PostUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PostUpdateManyInlineInput = {
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Date']>;
  /** body input for default locale (en) */
  body?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PostUpdateManyLocalizationsInput>;
};

export type PostUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostUpdateManyLocalizationInput = {
  data: PostUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PostUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PostUpdateManyLocalizationInput>>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PostWhereInput;
  /** Update many input */
  data: PostUpdateManyInput;
};

export type PostUpdateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Document to update */
  data: PostUpdateInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertLocalizationInput = {
  update: PostUpdateLocalizationDataInput;
  create: PostCreateLocalizationDataInput;
  locale: Locale;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Upsert data */
  data: PostUpsertInput;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  published_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  published_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  published_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  published_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  published_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  published_gte?: Maybe<Scalars['Date']>;
  body?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  body_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  cover?: Maybe<AssetWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple seos */
  seos: Array<Seo>;
  /** Retrieve a single seo */
  seo?: Maybe<Seo>;
  /** Retrieve multiple seos using the Relay connection interface */
  seosConnection: SeoConnection;
  /** Retrieve document version */
  seoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple portfolios */
  portfolios: Array<Portfolio>;
  /** Retrieve a single portfolio */
  portfolio?: Maybe<Portfolio>;
  /** Retrieve multiple portfolios using the Relay connection interface */
  portfoliosConnection: PortfolioConnection;
  /** Retrieve document version */
  portfolioVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<Tag>;
  /** Retrieve a single tag */
  tag?: Maybe<Tag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection;
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeosArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeoArgs = {
  where: SeoWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeosConnectionArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPortfoliosArgs = {
  where?: Maybe<PortfolioWhereInput>;
  orderBy?: Maybe<PortfolioOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPortfoliosConnectionArgs = {
  where?: Maybe<PortfolioWhereInput>;
  orderBy?: Maybe<PortfolioOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPortfolioVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type Seo = Node & {
  __typename?: 'Seo';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Seo>;
  /** Get the document in other stages */
  documentInStages: Array<Seo>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  post?: Maybe<Post>;
  portfolio?: Maybe<Portfolio>;
  /** List of Seo versions */
  history: Array<Version>;
};


export type SeoLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type SeoDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SeoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SeoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SeoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SeoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoPostArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoPortfolioArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SeoConnectInput = {
  /** Document to connect */
  where: SeoWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SeoConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  aggregate: Aggregate;
};

export type SeoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  /** description input for default locale (en) */
  description: Scalars['String'];
  post?: Maybe<PostCreateOneInlineInput>;
  portfolio?: Maybe<PortfolioCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SeoCreateLocalizationsInput>;
};

export type SeoCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description: Scalars['String'];
};

export type SeoCreateLocalizationInput = {
  /** Localization input */
  data: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export type SeoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<SeoCreateLocalizationInput>>;
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoWhereUniqueInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Connect one existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SeoEdge';
  /** The item at the end of the edge. */
  node: Seo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
  portfolio?: Maybe<PortfolioWhereInput>;
};

export enum SeoOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type SeoUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneInlineInput>;
  portfolio?: Maybe<PortfolioUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<SeoUpdateLocalizationsInput>;
};

export type SeoUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SeoUpdateLocalizationInput = {
  data: SeoUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<SeoCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<SeoUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SeoUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoConnectInput>>;
  /** Override currently-connected documents with multiple existing Seo documents */
  set?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple Seo documents */
  update?: Maybe<Array<SeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Seo documents */
  upsert?: Maybe<Array<SeoUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Seo documents */
  disconnect?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Delete multiple Seo documents */
  delete?: Maybe<Array<SeoWhereUniqueInput>>;
};

export type SeoUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<SeoUpdateManyLocalizationsInput>;
};

export type SeoUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SeoUpdateManyLocalizationInput = {
  data: SeoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<SeoUpdateManyLocalizationInput>>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SeoWhereInput;
  /** Update many input */
  data: SeoUpdateManyInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Update single Seo document */
  update?: Maybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert?: Maybe<SeoUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
  /** Disconnect currently connected Seo document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Seo document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Document to update */
  data: SeoUpdateInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertLocalizationInput = {
  update: SeoUpdateLocalizationDataInput;
  create: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Upsert data */
  data: SeoUpsertInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
  portfolio?: Maybe<PortfolioWhereInput>;
};

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Tag = Node & {
  __typename?: 'Tag';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Tag>;
  /** Get the document in other stages */
  documentInStages: Array<Tag>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  posts: Array<Post>;
  /** List of Tag versions */
  history: Array<Version>;
};


export type TagLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type TagDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TagCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TagUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TagPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TagCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type TagHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TagConnectInput = {
  /** Document to connect */
  where: TagWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TagEdge>;
  aggregate: Aggregate;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  slug: Scalars['String'];
  posts?: Maybe<PostCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<TagCreateLocalizationsInput>;
};

export type TagCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type TagCreateLocalizationInput = {
  /** Localization input */
  data: TagCreateLocalizationDataInput;
  locale: Locale;
};

export type TagCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<TagCreateLocalizationInput>>;
};

export type TagCreateManyInlineInput = {
  /** Create and connect multiple existing Tag documents */
  create?: Maybe<Array<TagCreateInput>>;
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>;
  /** Connect one existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** The item at the end of the edge. */
  node: Tag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TagManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
};

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type TagUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<TagUpdateLocalizationsInput>;
};

export type TagUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type TagUpdateLocalizationInput = {
  data: TagUpdateLocalizationDataInput;
  locale: Locale;
};

export type TagUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<TagCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<TagUpdateLocalizationInput>>;
  upsert?: Maybe<Array<TagUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type TagUpdateManyInlineInput = {
  /** Create and connect multiple Tag documents */
  create?: Maybe<Array<TagCreateInput>>;
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagConnectInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: Maybe<Array<TagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update?: Maybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert?: Maybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  /** Delete multiple Tag documents */
  delete?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<TagUpdateManyLocalizationsInput>;
};

export type TagUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type TagUpdateManyLocalizationInput = {
  data: TagUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TagUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<TagUpdateManyLocalizationInput>>;
};

export type TagUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TagWhereInput;
  /** Update many input */
  data: TagUpdateManyInput;
};

export type TagUpdateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>;
  /** Update single Tag document */
  update?: Maybe<TagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert?: Maybe<TagUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>;
  /** Disconnect currently connected Tag document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Tag document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput;
  /** Document to update */
  data: TagUpdateInput;
};

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput;
  /** Update document if it exists */
  update: TagUpdateInput;
};

export type TagUpsertLocalizationInput = {
  update: TagUpdateLocalizationDataInput;
  create: TagCreateLocalizationDataInput;
  locale: Locale;
};

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput;
  /** Upsert data */
  data: TagUpsertInput;
};

/** Identifies documents */
export type TagWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetAllPortfoliosForPortfolioPageQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetAllPortfoliosForPortfolioPageQuery = { __typename?: 'Query', portfolios: Array<{ __typename?: 'Portfolio', id: string, title: string, slug: string, cover: { __typename?: 'Asset', handle: string, height?: Maybe<number>, width?: Maybe<number> }, seo?: Maybe<{ __typename?: 'Seo', description: string }> }> };

export type GetAllPortfoliosWithSlugQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetAllPortfoliosWithSlugQuery = { __typename?: 'Query', portfolios: Array<{ __typename?: 'Portfolio', locale: Locale, id: string, updatedAt: any, slug: string, publishedAt?: Maybe<any>, seo?: Maybe<{ __typename?: 'Seo', title: string, description: string }> }> };

export type GetAllPostsForBlogPageQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  body: Scalars['Boolean'];
  locale: Locale;
  limit: Scalars['Int'];
}>;


export type GetAllPostsForBlogPageQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, slug: string, published: any, body?: Maybe<string>, cover: { __typename?: 'Asset', handle: string, height?: Maybe<number>, width?: Maybe<number>, url: string }, seo?: Maybe<{ __typename?: 'Seo', title: string, description: string }> }> };

export type GetAllPostsWithSlugQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetAllPostsWithSlugQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', locale: Locale, id: string, updatedAt: any, slug: string, published: any, seo?: Maybe<{ __typename?: 'Seo', title: string, description: string }> }> };

export type GetPortfolioQueryVariables = Exact<{
  id: Scalars['ID'];
  stage: Stage;
  locale: Locale;
}>;


export type GetPortfolioQuery = { __typename?: 'Query', portfolio?: Maybe<{ __typename?: 'Portfolio', id: string, updatedAt: any, publishedAt?: Maybe<any>, title: string, slug: string, industry: string, technologies: Array<string>, project_url: string, body: string, localizations: Array<{ __typename?: 'Portfolio', locale: Locale, id: string, slug: string }>, cover: { __typename?: 'Asset', handle: string, height?: Maybe<number>, width?: Maybe<number> }, seo?: Maybe<{ __typename?: 'Seo', locale: Locale, title: string, description: string }> }> };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
  locale: Locale;
}>;


export type GetPostQuery = { __typename?: 'Query', post?: Maybe<{ __typename?: 'Post', id: string, updatedAt: any, title: string, slug: string, published: any, body: string, localizations: Array<{ __typename?: 'Post', locale: Locale, id: string, slug: string }>, cover: { __typename?: 'Asset', handle: string, height?: Maybe<number>, width?: Maybe<number>, url: string }, seo?: Maybe<{ __typename?: 'Seo', locale: Locale, title: string, description: string }> }> };

export type GetPostsSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsSitemapQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', localizations: Array<{ __typename?: 'Post', locale: Locale, id: string, updatedAt: any, title: string, slug: string, localizations: Array<{ __typename?: 'Post', locale: Locale, id: string, slug: string }>, seo?: Maybe<{ __typename?: 'Seo', description: string }> }> }> };

export type GetSitemapDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSitemapDataQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', localizations: Array<{ __typename?: 'Post', locale: Locale, id: string, updatedAt: any, title: string, slug: string, localizations: Array<{ __typename?: 'Post', locale: Locale, id: string, slug: string }>, seo?: Maybe<{ __typename?: 'Seo', description: string }> }> }>, portfolios: Array<{ __typename?: 'Portfolio', localizations: Array<{ __typename?: 'Portfolio', locale: Locale, id: string, updatedAt: any, title: string, slug: string, localizations: Array<{ __typename?: 'Portfolio', locale: Locale, id: string, slug: string }>, seo?: Maybe<{ __typename?: 'Seo', description: string }> }> }> };

export type PostsQueryVariables = Exact<{
  offset: Scalars['Int'];
  first: Scalars['Int'];
  locale: Locale;
}>;


export type PostsQuery = { __typename?: 'Query', postsConnection: { __typename?: 'PostConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, posts: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, slug: string, published: any, body: string, cover: { __typename?: 'Asset', handle: string, height?: Maybe<number>, width?: Maybe<number>, url: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> } }> } };

export type PostsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsCountQuery = { __typename?: 'Query', postsConnection: { __typename?: 'PostConnection', aggregate: { __typename?: 'Aggregate', count: number } } };


export const GetAllPortfoliosForPortfolioPageDocument = gql`
    query getAllPortfoliosForPortfolioPage($locale: Locale!) {
  portfolios(orderBy: publishedAt_DESC, locales: [$locale]) {
    id
    title
    slug
    cover(locales: [en]) {
      handle
      height
      width
    }
    seo {
      description
    }
  }
}
    `;
export const GetAllPortfoliosWithSlugDocument = gql`
    query getAllPortfoliosWithSlug($locale: Locale!) {
  portfolios(orderBy: publishedAt_DESC, locales: [$locale]) {
    locale
    id
    updatedAt
    slug
    publishedAt
    seo {
      title
      description
    }
  }
}
    `;
export const GetAllPostsForBlogPageDocument = gql`
    query getAllPostsForBlogPage($search: String, $body: Boolean!, $locale: Locale!, $limit: Int!) {
  posts(
    where: {title_contains: $search, body_contains: $search}
    orderBy: published_DESC
    first: $limit
    locales: [$locale]
  ) {
    id
    title
    slug
    published
    cover(locales: [en]) {
      handle
      height
      width
      url
    }
    body @include(if: $body)
    seo {
      title
      description
    }
  }
}
    `;
export const GetAllPostsWithSlugDocument = gql`
    query getAllPostsWithSlug($locale: Locale!) {
  posts(orderBy: published_DESC, locales: [$locale]) {
    locale
    id
    updatedAt
    slug
    published
    seo(locales: [en]) {
      title
      description
    }
  }
}
    `;
export const GetPortfolioDocument = gql`
    query getPortfolio($id: ID!, $stage: Stage!, $locale: Locale!) {
  portfolio(where: {id: $id}, stage: $stage, locales: [$locale]) {
    localizations {
      locale
      id
      slug
    }
    id
    updatedAt
    publishedAt
    title
    slug
    cover(locales: [en]) {
      handle
      height
      width
    }
    industry
    technologies
    project_url
    body
    seo {
      locale
      title
      description
    }
  }
}
    `;
export const GetPostDocument = gql`
    query getPost($slug: String!, $stage: Stage!, $locale: Locale!) {
  post(where: {slug: $slug}, stage: $stage, locales: [$locale]) {
    localizations {
      locale
      id
      slug
    }
    id
    updatedAt
    title
    slug
    published
    cover(locales: [en]) {
      handle
      height
      width
      url
    }
    body
    seo {
      locale
      title
      description
    }
  }
}
    `;
export const GetPostsSitemapDocument = gql`
    query getPostsSitemap {
  posts(orderBy: published_DESC) {
    localizations(includeCurrent: true) {
      locale
      localizations {
        locale
        id
        slug
      }
      id
      updatedAt(variation: COMBINED)
      title
      slug
      seo {
        description
      }
    }
  }
}
    `;
export const GetSitemapDataDocument = gql`
    query getSitemapData {
  posts(orderBy: published_DESC) {
    localizations(includeCurrent: true) {
      locale
      localizations {
        locale
        id
        slug
      }
      id
      updatedAt(variation: COMBINED)
      title
      slug
      seo {
        description
      }
    }
  }
  portfolios(orderBy: publishedAt_DESC) {
    localizations(includeCurrent: true) {
      locale
      localizations {
        locale
        id
        slug
      }
      id
      updatedAt(variation: COMBINED)
      title
      slug
      seo {
        description
      }
    }
  }
}
    `;
export const PostsDocument = gql`
    query posts($offset: Int!, $first: Int!, $locale: Locale!) {
  postsConnection(
    orderBy: published_DESC
    skip: $offset
    first: $first
    locales: [$locale]
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    posts: edges {
      node {
        id
        title
        slug
        published
        body
        cover(locales: [en]) {
          handle
          height
          width
          url
        }
        tags {
          id
          name
          slug
        }
      }
    }
  }
}
    `;
export const PostsCountDocument = gql`
    query postsCount {
  postsConnection {
    aggregate {
      count
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetAllPortfoliosForPortfolioPageDocumentString = print(GetAllPortfoliosForPortfolioPageDocument);
const GetAllPortfoliosWithSlugDocumentString = print(GetAllPortfoliosWithSlugDocument);
const GetAllPostsForBlogPageDocumentString = print(GetAllPostsForBlogPageDocument);
const GetAllPostsWithSlugDocumentString = print(GetAllPostsWithSlugDocument);
const GetPortfolioDocumentString = print(GetPortfolioDocument);
const GetPostDocumentString = print(GetPostDocument);
const GetPostsSitemapDocumentString = print(GetPostsSitemapDocument);
const GetSitemapDataDocumentString = print(GetSitemapDataDocument);
const PostsDocumentString = print(PostsDocument);
const PostsCountDocumentString = print(PostsCountDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllPortfoliosForPortfolioPage(variables: GetAllPortfoliosForPortfolioPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAllPortfoliosForPortfolioPageQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAllPortfoliosForPortfolioPageQuery>(GetAllPortfoliosForPortfolioPageDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPortfoliosForPortfolioPage');
    },
    getAllPortfoliosWithSlug(variables: GetAllPortfoliosWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAllPortfoliosWithSlugQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAllPortfoliosWithSlugQuery>(GetAllPortfoliosWithSlugDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPortfoliosWithSlug');
    },
    getAllPostsForBlogPage(variables: GetAllPostsForBlogPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAllPostsForBlogPageQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAllPostsForBlogPageQuery>(GetAllPostsForBlogPageDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPostsForBlogPage');
    },
    getAllPostsWithSlug(variables: GetAllPostsWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAllPostsWithSlugQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAllPostsWithSlugQuery>(GetAllPostsWithSlugDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPostsWithSlug');
    },
    getPortfolio(variables: GetPortfolioQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetPortfolioQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPortfolioQuery>(GetPortfolioDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPortfolio');
    },
    getPost(variables: GetPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetPostQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPostQuery>(GetPostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPost');
    },
    getPostsSitemap(variables?: GetPostsSitemapQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetPostsSitemapQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPostsSitemapQuery>(GetPostsSitemapDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostsSitemap');
    },
    getSitemapData(variables?: GetSitemapDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetSitemapDataQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetSitemapDataQuery>(GetSitemapDataDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSitemapData');
    },
    posts(variables: PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: PostsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PostsQuery>(PostsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posts');
    },
    postsCount(variables?: PostsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: PostsCountQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PostsCountQuery>(PostsCountDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postsCount');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;