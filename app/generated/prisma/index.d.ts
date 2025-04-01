
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Golongan
 * 
 */
export type Golongan = $Result.DefaultSelection<Prisma.$GolonganPayload>
/**
 * Model Gedung
 * 
 */
export type Gedung = $Result.DefaultSelection<Prisma.$GedungPayload>
/**
 * Model Ruangan
 * 
 */
export type Ruangan = $Result.DefaultSelection<Prisma.$RuanganPayload>
/**
 * Model Inventaris
 * 
 */
export type Inventaris = $Result.DefaultSelection<Prisma.$InventarisPayload>
/**
 * Model BarangHabisPakai
 * 
 */
export type BarangHabisPakai = $Result.DefaultSelection<Prisma.$BarangHabisPakaiPayload>
/**
 * Model TransaksiBarangHabisPakai
 * 
 */
export type TransaksiBarangHabisPakai = $Result.DefaultSelection<Prisma.$TransaksiBarangHabisPakaiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Kondisi: {
  BAIK: 'BAIK',
  RUSAK: 'RUSAK'
};

export type Kondisi = (typeof Kondisi)[keyof typeof Kondisi]

}

export type Kondisi = $Enums.Kondisi

export const Kondisi: typeof $Enums.Kondisi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kategoris
 * const kategoris = await prisma.kategori.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Kategoris
   * const kategoris = await prisma.kategori.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.golongan`: Exposes CRUD operations for the **Golongan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Golongans
    * const golongans = await prisma.golongan.findMany()
    * ```
    */
  get golongan(): Prisma.GolonganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gedung`: Exposes CRUD operations for the **Gedung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gedungs
    * const gedungs = await prisma.gedung.findMany()
    * ```
    */
  get gedung(): Prisma.GedungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruangan`: Exposes CRUD operations for the **Ruangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ruangans
    * const ruangans = await prisma.ruangan.findMany()
    * ```
    */
  get ruangan(): Prisma.RuanganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventaris`: Exposes CRUD operations for the **Inventaris** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarises
    * const inventarises = await prisma.inventaris.findMany()
    * ```
    */
  get inventaris(): Prisma.InventarisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barangHabisPakai`: Exposes CRUD operations for the **BarangHabisPakai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarangHabisPakais
    * const barangHabisPakais = await prisma.barangHabisPakai.findMany()
    * ```
    */
  get barangHabisPakai(): Prisma.BarangHabisPakaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksiBarangHabisPakai`: Exposes CRUD operations for the **TransaksiBarangHabisPakai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaksiBarangHabisPakais
    * const transaksiBarangHabisPakais = await prisma.transaksiBarangHabisPakai.findMany()
    * ```
    */
  get transaksiBarangHabisPakai(): Prisma.TransaksiBarangHabisPakaiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Kategori: 'Kategori',
    Golongan: 'Golongan',
    Gedung: 'Gedung',
    Ruangan: 'Ruangan',
    Inventaris: 'Inventaris',
    BarangHabisPakai: 'BarangHabisPakai',
    TransaksiBarangHabisPakai: 'TransaksiBarangHabisPakai'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kategori" | "golongan" | "gedung" | "ruangan" | "inventaris" | "barangHabisPakai" | "transaksiBarangHabisPakai"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Golongan: {
        payload: Prisma.$GolonganPayload<ExtArgs>
        fields: Prisma.GolonganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GolonganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GolonganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          findFirst: {
            args: Prisma.GolonganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GolonganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          findMany: {
            args: Prisma.GolonganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>[]
          }
          create: {
            args: Prisma.GolonganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          createMany: {
            args: Prisma.GolonganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GolonganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>[]
          }
          delete: {
            args: Prisma.GolonganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          update: {
            args: Prisma.GolonganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          deleteMany: {
            args: Prisma.GolonganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GolonganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GolonganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>[]
          }
          upsert: {
            args: Prisma.GolonganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolonganPayload>
          }
          aggregate: {
            args: Prisma.GolonganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGolongan>
          }
          groupBy: {
            args: Prisma.GolonganGroupByArgs<ExtArgs>
            result: $Utils.Optional<GolonganGroupByOutputType>[]
          }
          count: {
            args: Prisma.GolonganCountArgs<ExtArgs>
            result: $Utils.Optional<GolonganCountAggregateOutputType> | number
          }
        }
      }
      Gedung: {
        payload: Prisma.$GedungPayload<ExtArgs>
        fields: Prisma.GedungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GedungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GedungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          findFirst: {
            args: Prisma.GedungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GedungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          findMany: {
            args: Prisma.GedungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          create: {
            args: Prisma.GedungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          createMany: {
            args: Prisma.GedungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GedungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          delete: {
            args: Prisma.GedungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          update: {
            args: Prisma.GedungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          deleteMany: {
            args: Prisma.GedungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GedungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GedungUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          upsert: {
            args: Prisma.GedungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          aggregate: {
            args: Prisma.GedungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGedung>
          }
          groupBy: {
            args: Prisma.GedungGroupByArgs<ExtArgs>
            result: $Utils.Optional<GedungGroupByOutputType>[]
          }
          count: {
            args: Prisma.GedungCountArgs<ExtArgs>
            result: $Utils.Optional<GedungCountAggregateOutputType> | number
          }
        }
      }
      Ruangan: {
        payload: Prisma.$RuanganPayload<ExtArgs>
        fields: Prisma.RuanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findFirst: {
            args: Prisma.RuanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findMany: {
            args: Prisma.RuanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          create: {
            args: Prisma.RuanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          createMany: {
            args: Prisma.RuanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          delete: {
            args: Prisma.RuanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          update: {
            args: Prisma.RuanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          deleteMany: {
            args: Prisma.RuanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          upsert: {
            args: Prisma.RuanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          aggregate: {
            args: Prisma.RuanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuangan>
          }
          groupBy: {
            args: Prisma.RuanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuanganCountArgs<ExtArgs>
            result: $Utils.Optional<RuanganCountAggregateOutputType> | number
          }
        }
      }
      Inventaris: {
        payload: Prisma.$InventarisPayload<ExtArgs>
        fields: Prisma.InventarisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          findFirst: {
            args: Prisma.InventarisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          findMany: {
            args: Prisma.InventarisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>[]
          }
          create: {
            args: Prisma.InventarisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          createMany: {
            args: Prisma.InventarisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventarisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>[]
          }
          delete: {
            args: Prisma.InventarisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          update: {
            args: Prisma.InventarisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          deleteMany: {
            args: Prisma.InventarisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventarisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>[]
          }
          upsert: {
            args: Prisma.InventarisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarisPayload>
          }
          aggregate: {
            args: Prisma.InventarisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventaris>
          }
          groupBy: {
            args: Prisma.InventarisGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarisGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarisCountArgs<ExtArgs>
            result: $Utils.Optional<InventarisCountAggregateOutputType> | number
          }
        }
      }
      BarangHabisPakai: {
        payload: Prisma.$BarangHabisPakaiPayload<ExtArgs>
        fields: Prisma.BarangHabisPakaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangHabisPakaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          findFirst: {
            args: Prisma.BarangHabisPakaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          findMany: {
            args: Prisma.BarangHabisPakaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>[]
          }
          create: {
            args: Prisma.BarangHabisPakaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          createMany: {
            args: Prisma.BarangHabisPakaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangHabisPakaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>[]
          }
          delete: {
            args: Prisma.BarangHabisPakaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          update: {
            args: Prisma.BarangHabisPakaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          deleteMany: {
            args: Prisma.BarangHabisPakaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangHabisPakaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>[]
          }
          upsert: {
            args: Prisma.BarangHabisPakaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          aggregate: {
            args: Prisma.BarangHabisPakaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarangHabisPakai>
          }
          groupBy: {
            args: Prisma.BarangHabisPakaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangHabisPakaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangHabisPakaiCountArgs<ExtArgs>
            result: $Utils.Optional<BarangHabisPakaiCountAggregateOutputType> | number
          }
        }
      }
      TransaksiBarangHabisPakai: {
        payload: Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>
        fields: Prisma.TransaksiBarangHabisPakaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiBarangHabisPakaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiBarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiBarangHabisPakaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiBarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          findMany: {
            args: Prisma.TransaksiBarangHabisPakaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>[]
          }
          create: {
            args: Prisma.TransaksiBarangHabisPakaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          createMany: {
            args: Prisma.TransaksiBarangHabisPakaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiBarangHabisPakaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>[]
          }
          delete: {
            args: Prisma.TransaksiBarangHabisPakaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          update: {
            args: Prisma.TransaksiBarangHabisPakaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiBarangHabisPakaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiBarangHabisPakaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiBarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiBarangHabisPakaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangHabisPakaiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiBarangHabisPakaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksiBarangHabisPakai>
          }
          groupBy: {
            args: Prisma.TransaksiBarangHabisPakaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiBarangHabisPakaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiBarangHabisPakaiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiBarangHabisPakaiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    kategori?: KategoriOmit
    golongan?: GolonganOmit
    gedung?: GedungOmit
    ruangan?: RuanganOmit
    inventaris?: InventarisOmit
    barangHabisPakai?: BarangHabisPakaiOmit
    transaksiBarangHabisPakai?: TransaksiBarangHabisPakaiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    golongans: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    golongans?: boolean | KategoriCountOutputTypeCountGolongansArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountGolongansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GolonganWhereInput
  }


  /**
   * Count Type GolonganCountOutputType
   */

  export type GolonganCountOutputType = {
    inventaris: number
    barangHabisPakai: number
  }

  export type GolonganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventaris?: boolean | GolonganCountOutputTypeCountInventarisArgs
    barangHabisPakai?: boolean | GolonganCountOutputTypeCountBarangHabisPakaiArgs
  }

  // Custom InputTypes
  /**
   * GolonganCountOutputType without action
   */
  export type GolonganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolonganCountOutputType
     */
    select?: GolonganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GolonganCountOutputType without action
   */
  export type GolonganCountOutputTypeCountInventarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarisWhereInput
  }

  /**
   * GolonganCountOutputType without action
   */
  export type GolonganCountOutputTypeCountBarangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangHabisPakaiWhereInput
  }


  /**
   * Count Type GedungCountOutputType
   */

  export type GedungCountOutputType = {
    Ruangans: number
  }

  export type GedungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ruangans?: boolean | GedungCountOutputTypeCountRuangansArgs
  }

  // Custom InputTypes
  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GedungCountOutputType
     */
    select?: GedungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeCountRuangansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
  }


  /**
   * Count Type RuanganCountOutputType
   */

  export type RuanganCountOutputType = {
    inventaris: number
  }

  export type RuanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventaris?: boolean | RuanganCountOutputTypeCountInventarisArgs
  }

  // Custom InputTypes
  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuanganCountOutputType
     */
    select?: RuanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeCountInventarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarisWhereInput
  }


  /**
   * Count Type BarangHabisPakaiCountOutputType
   */

  export type BarangHabisPakaiCountOutputType = {
    transaksi: number
  }

  export type BarangHabisPakaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | BarangHabisPakaiCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * BarangHabisPakaiCountOutputType without action
   */
  export type BarangHabisPakaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakaiCountOutputType
     */
    select?: BarangHabisPakaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangHabisPakaiCountOutputType without action
   */
  export type BarangHabisPakaiCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiBarangHabisPakaiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id?: true
  }

  export type KategoriSumAggregateInputType = {
    id?: true
  }

  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: number
    nama: string
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    golongans?: boolean | Kategori$golongansArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    golongans?: boolean | Kategori$golongansArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      golongans: Prisma.$GolonganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    golongans<T extends Kategori$golongansArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$golongansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kategori model
   */ 
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'Int'>
    readonly nama: FieldRef<"Kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.golongans
   */
  export type Kategori$golongansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    where?: GolonganWhereInput
    orderBy?: GolonganOrderByWithRelationInput | GolonganOrderByWithRelationInput[]
    cursor?: GolonganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GolonganScalarFieldEnum | GolonganScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Golongan
   */

  export type AggregateGolongan = {
    _count: GolonganCountAggregateOutputType | null
    _avg: GolonganAvgAggregateOutputType | null
    _sum: GolonganSumAggregateOutputType | null
    _min: GolonganMinAggregateOutputType | null
    _max: GolonganMaxAggregateOutputType | null
  }

  export type GolonganAvgAggregateOutputType = {
    id: number | null
    id_kategori: number | null
  }

  export type GolonganSumAggregateOutputType = {
    id: number | null
    id_kategori: number | null
  }

  export type GolonganMinAggregateOutputType = {
    id: number | null
    id_kategori: number | null
    kode_golongan: string | null
    nama: string | null
  }

  export type GolonganMaxAggregateOutputType = {
    id: number | null
    id_kategori: number | null
    kode_golongan: string | null
    nama: string | null
  }

  export type GolonganCountAggregateOutputType = {
    id: number
    id_kategori: number
    kode_golongan: number
    nama: number
    _all: number
  }


  export type GolonganAvgAggregateInputType = {
    id?: true
    id_kategori?: true
  }

  export type GolonganSumAggregateInputType = {
    id?: true
    id_kategori?: true
  }

  export type GolonganMinAggregateInputType = {
    id?: true
    id_kategori?: true
    kode_golongan?: true
    nama?: true
  }

  export type GolonganMaxAggregateInputType = {
    id?: true
    id_kategori?: true
    kode_golongan?: true
    nama?: true
  }

  export type GolonganCountAggregateInputType = {
    id?: true
    id_kategori?: true
    kode_golongan?: true
    nama?: true
    _all?: true
  }

  export type GolonganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Golongan to aggregate.
     */
    where?: GolonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Golongans to fetch.
     */
    orderBy?: GolonganOrderByWithRelationInput | GolonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GolonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Golongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Golongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Golongans
    **/
    _count?: true | GolonganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GolonganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GolonganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GolonganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GolonganMaxAggregateInputType
  }

  export type GetGolonganAggregateType<T extends GolonganAggregateArgs> = {
        [P in keyof T & keyof AggregateGolongan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGolongan[P]>
      : GetScalarType<T[P], AggregateGolongan[P]>
  }




  export type GolonganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GolonganWhereInput
    orderBy?: GolonganOrderByWithAggregationInput | GolonganOrderByWithAggregationInput[]
    by: GolonganScalarFieldEnum[] | GolonganScalarFieldEnum
    having?: GolonganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GolonganCountAggregateInputType | true
    _avg?: GolonganAvgAggregateInputType
    _sum?: GolonganSumAggregateInputType
    _min?: GolonganMinAggregateInputType
    _max?: GolonganMaxAggregateInputType
  }

  export type GolonganGroupByOutputType = {
    id: number
    id_kategori: number
    kode_golongan: string
    nama: string
    _count: GolonganCountAggregateOutputType | null
    _avg: GolonganAvgAggregateOutputType | null
    _sum: GolonganSumAggregateOutputType | null
    _min: GolonganMinAggregateOutputType | null
    _max: GolonganMaxAggregateOutputType | null
  }

  type GetGolonganGroupByPayload<T extends GolonganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GolonganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GolonganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GolonganGroupByOutputType[P]>
            : GetScalarType<T[P], GolonganGroupByOutputType[P]>
        }
      >
    >


  export type GolonganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategori?: boolean
    kode_golongan?: boolean
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    inventaris?: boolean | Golongan$inventarisArgs<ExtArgs>
    barangHabisPakai?: boolean | Golongan$barangHabisPakaiArgs<ExtArgs>
    _count?: boolean | GolonganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategori?: boolean
    kode_golongan?: boolean
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategori?: boolean
    kode_golongan?: boolean
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectScalar = {
    id?: boolean
    id_kategori?: boolean
    kode_golongan?: boolean
    nama?: boolean
  }

  export type GolonganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_kategori" | "kode_golongan" | "nama", ExtArgs["result"]["golongan"]>
  export type GolonganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    inventaris?: boolean | Golongan$inventarisArgs<ExtArgs>
    barangHabisPakai?: boolean | Golongan$barangHabisPakaiArgs<ExtArgs>
    _count?: boolean | GolonganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GolonganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type GolonganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $GolonganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Golongan"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      inventaris: Prisma.$InventarisPayload<ExtArgs>[]
      barangHabisPakai: Prisma.$BarangHabisPakaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_kategori: number
      kode_golongan: string
      nama: string
    }, ExtArgs["result"]["golongan"]>
    composites: {}
  }

  type GolonganGetPayload<S extends boolean | null | undefined | GolonganDefaultArgs> = $Result.GetResult<Prisma.$GolonganPayload, S>

  type GolonganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GolonganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GolonganCountAggregateInputType | true
    }

  export interface GolonganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Golongan'], meta: { name: 'Golongan' } }
    /**
     * Find zero or one Golongan that matches the filter.
     * @param {GolonganFindUniqueArgs} args - Arguments to find a Golongan
     * @example
     * // Get one Golongan
     * const golongan = await prisma.golongan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GolonganFindUniqueArgs>(args: SelectSubset<T, GolonganFindUniqueArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Golongan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GolonganFindUniqueOrThrowArgs} args - Arguments to find a Golongan
     * @example
     * // Get one Golongan
     * const golongan = await prisma.golongan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GolonganFindUniqueOrThrowArgs>(args: SelectSubset<T, GolonganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Golongan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganFindFirstArgs} args - Arguments to find a Golongan
     * @example
     * // Get one Golongan
     * const golongan = await prisma.golongan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GolonganFindFirstArgs>(args?: SelectSubset<T, GolonganFindFirstArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Golongan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganFindFirstOrThrowArgs} args - Arguments to find a Golongan
     * @example
     * // Get one Golongan
     * const golongan = await prisma.golongan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GolonganFindFirstOrThrowArgs>(args?: SelectSubset<T, GolonganFindFirstOrThrowArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Golongans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Golongans
     * const golongans = await prisma.golongan.findMany()
     * 
     * // Get first 10 Golongans
     * const golongans = await prisma.golongan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const golonganWithIdOnly = await prisma.golongan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GolonganFindManyArgs>(args?: SelectSubset<T, GolonganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Golongan.
     * @param {GolonganCreateArgs} args - Arguments to create a Golongan.
     * @example
     * // Create one Golongan
     * const Golongan = await prisma.golongan.create({
     *   data: {
     *     // ... data to create a Golongan
     *   }
     * })
     * 
     */
    create<T extends GolonganCreateArgs>(args: SelectSubset<T, GolonganCreateArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Golongans.
     * @param {GolonganCreateManyArgs} args - Arguments to create many Golongans.
     * @example
     * // Create many Golongans
     * const golongan = await prisma.golongan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GolonganCreateManyArgs>(args?: SelectSubset<T, GolonganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Golongans and returns the data saved in the database.
     * @param {GolonganCreateManyAndReturnArgs} args - Arguments to create many Golongans.
     * @example
     * // Create many Golongans
     * const golongan = await prisma.golongan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Golongans and only return the `id`
     * const golonganWithIdOnly = await prisma.golongan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GolonganCreateManyAndReturnArgs>(args?: SelectSubset<T, GolonganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Golongan.
     * @param {GolonganDeleteArgs} args - Arguments to delete one Golongan.
     * @example
     * // Delete one Golongan
     * const Golongan = await prisma.golongan.delete({
     *   where: {
     *     // ... filter to delete one Golongan
     *   }
     * })
     * 
     */
    delete<T extends GolonganDeleteArgs>(args: SelectSubset<T, GolonganDeleteArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Golongan.
     * @param {GolonganUpdateArgs} args - Arguments to update one Golongan.
     * @example
     * // Update one Golongan
     * const golongan = await prisma.golongan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GolonganUpdateArgs>(args: SelectSubset<T, GolonganUpdateArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Golongans.
     * @param {GolonganDeleteManyArgs} args - Arguments to filter Golongans to delete.
     * @example
     * // Delete a few Golongans
     * const { count } = await prisma.golongan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GolonganDeleteManyArgs>(args?: SelectSubset<T, GolonganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Golongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Golongans
     * const golongan = await prisma.golongan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GolonganUpdateManyArgs>(args: SelectSubset<T, GolonganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Golongans and returns the data updated in the database.
     * @param {GolonganUpdateManyAndReturnArgs} args - Arguments to update many Golongans.
     * @example
     * // Update many Golongans
     * const golongan = await prisma.golongan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Golongans and only return the `id`
     * const golonganWithIdOnly = await prisma.golongan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GolonganUpdateManyAndReturnArgs>(args: SelectSubset<T, GolonganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Golongan.
     * @param {GolonganUpsertArgs} args - Arguments to update or create a Golongan.
     * @example
     * // Update or create a Golongan
     * const golongan = await prisma.golongan.upsert({
     *   create: {
     *     // ... data to create a Golongan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Golongan we want to update
     *   }
     * })
     */
    upsert<T extends GolonganUpsertArgs>(args: SelectSubset<T, GolonganUpsertArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Golongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganCountArgs} args - Arguments to filter Golongans to count.
     * @example
     * // Count the number of Golongans
     * const count = await prisma.golongan.count({
     *   where: {
     *     // ... the filter for the Golongans we want to count
     *   }
     * })
    **/
    count<T extends GolonganCountArgs>(
      args?: Subset<T, GolonganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GolonganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Golongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GolonganAggregateArgs>(args: Subset<T, GolonganAggregateArgs>): Prisma.PrismaPromise<GetGolonganAggregateType<T>>

    /**
     * Group by Golongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolonganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GolonganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GolonganGroupByArgs['orderBy'] }
        : { orderBy?: GolonganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GolonganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGolonganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Golongan model
   */
  readonly fields: GolonganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Golongan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GolonganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventaris<T extends Golongan$inventarisArgs<ExtArgs> = {}>(args?: Subset<T, Golongan$inventarisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    barangHabisPakai<T extends Golongan$barangHabisPakaiArgs<ExtArgs> = {}>(args?: Subset<T, Golongan$barangHabisPakaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Golongan model
   */ 
  interface GolonganFieldRefs {
    readonly id: FieldRef<"Golongan", 'Int'>
    readonly id_kategori: FieldRef<"Golongan", 'Int'>
    readonly kode_golongan: FieldRef<"Golongan", 'String'>
    readonly nama: FieldRef<"Golongan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Golongan findUnique
   */
  export type GolonganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter, which Golongan to fetch.
     */
    where: GolonganWhereUniqueInput
  }

  /**
   * Golongan findUniqueOrThrow
   */
  export type GolonganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter, which Golongan to fetch.
     */
    where: GolonganWhereUniqueInput
  }

  /**
   * Golongan findFirst
   */
  export type GolonganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter, which Golongan to fetch.
     */
    where?: GolonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Golongans to fetch.
     */
    orderBy?: GolonganOrderByWithRelationInput | GolonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Golongans.
     */
    cursor?: GolonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Golongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Golongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Golongans.
     */
    distinct?: GolonganScalarFieldEnum | GolonganScalarFieldEnum[]
  }

  /**
   * Golongan findFirstOrThrow
   */
  export type GolonganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter, which Golongan to fetch.
     */
    where?: GolonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Golongans to fetch.
     */
    orderBy?: GolonganOrderByWithRelationInput | GolonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Golongans.
     */
    cursor?: GolonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Golongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Golongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Golongans.
     */
    distinct?: GolonganScalarFieldEnum | GolonganScalarFieldEnum[]
  }

  /**
   * Golongan findMany
   */
  export type GolonganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter, which Golongans to fetch.
     */
    where?: GolonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Golongans to fetch.
     */
    orderBy?: GolonganOrderByWithRelationInput | GolonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Golongans.
     */
    cursor?: GolonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Golongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Golongans.
     */
    skip?: number
    distinct?: GolonganScalarFieldEnum | GolonganScalarFieldEnum[]
  }

  /**
   * Golongan create
   */
  export type GolonganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * The data needed to create a Golongan.
     */
    data: XOR<GolonganCreateInput, GolonganUncheckedCreateInput>
  }

  /**
   * Golongan createMany
   */
  export type GolonganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Golongans.
     */
    data: GolonganCreateManyInput | GolonganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Golongan createManyAndReturn
   */
  export type GolonganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * The data used to create many Golongans.
     */
    data: GolonganCreateManyInput | GolonganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Golongan update
   */
  export type GolonganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * The data needed to update a Golongan.
     */
    data: XOR<GolonganUpdateInput, GolonganUncheckedUpdateInput>
    /**
     * Choose, which Golongan to update.
     */
    where: GolonganWhereUniqueInput
  }

  /**
   * Golongan updateMany
   */
  export type GolonganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Golongans.
     */
    data: XOR<GolonganUpdateManyMutationInput, GolonganUncheckedUpdateManyInput>
    /**
     * Filter which Golongans to update
     */
    where?: GolonganWhereInput
    /**
     * Limit how many Golongans to update.
     */
    limit?: number
  }

  /**
   * Golongan updateManyAndReturn
   */
  export type GolonganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * The data used to update Golongans.
     */
    data: XOR<GolonganUpdateManyMutationInput, GolonganUncheckedUpdateManyInput>
    /**
     * Filter which Golongans to update
     */
    where?: GolonganWhereInput
    /**
     * Limit how many Golongans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Golongan upsert
   */
  export type GolonganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * The filter to search for the Golongan to update in case it exists.
     */
    where: GolonganWhereUniqueInput
    /**
     * In case the Golongan found by the `where` argument doesn't exist, create a new Golongan with this data.
     */
    create: XOR<GolonganCreateInput, GolonganUncheckedCreateInput>
    /**
     * In case the Golongan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GolonganUpdateInput, GolonganUncheckedUpdateInput>
  }

  /**
   * Golongan delete
   */
  export type GolonganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
    /**
     * Filter which Golongan to delete.
     */
    where: GolonganWhereUniqueInput
  }

  /**
   * Golongan deleteMany
   */
  export type GolonganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Golongans to delete
     */
    where?: GolonganWhereInput
    /**
     * Limit how many Golongans to delete.
     */
    limit?: number
  }

  /**
   * Golongan.inventaris
   */
  export type Golongan$inventarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    where?: InventarisWhereInput
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    cursor?: InventarisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarisScalarFieldEnum | InventarisScalarFieldEnum[]
  }

  /**
   * Golongan.barangHabisPakai
   */
  export type Golongan$barangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    where?: BarangHabisPakaiWhereInput
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    cursor?: BarangHabisPakaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * Golongan without action
   */
  export type GolonganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Golongan
     */
    select?: GolonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Golongan
     */
    omit?: GolonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolonganInclude<ExtArgs> | null
  }


  /**
   * Model Gedung
   */

  export type AggregateGedung = {
    _count: GedungCountAggregateOutputType | null
    _avg: GedungAvgAggregateOutputType | null
    _sum: GedungSumAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  export type GedungAvgAggregateOutputType = {
    id: number | null
  }

  export type GedungSumAggregateOutputType = {
    id: number | null
  }

  export type GedungMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type GedungMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type GedungCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type GedungAvgAggregateInputType = {
    id?: true
  }

  export type GedungSumAggregateInputType = {
    id?: true
  }

  export type GedungMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type GedungMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type GedungCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type GedungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gedung to aggregate.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gedungs
    **/
    _count?: true | GedungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GedungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GedungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GedungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GedungMaxAggregateInputType
  }

  export type GetGedungAggregateType<T extends GedungAggregateArgs> = {
        [P in keyof T & keyof AggregateGedung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGedung[P]>
      : GetScalarType<T[P], AggregateGedung[P]>
  }




  export type GedungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GedungWhereInput
    orderBy?: GedungOrderByWithAggregationInput | GedungOrderByWithAggregationInput[]
    by: GedungScalarFieldEnum[] | GedungScalarFieldEnum
    having?: GedungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GedungCountAggregateInputType | true
    _avg?: GedungAvgAggregateInputType
    _sum?: GedungSumAggregateInputType
    _min?: GedungMinAggregateInputType
    _max?: GedungMaxAggregateInputType
  }

  export type GedungGroupByOutputType = {
    id: number
    nama: string
    _count: GedungCountAggregateOutputType | null
    _avg: GedungAvgAggregateOutputType | null
    _sum: GedungSumAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  type GetGedungGroupByPayload<T extends GedungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GedungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GedungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GedungGroupByOutputType[P]>
            : GetScalarType<T[P], GedungGroupByOutputType[P]>
        }
      >
    >


  export type GedungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    Ruangans?: boolean | Gedung$RuangansArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type GedungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["gedung"]>
  export type GedungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ruangans?: boolean | Gedung$RuangansArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GedungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GedungIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GedungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gedung"
    objects: {
      Ruangans: Prisma.$RuanganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["gedung"]>
    composites: {}
  }

  type GedungGetPayload<S extends boolean | null | undefined | GedungDefaultArgs> = $Result.GetResult<Prisma.$GedungPayload, S>

  type GedungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GedungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GedungCountAggregateInputType | true
    }

  export interface GedungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gedung'], meta: { name: 'Gedung' } }
    /**
     * Find zero or one Gedung that matches the filter.
     * @param {GedungFindUniqueArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GedungFindUniqueArgs>(args: SelectSubset<T, GedungFindUniqueArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gedung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GedungFindUniqueOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GedungFindUniqueOrThrowArgs>(args: SelectSubset<T, GedungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gedung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindFirstArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GedungFindFirstArgs>(args?: SelectSubset<T, GedungFindFirstArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gedung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindFirstOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GedungFindFirstOrThrowArgs>(args?: SelectSubset<T, GedungFindFirstOrThrowArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gedungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gedungs
     * const gedungs = await prisma.gedung.findMany()
     * 
     * // Get first 10 Gedungs
     * const gedungs = await prisma.gedung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gedungWithIdOnly = await prisma.gedung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GedungFindManyArgs>(args?: SelectSubset<T, GedungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gedung.
     * @param {GedungCreateArgs} args - Arguments to create a Gedung.
     * @example
     * // Create one Gedung
     * const Gedung = await prisma.gedung.create({
     *   data: {
     *     // ... data to create a Gedung
     *   }
     * })
     * 
     */
    create<T extends GedungCreateArgs>(args: SelectSubset<T, GedungCreateArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gedungs.
     * @param {GedungCreateManyArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GedungCreateManyArgs>(args?: SelectSubset<T, GedungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gedungs and returns the data saved in the database.
     * @param {GedungCreateManyAndReturnArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gedungs and only return the `id`
     * const gedungWithIdOnly = await prisma.gedung.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GedungCreateManyAndReturnArgs>(args?: SelectSubset<T, GedungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gedung.
     * @param {GedungDeleteArgs} args - Arguments to delete one Gedung.
     * @example
     * // Delete one Gedung
     * const Gedung = await prisma.gedung.delete({
     *   where: {
     *     // ... filter to delete one Gedung
     *   }
     * })
     * 
     */
    delete<T extends GedungDeleteArgs>(args: SelectSubset<T, GedungDeleteArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gedung.
     * @param {GedungUpdateArgs} args - Arguments to update one Gedung.
     * @example
     * // Update one Gedung
     * const gedung = await prisma.gedung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GedungUpdateArgs>(args: SelectSubset<T, GedungUpdateArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gedungs.
     * @param {GedungDeleteManyArgs} args - Arguments to filter Gedungs to delete.
     * @example
     * // Delete a few Gedungs
     * const { count } = await prisma.gedung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GedungDeleteManyArgs>(args?: SelectSubset<T, GedungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gedungs
     * const gedung = await prisma.gedung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GedungUpdateManyArgs>(args: SelectSubset<T, GedungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gedungs and returns the data updated in the database.
     * @param {GedungUpdateManyAndReturnArgs} args - Arguments to update many Gedungs.
     * @example
     * // Update many Gedungs
     * const gedung = await prisma.gedung.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gedungs and only return the `id`
     * const gedungWithIdOnly = await prisma.gedung.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GedungUpdateManyAndReturnArgs>(args: SelectSubset<T, GedungUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gedung.
     * @param {GedungUpsertArgs} args - Arguments to update or create a Gedung.
     * @example
     * // Update or create a Gedung
     * const gedung = await prisma.gedung.upsert({
     *   create: {
     *     // ... data to create a Gedung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gedung we want to update
     *   }
     * })
     */
    upsert<T extends GedungUpsertArgs>(args: SelectSubset<T, GedungUpsertArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungCountArgs} args - Arguments to filter Gedungs to count.
     * @example
     * // Count the number of Gedungs
     * const count = await prisma.gedung.count({
     *   where: {
     *     // ... the filter for the Gedungs we want to count
     *   }
     * })
    **/
    count<T extends GedungCountArgs>(
      args?: Subset<T, GedungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GedungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GedungAggregateArgs>(args: Subset<T, GedungAggregateArgs>): Prisma.PrismaPromise<GetGedungAggregateType<T>>

    /**
     * Group by Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GedungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GedungGroupByArgs['orderBy'] }
        : { orderBy?: GedungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GedungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGedungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gedung model
   */
  readonly fields: GedungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gedung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GedungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ruangans<T extends Gedung$RuangansArgs<ExtArgs> = {}>(args?: Subset<T, Gedung$RuangansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gedung model
   */ 
  interface GedungFieldRefs {
    readonly id: FieldRef<"Gedung", 'Int'>
    readonly nama: FieldRef<"Gedung", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gedung findUnique
   */
  export type GedungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung findUniqueOrThrow
   */
  export type GedungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung findFirst
   */
  export type GedungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung findFirstOrThrow
   */
  export type GedungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung findMany
   */
  export type GedungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedungs to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung create
   */
  export type GedungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The data needed to create a Gedung.
     */
    data: XOR<GedungCreateInput, GedungUncheckedCreateInput>
  }

  /**
   * Gedung createMany
   */
  export type GedungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gedungs.
     */
    data: GedungCreateManyInput | GedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gedung createManyAndReturn
   */
  export type GedungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * The data used to create many Gedungs.
     */
    data: GedungCreateManyInput | GedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gedung update
   */
  export type GedungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The data needed to update a Gedung.
     */
    data: XOR<GedungUpdateInput, GedungUncheckedUpdateInput>
    /**
     * Choose, which Gedung to update.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung updateMany
   */
  export type GedungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gedungs.
     */
    data: XOR<GedungUpdateManyMutationInput, GedungUncheckedUpdateManyInput>
    /**
     * Filter which Gedungs to update
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to update.
     */
    limit?: number
  }

  /**
   * Gedung updateManyAndReturn
   */
  export type GedungUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * The data used to update Gedungs.
     */
    data: XOR<GedungUpdateManyMutationInput, GedungUncheckedUpdateManyInput>
    /**
     * Filter which Gedungs to update
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to update.
     */
    limit?: number
  }

  /**
   * Gedung upsert
   */
  export type GedungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The filter to search for the Gedung to update in case it exists.
     */
    where: GedungWhereUniqueInput
    /**
     * In case the Gedung found by the `where` argument doesn't exist, create a new Gedung with this data.
     */
    create: XOR<GedungCreateInput, GedungUncheckedCreateInput>
    /**
     * In case the Gedung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GedungUpdateInput, GedungUncheckedUpdateInput>
  }

  /**
   * Gedung delete
   */
  export type GedungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter which Gedung to delete.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung deleteMany
   */
  export type GedungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gedungs to delete
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to delete.
     */
    limit?: number
  }

  /**
   * Gedung.Ruangans
   */
  export type Gedung$RuangansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    cursor?: RuanganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Gedung without action
   */
  export type GedungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
  }


  /**
   * Model Ruangan
   */

  export type AggregateRuangan = {
    _count: RuanganCountAggregateOutputType | null
    _avg: RuanganAvgAggregateOutputType | null
    _sum: RuanganSumAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  export type RuanganAvgAggregateOutputType = {
    id: number | null
    id_gedung: number | null
  }

  export type RuanganSumAggregateOutputType = {
    id: number | null
    id_gedung: number | null
  }

  export type RuanganMinAggregateOutputType = {
    id: number | null
    id_gedung: number | null
    nama: string | null
  }

  export type RuanganMaxAggregateOutputType = {
    id: number | null
    id_gedung: number | null
    nama: string | null
  }

  export type RuanganCountAggregateOutputType = {
    id: number
    id_gedung: number
    nama: number
    _all: number
  }


  export type RuanganAvgAggregateInputType = {
    id?: true
    id_gedung?: true
  }

  export type RuanganSumAggregateInputType = {
    id?: true
    id_gedung?: true
  }

  export type RuanganMinAggregateInputType = {
    id?: true
    id_gedung?: true
    nama?: true
  }

  export type RuanganMaxAggregateInputType = {
    id?: true
    id_gedung?: true
    nama?: true
  }

  export type RuanganCountAggregateInputType = {
    id?: true
    id_gedung?: true
    nama?: true
    _all?: true
  }

  export type RuanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangan to aggregate.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ruangans
    **/
    _count?: true | RuanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuanganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuanganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuanganMaxAggregateInputType
  }

  export type GetRuanganAggregateType<T extends RuanganAggregateArgs> = {
        [P in keyof T & keyof AggregateRuangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuangan[P]>
      : GetScalarType<T[P], AggregateRuangan[P]>
  }




  export type RuanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithAggregationInput | RuanganOrderByWithAggregationInput[]
    by: RuanganScalarFieldEnum[] | RuanganScalarFieldEnum
    having?: RuanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuanganCountAggregateInputType | true
    _avg?: RuanganAvgAggregateInputType
    _sum?: RuanganSumAggregateInputType
    _min?: RuanganMinAggregateInputType
    _max?: RuanganMaxAggregateInputType
  }

  export type RuanganGroupByOutputType = {
    id: number
    id_gedung: number
    nama: string
    _count: RuanganCountAggregateOutputType | null
    _avg: RuanganAvgAggregateOutputType | null
    _sum: RuanganSumAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  type GetRuanganGroupByPayload<T extends RuanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuanganGroupByOutputType[P]>
            : GetScalarType<T[P], RuanganGroupByOutputType[P]>
        }
      >
    >


  export type RuanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_gedung?: boolean
    nama?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    inventaris?: boolean | Ruangan$inventarisArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_gedung?: boolean
    nama?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_gedung?: boolean
    nama?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectScalar = {
    id?: boolean
    id_gedung?: boolean
    nama?: boolean
  }

  export type RuanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_gedung" | "nama", ExtArgs["result"]["ruangan"]>
  export type RuanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    inventaris?: boolean | Ruangan$inventarisArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
  }

  export type $RuanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruangan"
    objects: {
      gedung: Prisma.$GedungPayload<ExtArgs>
      inventaris: Prisma.$InventarisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_gedung: number
      nama: string
    }, ExtArgs["result"]["ruangan"]>
    composites: {}
  }

  type RuanganGetPayload<S extends boolean | null | undefined | RuanganDefaultArgs> = $Result.GetResult<Prisma.$RuanganPayload, S>

  type RuanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuanganCountAggregateInputType | true
    }

  export interface RuanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruangan'], meta: { name: 'Ruangan' } }
    /**
     * Find zero or one Ruangan that matches the filter.
     * @param {RuanganFindUniqueArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuanganFindUniqueArgs>(args: SelectSubset<T, RuanganFindUniqueArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuanganFindUniqueOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuanganFindUniqueOrThrowArgs>(args: SelectSubset<T, RuanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuanganFindFirstArgs>(args?: SelectSubset<T, RuanganFindFirstArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuanganFindFirstOrThrowArgs>(args?: SelectSubset<T, RuanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ruangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ruangans
     * const ruangans = await prisma.ruangan.findMany()
     * 
     * // Get first 10 Ruangans
     * const ruangans = await prisma.ruangan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuanganFindManyArgs>(args?: SelectSubset<T, RuanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruangan.
     * @param {RuanganCreateArgs} args - Arguments to create a Ruangan.
     * @example
     * // Create one Ruangan
     * const Ruangan = await prisma.ruangan.create({
     *   data: {
     *     // ... data to create a Ruangan
     *   }
     * })
     * 
     */
    create<T extends RuanganCreateArgs>(args: SelectSubset<T, RuanganCreateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ruangans.
     * @param {RuanganCreateManyArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuanganCreateManyArgs>(args?: SelectSubset<T, RuanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ruangans and returns the data saved in the database.
     * @param {RuanganCreateManyAndReturnArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuanganCreateManyAndReturnArgs>(args?: SelectSubset<T, RuanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruangan.
     * @param {RuanganDeleteArgs} args - Arguments to delete one Ruangan.
     * @example
     * // Delete one Ruangan
     * const Ruangan = await prisma.ruangan.delete({
     *   where: {
     *     // ... filter to delete one Ruangan
     *   }
     * })
     * 
     */
    delete<T extends RuanganDeleteArgs>(args: SelectSubset<T, RuanganDeleteArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruangan.
     * @param {RuanganUpdateArgs} args - Arguments to update one Ruangan.
     * @example
     * // Update one Ruangan
     * const ruangan = await prisma.ruangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuanganUpdateArgs>(args: SelectSubset<T, RuanganUpdateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ruangans.
     * @param {RuanganDeleteManyArgs} args - Arguments to filter Ruangans to delete.
     * @example
     * // Delete a few Ruangans
     * const { count } = await prisma.ruangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuanganDeleteManyArgs>(args?: SelectSubset<T, RuanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuanganUpdateManyArgs>(args: SelectSubset<T, RuanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans and returns the data updated in the database.
     * @param {RuanganUpdateManyAndReturnArgs} args - Arguments to update many Ruangans.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RuanganUpdateManyAndReturnArgs>(args: SelectSubset<T, RuanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruangan.
     * @param {RuanganUpsertArgs} args - Arguments to update or create a Ruangan.
     * @example
     * // Update or create a Ruangan
     * const ruangan = await prisma.ruangan.upsert({
     *   create: {
     *     // ... data to create a Ruangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruangan we want to update
     *   }
     * })
     */
    upsert<T extends RuanganUpsertArgs>(args: SelectSubset<T, RuanganUpsertArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganCountArgs} args - Arguments to filter Ruangans to count.
     * @example
     * // Count the number of Ruangans
     * const count = await prisma.ruangan.count({
     *   where: {
     *     // ... the filter for the Ruangans we want to count
     *   }
     * })
    **/
    count<T extends RuanganCountArgs>(
      args?: Subset<T, RuanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuanganAggregateArgs>(args: Subset<T, RuanganAggregateArgs>): Prisma.PrismaPromise<GetRuanganAggregateType<T>>

    /**
     * Group by Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuanganGroupByArgs['orderBy'] }
        : { orderBy?: RuanganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruangan model
   */
  readonly fields: RuanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gedung<T extends GedungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GedungDefaultArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventaris<T extends Ruangan$inventarisArgs<ExtArgs> = {}>(args?: Subset<T, Ruangan$inventarisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ruangan model
   */ 
  interface RuanganFieldRefs {
    readonly id: FieldRef<"Ruangan", 'Int'>
    readonly id_gedung: FieldRef<"Ruangan", 'Int'>
    readonly nama: FieldRef<"Ruangan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ruangan findUnique
   */
  export type RuanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findUniqueOrThrow
   */
  export type RuanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findFirst
   */
  export type RuanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findFirstOrThrow
   */
  export type RuanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findMany
   */
  export type RuanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangans to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan create
   */
  export type RuanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruangan.
     */
    data: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
  }

  /**
   * Ruangan createMany
   */
  export type RuanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruangan createManyAndReturn
   */
  export type RuanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan update
   */
  export type RuanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruangan.
     */
    data: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
    /**
     * Choose, which Ruangan to update.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan updateMany
   */
  export type RuanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
  }

  /**
   * Ruangan updateManyAndReturn
   */
  export type RuanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan upsert
   */
  export type RuanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruangan to update in case it exists.
     */
    where: RuanganWhereUniqueInput
    /**
     * In case the Ruangan found by the `where` argument doesn't exist, create a new Ruangan with this data.
     */
    create: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
    /**
     * In case the Ruangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
  }

  /**
   * Ruangan delete
   */
  export type RuanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter which Ruangan to delete.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan deleteMany
   */
  export type RuanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangans to delete
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to delete.
     */
    limit?: number
  }

  /**
   * Ruangan.inventaris
   */
  export type Ruangan$inventarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    where?: InventarisWhereInput
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    cursor?: InventarisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarisScalarFieldEnum | InventarisScalarFieldEnum[]
  }

  /**
   * Ruangan without action
   */
  export type RuanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
  }


  /**
   * Model Inventaris
   */

  export type AggregateInventaris = {
    _count: InventarisCountAggregateOutputType | null
    _avg: InventarisAvgAggregateOutputType | null
    _sum: InventarisSumAggregateOutputType | null
    _min: InventarisMinAggregateOutputType | null
    _max: InventarisMaxAggregateOutputType | null
  }

  export type InventarisAvgAggregateOutputType = {
    id: number | null
    id_ruangan: number | null
    id_golongan: number | null
    tahun_perolehan: number | null
    harga_perolehan: number | null
    masa_manfaat: number | null
    umur_aset: number | null
    nilai_residu: number | null
    persentase_garis_lurus: Decimal | null
    nilai_yang_dapat_disusutkan: number | null
    beban_penyusutan_per_tahun: number | null
    nilai_buku_akhir: number | null
    jumlah: number | null
  }

  export type InventarisSumAggregateOutputType = {
    id: number | null
    id_ruangan: number | null
    id_golongan: number | null
    tahun_perolehan: number | null
    harga_perolehan: number | null
    masa_manfaat: number | null
    umur_aset: number | null
    nilai_residu: number | null
    persentase_garis_lurus: Decimal | null
    nilai_yang_dapat_disusutkan: number | null
    beban_penyusutan_per_tahun: number | null
    nilai_buku_akhir: number | null
    jumlah: number | null
  }

  export type InventarisMinAggregateOutputType = {
    id: number | null
    id_ruangan: number | null
    id_golongan: number | null
    nama_inventaris: string | null
    tahun_perolehan: number | null
    harga_perolehan: number | null
    bahan_merk: string | null
    masa_manfaat: number | null
    umur_aset: number | null
    nilai_residu: number | null
    persentase_garis_lurus: Decimal | null
    nilai_yang_dapat_disusutkan: number | null
    beban_penyusutan_per_tahun: number | null
    nilai_buku_akhir: number | null
    jumlah: number | null
    kondisi: $Enums.Kondisi | null
    barcode: string | null
  }

  export type InventarisMaxAggregateOutputType = {
    id: number | null
    id_ruangan: number | null
    id_golongan: number | null
    nama_inventaris: string | null
    tahun_perolehan: number | null
    harga_perolehan: number | null
    bahan_merk: string | null
    masa_manfaat: number | null
    umur_aset: number | null
    nilai_residu: number | null
    persentase_garis_lurus: Decimal | null
    nilai_yang_dapat_disusutkan: number | null
    beban_penyusutan_per_tahun: number | null
    nilai_buku_akhir: number | null
    jumlah: number | null
    kondisi: $Enums.Kondisi | null
    barcode: string | null
  }

  export type InventarisCountAggregateOutputType = {
    id: number
    id_ruangan: number
    id_golongan: number
    nama_inventaris: number
    tahun_perolehan: number
    harga_perolehan: number
    bahan_merk: number
    masa_manfaat: number
    umur_aset: number
    nilai_residu: number
    persentase_garis_lurus: number
    nilai_yang_dapat_disusutkan: number
    beban_penyusutan_per_tahun: number
    nilai_buku_akhir: number
    jumlah: number
    kondisi: number
    barcode: number
    _all: number
  }


  export type InventarisAvgAggregateInputType = {
    id?: true
    id_ruangan?: true
    id_golongan?: true
    tahun_perolehan?: true
    harga_perolehan?: true
    masa_manfaat?: true
    umur_aset?: true
    nilai_residu?: true
    persentase_garis_lurus?: true
    nilai_yang_dapat_disusutkan?: true
    beban_penyusutan_per_tahun?: true
    nilai_buku_akhir?: true
    jumlah?: true
  }

  export type InventarisSumAggregateInputType = {
    id?: true
    id_ruangan?: true
    id_golongan?: true
    tahun_perolehan?: true
    harga_perolehan?: true
    masa_manfaat?: true
    umur_aset?: true
    nilai_residu?: true
    persentase_garis_lurus?: true
    nilai_yang_dapat_disusutkan?: true
    beban_penyusutan_per_tahun?: true
    nilai_buku_akhir?: true
    jumlah?: true
  }

  export type InventarisMinAggregateInputType = {
    id?: true
    id_ruangan?: true
    id_golongan?: true
    nama_inventaris?: true
    tahun_perolehan?: true
    harga_perolehan?: true
    bahan_merk?: true
    masa_manfaat?: true
    umur_aset?: true
    nilai_residu?: true
    persentase_garis_lurus?: true
    nilai_yang_dapat_disusutkan?: true
    beban_penyusutan_per_tahun?: true
    nilai_buku_akhir?: true
    jumlah?: true
    kondisi?: true
    barcode?: true
  }

  export type InventarisMaxAggregateInputType = {
    id?: true
    id_ruangan?: true
    id_golongan?: true
    nama_inventaris?: true
    tahun_perolehan?: true
    harga_perolehan?: true
    bahan_merk?: true
    masa_manfaat?: true
    umur_aset?: true
    nilai_residu?: true
    persentase_garis_lurus?: true
    nilai_yang_dapat_disusutkan?: true
    beban_penyusutan_per_tahun?: true
    nilai_buku_akhir?: true
    jumlah?: true
    kondisi?: true
    barcode?: true
  }

  export type InventarisCountAggregateInputType = {
    id?: true
    id_ruangan?: true
    id_golongan?: true
    nama_inventaris?: true
    tahun_perolehan?: true
    harga_perolehan?: true
    bahan_merk?: true
    masa_manfaat?: true
    umur_aset?: true
    nilai_residu?: true
    persentase_garis_lurus?: true
    nilai_yang_dapat_disusutkan?: true
    beban_penyusutan_per_tahun?: true
    nilai_buku_akhir?: true
    jumlah?: true
    kondisi?: true
    barcode?: true
    _all?: true
  }

  export type InventarisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventaris to aggregate.
     */
    where?: InventarisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarises to fetch.
     */
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarises
    **/
    _count?: true | InventarisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarisMaxAggregateInputType
  }

  export type GetInventarisAggregateType<T extends InventarisAggregateArgs> = {
        [P in keyof T & keyof AggregateInventaris]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventaris[P]>
      : GetScalarType<T[P], AggregateInventaris[P]>
  }




  export type InventarisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarisWhereInput
    orderBy?: InventarisOrderByWithAggregationInput | InventarisOrderByWithAggregationInput[]
    by: InventarisScalarFieldEnum[] | InventarisScalarFieldEnum
    having?: InventarisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarisCountAggregateInputType | true
    _avg?: InventarisAvgAggregateInputType
    _sum?: InventarisSumAggregateInputType
    _min?: InventarisMinAggregateInputType
    _max?: InventarisMaxAggregateInputType
  }

  export type InventarisGroupByOutputType = {
    id: number
    id_ruangan: number
    id_golongan: number
    nama_inventaris: string
    tahun_perolehan: number | null
    harga_perolehan: number | null
    bahan_merk: string | null
    masa_manfaat: number | null
    umur_aset: number | null
    nilai_residu: number | null
    persentase_garis_lurus: Decimal | null
    nilai_yang_dapat_disusutkan: number | null
    beban_penyusutan_per_tahun: number | null
    nilai_buku_akhir: number | null
    jumlah: number | null
    kondisi: $Enums.Kondisi
    barcode: string | null
    _count: InventarisCountAggregateOutputType | null
    _avg: InventarisAvgAggregateOutputType | null
    _sum: InventarisSumAggregateOutputType | null
    _min: InventarisMinAggregateOutputType | null
    _max: InventarisMaxAggregateOutputType | null
  }

  type GetInventarisGroupByPayload<T extends InventarisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarisGroupByOutputType[P]>
            : GetScalarType<T[P], InventarisGroupByOutputType[P]>
        }
      >
    >


  export type InventarisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ruangan?: boolean
    id_golongan?: boolean
    nama_inventaris?: boolean
    tahun_perolehan?: boolean
    harga_perolehan?: boolean
    bahan_merk?: boolean
    masa_manfaat?: boolean
    umur_aset?: boolean
    nilai_residu?: boolean
    persentase_garis_lurus?: boolean
    nilai_yang_dapat_disusutkan?: boolean
    beban_penyusutan_per_tahun?: boolean
    nilai_buku_akhir?: boolean
    jumlah?: boolean
    kondisi?: boolean
    barcode?: boolean
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventaris"]>

  export type InventarisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ruangan?: boolean
    id_golongan?: boolean
    nama_inventaris?: boolean
    tahun_perolehan?: boolean
    harga_perolehan?: boolean
    bahan_merk?: boolean
    masa_manfaat?: boolean
    umur_aset?: boolean
    nilai_residu?: boolean
    persentase_garis_lurus?: boolean
    nilai_yang_dapat_disusutkan?: boolean
    beban_penyusutan_per_tahun?: boolean
    nilai_buku_akhir?: boolean
    jumlah?: boolean
    kondisi?: boolean
    barcode?: boolean
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventaris"]>

  export type InventarisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ruangan?: boolean
    id_golongan?: boolean
    nama_inventaris?: boolean
    tahun_perolehan?: boolean
    harga_perolehan?: boolean
    bahan_merk?: boolean
    masa_manfaat?: boolean
    umur_aset?: boolean
    nilai_residu?: boolean
    persentase_garis_lurus?: boolean
    nilai_yang_dapat_disusutkan?: boolean
    beban_penyusutan_per_tahun?: boolean
    nilai_buku_akhir?: boolean
    jumlah?: boolean
    kondisi?: boolean
    barcode?: boolean
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventaris"]>

  export type InventarisSelectScalar = {
    id?: boolean
    id_ruangan?: boolean
    id_golongan?: boolean
    nama_inventaris?: boolean
    tahun_perolehan?: boolean
    harga_perolehan?: boolean
    bahan_merk?: boolean
    masa_manfaat?: boolean
    umur_aset?: boolean
    nilai_residu?: boolean
    persentase_garis_lurus?: boolean
    nilai_yang_dapat_disusutkan?: boolean
    beban_penyusutan_per_tahun?: boolean
    nilai_buku_akhir?: boolean
    jumlah?: boolean
    kondisi?: boolean
    barcode?: boolean
  }

  export type InventarisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ruangan" | "id_golongan" | "nama_inventaris" | "tahun_perolehan" | "harga_perolehan" | "bahan_merk" | "masa_manfaat" | "umur_aset" | "nilai_residu" | "persentase_garis_lurus" | "nilai_yang_dapat_disusutkan" | "beban_penyusutan_per_tahun" | "nilai_buku_akhir" | "jumlah" | "kondisi" | "barcode", ExtArgs["result"]["inventaris"]>
  export type InventarisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }
  export type InventarisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }
  export type InventarisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }

  export type $InventarisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventaris"
    objects: {
      ruangan: Prisma.$RuanganPayload<ExtArgs>
      golongan: Prisma.$GolonganPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ruangan: number
      id_golongan: number
      nama_inventaris: string
      tahun_perolehan: number | null
      harga_perolehan: number | null
      bahan_merk: string | null
      masa_manfaat: number | null
      umur_aset: number | null
      nilai_residu: number | null
      persentase_garis_lurus: Prisma.Decimal | null
      nilai_yang_dapat_disusutkan: number | null
      beban_penyusutan_per_tahun: number | null
      nilai_buku_akhir: number | null
      jumlah: number | null
      kondisi: $Enums.Kondisi
      barcode: string | null
    }, ExtArgs["result"]["inventaris"]>
    composites: {}
  }

  type InventarisGetPayload<S extends boolean | null | undefined | InventarisDefaultArgs> = $Result.GetResult<Prisma.$InventarisPayload, S>

  type InventarisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarisCountAggregateInputType | true
    }

  export interface InventarisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventaris'], meta: { name: 'Inventaris' } }
    /**
     * Find zero or one Inventaris that matches the filter.
     * @param {InventarisFindUniqueArgs} args - Arguments to find a Inventaris
     * @example
     * // Get one Inventaris
     * const inventaris = await prisma.inventaris.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarisFindUniqueArgs>(args: SelectSubset<T, InventarisFindUniqueArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventaris that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarisFindUniqueOrThrowArgs} args - Arguments to find a Inventaris
     * @example
     * // Get one Inventaris
     * const inventaris = await prisma.inventaris.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarisFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisFindFirstArgs} args - Arguments to find a Inventaris
     * @example
     * // Get one Inventaris
     * const inventaris = await prisma.inventaris.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarisFindFirstArgs>(args?: SelectSubset<T, InventarisFindFirstArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventaris that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisFindFirstOrThrowArgs} args - Arguments to find a Inventaris
     * @example
     * // Get one Inventaris
     * const inventaris = await prisma.inventaris.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarisFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarisFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarises
     * const inventarises = await prisma.inventaris.findMany()
     * 
     * // Get first 10 Inventarises
     * const inventarises = await prisma.inventaris.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarisWithIdOnly = await prisma.inventaris.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventarisFindManyArgs>(args?: SelectSubset<T, InventarisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventaris.
     * @param {InventarisCreateArgs} args - Arguments to create a Inventaris.
     * @example
     * // Create one Inventaris
     * const Inventaris = await prisma.inventaris.create({
     *   data: {
     *     // ... data to create a Inventaris
     *   }
     * })
     * 
     */
    create<T extends InventarisCreateArgs>(args: SelectSubset<T, InventarisCreateArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarises.
     * @param {InventarisCreateManyArgs} args - Arguments to create many Inventarises.
     * @example
     * // Create many Inventarises
     * const inventaris = await prisma.inventaris.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarisCreateManyArgs>(args?: SelectSubset<T, InventarisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventarises and returns the data saved in the database.
     * @param {InventarisCreateManyAndReturnArgs} args - Arguments to create many Inventarises.
     * @example
     * // Create many Inventarises
     * const inventaris = await prisma.inventaris.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventarises and only return the `id`
     * const inventarisWithIdOnly = await prisma.inventaris.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventarisCreateManyAndReturnArgs>(args?: SelectSubset<T, InventarisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventaris.
     * @param {InventarisDeleteArgs} args - Arguments to delete one Inventaris.
     * @example
     * // Delete one Inventaris
     * const Inventaris = await prisma.inventaris.delete({
     *   where: {
     *     // ... filter to delete one Inventaris
     *   }
     * })
     * 
     */
    delete<T extends InventarisDeleteArgs>(args: SelectSubset<T, InventarisDeleteArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventaris.
     * @param {InventarisUpdateArgs} args - Arguments to update one Inventaris.
     * @example
     * // Update one Inventaris
     * const inventaris = await prisma.inventaris.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarisUpdateArgs>(args: SelectSubset<T, InventarisUpdateArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarises.
     * @param {InventarisDeleteManyArgs} args - Arguments to filter Inventarises to delete.
     * @example
     * // Delete a few Inventarises
     * const { count } = await prisma.inventaris.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarisDeleteManyArgs>(args?: SelectSubset<T, InventarisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarises
     * const inventaris = await prisma.inventaris.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarisUpdateManyArgs>(args: SelectSubset<T, InventarisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarises and returns the data updated in the database.
     * @param {InventarisUpdateManyAndReturnArgs} args - Arguments to update many Inventarises.
     * @example
     * // Update many Inventarises
     * const inventaris = await prisma.inventaris.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventarises and only return the `id`
     * const inventarisWithIdOnly = await prisma.inventaris.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventarisUpdateManyAndReturnArgs>(args: SelectSubset<T, InventarisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventaris.
     * @param {InventarisUpsertArgs} args - Arguments to update or create a Inventaris.
     * @example
     * // Update or create a Inventaris
     * const inventaris = await prisma.inventaris.upsert({
     *   create: {
     *     // ... data to create a Inventaris
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventaris we want to update
     *   }
     * })
     */
    upsert<T extends InventarisUpsertArgs>(args: SelectSubset<T, InventarisUpsertArgs<ExtArgs>>): Prisma__InventarisClient<$Result.GetResult<Prisma.$InventarisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisCountArgs} args - Arguments to filter Inventarises to count.
     * @example
     * // Count the number of Inventarises
     * const count = await prisma.inventaris.count({
     *   where: {
     *     // ... the filter for the Inventarises we want to count
     *   }
     * })
    **/
    count<T extends InventarisCountArgs>(
      args?: Subset<T, InventarisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventarisAggregateArgs>(args: Subset<T, InventarisAggregateArgs>): Prisma.PrismaPromise<GetInventarisAggregateType<T>>

    /**
     * Group by Inventaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventarisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarisGroupByArgs['orderBy'] }
        : { orderBy?: InventarisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventarisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventaris model
   */
  readonly fields: InventarisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventaris.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruangan<T extends RuanganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuanganDefaultArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    golongan<T extends GolonganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GolonganDefaultArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventaris model
   */ 
  interface InventarisFieldRefs {
    readonly id: FieldRef<"Inventaris", 'Int'>
    readonly id_ruangan: FieldRef<"Inventaris", 'Int'>
    readonly id_golongan: FieldRef<"Inventaris", 'Int'>
    readonly nama_inventaris: FieldRef<"Inventaris", 'String'>
    readonly tahun_perolehan: FieldRef<"Inventaris", 'Int'>
    readonly harga_perolehan: FieldRef<"Inventaris", 'Int'>
    readonly bahan_merk: FieldRef<"Inventaris", 'String'>
    readonly masa_manfaat: FieldRef<"Inventaris", 'Int'>
    readonly umur_aset: FieldRef<"Inventaris", 'Int'>
    readonly nilai_residu: FieldRef<"Inventaris", 'Int'>
    readonly persentase_garis_lurus: FieldRef<"Inventaris", 'Decimal'>
    readonly nilai_yang_dapat_disusutkan: FieldRef<"Inventaris", 'Int'>
    readonly beban_penyusutan_per_tahun: FieldRef<"Inventaris", 'Int'>
    readonly nilai_buku_akhir: FieldRef<"Inventaris", 'Int'>
    readonly jumlah: FieldRef<"Inventaris", 'Int'>
    readonly kondisi: FieldRef<"Inventaris", 'Kondisi'>
    readonly barcode: FieldRef<"Inventaris", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventaris findUnique
   */
  export type InventarisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter, which Inventaris to fetch.
     */
    where: InventarisWhereUniqueInput
  }

  /**
   * Inventaris findUniqueOrThrow
   */
  export type InventarisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter, which Inventaris to fetch.
     */
    where: InventarisWhereUniqueInput
  }

  /**
   * Inventaris findFirst
   */
  export type InventarisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter, which Inventaris to fetch.
     */
    where?: InventarisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarises to fetch.
     */
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarises.
     */
    cursor?: InventarisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarises.
     */
    distinct?: InventarisScalarFieldEnum | InventarisScalarFieldEnum[]
  }

  /**
   * Inventaris findFirstOrThrow
   */
  export type InventarisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter, which Inventaris to fetch.
     */
    where?: InventarisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarises to fetch.
     */
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarises.
     */
    cursor?: InventarisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarises.
     */
    distinct?: InventarisScalarFieldEnum | InventarisScalarFieldEnum[]
  }

  /**
   * Inventaris findMany
   */
  export type InventarisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter, which Inventarises to fetch.
     */
    where?: InventarisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarises to fetch.
     */
    orderBy?: InventarisOrderByWithRelationInput | InventarisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarises.
     */
    cursor?: InventarisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarises.
     */
    skip?: number
    distinct?: InventarisScalarFieldEnum | InventarisScalarFieldEnum[]
  }

  /**
   * Inventaris create
   */
  export type InventarisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventaris.
     */
    data: XOR<InventarisCreateInput, InventarisUncheckedCreateInput>
  }

  /**
   * Inventaris createMany
   */
  export type InventarisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarises.
     */
    data: InventarisCreateManyInput | InventarisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventaris createManyAndReturn
   */
  export type InventarisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * The data used to create many Inventarises.
     */
    data: InventarisCreateManyInput | InventarisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventaris update
   */
  export type InventarisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventaris.
     */
    data: XOR<InventarisUpdateInput, InventarisUncheckedUpdateInput>
    /**
     * Choose, which Inventaris to update.
     */
    where: InventarisWhereUniqueInput
  }

  /**
   * Inventaris updateMany
   */
  export type InventarisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarises.
     */
    data: XOR<InventarisUpdateManyMutationInput, InventarisUncheckedUpdateManyInput>
    /**
     * Filter which Inventarises to update
     */
    where?: InventarisWhereInput
    /**
     * Limit how many Inventarises to update.
     */
    limit?: number
  }

  /**
   * Inventaris updateManyAndReturn
   */
  export type InventarisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * The data used to update Inventarises.
     */
    data: XOR<InventarisUpdateManyMutationInput, InventarisUncheckedUpdateManyInput>
    /**
     * Filter which Inventarises to update
     */
    where?: InventarisWhereInput
    /**
     * Limit how many Inventarises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventaris upsert
   */
  export type InventarisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventaris to update in case it exists.
     */
    where: InventarisWhereUniqueInput
    /**
     * In case the Inventaris found by the `where` argument doesn't exist, create a new Inventaris with this data.
     */
    create: XOR<InventarisCreateInput, InventarisUncheckedCreateInput>
    /**
     * In case the Inventaris was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarisUpdateInput, InventarisUncheckedUpdateInput>
  }

  /**
   * Inventaris delete
   */
  export type InventarisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
    /**
     * Filter which Inventaris to delete.
     */
    where: InventarisWhereUniqueInput
  }

  /**
   * Inventaris deleteMany
   */
  export type InventarisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarises to delete
     */
    where?: InventarisWhereInput
    /**
     * Limit how many Inventarises to delete.
     */
    limit?: number
  }

  /**
   * Inventaris without action
   */
  export type InventarisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventaris
     */
    select?: InventarisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventaris
     */
    omit?: InventarisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarisInclude<ExtArgs> | null
  }


  /**
   * Model BarangHabisPakai
   */

  export type AggregateBarangHabisPakai = {
    _count: BarangHabisPakaiCountAggregateOutputType | null
    _avg: BarangHabisPakaiAvgAggregateOutputType | null
    _sum: BarangHabisPakaiSumAggregateOutputType | null
    _min: BarangHabisPakaiMinAggregateOutputType | null
    _max: BarangHabisPakaiMaxAggregateOutputType | null
  }

  export type BarangHabisPakaiAvgAggregateOutputType = {
    id: number | null
    id_golongan: number | null
  }

  export type BarangHabisPakaiSumAggregateOutputType = {
    id: number | null
    id_golongan: number | null
  }

  export type BarangHabisPakaiMinAggregateOutputType = {
    id: number | null
    id_golongan: number | null
    kode_barang: string | null
    nama_barang: string | null
    satuan: string | null
  }

  export type BarangHabisPakaiMaxAggregateOutputType = {
    id: number | null
    id_golongan: number | null
    kode_barang: string | null
    nama_barang: string | null
    satuan: string | null
  }

  export type BarangHabisPakaiCountAggregateOutputType = {
    id: number
    id_golongan: number
    kode_barang: number
    nama_barang: number
    satuan: number
    _all: number
  }


  export type BarangHabisPakaiAvgAggregateInputType = {
    id?: true
    id_golongan?: true
  }

  export type BarangHabisPakaiSumAggregateInputType = {
    id?: true
    id_golongan?: true
  }

  export type BarangHabisPakaiMinAggregateInputType = {
    id?: true
    id_golongan?: true
    kode_barang?: true
    nama_barang?: true
    satuan?: true
  }

  export type BarangHabisPakaiMaxAggregateInputType = {
    id?: true
    id_golongan?: true
    kode_barang?: true
    nama_barang?: true
    satuan?: true
  }

  export type BarangHabisPakaiCountAggregateInputType = {
    id?: true
    id_golongan?: true
    kode_barang?: true
    nama_barang?: true
    satuan?: true
    _all?: true
  }

  export type BarangHabisPakaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangHabisPakai to aggregate.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarangHabisPakais
    **/
    _count?: true | BarangHabisPakaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangHabisPakaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangHabisPakaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangHabisPakaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangHabisPakaiMaxAggregateInputType
  }

  export type GetBarangHabisPakaiAggregateType<T extends BarangHabisPakaiAggregateArgs> = {
        [P in keyof T & keyof AggregateBarangHabisPakai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarangHabisPakai[P]>
      : GetScalarType<T[P], AggregateBarangHabisPakai[P]>
  }




  export type BarangHabisPakaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangHabisPakaiWhereInput
    orderBy?: BarangHabisPakaiOrderByWithAggregationInput | BarangHabisPakaiOrderByWithAggregationInput[]
    by: BarangHabisPakaiScalarFieldEnum[] | BarangHabisPakaiScalarFieldEnum
    having?: BarangHabisPakaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangHabisPakaiCountAggregateInputType | true
    _avg?: BarangHabisPakaiAvgAggregateInputType
    _sum?: BarangHabisPakaiSumAggregateInputType
    _min?: BarangHabisPakaiMinAggregateInputType
    _max?: BarangHabisPakaiMaxAggregateInputType
  }

  export type BarangHabisPakaiGroupByOutputType = {
    id: number
    id_golongan: number
    kode_barang: string
    nama_barang: string
    satuan: string
    _count: BarangHabisPakaiCountAggregateOutputType | null
    _avg: BarangHabisPakaiAvgAggregateOutputType | null
    _sum: BarangHabisPakaiSumAggregateOutputType | null
    _min: BarangHabisPakaiMinAggregateOutputType | null
    _max: BarangHabisPakaiMaxAggregateOutputType | null
  }

  type GetBarangHabisPakaiGroupByPayload<T extends BarangHabisPakaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangHabisPakaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangHabisPakaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangHabisPakaiGroupByOutputType[P]>
            : GetScalarType<T[P], BarangHabisPakaiGroupByOutputType[P]>
        }
      >
    >


  export type BarangHabisPakaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_golongan?: boolean
    kode_barang?: boolean
    nama_barang?: boolean
    satuan?: boolean
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
    transaksi?: boolean | BarangHabisPakai$transaksiArgs<ExtArgs>
    _count?: boolean | BarangHabisPakaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangHabisPakai"]>

  export type BarangHabisPakaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_golongan?: boolean
    kode_barang?: boolean
    nama_barang?: boolean
    satuan?: boolean
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangHabisPakai"]>

  export type BarangHabisPakaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_golongan?: boolean
    kode_barang?: boolean
    nama_barang?: boolean
    satuan?: boolean
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangHabisPakai"]>

  export type BarangHabisPakaiSelectScalar = {
    id?: boolean
    id_golongan?: boolean
    kode_barang?: boolean
    nama_barang?: boolean
    satuan?: boolean
  }

  export type BarangHabisPakaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_golongan" | "kode_barang" | "nama_barang" | "satuan", ExtArgs["result"]["barangHabisPakai"]>
  export type BarangHabisPakaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
    transaksi?: boolean | BarangHabisPakai$transaksiArgs<ExtArgs>
    _count?: boolean | BarangHabisPakaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangHabisPakaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }
  export type BarangHabisPakaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    golongan?: boolean | GolonganDefaultArgs<ExtArgs>
  }

  export type $BarangHabisPakaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarangHabisPakai"
    objects: {
      golongan: Prisma.$GolonganPayload<ExtArgs>
      transaksi: Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_golongan: number
      kode_barang: string
      nama_barang: string
      satuan: string
    }, ExtArgs["result"]["barangHabisPakai"]>
    composites: {}
  }

  type BarangHabisPakaiGetPayload<S extends boolean | null | undefined | BarangHabisPakaiDefaultArgs> = $Result.GetResult<Prisma.$BarangHabisPakaiPayload, S>

  type BarangHabisPakaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarangHabisPakaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangHabisPakaiCountAggregateInputType | true
    }

  export interface BarangHabisPakaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarangHabisPakai'], meta: { name: 'BarangHabisPakai' } }
    /**
     * Find zero or one BarangHabisPakai that matches the filter.
     * @param {BarangHabisPakaiFindUniqueArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangHabisPakaiFindUniqueArgs>(args: SelectSubset<T, BarangHabisPakaiFindUniqueArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarangHabisPakai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarangHabisPakaiFindUniqueOrThrowArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangHabisPakaiFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarangHabisPakai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindFirstArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangHabisPakaiFindFirstArgs>(args?: SelectSubset<T, BarangHabisPakaiFindFirstArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarangHabisPakai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindFirstOrThrowArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangHabisPakaiFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarangHabisPakais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarangHabisPakais
     * const barangHabisPakais = await prisma.barangHabisPakai.findMany()
     * 
     * // Get first 10 BarangHabisPakais
     * const barangHabisPakais = await prisma.barangHabisPakai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barangHabisPakaiWithIdOnly = await prisma.barangHabisPakai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarangHabisPakaiFindManyArgs>(args?: SelectSubset<T, BarangHabisPakaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarangHabisPakai.
     * @param {BarangHabisPakaiCreateArgs} args - Arguments to create a BarangHabisPakai.
     * @example
     * // Create one BarangHabisPakai
     * const BarangHabisPakai = await prisma.barangHabisPakai.create({
     *   data: {
     *     // ... data to create a BarangHabisPakai
     *   }
     * })
     * 
     */
    create<T extends BarangHabisPakaiCreateArgs>(args: SelectSubset<T, BarangHabisPakaiCreateArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarangHabisPakais.
     * @param {BarangHabisPakaiCreateManyArgs} args - Arguments to create many BarangHabisPakais.
     * @example
     * // Create many BarangHabisPakais
     * const barangHabisPakai = await prisma.barangHabisPakai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangHabisPakaiCreateManyArgs>(args?: SelectSubset<T, BarangHabisPakaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarangHabisPakais and returns the data saved in the database.
     * @param {BarangHabisPakaiCreateManyAndReturnArgs} args - Arguments to create many BarangHabisPakais.
     * @example
     * // Create many BarangHabisPakais
     * const barangHabisPakai = await prisma.barangHabisPakai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarangHabisPakais and only return the `id`
     * const barangHabisPakaiWithIdOnly = await prisma.barangHabisPakai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangHabisPakaiCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangHabisPakaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarangHabisPakai.
     * @param {BarangHabisPakaiDeleteArgs} args - Arguments to delete one BarangHabisPakai.
     * @example
     * // Delete one BarangHabisPakai
     * const BarangHabisPakai = await prisma.barangHabisPakai.delete({
     *   where: {
     *     // ... filter to delete one BarangHabisPakai
     *   }
     * })
     * 
     */
    delete<T extends BarangHabisPakaiDeleteArgs>(args: SelectSubset<T, BarangHabisPakaiDeleteArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarangHabisPakai.
     * @param {BarangHabisPakaiUpdateArgs} args - Arguments to update one BarangHabisPakai.
     * @example
     * // Update one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangHabisPakaiUpdateArgs>(args: SelectSubset<T, BarangHabisPakaiUpdateArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarangHabisPakais.
     * @param {BarangHabisPakaiDeleteManyArgs} args - Arguments to filter BarangHabisPakais to delete.
     * @example
     * // Delete a few BarangHabisPakais
     * const { count } = await prisma.barangHabisPakai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangHabisPakaiDeleteManyArgs>(args?: SelectSubset<T, BarangHabisPakaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarangHabisPakais
     * const barangHabisPakai = await prisma.barangHabisPakai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangHabisPakaiUpdateManyArgs>(args: SelectSubset<T, BarangHabisPakaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangHabisPakais and returns the data updated in the database.
     * @param {BarangHabisPakaiUpdateManyAndReturnArgs} args - Arguments to update many BarangHabisPakais.
     * @example
     * // Update many BarangHabisPakais
     * const barangHabisPakai = await prisma.barangHabisPakai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarangHabisPakais and only return the `id`
     * const barangHabisPakaiWithIdOnly = await prisma.barangHabisPakai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarangHabisPakaiUpdateManyAndReturnArgs>(args: SelectSubset<T, BarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarangHabisPakai.
     * @param {BarangHabisPakaiUpsertArgs} args - Arguments to update or create a BarangHabisPakai.
     * @example
     * // Update or create a BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.upsert({
     *   create: {
     *     // ... data to create a BarangHabisPakai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarangHabisPakai we want to update
     *   }
     * })
     */
    upsert<T extends BarangHabisPakaiUpsertArgs>(args: SelectSubset<T, BarangHabisPakaiUpsertArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiCountArgs} args - Arguments to filter BarangHabisPakais to count.
     * @example
     * // Count the number of BarangHabisPakais
     * const count = await prisma.barangHabisPakai.count({
     *   where: {
     *     // ... the filter for the BarangHabisPakais we want to count
     *   }
     * })
    **/
    count<T extends BarangHabisPakaiCountArgs>(
      args?: Subset<T, BarangHabisPakaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangHabisPakaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangHabisPakaiAggregateArgs>(args: Subset<T, BarangHabisPakaiAggregateArgs>): Prisma.PrismaPromise<GetBarangHabisPakaiAggregateType<T>>

    /**
     * Group by BarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangHabisPakaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangHabisPakaiGroupByArgs['orderBy'] }
        : { orderBy?: BarangHabisPakaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangHabisPakaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangHabisPakaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarangHabisPakai model
   */
  readonly fields: BarangHabisPakaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarangHabisPakai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangHabisPakaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    golongan<T extends GolonganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GolonganDefaultArgs<ExtArgs>>): Prisma__GolonganClient<$Result.GetResult<Prisma.$GolonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends BarangHabisPakai$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, BarangHabisPakai$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarangHabisPakai model
   */ 
  interface BarangHabisPakaiFieldRefs {
    readonly id: FieldRef<"BarangHabisPakai", 'Int'>
    readonly id_golongan: FieldRef<"BarangHabisPakai", 'Int'>
    readonly kode_barang: FieldRef<"BarangHabisPakai", 'String'>
    readonly nama_barang: FieldRef<"BarangHabisPakai", 'String'>
    readonly satuan: FieldRef<"BarangHabisPakai", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarangHabisPakai findUnique
   */
  export type BarangHabisPakaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }

  /**
   * BarangHabisPakai findUniqueOrThrow
   */
  export type BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }

  /**
   * BarangHabisPakai findFirst
   */
  export type BarangHabisPakaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangHabisPakais.
     */
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * BarangHabisPakai findFirstOrThrow
   */
  export type BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangHabisPakais.
     */
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * BarangHabisPakai findMany
   */
  export type BarangHabisPakaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakais to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * BarangHabisPakai create
   */
  export type BarangHabisPakaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to create a BarangHabisPakai.
     */
    data: XOR<BarangHabisPakaiCreateInput, BarangHabisPakaiUncheckedCreateInput>
  }

  /**
   * BarangHabisPakai createMany
   */
  export type BarangHabisPakaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarangHabisPakais.
     */
    data: BarangHabisPakaiCreateManyInput | BarangHabisPakaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarangHabisPakai createManyAndReturn
   */
  export type BarangHabisPakaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * The data used to create many BarangHabisPakais.
     */
    data: BarangHabisPakaiCreateManyInput | BarangHabisPakaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarangHabisPakai update
   */
  export type BarangHabisPakaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to update a BarangHabisPakai.
     */
    data: XOR<BarangHabisPakaiUpdateInput, BarangHabisPakaiUncheckedUpdateInput>
    /**
     * Choose, which BarangHabisPakai to update.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }

  /**
   * BarangHabisPakai updateMany
   */
  export type BarangHabisPakaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarangHabisPakais.
     */
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyInput>
    /**
     * Filter which BarangHabisPakais to update
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * Limit how many BarangHabisPakais to update.
     */
    limit?: number
  }

  /**
   * BarangHabisPakai updateManyAndReturn
   */
  export type BarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * The data used to update BarangHabisPakais.
     */
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyInput>
    /**
     * Filter which BarangHabisPakais to update
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * Limit how many BarangHabisPakais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarangHabisPakai upsert
   */
  export type BarangHabisPakaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The filter to search for the BarangHabisPakai to update in case it exists.
     */
    where: BarangHabisPakaiWhereUniqueInput
    /**
     * In case the BarangHabisPakai found by the `where` argument doesn't exist, create a new BarangHabisPakai with this data.
     */
    create: XOR<BarangHabisPakaiCreateInput, BarangHabisPakaiUncheckedCreateInput>
    /**
     * In case the BarangHabisPakai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangHabisPakaiUpdateInput, BarangHabisPakaiUncheckedUpdateInput>
  }

  /**
   * BarangHabisPakai delete
   */
  export type BarangHabisPakaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter which BarangHabisPakai to delete.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }

  /**
   * BarangHabisPakai deleteMany
   */
  export type BarangHabisPakaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangHabisPakais to delete
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * Limit how many BarangHabisPakais to delete.
     */
    limit?: number
  }

  /**
   * BarangHabisPakai.transaksi
   */
  export type BarangHabisPakai$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    where?: TransaksiBarangHabisPakaiWhereInput
    orderBy?: TransaksiBarangHabisPakaiOrderByWithRelationInput | TransaksiBarangHabisPakaiOrderByWithRelationInput[]
    cursor?: TransaksiBarangHabisPakaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiBarangHabisPakaiScalarFieldEnum | TransaksiBarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * BarangHabisPakai without action
   */
  export type BarangHabisPakaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangHabisPakai
     */
    omit?: BarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
  }


  /**
   * Model TransaksiBarangHabisPakai
   */

  export type AggregateTransaksiBarangHabisPakai = {
    _count: TransaksiBarangHabisPakaiCountAggregateOutputType | null
    _avg: TransaksiBarangHabisPakaiAvgAggregateOutputType | null
    _sum: TransaksiBarangHabisPakaiSumAggregateOutputType | null
    _min: TransaksiBarangHabisPakaiMinAggregateOutputType | null
    _max: TransaksiBarangHabisPakaiMaxAggregateOutputType | null
  }

  export type TransaksiBarangHabisPakaiAvgAggregateOutputType = {
    id: number | null
    id_barang_habis_pakai: number | null
    jumlah_terima: number | null
    jumlah_keluar: number | null
    sisa: number | null
  }

  export type TransaksiBarangHabisPakaiSumAggregateOutputType = {
    id: number | null
    id_barang_habis_pakai: number | null
    jumlah_terima: number | null
    jumlah_keluar: number | null
    sisa: number | null
  }

  export type TransaksiBarangHabisPakaiMinAggregateOutputType = {
    id: number | null
    id_barang_habis_pakai: number | null
    tanggal: Date | null
    uraian: string | null
    tanda_bukti: string | null
    jumlah_terima: number | null
    jumlah_keluar: number | null
    sisa: number | null
  }

  export type TransaksiBarangHabisPakaiMaxAggregateOutputType = {
    id: number | null
    id_barang_habis_pakai: number | null
    tanggal: Date | null
    uraian: string | null
    tanda_bukti: string | null
    jumlah_terima: number | null
    jumlah_keluar: number | null
    sisa: number | null
  }

  export type TransaksiBarangHabisPakaiCountAggregateOutputType = {
    id: number
    id_barang_habis_pakai: number
    tanggal: number
    uraian: number
    tanda_bukti: number
    jumlah_terima: number
    jumlah_keluar: number
    sisa: number
    _all: number
  }


  export type TransaksiBarangHabisPakaiAvgAggregateInputType = {
    id?: true
    id_barang_habis_pakai?: true
    jumlah_terima?: true
    jumlah_keluar?: true
    sisa?: true
  }

  export type TransaksiBarangHabisPakaiSumAggregateInputType = {
    id?: true
    id_barang_habis_pakai?: true
    jumlah_terima?: true
    jumlah_keluar?: true
    sisa?: true
  }

  export type TransaksiBarangHabisPakaiMinAggregateInputType = {
    id?: true
    id_barang_habis_pakai?: true
    tanggal?: true
    uraian?: true
    tanda_bukti?: true
    jumlah_terima?: true
    jumlah_keluar?: true
    sisa?: true
  }

  export type TransaksiBarangHabisPakaiMaxAggregateInputType = {
    id?: true
    id_barang_habis_pakai?: true
    tanggal?: true
    uraian?: true
    tanda_bukti?: true
    jumlah_terima?: true
    jumlah_keluar?: true
    sisa?: true
  }

  export type TransaksiBarangHabisPakaiCountAggregateInputType = {
    id?: true
    id_barang_habis_pakai?: true
    tanggal?: true
    uraian?: true
    tanda_bukti?: true
    jumlah_terima?: true
    jumlah_keluar?: true
    sisa?: true
    _all?: true
  }

  export type TransaksiBarangHabisPakaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiBarangHabisPakai to aggregate.
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangHabisPakais to fetch.
     */
    orderBy?: TransaksiBarangHabisPakaiOrderByWithRelationInput | TransaksiBarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiBarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransaksiBarangHabisPakais
    **/
    _count?: true | TransaksiBarangHabisPakaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiBarangHabisPakaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiBarangHabisPakaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiBarangHabisPakaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiBarangHabisPakaiMaxAggregateInputType
  }

  export type GetTransaksiBarangHabisPakaiAggregateType<T extends TransaksiBarangHabisPakaiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksiBarangHabisPakai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksiBarangHabisPakai[P]>
      : GetScalarType<T[P], AggregateTransaksiBarangHabisPakai[P]>
  }




  export type TransaksiBarangHabisPakaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiBarangHabisPakaiWhereInput
    orderBy?: TransaksiBarangHabisPakaiOrderByWithAggregationInput | TransaksiBarangHabisPakaiOrderByWithAggregationInput[]
    by: TransaksiBarangHabisPakaiScalarFieldEnum[] | TransaksiBarangHabisPakaiScalarFieldEnum
    having?: TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiBarangHabisPakaiCountAggregateInputType | true
    _avg?: TransaksiBarangHabisPakaiAvgAggregateInputType
    _sum?: TransaksiBarangHabisPakaiSumAggregateInputType
    _min?: TransaksiBarangHabisPakaiMinAggregateInputType
    _max?: TransaksiBarangHabisPakaiMaxAggregateInputType
  }

  export type TransaksiBarangHabisPakaiGroupByOutputType = {
    id: number
    id_barang_habis_pakai: number
    tanggal: Date
    uraian: string
    tanda_bukti: string
    jumlah_terima: number
    jumlah_keluar: number
    sisa: number
    _count: TransaksiBarangHabisPakaiCountAggregateOutputType | null
    _avg: TransaksiBarangHabisPakaiAvgAggregateOutputType | null
    _sum: TransaksiBarangHabisPakaiSumAggregateOutputType | null
    _min: TransaksiBarangHabisPakaiMinAggregateOutputType | null
    _max: TransaksiBarangHabisPakaiMaxAggregateOutputType | null
  }

  type GetTransaksiBarangHabisPakaiGroupByPayload<T extends TransaksiBarangHabisPakaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiBarangHabisPakaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiBarangHabisPakaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiBarangHabisPakaiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiBarangHabisPakaiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiBarangHabisPakaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_barang_habis_pakai?: boolean
    tanggal?: boolean
    uraian?: boolean
    tanda_bukti?: boolean
    jumlah_terima?: boolean
    jumlah_keluar?: boolean
    sisa?: boolean
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiBarangHabisPakai"]>

  export type TransaksiBarangHabisPakaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_barang_habis_pakai?: boolean
    tanggal?: boolean
    uraian?: boolean
    tanda_bukti?: boolean
    jumlah_terima?: boolean
    jumlah_keluar?: boolean
    sisa?: boolean
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiBarangHabisPakai"]>

  export type TransaksiBarangHabisPakaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_barang_habis_pakai?: boolean
    tanggal?: boolean
    uraian?: boolean
    tanda_bukti?: boolean
    jumlah_terima?: boolean
    jumlah_keluar?: boolean
    sisa?: boolean
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiBarangHabisPakai"]>

  export type TransaksiBarangHabisPakaiSelectScalar = {
    id?: boolean
    id_barang_habis_pakai?: boolean
    tanggal?: boolean
    uraian?: boolean
    tanda_bukti?: boolean
    jumlah_terima?: boolean
    jumlah_keluar?: boolean
    sisa?: boolean
  }

  export type TransaksiBarangHabisPakaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_barang_habis_pakai" | "tanggal" | "uraian" | "tanda_bukti" | "jumlah_terima" | "jumlah_keluar" | "sisa", ExtArgs["result"]["transaksiBarangHabisPakai"]>
  export type TransaksiBarangHabisPakaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }
  export type TransaksiBarangHabisPakaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }
  export type TransaksiBarangHabisPakaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangHabisPakaiDefaultArgs<ExtArgs>
  }

  export type $TransaksiBarangHabisPakaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransaksiBarangHabisPakai"
    objects: {
      barang: Prisma.$BarangHabisPakaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_barang_habis_pakai: number
      tanggal: Date
      uraian: string
      tanda_bukti: string
      jumlah_terima: number
      jumlah_keluar: number
      sisa: number
    }, ExtArgs["result"]["transaksiBarangHabisPakai"]>
    composites: {}
  }

  type TransaksiBarangHabisPakaiGetPayload<S extends boolean | null | undefined | TransaksiBarangHabisPakaiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload, S>

  type TransaksiBarangHabisPakaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiBarangHabisPakaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiBarangHabisPakaiCountAggregateInputType | true
    }

  export interface TransaksiBarangHabisPakaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransaksiBarangHabisPakai'], meta: { name: 'TransaksiBarangHabisPakai' } }
    /**
     * Find zero or one TransaksiBarangHabisPakai that matches the filter.
     * @param {TransaksiBarangHabisPakaiFindUniqueArgs} args - Arguments to find a TransaksiBarangHabisPakai
     * @example
     * // Get one TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiBarangHabisPakaiFindUniqueArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransaksiBarangHabisPakai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiBarangHabisPakaiFindUniqueOrThrowArgs} args - Arguments to find a TransaksiBarangHabisPakai
     * @example
     * // Get one TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiBarangHabisPakaiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiBarangHabisPakai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiFindFirstArgs} args - Arguments to find a TransaksiBarangHabisPakai
     * @example
     * // Get one TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiBarangHabisPakaiFindFirstArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiFindFirstArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiBarangHabisPakai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiFindFirstOrThrowArgs} args - Arguments to find a TransaksiBarangHabisPakai
     * @example
     * // Get one TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiBarangHabisPakaiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransaksiBarangHabisPakais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakais = await prisma.transaksiBarangHabisPakai.findMany()
     * 
     * // Get first 10 TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakais = await prisma.transaksiBarangHabisPakai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiBarangHabisPakaiWithIdOnly = await prisma.transaksiBarangHabisPakai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiBarangHabisPakaiFindManyArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransaksiBarangHabisPakai.
     * @param {TransaksiBarangHabisPakaiCreateArgs} args - Arguments to create a TransaksiBarangHabisPakai.
     * @example
     * // Create one TransaksiBarangHabisPakai
     * const TransaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.create({
     *   data: {
     *     // ... data to create a TransaksiBarangHabisPakai
     *   }
     * })
     * 
     */
    create<T extends TransaksiBarangHabisPakaiCreateArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiCreateArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransaksiBarangHabisPakais.
     * @param {TransaksiBarangHabisPakaiCreateManyArgs} args - Arguments to create many TransaksiBarangHabisPakais.
     * @example
     * // Create many TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiBarangHabisPakaiCreateManyArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaksiBarangHabisPakais and returns the data saved in the database.
     * @param {TransaksiBarangHabisPakaiCreateManyAndReturnArgs} args - Arguments to create many TransaksiBarangHabisPakais.
     * @example
     * // Create many TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaksiBarangHabisPakais and only return the `id`
     * const transaksiBarangHabisPakaiWithIdOnly = await prisma.transaksiBarangHabisPakai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiBarangHabisPakaiCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransaksiBarangHabisPakai.
     * @param {TransaksiBarangHabisPakaiDeleteArgs} args - Arguments to delete one TransaksiBarangHabisPakai.
     * @example
     * // Delete one TransaksiBarangHabisPakai
     * const TransaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.delete({
     *   where: {
     *     // ... filter to delete one TransaksiBarangHabisPakai
     *   }
     * })
     * 
     */
    delete<T extends TransaksiBarangHabisPakaiDeleteArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiDeleteArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransaksiBarangHabisPakai.
     * @param {TransaksiBarangHabisPakaiUpdateArgs} args - Arguments to update one TransaksiBarangHabisPakai.
     * @example
     * // Update one TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiBarangHabisPakaiUpdateArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiUpdateArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransaksiBarangHabisPakais.
     * @param {TransaksiBarangHabisPakaiDeleteManyArgs} args - Arguments to filter TransaksiBarangHabisPakais to delete.
     * @example
     * // Delete a few TransaksiBarangHabisPakais
     * const { count } = await prisma.transaksiBarangHabisPakai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiBarangHabisPakaiDeleteManyArgs>(args?: SelectSubset<T, TransaksiBarangHabisPakaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiBarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiBarangHabisPakaiUpdateManyArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiBarangHabisPakais and returns the data updated in the database.
     * @param {TransaksiBarangHabisPakaiUpdateManyAndReturnArgs} args - Arguments to update many TransaksiBarangHabisPakais.
     * @example
     * // Update many TransaksiBarangHabisPakais
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaksiBarangHabisPakais and only return the `id`
     * const transaksiBarangHabisPakaiWithIdOnly = await prisma.transaksiBarangHabisPakai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransaksiBarangHabisPakaiUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransaksiBarangHabisPakai.
     * @param {TransaksiBarangHabisPakaiUpsertArgs} args - Arguments to update or create a TransaksiBarangHabisPakai.
     * @example
     * // Update or create a TransaksiBarangHabisPakai
     * const transaksiBarangHabisPakai = await prisma.transaksiBarangHabisPakai.upsert({
     *   create: {
     *     // ... data to create a TransaksiBarangHabisPakai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaksiBarangHabisPakai we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiBarangHabisPakaiUpsertArgs>(args: SelectSubset<T, TransaksiBarangHabisPakaiUpsertArgs<ExtArgs>>): Prisma__TransaksiBarangHabisPakaiClient<$Result.GetResult<Prisma.$TransaksiBarangHabisPakaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransaksiBarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiCountArgs} args - Arguments to filter TransaksiBarangHabisPakais to count.
     * @example
     * // Count the number of TransaksiBarangHabisPakais
     * const count = await prisma.transaksiBarangHabisPakai.count({
     *   where: {
     *     // ... the filter for the TransaksiBarangHabisPakais we want to count
     *   }
     * })
    **/
    count<T extends TransaksiBarangHabisPakaiCountArgs>(
      args?: Subset<T, TransaksiBarangHabisPakaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiBarangHabisPakaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaksiBarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiBarangHabisPakaiAggregateArgs>(args: Subset<T, TransaksiBarangHabisPakaiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiBarangHabisPakaiAggregateType<T>>

    /**
     * Group by TransaksiBarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangHabisPakaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransaksiBarangHabisPakaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiBarangHabisPakaiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiBarangHabisPakaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransaksiBarangHabisPakaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiBarangHabisPakaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransaksiBarangHabisPakai model
   */
  readonly fields: TransaksiBarangHabisPakaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransaksiBarangHabisPakai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiBarangHabisPakaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends BarangHabisPakaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangHabisPakaiDefaultArgs<ExtArgs>>): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransaksiBarangHabisPakai model
   */ 
  interface TransaksiBarangHabisPakaiFieldRefs {
    readonly id: FieldRef<"TransaksiBarangHabisPakai", 'Int'>
    readonly id_barang_habis_pakai: FieldRef<"TransaksiBarangHabisPakai", 'Int'>
    readonly tanggal: FieldRef<"TransaksiBarangHabisPakai", 'DateTime'>
    readonly uraian: FieldRef<"TransaksiBarangHabisPakai", 'String'>
    readonly tanda_bukti: FieldRef<"TransaksiBarangHabisPakai", 'String'>
    readonly jumlah_terima: FieldRef<"TransaksiBarangHabisPakai", 'Int'>
    readonly jumlah_keluar: FieldRef<"TransaksiBarangHabisPakai", 'Int'>
    readonly sisa: FieldRef<"TransaksiBarangHabisPakai", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TransaksiBarangHabisPakai findUnique
   */
  export type TransaksiBarangHabisPakaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangHabisPakai to fetch.
     */
    where: TransaksiBarangHabisPakaiWhereUniqueInput
  }

  /**
   * TransaksiBarangHabisPakai findUniqueOrThrow
   */
  export type TransaksiBarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangHabisPakai to fetch.
     */
    where: TransaksiBarangHabisPakaiWhereUniqueInput
  }

  /**
   * TransaksiBarangHabisPakai findFirst
   */
  export type TransaksiBarangHabisPakaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangHabisPakai to fetch.
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangHabisPakais to fetch.
     */
    orderBy?: TransaksiBarangHabisPakaiOrderByWithRelationInput | TransaksiBarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiBarangHabisPakais.
     */
    cursor?: TransaksiBarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiBarangHabisPakais.
     */
    distinct?: TransaksiBarangHabisPakaiScalarFieldEnum | TransaksiBarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * TransaksiBarangHabisPakai findFirstOrThrow
   */
  export type TransaksiBarangHabisPakaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangHabisPakai to fetch.
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangHabisPakais to fetch.
     */
    orderBy?: TransaksiBarangHabisPakaiOrderByWithRelationInput | TransaksiBarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiBarangHabisPakais.
     */
    cursor?: TransaksiBarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiBarangHabisPakais.
     */
    distinct?: TransaksiBarangHabisPakaiScalarFieldEnum | TransaksiBarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * TransaksiBarangHabisPakai findMany
   */
  export type TransaksiBarangHabisPakaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangHabisPakais to fetch.
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangHabisPakais to fetch.
     */
    orderBy?: TransaksiBarangHabisPakaiOrderByWithRelationInput | TransaksiBarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransaksiBarangHabisPakais.
     */
    cursor?: TransaksiBarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangHabisPakais.
     */
    skip?: number
    distinct?: TransaksiBarangHabisPakaiScalarFieldEnum | TransaksiBarangHabisPakaiScalarFieldEnum[]
  }

  /**
   * TransaksiBarangHabisPakai create
   */
  export type TransaksiBarangHabisPakaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to create a TransaksiBarangHabisPakai.
     */
    data: XOR<TransaksiBarangHabisPakaiCreateInput, TransaksiBarangHabisPakaiUncheckedCreateInput>
  }

  /**
   * TransaksiBarangHabisPakai createMany
   */
  export type TransaksiBarangHabisPakaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransaksiBarangHabisPakais.
     */
    data: TransaksiBarangHabisPakaiCreateManyInput | TransaksiBarangHabisPakaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransaksiBarangHabisPakai createManyAndReturn
   */
  export type TransaksiBarangHabisPakaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * The data used to create many TransaksiBarangHabisPakais.
     */
    data: TransaksiBarangHabisPakaiCreateManyInput | TransaksiBarangHabisPakaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiBarangHabisPakai update
   */
  export type TransaksiBarangHabisPakaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to update a TransaksiBarangHabisPakai.
     */
    data: XOR<TransaksiBarangHabisPakaiUpdateInput, TransaksiBarangHabisPakaiUncheckedUpdateInput>
    /**
     * Choose, which TransaksiBarangHabisPakai to update.
     */
    where: TransaksiBarangHabisPakaiWhereUniqueInput
  }

  /**
   * TransaksiBarangHabisPakai updateMany
   */
  export type TransaksiBarangHabisPakaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransaksiBarangHabisPakais.
     */
    data: XOR<TransaksiBarangHabisPakaiUpdateManyMutationInput, TransaksiBarangHabisPakaiUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiBarangHabisPakais to update
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * Limit how many TransaksiBarangHabisPakais to update.
     */
    limit?: number
  }

  /**
   * TransaksiBarangHabisPakai updateManyAndReturn
   */
  export type TransaksiBarangHabisPakaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * The data used to update TransaksiBarangHabisPakais.
     */
    data: XOR<TransaksiBarangHabisPakaiUpdateManyMutationInput, TransaksiBarangHabisPakaiUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiBarangHabisPakais to update
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * Limit how many TransaksiBarangHabisPakais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiBarangHabisPakai upsert
   */
  export type TransaksiBarangHabisPakaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The filter to search for the TransaksiBarangHabisPakai to update in case it exists.
     */
    where: TransaksiBarangHabisPakaiWhereUniqueInput
    /**
     * In case the TransaksiBarangHabisPakai found by the `where` argument doesn't exist, create a new TransaksiBarangHabisPakai with this data.
     */
    create: XOR<TransaksiBarangHabisPakaiCreateInput, TransaksiBarangHabisPakaiUncheckedCreateInput>
    /**
     * In case the TransaksiBarangHabisPakai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiBarangHabisPakaiUpdateInput, TransaksiBarangHabisPakaiUncheckedUpdateInput>
  }

  /**
   * TransaksiBarangHabisPakai delete
   */
  export type TransaksiBarangHabisPakaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter which TransaksiBarangHabisPakai to delete.
     */
    where: TransaksiBarangHabisPakaiWhereUniqueInput
  }

  /**
   * TransaksiBarangHabisPakai deleteMany
   */
  export type TransaksiBarangHabisPakaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiBarangHabisPakais to delete
     */
    where?: TransaksiBarangHabisPakaiWhereInput
    /**
     * Limit how many TransaksiBarangHabisPakais to delete.
     */
    limit?: number
  }

  /**
   * TransaksiBarangHabisPakai without action
   */
  export type TransaksiBarangHabisPakaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarangHabisPakai
     */
    select?: TransaksiBarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiBarangHabisPakai
     */
    omit?: TransaksiBarangHabisPakaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiBarangHabisPakaiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const GolonganScalarFieldEnum: {
    id: 'id',
    id_kategori: 'id_kategori',
    kode_golongan: 'kode_golongan',
    nama: 'nama'
  };

  export type GolonganScalarFieldEnum = (typeof GolonganScalarFieldEnum)[keyof typeof GolonganScalarFieldEnum]


  export const GedungScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type GedungScalarFieldEnum = (typeof GedungScalarFieldEnum)[keyof typeof GedungScalarFieldEnum]


  export const RuanganScalarFieldEnum: {
    id: 'id',
    id_gedung: 'id_gedung',
    nama: 'nama'
  };

  export type RuanganScalarFieldEnum = (typeof RuanganScalarFieldEnum)[keyof typeof RuanganScalarFieldEnum]


  export const InventarisScalarFieldEnum: {
    id: 'id',
    id_ruangan: 'id_ruangan',
    id_golongan: 'id_golongan',
    nama_inventaris: 'nama_inventaris',
    tahun_perolehan: 'tahun_perolehan',
    harga_perolehan: 'harga_perolehan',
    bahan_merk: 'bahan_merk',
    masa_manfaat: 'masa_manfaat',
    umur_aset: 'umur_aset',
    nilai_residu: 'nilai_residu',
    persentase_garis_lurus: 'persentase_garis_lurus',
    nilai_yang_dapat_disusutkan: 'nilai_yang_dapat_disusutkan',
    beban_penyusutan_per_tahun: 'beban_penyusutan_per_tahun',
    nilai_buku_akhir: 'nilai_buku_akhir',
    jumlah: 'jumlah',
    kondisi: 'kondisi',
    barcode: 'barcode'
  };

  export type InventarisScalarFieldEnum = (typeof InventarisScalarFieldEnum)[keyof typeof InventarisScalarFieldEnum]


  export const BarangHabisPakaiScalarFieldEnum: {
    id: 'id',
    id_golongan: 'id_golongan',
    kode_barang: 'kode_barang',
    nama_barang: 'nama_barang',
    satuan: 'satuan'
  };

  export type BarangHabisPakaiScalarFieldEnum = (typeof BarangHabisPakaiScalarFieldEnum)[keyof typeof BarangHabisPakaiScalarFieldEnum]


  export const TransaksiBarangHabisPakaiScalarFieldEnum: {
    id: 'id',
    id_barang_habis_pakai: 'id_barang_habis_pakai',
    tanggal: 'tanggal',
    uraian: 'uraian',
    tanda_bukti: 'tanda_bukti',
    jumlah_terima: 'jumlah_terima',
    jumlah_keluar: 'jumlah_keluar',
    sisa: 'sisa'
  };

  export type TransaksiBarangHabisPakaiScalarFieldEnum = (typeof TransaksiBarangHabisPakaiScalarFieldEnum)[keyof typeof TransaksiBarangHabisPakaiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Kondisi'
   */
  export type EnumKondisiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kondisi'>
    


  /**
   * Reference to a field of type 'Kondisi[]'
   */
  export type ListEnumKondisiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kondisi[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: IntFilter<"Kategori"> | number
    nama?: StringFilter<"Kategori"> | string
    golongans?: GolonganListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    golongans?: GolonganOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    golongans?: GolonganListRelationFilter
  }, "id" | "nama">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategori"> | number
    nama?: StringWithAggregatesFilter<"Kategori"> | string
  }

  export type GolonganWhereInput = {
    AND?: GolonganWhereInput | GolonganWhereInput[]
    OR?: GolonganWhereInput[]
    NOT?: GolonganWhereInput | GolonganWhereInput[]
    id?: IntFilter<"Golongan"> | number
    id_kategori?: IntFilter<"Golongan"> | number
    kode_golongan?: StringFilter<"Golongan"> | string
    nama?: StringFilter<"Golongan"> | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    inventaris?: InventarisListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
  }

  export type GolonganOrderByWithRelationInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    kode_golongan?: SortOrder
    nama?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
    inventaris?: InventarisOrderByRelationAggregateInput
    barangHabisPakai?: BarangHabisPakaiOrderByRelationAggregateInput
  }

  export type GolonganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kode_golongan?: string
    nama?: string
    AND?: GolonganWhereInput | GolonganWhereInput[]
    OR?: GolonganWhereInput[]
    NOT?: GolonganWhereInput | GolonganWhereInput[]
    id_kategori?: IntFilter<"Golongan"> | number
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    inventaris?: InventarisListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
  }, "id" | "kode_golongan" | "nama">

  export type GolonganOrderByWithAggregationInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    kode_golongan?: SortOrder
    nama?: SortOrder
    _count?: GolonganCountOrderByAggregateInput
    _avg?: GolonganAvgOrderByAggregateInput
    _max?: GolonganMaxOrderByAggregateInput
    _min?: GolonganMinOrderByAggregateInput
    _sum?: GolonganSumOrderByAggregateInput
  }

  export type GolonganScalarWhereWithAggregatesInput = {
    AND?: GolonganScalarWhereWithAggregatesInput | GolonganScalarWhereWithAggregatesInput[]
    OR?: GolonganScalarWhereWithAggregatesInput[]
    NOT?: GolonganScalarWhereWithAggregatesInput | GolonganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Golongan"> | number
    id_kategori?: IntWithAggregatesFilter<"Golongan"> | number
    kode_golongan?: StringWithAggregatesFilter<"Golongan"> | string
    nama?: StringWithAggregatesFilter<"Golongan"> | string
  }

  export type GedungWhereInput = {
    AND?: GedungWhereInput | GedungWhereInput[]
    OR?: GedungWhereInput[]
    NOT?: GedungWhereInput | GedungWhereInput[]
    id?: IntFilter<"Gedung"> | number
    nama?: StringFilter<"Gedung"> | string
    Ruangans?: RuanganListRelationFilter
  }

  export type GedungOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    Ruangans?: RuanganOrderByRelationAggregateInput
  }

  export type GedungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: GedungWhereInput | GedungWhereInput[]
    OR?: GedungWhereInput[]
    NOT?: GedungWhereInput | GedungWhereInput[]
    Ruangans?: RuanganListRelationFilter
  }, "id" | "nama">

  export type GedungOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: GedungCountOrderByAggregateInput
    _avg?: GedungAvgOrderByAggregateInput
    _max?: GedungMaxOrderByAggregateInput
    _min?: GedungMinOrderByAggregateInput
    _sum?: GedungSumOrderByAggregateInput
  }

  export type GedungScalarWhereWithAggregatesInput = {
    AND?: GedungScalarWhereWithAggregatesInput | GedungScalarWhereWithAggregatesInput[]
    OR?: GedungScalarWhereWithAggregatesInput[]
    NOT?: GedungScalarWhereWithAggregatesInput | GedungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gedung"> | number
    nama?: StringWithAggregatesFilter<"Gedung"> | string
  }

  export type RuanganWhereInput = {
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    id?: IntFilter<"Ruangan"> | number
    id_gedung?: IntFilter<"Ruangan"> | number
    nama?: StringFilter<"Ruangan"> | string
    gedung?: XOR<GedungScalarRelationFilter, GedungWhereInput>
    inventaris?: InventarisListRelationFilter
  }

  export type RuanganOrderByWithRelationInput = {
    id?: SortOrder
    id_gedung?: SortOrder
    nama?: SortOrder
    gedung?: GedungOrderByWithRelationInput
    inventaris?: InventarisOrderByRelationAggregateInput
  }

  export type RuanganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    id_gedung?: IntFilter<"Ruangan"> | number
    gedung?: XOR<GedungScalarRelationFilter, GedungWhereInput>
    inventaris?: InventarisListRelationFilter
  }, "id" | "nama">

  export type RuanganOrderByWithAggregationInput = {
    id?: SortOrder
    id_gedung?: SortOrder
    nama?: SortOrder
    _count?: RuanganCountOrderByAggregateInput
    _avg?: RuanganAvgOrderByAggregateInput
    _max?: RuanganMaxOrderByAggregateInput
    _min?: RuanganMinOrderByAggregateInput
    _sum?: RuanganSumOrderByAggregateInput
  }

  export type RuanganScalarWhereWithAggregatesInput = {
    AND?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    OR?: RuanganScalarWhereWithAggregatesInput[]
    NOT?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ruangan"> | number
    id_gedung?: IntWithAggregatesFilter<"Ruangan"> | number
    nama?: StringWithAggregatesFilter<"Ruangan"> | string
  }

  export type InventarisWhereInput = {
    AND?: InventarisWhereInput | InventarisWhereInput[]
    OR?: InventarisWhereInput[]
    NOT?: InventarisWhereInput | InventarisWhereInput[]
    id?: IntFilter<"Inventaris"> | number
    id_ruangan?: IntFilter<"Inventaris"> | number
    id_golongan?: IntFilter<"Inventaris"> | number
    nama_inventaris?: StringFilter<"Inventaris"> | string
    tahun_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    harga_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    bahan_merk?: StringNullableFilter<"Inventaris"> | string | null
    masa_manfaat?: IntNullableFilter<"Inventaris"> | number | null
    umur_aset?: IntNullableFilter<"Inventaris"> | number | null
    nilai_residu?: IntNullableFilter<"Inventaris"> | number | null
    persentase_garis_lurus?: DecimalNullableFilter<"Inventaris"> | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: IntNullableFilter<"Inventaris"> | number | null
    beban_penyusutan_per_tahun?: IntNullableFilter<"Inventaris"> | number | null
    nilai_buku_akhir?: IntNullableFilter<"Inventaris"> | number | null
    jumlah?: IntNullableFilter<"Inventaris"> | number | null
    kondisi?: EnumKondisiFilter<"Inventaris"> | $Enums.Kondisi
    barcode?: StringNullableFilter<"Inventaris"> | string | null
    ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
    golongan?: XOR<GolonganScalarRelationFilter, GolonganWhereInput>
  }

  export type InventarisOrderByWithRelationInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    nama_inventaris?: SortOrder
    tahun_perolehan?: SortOrderInput | SortOrder
    harga_perolehan?: SortOrderInput | SortOrder
    bahan_merk?: SortOrderInput | SortOrder
    masa_manfaat?: SortOrderInput | SortOrder
    umur_aset?: SortOrderInput | SortOrder
    nilai_residu?: SortOrderInput | SortOrder
    persentase_garis_lurus?: SortOrderInput | SortOrder
    nilai_yang_dapat_disusutkan?: SortOrderInput | SortOrder
    beban_penyusutan_per_tahun?: SortOrderInput | SortOrder
    nilai_buku_akhir?: SortOrderInput | SortOrder
    jumlah?: SortOrderInput | SortOrder
    kondisi?: SortOrder
    barcode?: SortOrderInput | SortOrder
    ruangan?: RuanganOrderByWithRelationInput
    golongan?: GolonganOrderByWithRelationInput
  }

  export type InventarisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventarisWhereInput | InventarisWhereInput[]
    OR?: InventarisWhereInput[]
    NOT?: InventarisWhereInput | InventarisWhereInput[]
    id_ruangan?: IntFilter<"Inventaris"> | number
    id_golongan?: IntFilter<"Inventaris"> | number
    nama_inventaris?: StringFilter<"Inventaris"> | string
    tahun_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    harga_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    bahan_merk?: StringNullableFilter<"Inventaris"> | string | null
    masa_manfaat?: IntNullableFilter<"Inventaris"> | number | null
    umur_aset?: IntNullableFilter<"Inventaris"> | number | null
    nilai_residu?: IntNullableFilter<"Inventaris"> | number | null
    persentase_garis_lurus?: DecimalNullableFilter<"Inventaris"> | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: IntNullableFilter<"Inventaris"> | number | null
    beban_penyusutan_per_tahun?: IntNullableFilter<"Inventaris"> | number | null
    nilai_buku_akhir?: IntNullableFilter<"Inventaris"> | number | null
    jumlah?: IntNullableFilter<"Inventaris"> | number | null
    kondisi?: EnumKondisiFilter<"Inventaris"> | $Enums.Kondisi
    barcode?: StringNullableFilter<"Inventaris"> | string | null
    ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
    golongan?: XOR<GolonganScalarRelationFilter, GolonganWhereInput>
  }, "id">

  export type InventarisOrderByWithAggregationInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    nama_inventaris?: SortOrder
    tahun_perolehan?: SortOrderInput | SortOrder
    harga_perolehan?: SortOrderInput | SortOrder
    bahan_merk?: SortOrderInput | SortOrder
    masa_manfaat?: SortOrderInput | SortOrder
    umur_aset?: SortOrderInput | SortOrder
    nilai_residu?: SortOrderInput | SortOrder
    persentase_garis_lurus?: SortOrderInput | SortOrder
    nilai_yang_dapat_disusutkan?: SortOrderInput | SortOrder
    beban_penyusutan_per_tahun?: SortOrderInput | SortOrder
    nilai_buku_akhir?: SortOrderInput | SortOrder
    jumlah?: SortOrderInput | SortOrder
    kondisi?: SortOrder
    barcode?: SortOrderInput | SortOrder
    _count?: InventarisCountOrderByAggregateInput
    _avg?: InventarisAvgOrderByAggregateInput
    _max?: InventarisMaxOrderByAggregateInput
    _min?: InventarisMinOrderByAggregateInput
    _sum?: InventarisSumOrderByAggregateInput
  }

  export type InventarisScalarWhereWithAggregatesInput = {
    AND?: InventarisScalarWhereWithAggregatesInput | InventarisScalarWhereWithAggregatesInput[]
    OR?: InventarisScalarWhereWithAggregatesInput[]
    NOT?: InventarisScalarWhereWithAggregatesInput | InventarisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventaris"> | number
    id_ruangan?: IntWithAggregatesFilter<"Inventaris"> | number
    id_golongan?: IntWithAggregatesFilter<"Inventaris"> | number
    nama_inventaris?: StringWithAggregatesFilter<"Inventaris"> | string
    tahun_perolehan?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    harga_perolehan?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    bahan_merk?: StringNullableWithAggregatesFilter<"Inventaris"> | string | null
    masa_manfaat?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    umur_aset?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    nilai_residu?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    persentase_garis_lurus?: DecimalNullableWithAggregatesFilter<"Inventaris"> | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    beban_penyusutan_per_tahun?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    nilai_buku_akhir?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    jumlah?: IntNullableWithAggregatesFilter<"Inventaris"> | number | null
    kondisi?: EnumKondisiWithAggregatesFilter<"Inventaris"> | $Enums.Kondisi
    barcode?: StringNullableWithAggregatesFilter<"Inventaris"> | string | null
  }

  export type BarangHabisPakaiWhereInput = {
    AND?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    OR?: BarangHabisPakaiWhereInput[]
    NOT?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    id?: IntFilter<"BarangHabisPakai"> | number
    id_golongan?: IntFilter<"BarangHabisPakai"> | number
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    satuan?: StringFilter<"BarangHabisPakai"> | string
    golongan?: XOR<GolonganScalarRelationFilter, GolonganWhereInput>
    transaksi?: TransaksiBarangHabisPakaiListRelationFilter
  }

  export type BarangHabisPakaiOrderByWithRelationInput = {
    id?: SortOrder
    id_golongan?: SortOrder
    kode_barang?: SortOrder
    nama_barang?: SortOrder
    satuan?: SortOrder
    golongan?: GolonganOrderByWithRelationInput
    transaksi?: TransaksiBarangHabisPakaiOrderByRelationAggregateInput
  }

  export type BarangHabisPakaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    OR?: BarangHabisPakaiWhereInput[]
    NOT?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    id_golongan?: IntFilter<"BarangHabisPakai"> | number
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    satuan?: StringFilter<"BarangHabisPakai"> | string
    golongan?: XOR<GolonganScalarRelationFilter, GolonganWhereInput>
    transaksi?: TransaksiBarangHabisPakaiListRelationFilter
  }, "id">

  export type BarangHabisPakaiOrderByWithAggregationInput = {
    id?: SortOrder
    id_golongan?: SortOrder
    kode_barang?: SortOrder
    nama_barang?: SortOrder
    satuan?: SortOrder
    _count?: BarangHabisPakaiCountOrderByAggregateInput
    _avg?: BarangHabisPakaiAvgOrderByAggregateInput
    _max?: BarangHabisPakaiMaxOrderByAggregateInput
    _min?: BarangHabisPakaiMinOrderByAggregateInput
    _sum?: BarangHabisPakaiSumOrderByAggregateInput
  }

  export type BarangHabisPakaiScalarWhereWithAggregatesInput = {
    AND?: BarangHabisPakaiScalarWhereWithAggregatesInput | BarangHabisPakaiScalarWhereWithAggregatesInput[]
    OR?: BarangHabisPakaiScalarWhereWithAggregatesInput[]
    NOT?: BarangHabisPakaiScalarWhereWithAggregatesInput | BarangHabisPakaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BarangHabisPakai"> | number
    id_golongan?: IntWithAggregatesFilter<"BarangHabisPakai"> | number
    kode_barang?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
    nama_barang?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
    satuan?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
  }

  export type TransaksiBarangHabisPakaiWhereInput = {
    AND?: TransaksiBarangHabisPakaiWhereInput | TransaksiBarangHabisPakaiWhereInput[]
    OR?: TransaksiBarangHabisPakaiWhereInput[]
    NOT?: TransaksiBarangHabisPakaiWhereInput | TransaksiBarangHabisPakaiWhereInput[]
    id?: IntFilter<"TransaksiBarangHabisPakai"> | number
    id_barang_habis_pakai?: IntFilter<"TransaksiBarangHabisPakai"> | number
    tanggal?: DateTimeFilter<"TransaksiBarangHabisPakai"> | Date | string
    uraian?: StringFilter<"TransaksiBarangHabisPakai"> | string
    tanda_bukti?: StringFilter<"TransaksiBarangHabisPakai"> | string
    jumlah_terima?: IntFilter<"TransaksiBarangHabisPakai"> | number
    jumlah_keluar?: IntFilter<"TransaksiBarangHabisPakai"> | number
    sisa?: IntFilter<"TransaksiBarangHabisPakai"> | number
    barang?: XOR<BarangHabisPakaiScalarRelationFilter, BarangHabisPakaiWhereInput>
  }

  export type TransaksiBarangHabisPakaiOrderByWithRelationInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    tanggal?: SortOrder
    uraian?: SortOrder
    tanda_bukti?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
    barang?: BarangHabisPakaiOrderByWithRelationInput
  }

  export type TransaksiBarangHabisPakaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransaksiBarangHabisPakaiWhereInput | TransaksiBarangHabisPakaiWhereInput[]
    OR?: TransaksiBarangHabisPakaiWhereInput[]
    NOT?: TransaksiBarangHabisPakaiWhereInput | TransaksiBarangHabisPakaiWhereInput[]
    id_barang_habis_pakai?: IntFilter<"TransaksiBarangHabisPakai"> | number
    tanggal?: DateTimeFilter<"TransaksiBarangHabisPakai"> | Date | string
    uraian?: StringFilter<"TransaksiBarangHabisPakai"> | string
    tanda_bukti?: StringFilter<"TransaksiBarangHabisPakai"> | string
    jumlah_terima?: IntFilter<"TransaksiBarangHabisPakai"> | number
    jumlah_keluar?: IntFilter<"TransaksiBarangHabisPakai"> | number
    sisa?: IntFilter<"TransaksiBarangHabisPakai"> | number
    barang?: XOR<BarangHabisPakaiScalarRelationFilter, BarangHabisPakaiWhereInput>
  }, "id">

  export type TransaksiBarangHabisPakaiOrderByWithAggregationInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    tanggal?: SortOrder
    uraian?: SortOrder
    tanda_bukti?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
    _count?: TransaksiBarangHabisPakaiCountOrderByAggregateInput
    _avg?: TransaksiBarangHabisPakaiAvgOrderByAggregateInput
    _max?: TransaksiBarangHabisPakaiMaxOrderByAggregateInput
    _min?: TransaksiBarangHabisPakaiMinOrderByAggregateInput
    _sum?: TransaksiBarangHabisPakaiSumOrderByAggregateInput
  }

  export type TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput = {
    AND?: TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput | TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput[]
    OR?: TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput | TransaksiBarangHabisPakaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransaksiBarangHabisPakai"> | number
    id_barang_habis_pakai?: IntWithAggregatesFilter<"TransaksiBarangHabisPakai"> | number
    tanggal?: DateTimeWithAggregatesFilter<"TransaksiBarangHabisPakai"> | Date | string
    uraian?: StringWithAggregatesFilter<"TransaksiBarangHabisPakai"> | string
    tanda_bukti?: StringWithAggregatesFilter<"TransaksiBarangHabisPakai"> | string
    jumlah_terima?: IntWithAggregatesFilter<"TransaksiBarangHabisPakai"> | number
    jumlah_keluar?: IntWithAggregatesFilter<"TransaksiBarangHabisPakai"> | number
    sisa?: IntWithAggregatesFilter<"TransaksiBarangHabisPakai"> | number
  }

  export type KategoriCreateInput = {
    nama: string
    golongans?: GolonganCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: number
    nama: string
    golongans?: GolonganUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    golongans?: GolonganUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    golongans?: GolonganUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: number
    nama: string
  }

  export type KategoriUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganCreateInput = {
    kode_golongan: string
    nama: string
    kategori: KategoriCreateNestedOneWithoutGolongansInput
    inventaris?: InventarisCreateNestedManyWithoutGolonganInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutGolonganInput
  }

  export type GolonganUncheckedCreateInput = {
    id?: number
    id_kategori: number
    kode_golongan: string
    nama: string
    inventaris?: InventarisUncheckedCreateNestedManyWithoutGolonganInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutGolonganInput
  }

  export type GolonganUpdateInput = {
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kategori?: KategoriUpdateOneRequiredWithoutGolongansNestedInput
    inventaris?: InventarisUpdateManyWithoutGolonganNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUncheckedUpdateManyWithoutGolonganNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganCreateManyInput = {
    id?: number
    id_kategori: number
    kode_golongan: string
    nama: string
  }

  export type GolonganUpdateManyMutationInput = {
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GedungCreateInput = {
    nama: string
    Ruangans?: RuanganCreateNestedManyWithoutGedungInput
  }

  export type GedungUncheckedCreateInput = {
    id?: number
    nama: string
    Ruangans?: RuanganUncheckedCreateNestedManyWithoutGedungInput
  }

  export type GedungUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    Ruangans?: RuanganUpdateManyWithoutGedungNestedInput
  }

  export type GedungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    Ruangans?: RuanganUncheckedUpdateManyWithoutGedungNestedInput
  }

  export type GedungCreateManyInput = {
    id?: number
    nama: string
  }

  export type GedungUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GedungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RuanganCreateInput = {
    nama: string
    gedung: GedungCreateNestedOneWithoutRuangansInput
    inventaris?: InventarisCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateInput = {
    id?: number
    id_gedung: number
    nama: string
    inventaris?: InventarisUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gedung?: GedungUpdateOneRequiredWithoutRuangansNestedInput
    inventaris?: InventarisUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_gedung?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganCreateManyInput = {
    id?: number
    id_gedung: number
    nama: string
  }

  export type RuanganUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RuanganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_gedung?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InventarisCreateInput = {
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
    ruangan: RuanganCreateNestedOneWithoutInventarisInput
    golongan: GolonganCreateNestedOneWithoutInventarisInput
  }

  export type InventarisUncheckedCreateInput = {
    id?: number
    id_ruangan: number
    id_golongan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type InventarisUpdateInput = {
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: RuanganUpdateOneRequiredWithoutInventarisNestedInput
    golongan?: GolonganUpdateOneRequiredWithoutInventarisNestedInput
  }

  export type InventarisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ruangan?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventarisCreateManyInput = {
    id?: number
    id_ruangan: number
    id_golongan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type InventarisUpdateManyMutationInput = {
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventarisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ruangan?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarangHabisPakaiCreateInput = {
    kode_barang: string
    nama_barang: string
    satuan: string
    golongan: GolonganCreateNestedOneWithoutBarangHabisPakaiInput
    transaksi?: TransaksiBarangHabisPakaiCreateNestedManyWithoutBarangInput
  }

  export type BarangHabisPakaiUncheckedCreateInput = {
    id?: number
    id_golongan: number
    kode_barang: string
    nama_barang: string
    satuan: string
    transaksi?: TransaksiBarangHabisPakaiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangHabisPakaiUpdateInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    golongan?: GolonganUpdateOneRequiredWithoutBarangHabisPakaiNestedInput
    transaksi?: TransaksiBarangHabisPakaiUpdateManyWithoutBarangNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiBarangHabisPakaiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangHabisPakaiCreateManyInput = {
    id?: number
    id_golongan: number
    kode_barang: string
    nama_barang: string
    satuan: string
  }

  export type BarangHabisPakaiUpdateManyMutationInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
  }

  export type BarangHabisPakaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiBarangHabisPakaiCreateInput = {
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
    barang: BarangHabisPakaiCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiBarangHabisPakaiUncheckedCreateInput = {
    id?: number
    id_barang_habis_pakai: number
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
  }

  export type TransaksiBarangHabisPakaiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
    barang?: BarangHabisPakaiUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiBarangHabisPakaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiBarangHabisPakaiCreateManyInput = {
    id?: number
    id_barang_habis_pakai: number
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
  }

  export type TransaksiBarangHabisPakaiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiBarangHabisPakaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GolonganListRelationFilter = {
    every?: GolonganWhereInput
    some?: GolonganWhereInput
    none?: GolonganWhereInput
  }

  export type GolonganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type InventarisListRelationFilter = {
    every?: InventarisWhereInput
    some?: InventarisWhereInput
    none?: InventarisWhereInput
  }

  export type BarangHabisPakaiListRelationFilter = {
    every?: BarangHabisPakaiWhereInput
    some?: BarangHabisPakaiWhereInput
    none?: BarangHabisPakaiWhereInput
  }

  export type InventarisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangHabisPakaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GolonganCountOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    kode_golongan?: SortOrder
    nama?: SortOrder
  }

  export type GolonganAvgOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
  }

  export type GolonganMaxOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    kode_golongan?: SortOrder
    nama?: SortOrder
  }

  export type GolonganMinOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    kode_golongan?: SortOrder
    nama?: SortOrder
  }

  export type GolonganSumOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
  }

  export type RuanganListRelationFilter = {
    every?: RuanganWhereInput
    some?: RuanganWhereInput
    none?: RuanganWhereInput
  }

  export type RuanganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GedungCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GedungAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GedungMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GedungMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GedungSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GedungScalarRelationFilter = {
    is?: GedungWhereInput
    isNot?: GedungWhereInput
  }

  export type RuanganCountOrderByAggregateInput = {
    id?: SortOrder
    id_gedung?: SortOrder
    nama?: SortOrder
  }

  export type RuanganAvgOrderByAggregateInput = {
    id?: SortOrder
    id_gedung?: SortOrder
  }

  export type RuanganMaxOrderByAggregateInput = {
    id?: SortOrder
    id_gedung?: SortOrder
    nama?: SortOrder
  }

  export type RuanganMinOrderByAggregateInput = {
    id?: SortOrder
    id_gedung?: SortOrder
    nama?: SortOrder
  }

  export type RuanganSumOrderByAggregateInput = {
    id?: SortOrder
    id_gedung?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumKondisiFilter<$PrismaModel = never> = {
    equals?: $Enums.Kondisi | EnumKondisiFieldRefInput<$PrismaModel>
    in?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiFilter<$PrismaModel> | $Enums.Kondisi
  }

  export type RuanganScalarRelationFilter = {
    is?: RuanganWhereInput
    isNot?: RuanganWhereInput
  }

  export type GolonganScalarRelationFilter = {
    is?: GolonganWhereInput
    isNot?: GolonganWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventarisCountOrderByAggregateInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    nama_inventaris?: SortOrder
    tahun_perolehan?: SortOrder
    harga_perolehan?: SortOrder
    bahan_merk?: SortOrder
    masa_manfaat?: SortOrder
    umur_aset?: SortOrder
    nilai_residu?: SortOrder
    persentase_garis_lurus?: SortOrder
    nilai_yang_dapat_disusutkan?: SortOrder
    beban_penyusutan_per_tahun?: SortOrder
    nilai_buku_akhir?: SortOrder
    jumlah?: SortOrder
    kondisi?: SortOrder
    barcode?: SortOrder
  }

  export type InventarisAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    tahun_perolehan?: SortOrder
    harga_perolehan?: SortOrder
    masa_manfaat?: SortOrder
    umur_aset?: SortOrder
    nilai_residu?: SortOrder
    persentase_garis_lurus?: SortOrder
    nilai_yang_dapat_disusutkan?: SortOrder
    beban_penyusutan_per_tahun?: SortOrder
    nilai_buku_akhir?: SortOrder
    jumlah?: SortOrder
  }

  export type InventarisMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    nama_inventaris?: SortOrder
    tahun_perolehan?: SortOrder
    harga_perolehan?: SortOrder
    bahan_merk?: SortOrder
    masa_manfaat?: SortOrder
    umur_aset?: SortOrder
    nilai_residu?: SortOrder
    persentase_garis_lurus?: SortOrder
    nilai_yang_dapat_disusutkan?: SortOrder
    beban_penyusutan_per_tahun?: SortOrder
    nilai_buku_akhir?: SortOrder
    jumlah?: SortOrder
    kondisi?: SortOrder
    barcode?: SortOrder
  }

  export type InventarisMinOrderByAggregateInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    nama_inventaris?: SortOrder
    tahun_perolehan?: SortOrder
    harga_perolehan?: SortOrder
    bahan_merk?: SortOrder
    masa_manfaat?: SortOrder
    umur_aset?: SortOrder
    nilai_residu?: SortOrder
    persentase_garis_lurus?: SortOrder
    nilai_yang_dapat_disusutkan?: SortOrder
    beban_penyusutan_per_tahun?: SortOrder
    nilai_buku_akhir?: SortOrder
    jumlah?: SortOrder
    kondisi?: SortOrder
    barcode?: SortOrder
  }

  export type InventarisSumOrderByAggregateInput = {
    id?: SortOrder
    id_ruangan?: SortOrder
    id_golongan?: SortOrder
    tahun_perolehan?: SortOrder
    harga_perolehan?: SortOrder
    masa_manfaat?: SortOrder
    umur_aset?: SortOrder
    nilai_residu?: SortOrder
    persentase_garis_lurus?: SortOrder
    nilai_yang_dapat_disusutkan?: SortOrder
    beban_penyusutan_per_tahun?: SortOrder
    nilai_buku_akhir?: SortOrder
    jumlah?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumKondisiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kondisi | EnumKondisiFieldRefInput<$PrismaModel>
    in?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiWithAggregatesFilter<$PrismaModel> | $Enums.Kondisi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKondisiFilter<$PrismaModel>
    _max?: NestedEnumKondisiFilter<$PrismaModel>
  }

  export type TransaksiBarangHabisPakaiListRelationFilter = {
    every?: TransaksiBarangHabisPakaiWhereInput
    some?: TransaksiBarangHabisPakaiWhereInput
    none?: TransaksiBarangHabisPakaiWhereInput
  }

  export type TransaksiBarangHabisPakaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangHabisPakaiCountOrderByAggregateInput = {
    id?: SortOrder
    id_golongan?: SortOrder
    kode_barang?: SortOrder
    nama_barang?: SortOrder
    satuan?: SortOrder
  }

  export type BarangHabisPakaiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_golongan?: SortOrder
  }

  export type BarangHabisPakaiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_golongan?: SortOrder
    kode_barang?: SortOrder
    nama_barang?: SortOrder
    satuan?: SortOrder
  }

  export type BarangHabisPakaiMinOrderByAggregateInput = {
    id?: SortOrder
    id_golongan?: SortOrder
    kode_barang?: SortOrder
    nama_barang?: SortOrder
    satuan?: SortOrder
  }

  export type BarangHabisPakaiSumOrderByAggregateInput = {
    id?: SortOrder
    id_golongan?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BarangHabisPakaiScalarRelationFilter = {
    is?: BarangHabisPakaiWhereInput
    isNot?: BarangHabisPakaiWhereInput
  }

  export type TransaksiBarangHabisPakaiCountOrderByAggregateInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    tanggal?: SortOrder
    uraian?: SortOrder
    tanda_bukti?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
  }

  export type TransaksiBarangHabisPakaiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
  }

  export type TransaksiBarangHabisPakaiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    tanggal?: SortOrder
    uraian?: SortOrder
    tanda_bukti?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
  }

  export type TransaksiBarangHabisPakaiMinOrderByAggregateInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    tanggal?: SortOrder
    uraian?: SortOrder
    tanda_bukti?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
  }

  export type TransaksiBarangHabisPakaiSumOrderByAggregateInput = {
    id?: SortOrder
    id_barang_habis_pakai?: SortOrder
    jumlah_terima?: SortOrder
    jumlah_keluar?: SortOrder
    sisa?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GolonganCreateNestedManyWithoutKategoriInput = {
    create?: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput> | GolonganCreateWithoutKategoriInput[] | GolonganUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: GolonganCreateOrConnectWithoutKategoriInput | GolonganCreateOrConnectWithoutKategoriInput[]
    createMany?: GolonganCreateManyKategoriInputEnvelope
    connect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
  }

  export type GolonganUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput> | GolonganCreateWithoutKategoriInput[] | GolonganUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: GolonganCreateOrConnectWithoutKategoriInput | GolonganCreateOrConnectWithoutKategoriInput[]
    createMany?: GolonganCreateManyKategoriInputEnvelope
    connect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GolonganUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput> | GolonganCreateWithoutKategoriInput[] | GolonganUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: GolonganCreateOrConnectWithoutKategoriInput | GolonganCreateOrConnectWithoutKategoriInput[]
    upsert?: GolonganUpsertWithWhereUniqueWithoutKategoriInput | GolonganUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: GolonganCreateManyKategoriInputEnvelope
    set?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    disconnect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    delete?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    connect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    update?: GolonganUpdateWithWhereUniqueWithoutKategoriInput | GolonganUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: GolonganUpdateManyWithWhereWithoutKategoriInput | GolonganUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: GolonganScalarWhereInput | GolonganScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GolonganUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput> | GolonganCreateWithoutKategoriInput[] | GolonganUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: GolonganCreateOrConnectWithoutKategoriInput | GolonganCreateOrConnectWithoutKategoriInput[]
    upsert?: GolonganUpsertWithWhereUniqueWithoutKategoriInput | GolonganUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: GolonganCreateManyKategoriInputEnvelope
    set?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    disconnect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    delete?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    connect?: GolonganWhereUniqueInput | GolonganWhereUniqueInput[]
    update?: GolonganUpdateWithWhereUniqueWithoutKategoriInput | GolonganUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: GolonganUpdateManyWithWhereWithoutKategoriInput | GolonganUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: GolonganScalarWhereInput | GolonganScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutGolongansInput = {
    create?: XOR<KategoriCreateWithoutGolongansInput, KategoriUncheckedCreateWithoutGolongansInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutGolongansInput
    connect?: KategoriWhereUniqueInput
  }

  export type InventarisCreateNestedManyWithoutGolonganInput = {
    create?: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput> | InventarisCreateWithoutGolonganInput[] | InventarisUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutGolonganInput | InventarisCreateOrConnectWithoutGolonganInput[]
    createMany?: InventarisCreateManyGolonganInputEnvelope
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
  }

  export type BarangHabisPakaiCreateNestedManyWithoutGolonganInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput> | BarangHabisPakaiCreateWithoutGolonganInput[] | BarangHabisPakaiUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutGolonganInput | BarangHabisPakaiCreateOrConnectWithoutGolonganInput[]
    createMany?: BarangHabisPakaiCreateManyGolonganInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type InventarisUncheckedCreateNestedManyWithoutGolonganInput = {
    create?: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput> | InventarisCreateWithoutGolonganInput[] | InventarisUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutGolonganInput | InventarisCreateOrConnectWithoutGolonganInput[]
    createMany?: InventarisCreateManyGolonganInputEnvelope
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
  }

  export type BarangHabisPakaiUncheckedCreateNestedManyWithoutGolonganInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput> | BarangHabisPakaiCreateWithoutGolonganInput[] | BarangHabisPakaiUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutGolonganInput | BarangHabisPakaiCreateOrConnectWithoutGolonganInput[]
    createMany?: BarangHabisPakaiCreateManyGolonganInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type KategoriUpdateOneRequiredWithoutGolongansNestedInput = {
    create?: XOR<KategoriCreateWithoutGolongansInput, KategoriUncheckedCreateWithoutGolongansInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutGolongansInput
    upsert?: KategoriUpsertWithoutGolongansInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutGolongansInput, KategoriUpdateWithoutGolongansInput>, KategoriUncheckedUpdateWithoutGolongansInput>
  }

  export type InventarisUpdateManyWithoutGolonganNestedInput = {
    create?: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput> | InventarisCreateWithoutGolonganInput[] | InventarisUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutGolonganInput | InventarisCreateOrConnectWithoutGolonganInput[]
    upsert?: InventarisUpsertWithWhereUniqueWithoutGolonganInput | InventarisUpsertWithWhereUniqueWithoutGolonganInput[]
    createMany?: InventarisCreateManyGolonganInputEnvelope
    set?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    disconnect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    delete?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    update?: InventarisUpdateWithWhereUniqueWithoutGolonganInput | InventarisUpdateWithWhereUniqueWithoutGolonganInput[]
    updateMany?: InventarisUpdateManyWithWhereWithoutGolonganInput | InventarisUpdateManyWithWhereWithoutGolonganInput[]
    deleteMany?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
  }

  export type BarangHabisPakaiUpdateManyWithoutGolonganNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput> | BarangHabisPakaiCreateWithoutGolonganInput[] | BarangHabisPakaiUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutGolonganInput | BarangHabisPakaiCreateOrConnectWithoutGolonganInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutGolonganInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutGolonganInput[]
    createMany?: BarangHabisPakaiCreateManyGolonganInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutGolonganInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutGolonganInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutGolonganInput | BarangHabisPakaiUpdateManyWithWhereWithoutGolonganInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type InventarisUncheckedUpdateManyWithoutGolonganNestedInput = {
    create?: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput> | InventarisCreateWithoutGolonganInput[] | InventarisUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutGolonganInput | InventarisCreateOrConnectWithoutGolonganInput[]
    upsert?: InventarisUpsertWithWhereUniqueWithoutGolonganInput | InventarisUpsertWithWhereUniqueWithoutGolonganInput[]
    createMany?: InventarisCreateManyGolonganInputEnvelope
    set?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    disconnect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    delete?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    update?: InventarisUpdateWithWhereUniqueWithoutGolonganInput | InventarisUpdateWithWhereUniqueWithoutGolonganInput[]
    updateMany?: InventarisUpdateManyWithWhereWithoutGolonganInput | InventarisUpdateManyWithWhereWithoutGolonganInput[]
    deleteMany?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutGolonganNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput> | BarangHabisPakaiCreateWithoutGolonganInput[] | BarangHabisPakaiUncheckedCreateWithoutGolonganInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutGolonganInput | BarangHabisPakaiCreateOrConnectWithoutGolonganInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutGolonganInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutGolonganInput[]
    createMany?: BarangHabisPakaiCreateManyGolonganInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutGolonganInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutGolonganInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutGolonganInput | BarangHabisPakaiUpdateManyWithWhereWithoutGolonganInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type RuanganCreateNestedManyWithoutGedungInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type RuanganUncheckedCreateNestedManyWithoutGedungInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type RuanganUpdateManyWithoutGedungNestedInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutGedungInput | RuanganUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutGedungInput | RuanganUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutGedungInput | RuanganUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type RuanganUncheckedUpdateManyWithoutGedungNestedInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutGedungInput | RuanganUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutGedungInput | RuanganUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutGedungInput | RuanganUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type GedungCreateNestedOneWithoutRuangansInput = {
    create?: XOR<GedungCreateWithoutRuangansInput, GedungUncheckedCreateWithoutRuangansInput>
    connectOrCreate?: GedungCreateOrConnectWithoutRuangansInput
    connect?: GedungWhereUniqueInput
  }

  export type InventarisCreateNestedManyWithoutRuanganInput = {
    create?: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput> | InventarisCreateWithoutRuanganInput[] | InventarisUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutRuanganInput | InventarisCreateOrConnectWithoutRuanganInput[]
    createMany?: InventarisCreateManyRuanganInputEnvelope
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
  }

  export type InventarisUncheckedCreateNestedManyWithoutRuanganInput = {
    create?: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput> | InventarisCreateWithoutRuanganInput[] | InventarisUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutRuanganInput | InventarisCreateOrConnectWithoutRuanganInput[]
    createMany?: InventarisCreateManyRuanganInputEnvelope
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
  }

  export type GedungUpdateOneRequiredWithoutRuangansNestedInput = {
    create?: XOR<GedungCreateWithoutRuangansInput, GedungUncheckedCreateWithoutRuangansInput>
    connectOrCreate?: GedungCreateOrConnectWithoutRuangansInput
    upsert?: GedungUpsertWithoutRuangansInput
    connect?: GedungWhereUniqueInput
    update?: XOR<XOR<GedungUpdateToOneWithWhereWithoutRuangansInput, GedungUpdateWithoutRuangansInput>, GedungUncheckedUpdateWithoutRuangansInput>
  }

  export type InventarisUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput> | InventarisCreateWithoutRuanganInput[] | InventarisUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutRuanganInput | InventarisCreateOrConnectWithoutRuanganInput[]
    upsert?: InventarisUpsertWithWhereUniqueWithoutRuanganInput | InventarisUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: InventarisCreateManyRuanganInputEnvelope
    set?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    disconnect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    delete?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    update?: InventarisUpdateWithWhereUniqueWithoutRuanganInput | InventarisUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: InventarisUpdateManyWithWhereWithoutRuanganInput | InventarisUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
  }

  export type InventarisUncheckedUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput> | InventarisCreateWithoutRuanganInput[] | InventarisUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: InventarisCreateOrConnectWithoutRuanganInput | InventarisCreateOrConnectWithoutRuanganInput[]
    upsert?: InventarisUpsertWithWhereUniqueWithoutRuanganInput | InventarisUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: InventarisCreateManyRuanganInputEnvelope
    set?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    disconnect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    delete?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    connect?: InventarisWhereUniqueInput | InventarisWhereUniqueInput[]
    update?: InventarisUpdateWithWhereUniqueWithoutRuanganInput | InventarisUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: InventarisUpdateManyWithWhereWithoutRuanganInput | InventarisUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
  }

  export type RuanganCreateNestedOneWithoutInventarisInput = {
    create?: XOR<RuanganCreateWithoutInventarisInput, RuanganUncheckedCreateWithoutInventarisInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutInventarisInput
    connect?: RuanganWhereUniqueInput
  }

  export type GolonganCreateNestedOneWithoutInventarisInput = {
    create?: XOR<GolonganCreateWithoutInventarisInput, GolonganUncheckedCreateWithoutInventarisInput>
    connectOrCreate?: GolonganCreateOrConnectWithoutInventarisInput
    connect?: GolonganWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumKondisiFieldUpdateOperationsInput = {
    set?: $Enums.Kondisi
  }

  export type RuanganUpdateOneRequiredWithoutInventarisNestedInput = {
    create?: XOR<RuanganCreateWithoutInventarisInput, RuanganUncheckedCreateWithoutInventarisInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutInventarisInput
    upsert?: RuanganUpsertWithoutInventarisInput
    connect?: RuanganWhereUniqueInput
    update?: XOR<XOR<RuanganUpdateToOneWithWhereWithoutInventarisInput, RuanganUpdateWithoutInventarisInput>, RuanganUncheckedUpdateWithoutInventarisInput>
  }

  export type GolonganUpdateOneRequiredWithoutInventarisNestedInput = {
    create?: XOR<GolonganCreateWithoutInventarisInput, GolonganUncheckedCreateWithoutInventarisInput>
    connectOrCreate?: GolonganCreateOrConnectWithoutInventarisInput
    upsert?: GolonganUpsertWithoutInventarisInput
    connect?: GolonganWhereUniqueInput
    update?: XOR<XOR<GolonganUpdateToOneWithWhereWithoutInventarisInput, GolonganUpdateWithoutInventarisInput>, GolonganUncheckedUpdateWithoutInventarisInput>
  }

  export type GolonganCreateNestedOneWithoutBarangHabisPakaiInput = {
    create?: XOR<GolonganCreateWithoutBarangHabisPakaiInput, GolonganUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: GolonganCreateOrConnectWithoutBarangHabisPakaiInput
    connect?: GolonganWhereUniqueInput
  }

  export type TransaksiBarangHabisPakaiCreateNestedManyWithoutBarangInput = {
    create?: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput> | TransaksiBarangHabisPakaiCreateWithoutBarangInput[] | TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput | TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput[]
    createMany?: TransaksiBarangHabisPakaiCreateManyBarangInputEnvelope
    connect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
  }

  export type TransaksiBarangHabisPakaiUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput> | TransaksiBarangHabisPakaiCreateWithoutBarangInput[] | TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput | TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput[]
    createMany?: TransaksiBarangHabisPakaiCreateManyBarangInputEnvelope
    connect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
  }

  export type GolonganUpdateOneRequiredWithoutBarangHabisPakaiNestedInput = {
    create?: XOR<GolonganCreateWithoutBarangHabisPakaiInput, GolonganUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: GolonganCreateOrConnectWithoutBarangHabisPakaiInput
    upsert?: GolonganUpsertWithoutBarangHabisPakaiInput
    connect?: GolonganWhereUniqueInput
    update?: XOR<XOR<GolonganUpdateToOneWithWhereWithoutBarangHabisPakaiInput, GolonganUpdateWithoutBarangHabisPakaiInput>, GolonganUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type TransaksiBarangHabisPakaiUpdateManyWithoutBarangNestedInput = {
    create?: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput> | TransaksiBarangHabisPakaiCreateWithoutBarangInput[] | TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput | TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput[]
    upsert?: TransaksiBarangHabisPakaiUpsertWithWhereUniqueWithoutBarangInput | TransaksiBarangHabisPakaiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: TransaksiBarangHabisPakaiCreateManyBarangInputEnvelope
    set?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    disconnect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    delete?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    connect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    update?: TransaksiBarangHabisPakaiUpdateWithWhereUniqueWithoutBarangInput | TransaksiBarangHabisPakaiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: TransaksiBarangHabisPakaiUpdateManyWithWhereWithoutBarangInput | TransaksiBarangHabisPakaiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: TransaksiBarangHabisPakaiScalarWhereInput | TransaksiBarangHabisPakaiScalarWhereInput[]
  }

  export type TransaksiBarangHabisPakaiUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput> | TransaksiBarangHabisPakaiCreateWithoutBarangInput[] | TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput | TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput[]
    upsert?: TransaksiBarangHabisPakaiUpsertWithWhereUniqueWithoutBarangInput | TransaksiBarangHabisPakaiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: TransaksiBarangHabisPakaiCreateManyBarangInputEnvelope
    set?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    disconnect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    delete?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    connect?: TransaksiBarangHabisPakaiWhereUniqueInput | TransaksiBarangHabisPakaiWhereUniqueInput[]
    update?: TransaksiBarangHabisPakaiUpdateWithWhereUniqueWithoutBarangInput | TransaksiBarangHabisPakaiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: TransaksiBarangHabisPakaiUpdateManyWithWhereWithoutBarangInput | TransaksiBarangHabisPakaiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: TransaksiBarangHabisPakaiScalarWhereInput | TransaksiBarangHabisPakaiScalarWhereInput[]
  }

  export type BarangHabisPakaiCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutTransaksiInput, BarangHabisPakaiUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutTransaksiInput
    connect?: BarangHabisPakaiWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BarangHabisPakaiUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutTransaksiInput, BarangHabisPakaiUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutTransaksiInput
    upsert?: BarangHabisPakaiUpsertWithoutTransaksiInput
    connect?: BarangHabisPakaiWhereUniqueInput
    update?: XOR<XOR<BarangHabisPakaiUpdateToOneWithWhereWithoutTransaksiInput, BarangHabisPakaiUpdateWithoutTransaksiInput>, BarangHabisPakaiUncheckedUpdateWithoutTransaksiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumKondisiFilter<$PrismaModel = never> = {
    equals?: $Enums.Kondisi | EnumKondisiFieldRefInput<$PrismaModel>
    in?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiFilter<$PrismaModel> | $Enums.Kondisi
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumKondisiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kondisi | EnumKondisiFieldRefInput<$PrismaModel>
    in?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kondisi[] | ListEnumKondisiFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiWithAggregatesFilter<$PrismaModel> | $Enums.Kondisi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKondisiFilter<$PrismaModel>
    _max?: NestedEnumKondisiFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GolonganCreateWithoutKategoriInput = {
    kode_golongan: string
    nama: string
    inventaris?: InventarisCreateNestedManyWithoutGolonganInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutGolonganInput
  }

  export type GolonganUncheckedCreateWithoutKategoriInput = {
    id?: number
    kode_golongan: string
    nama: string
    inventaris?: InventarisUncheckedCreateNestedManyWithoutGolonganInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutGolonganInput
  }

  export type GolonganCreateOrConnectWithoutKategoriInput = {
    where: GolonganWhereUniqueInput
    create: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput>
  }

  export type GolonganCreateManyKategoriInputEnvelope = {
    data: GolonganCreateManyKategoriInput | GolonganCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type GolonganUpsertWithWhereUniqueWithoutKategoriInput = {
    where: GolonganWhereUniqueInput
    update: XOR<GolonganUpdateWithoutKategoriInput, GolonganUncheckedUpdateWithoutKategoriInput>
    create: XOR<GolonganCreateWithoutKategoriInput, GolonganUncheckedCreateWithoutKategoriInput>
  }

  export type GolonganUpdateWithWhereUniqueWithoutKategoriInput = {
    where: GolonganWhereUniqueInput
    data: XOR<GolonganUpdateWithoutKategoriInput, GolonganUncheckedUpdateWithoutKategoriInput>
  }

  export type GolonganUpdateManyWithWhereWithoutKategoriInput = {
    where: GolonganScalarWhereInput
    data: XOR<GolonganUpdateManyMutationInput, GolonganUncheckedUpdateManyWithoutKategoriInput>
  }

  export type GolonganScalarWhereInput = {
    AND?: GolonganScalarWhereInput | GolonganScalarWhereInput[]
    OR?: GolonganScalarWhereInput[]
    NOT?: GolonganScalarWhereInput | GolonganScalarWhereInput[]
    id?: IntFilter<"Golongan"> | number
    id_kategori?: IntFilter<"Golongan"> | number
    kode_golongan?: StringFilter<"Golongan"> | string
    nama?: StringFilter<"Golongan"> | string
  }

  export type KategoriCreateWithoutGolongansInput = {
    nama: string
  }

  export type KategoriUncheckedCreateWithoutGolongansInput = {
    id?: number
    nama: string
  }

  export type KategoriCreateOrConnectWithoutGolongansInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutGolongansInput, KategoriUncheckedCreateWithoutGolongansInput>
  }

  export type InventarisCreateWithoutGolonganInput = {
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
    ruangan: RuanganCreateNestedOneWithoutInventarisInput
  }

  export type InventarisUncheckedCreateWithoutGolonganInput = {
    id?: number
    id_ruangan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type InventarisCreateOrConnectWithoutGolonganInput = {
    where: InventarisWhereUniqueInput
    create: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput>
  }

  export type InventarisCreateManyGolonganInputEnvelope = {
    data: InventarisCreateManyGolonganInput | InventarisCreateManyGolonganInput[]
    skipDuplicates?: boolean
  }

  export type BarangHabisPakaiCreateWithoutGolonganInput = {
    kode_barang: string
    nama_barang: string
    satuan: string
    transaksi?: TransaksiBarangHabisPakaiCreateNestedManyWithoutBarangInput
  }

  export type BarangHabisPakaiUncheckedCreateWithoutGolonganInput = {
    id?: number
    kode_barang: string
    nama_barang: string
    satuan: string
    transaksi?: TransaksiBarangHabisPakaiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangHabisPakaiCreateOrConnectWithoutGolonganInput = {
    where: BarangHabisPakaiWhereUniqueInput
    create: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput>
  }

  export type BarangHabisPakaiCreateManyGolonganInputEnvelope = {
    data: BarangHabisPakaiCreateManyGolonganInput | BarangHabisPakaiCreateManyGolonganInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutGolongansInput = {
    update: XOR<KategoriUpdateWithoutGolongansInput, KategoriUncheckedUpdateWithoutGolongansInput>
    create: XOR<KategoriCreateWithoutGolongansInput, KategoriUncheckedCreateWithoutGolongansInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutGolongansInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutGolongansInput, KategoriUncheckedUpdateWithoutGolongansInput>
  }

  export type KategoriUpdateWithoutGolongansInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateWithoutGolongansInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InventarisUpsertWithWhereUniqueWithoutGolonganInput = {
    where: InventarisWhereUniqueInput
    update: XOR<InventarisUpdateWithoutGolonganInput, InventarisUncheckedUpdateWithoutGolonganInput>
    create: XOR<InventarisCreateWithoutGolonganInput, InventarisUncheckedCreateWithoutGolonganInput>
  }

  export type InventarisUpdateWithWhereUniqueWithoutGolonganInput = {
    where: InventarisWhereUniqueInput
    data: XOR<InventarisUpdateWithoutGolonganInput, InventarisUncheckedUpdateWithoutGolonganInput>
  }

  export type InventarisUpdateManyWithWhereWithoutGolonganInput = {
    where: InventarisScalarWhereInput
    data: XOR<InventarisUpdateManyMutationInput, InventarisUncheckedUpdateManyWithoutGolonganInput>
  }

  export type InventarisScalarWhereInput = {
    AND?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
    OR?: InventarisScalarWhereInput[]
    NOT?: InventarisScalarWhereInput | InventarisScalarWhereInput[]
    id?: IntFilter<"Inventaris"> | number
    id_ruangan?: IntFilter<"Inventaris"> | number
    id_golongan?: IntFilter<"Inventaris"> | number
    nama_inventaris?: StringFilter<"Inventaris"> | string
    tahun_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    harga_perolehan?: IntNullableFilter<"Inventaris"> | number | null
    bahan_merk?: StringNullableFilter<"Inventaris"> | string | null
    masa_manfaat?: IntNullableFilter<"Inventaris"> | number | null
    umur_aset?: IntNullableFilter<"Inventaris"> | number | null
    nilai_residu?: IntNullableFilter<"Inventaris"> | number | null
    persentase_garis_lurus?: DecimalNullableFilter<"Inventaris"> | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: IntNullableFilter<"Inventaris"> | number | null
    beban_penyusutan_per_tahun?: IntNullableFilter<"Inventaris"> | number | null
    nilai_buku_akhir?: IntNullableFilter<"Inventaris"> | number | null
    jumlah?: IntNullableFilter<"Inventaris"> | number | null
    kondisi?: EnumKondisiFilter<"Inventaris"> | $Enums.Kondisi
    barcode?: StringNullableFilter<"Inventaris"> | string | null
  }

  export type BarangHabisPakaiUpsertWithWhereUniqueWithoutGolonganInput = {
    where: BarangHabisPakaiWhereUniqueInput
    update: XOR<BarangHabisPakaiUpdateWithoutGolonganInput, BarangHabisPakaiUncheckedUpdateWithoutGolonganInput>
    create: XOR<BarangHabisPakaiCreateWithoutGolonganInput, BarangHabisPakaiUncheckedCreateWithoutGolonganInput>
  }

  export type BarangHabisPakaiUpdateWithWhereUniqueWithoutGolonganInput = {
    where: BarangHabisPakaiWhereUniqueInput
    data: XOR<BarangHabisPakaiUpdateWithoutGolonganInput, BarangHabisPakaiUncheckedUpdateWithoutGolonganInput>
  }

  export type BarangHabisPakaiUpdateManyWithWhereWithoutGolonganInput = {
    where: BarangHabisPakaiScalarWhereInput
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyWithoutGolonganInput>
  }

  export type BarangHabisPakaiScalarWhereInput = {
    AND?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
    OR?: BarangHabisPakaiScalarWhereInput[]
    NOT?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
    id?: IntFilter<"BarangHabisPakai"> | number
    id_golongan?: IntFilter<"BarangHabisPakai"> | number
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    satuan?: StringFilter<"BarangHabisPakai"> | string
  }

  export type RuanganCreateWithoutGedungInput = {
    nama: string
    inventaris?: InventarisCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateWithoutGedungInput = {
    id?: number
    nama: string
    inventaris?: InventarisUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganCreateOrConnectWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput>
  }

  export type RuanganCreateManyGedungInputEnvelope = {
    data: RuanganCreateManyGedungInput | RuanganCreateManyGedungInput[]
    skipDuplicates?: boolean
  }

  export type RuanganUpsertWithWhereUniqueWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    update: XOR<RuanganUpdateWithoutGedungInput, RuanganUncheckedUpdateWithoutGedungInput>
    create: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput>
  }

  export type RuanganUpdateWithWhereUniqueWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    data: XOR<RuanganUpdateWithoutGedungInput, RuanganUncheckedUpdateWithoutGedungInput>
  }

  export type RuanganUpdateManyWithWhereWithoutGedungInput = {
    where: RuanganScalarWhereInput
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyWithoutGedungInput>
  }

  export type RuanganScalarWhereInput = {
    AND?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    OR?: RuanganScalarWhereInput[]
    NOT?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    id?: IntFilter<"Ruangan"> | number
    id_gedung?: IntFilter<"Ruangan"> | number
    nama?: StringFilter<"Ruangan"> | string
  }

  export type GedungCreateWithoutRuangansInput = {
    nama: string
  }

  export type GedungUncheckedCreateWithoutRuangansInput = {
    id?: number
    nama: string
  }

  export type GedungCreateOrConnectWithoutRuangansInput = {
    where: GedungWhereUniqueInput
    create: XOR<GedungCreateWithoutRuangansInput, GedungUncheckedCreateWithoutRuangansInput>
  }

  export type InventarisCreateWithoutRuanganInput = {
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
    golongan: GolonganCreateNestedOneWithoutInventarisInput
  }

  export type InventarisUncheckedCreateWithoutRuanganInput = {
    id?: number
    id_golongan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type InventarisCreateOrConnectWithoutRuanganInput = {
    where: InventarisWhereUniqueInput
    create: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput>
  }

  export type InventarisCreateManyRuanganInputEnvelope = {
    data: InventarisCreateManyRuanganInput | InventarisCreateManyRuanganInput[]
    skipDuplicates?: boolean
  }

  export type GedungUpsertWithoutRuangansInput = {
    update: XOR<GedungUpdateWithoutRuangansInput, GedungUncheckedUpdateWithoutRuangansInput>
    create: XOR<GedungCreateWithoutRuangansInput, GedungUncheckedCreateWithoutRuangansInput>
    where?: GedungWhereInput
  }

  export type GedungUpdateToOneWithWhereWithoutRuangansInput = {
    where?: GedungWhereInput
    data: XOR<GedungUpdateWithoutRuangansInput, GedungUncheckedUpdateWithoutRuangansInput>
  }

  export type GedungUpdateWithoutRuangansInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GedungUncheckedUpdateWithoutRuangansInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InventarisUpsertWithWhereUniqueWithoutRuanganInput = {
    where: InventarisWhereUniqueInput
    update: XOR<InventarisUpdateWithoutRuanganInput, InventarisUncheckedUpdateWithoutRuanganInput>
    create: XOR<InventarisCreateWithoutRuanganInput, InventarisUncheckedCreateWithoutRuanganInput>
  }

  export type InventarisUpdateWithWhereUniqueWithoutRuanganInput = {
    where: InventarisWhereUniqueInput
    data: XOR<InventarisUpdateWithoutRuanganInput, InventarisUncheckedUpdateWithoutRuanganInput>
  }

  export type InventarisUpdateManyWithWhereWithoutRuanganInput = {
    where: InventarisScalarWhereInput
    data: XOR<InventarisUpdateManyMutationInput, InventarisUncheckedUpdateManyWithoutRuanganInput>
  }

  export type RuanganCreateWithoutInventarisInput = {
    nama: string
    gedung: GedungCreateNestedOneWithoutRuangansInput
  }

  export type RuanganUncheckedCreateWithoutInventarisInput = {
    id?: number
    id_gedung: number
    nama: string
  }

  export type RuanganCreateOrConnectWithoutInventarisInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutInventarisInput, RuanganUncheckedCreateWithoutInventarisInput>
  }

  export type GolonganCreateWithoutInventarisInput = {
    kode_golongan: string
    nama: string
    kategori: KategoriCreateNestedOneWithoutGolongansInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutGolonganInput
  }

  export type GolonganUncheckedCreateWithoutInventarisInput = {
    id?: number
    id_kategori: number
    kode_golongan: string
    nama: string
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutGolonganInput
  }

  export type GolonganCreateOrConnectWithoutInventarisInput = {
    where: GolonganWhereUniqueInput
    create: XOR<GolonganCreateWithoutInventarisInput, GolonganUncheckedCreateWithoutInventarisInput>
  }

  export type RuanganUpsertWithoutInventarisInput = {
    update: XOR<RuanganUpdateWithoutInventarisInput, RuanganUncheckedUpdateWithoutInventarisInput>
    create: XOR<RuanganCreateWithoutInventarisInput, RuanganUncheckedCreateWithoutInventarisInput>
    where?: RuanganWhereInput
  }

  export type RuanganUpdateToOneWithWhereWithoutInventarisInput = {
    where?: RuanganWhereInput
    data: XOR<RuanganUpdateWithoutInventarisInput, RuanganUncheckedUpdateWithoutInventarisInput>
  }

  export type RuanganUpdateWithoutInventarisInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gedung?: GedungUpdateOneRequiredWithoutRuangansNestedInput
  }

  export type RuanganUncheckedUpdateWithoutInventarisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_gedung?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganUpsertWithoutInventarisInput = {
    update: XOR<GolonganUpdateWithoutInventarisInput, GolonganUncheckedUpdateWithoutInventarisInput>
    create: XOR<GolonganCreateWithoutInventarisInput, GolonganUncheckedCreateWithoutInventarisInput>
    where?: GolonganWhereInput
  }

  export type GolonganUpdateToOneWithWhereWithoutInventarisInput = {
    where?: GolonganWhereInput
    data: XOR<GolonganUpdateWithoutInventarisInput, GolonganUncheckedUpdateWithoutInventarisInput>
  }

  export type GolonganUpdateWithoutInventarisInput = {
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kategori?: KategoriUpdateOneRequiredWithoutGolongansNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganUncheckedUpdateWithoutInventarisInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganCreateWithoutBarangHabisPakaiInput = {
    kode_golongan: string
    nama: string
    kategori: KategoriCreateNestedOneWithoutGolongansInput
    inventaris?: InventarisCreateNestedManyWithoutGolonganInput
  }

  export type GolonganUncheckedCreateWithoutBarangHabisPakaiInput = {
    id?: number
    id_kategori: number
    kode_golongan: string
    nama: string
    inventaris?: InventarisUncheckedCreateNestedManyWithoutGolonganInput
  }

  export type GolonganCreateOrConnectWithoutBarangHabisPakaiInput = {
    where: GolonganWhereUniqueInput
    create: XOR<GolonganCreateWithoutBarangHabisPakaiInput, GolonganUncheckedCreateWithoutBarangHabisPakaiInput>
  }

  export type TransaksiBarangHabisPakaiCreateWithoutBarangInput = {
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
  }

  export type TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput = {
    id?: number
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
  }

  export type TransaksiBarangHabisPakaiCreateOrConnectWithoutBarangInput = {
    where: TransaksiBarangHabisPakaiWhereUniqueInput
    create: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput>
  }

  export type TransaksiBarangHabisPakaiCreateManyBarangInputEnvelope = {
    data: TransaksiBarangHabisPakaiCreateManyBarangInput | TransaksiBarangHabisPakaiCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type GolonganUpsertWithoutBarangHabisPakaiInput = {
    update: XOR<GolonganUpdateWithoutBarangHabisPakaiInput, GolonganUncheckedUpdateWithoutBarangHabisPakaiInput>
    create: XOR<GolonganCreateWithoutBarangHabisPakaiInput, GolonganUncheckedCreateWithoutBarangHabisPakaiInput>
    where?: GolonganWhereInput
  }

  export type GolonganUpdateToOneWithWhereWithoutBarangHabisPakaiInput = {
    where?: GolonganWhereInput
    data: XOR<GolonganUpdateWithoutBarangHabisPakaiInput, GolonganUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type GolonganUpdateWithoutBarangHabisPakaiInput = {
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kategori?: KategoriUpdateOneRequiredWithoutGolongansNestedInput
    inventaris?: InventarisUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganUncheckedUpdateWithoutBarangHabisPakaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUncheckedUpdateManyWithoutGolonganNestedInput
  }

  export type TransaksiBarangHabisPakaiUpsertWithWhereUniqueWithoutBarangInput = {
    where: TransaksiBarangHabisPakaiWhereUniqueInput
    update: XOR<TransaksiBarangHabisPakaiUpdateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedUpdateWithoutBarangInput>
    create: XOR<TransaksiBarangHabisPakaiCreateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedCreateWithoutBarangInput>
  }

  export type TransaksiBarangHabisPakaiUpdateWithWhereUniqueWithoutBarangInput = {
    where: TransaksiBarangHabisPakaiWhereUniqueInput
    data: XOR<TransaksiBarangHabisPakaiUpdateWithoutBarangInput, TransaksiBarangHabisPakaiUncheckedUpdateWithoutBarangInput>
  }

  export type TransaksiBarangHabisPakaiUpdateManyWithWhereWithoutBarangInput = {
    where: TransaksiBarangHabisPakaiScalarWhereInput
    data: XOR<TransaksiBarangHabisPakaiUpdateManyMutationInput, TransaksiBarangHabisPakaiUncheckedUpdateManyWithoutBarangInput>
  }

  export type TransaksiBarangHabisPakaiScalarWhereInput = {
    AND?: TransaksiBarangHabisPakaiScalarWhereInput | TransaksiBarangHabisPakaiScalarWhereInput[]
    OR?: TransaksiBarangHabisPakaiScalarWhereInput[]
    NOT?: TransaksiBarangHabisPakaiScalarWhereInput | TransaksiBarangHabisPakaiScalarWhereInput[]
    id?: IntFilter<"TransaksiBarangHabisPakai"> | number
    id_barang_habis_pakai?: IntFilter<"TransaksiBarangHabisPakai"> | number
    tanggal?: DateTimeFilter<"TransaksiBarangHabisPakai"> | Date | string
    uraian?: StringFilter<"TransaksiBarangHabisPakai"> | string
    tanda_bukti?: StringFilter<"TransaksiBarangHabisPakai"> | string
    jumlah_terima?: IntFilter<"TransaksiBarangHabisPakai"> | number
    jumlah_keluar?: IntFilter<"TransaksiBarangHabisPakai"> | number
    sisa?: IntFilter<"TransaksiBarangHabisPakai"> | number
  }

  export type BarangHabisPakaiCreateWithoutTransaksiInput = {
    kode_barang: string
    nama_barang: string
    satuan: string
    golongan: GolonganCreateNestedOneWithoutBarangHabisPakaiInput
  }

  export type BarangHabisPakaiUncheckedCreateWithoutTransaksiInput = {
    id?: number
    id_golongan: number
    kode_barang: string
    nama_barang: string
    satuan: string
  }

  export type BarangHabisPakaiCreateOrConnectWithoutTransaksiInput = {
    where: BarangHabisPakaiWhereUniqueInput
    create: XOR<BarangHabisPakaiCreateWithoutTransaksiInput, BarangHabisPakaiUncheckedCreateWithoutTransaksiInput>
  }

  export type BarangHabisPakaiUpsertWithoutTransaksiInput = {
    update: XOR<BarangHabisPakaiUpdateWithoutTransaksiInput, BarangHabisPakaiUncheckedUpdateWithoutTransaksiInput>
    create: XOR<BarangHabisPakaiCreateWithoutTransaksiInput, BarangHabisPakaiUncheckedCreateWithoutTransaksiInput>
    where?: BarangHabisPakaiWhereInput
  }

  export type BarangHabisPakaiUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: BarangHabisPakaiWhereInput
    data: XOR<BarangHabisPakaiUpdateWithoutTransaksiInput, BarangHabisPakaiUncheckedUpdateWithoutTransaksiInput>
  }

  export type BarangHabisPakaiUpdateWithoutTransaksiInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    golongan?: GolonganUpdateOneRequiredWithoutBarangHabisPakaiNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganCreateManyKategoriInput = {
    id?: number
    kode_golongan: string
    nama: string
  }

  export type GolonganUpdateWithoutKategoriInput = {
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUpdateManyWithoutGolonganNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUncheckedUpdateManyWithoutGolonganNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutGolonganNestedInput
  }

  export type GolonganUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_golongan?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InventarisCreateManyGolonganInput = {
    id?: number
    id_ruangan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type BarangHabisPakaiCreateManyGolonganInput = {
    id?: number
    kode_barang: string
    nama_barang: string
    satuan: string
  }

  export type InventarisUpdateWithoutGolonganInput = {
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: RuanganUpdateOneRequiredWithoutInventarisNestedInput
  }

  export type InventarisUncheckedUpdateWithoutGolonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ruangan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventarisUncheckedUpdateManyWithoutGolonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ruangan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarangHabisPakaiUpdateWithoutGolonganInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiBarangHabisPakaiUpdateManyWithoutBarangNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateWithoutGolonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiBarangHabisPakaiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutGolonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_barang?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
  }

  export type RuanganCreateManyGedungInput = {
    id?: number
    nama: string
  }

  export type RuanganUpdateWithoutGedungInput = {
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateWithoutGedungInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    inventaris?: InventarisUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateManyWithoutGedungInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InventarisCreateManyRuanganInput = {
    id?: number
    id_golongan: number
    nama_inventaris: string
    tahun_perolehan?: number | null
    harga_perolehan?: number | null
    bahan_merk?: string | null
    masa_manfaat?: number | null
    umur_aset?: number | null
    nilai_residu?: number | null
    persentase_garis_lurus?: Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: number | null
    beban_penyusutan_per_tahun?: number | null
    nilai_buku_akhir?: number | null
    jumlah?: number | null
    kondisi: $Enums.Kondisi
    barcode?: string | null
  }

  export type InventarisUpdateWithoutRuanganInput = {
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: GolonganUpdateOneRequiredWithoutInventarisNestedInput
  }

  export type InventarisUncheckedUpdateWithoutRuanganInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventarisUncheckedUpdateManyWithoutRuanganInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_golongan?: IntFieldUpdateOperationsInput | number
    nama_inventaris?: StringFieldUpdateOperationsInput | string
    tahun_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    harga_perolehan?: NullableIntFieldUpdateOperationsInput | number | null
    bahan_merk?: NullableStringFieldUpdateOperationsInput | string | null
    masa_manfaat?: NullableIntFieldUpdateOperationsInput | number | null
    umur_aset?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_residu?: NullableIntFieldUpdateOperationsInput | number | null
    persentase_garis_lurus?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nilai_yang_dapat_disusutkan?: NullableIntFieldUpdateOperationsInput | number | null
    beban_penyusutan_per_tahun?: NullableIntFieldUpdateOperationsInput | number | null
    nilai_buku_akhir?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi?: EnumKondisiFieldUpdateOperationsInput | $Enums.Kondisi
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiBarangHabisPakaiCreateManyBarangInput = {
    id?: number
    tanggal: Date | string
    uraian: string
    tanda_bukti: string
    jumlah_terima?: number
    jumlah_keluar?: number
    sisa?: number
  }

  export type TransaksiBarangHabisPakaiUpdateWithoutBarangInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiBarangHabisPakaiUncheckedUpdateWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiBarangHabisPakaiUncheckedUpdateManyWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uraian?: StringFieldUpdateOperationsInput | string
    tanda_bukti?: StringFieldUpdateOperationsInput | string
    jumlah_terima?: IntFieldUpdateOperationsInput | number
    jumlah_keluar?: IntFieldUpdateOperationsInput | number
    sisa?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}