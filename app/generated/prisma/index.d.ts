
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
    Golongan: 'Golongan'
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
      modelProps: "kategori" | "golongan"
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
    nama: string | null
  }

  export type GolonganMaxAggregateOutputType = {
    id: number | null
    id_kategori: number | null
    nama: string | null
  }

  export type GolonganCountAggregateOutputType = {
    id: number
    id_kategori: number
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
    nama?: true
  }

  export type GolonganMaxAggregateInputType = {
    id?: true
    id_kategori?: true
    nama?: true
  }

  export type GolonganCountAggregateInputType = {
    id?: true
    id_kategori?: true
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
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategori?: boolean
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategori?: boolean
    nama?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golongan"]>

  export type GolonganSelectScalar = {
    id?: boolean
    id_kategori?: boolean
    nama?: boolean
  }

  export type GolonganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_kategori" | "nama", ExtArgs["result"]["golongan"]>
  export type GolonganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_kategori: number
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
    nama: 'nama'
  };

  export type GolonganScalarFieldEnum = (typeof GolonganScalarFieldEnum)[keyof typeof GolonganScalarFieldEnum]


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
    nama?: StringFilter<"Golongan"> | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }

  export type GolonganOrderByWithRelationInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    nama?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
  }

  export type GolonganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: GolonganWhereInput | GolonganWhereInput[]
    OR?: GolonganWhereInput[]
    NOT?: GolonganWhereInput | GolonganWhereInput[]
    id_kategori?: IntFilter<"Golongan"> | number
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }, "id" | "nama">

  export type GolonganOrderByWithAggregationInput = {
    id?: SortOrder
    id_kategori?: SortOrder
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
    nama?: StringWithAggregatesFilter<"Golongan"> | string
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
    nama: string
    kategori: KategoriCreateNestedOneWithoutGolongansInput
  }

  export type GolonganUncheckedCreateInput = {
    id?: number
    id_kategori: number
    nama: string
  }

  export type GolonganUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kategori?: KategoriUpdateOneRequiredWithoutGolongansNestedInput
  }

  export type GolonganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganCreateManyInput = {
    id?: number
    id_kategori: number
    nama: string
  }

  export type GolonganUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
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

  export type GolonganCountOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    nama?: SortOrder
  }

  export type GolonganAvgOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
  }

  export type GolonganMaxOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    nama?: SortOrder
  }

  export type GolonganMinOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
    nama?: SortOrder
  }

  export type GolonganSumOrderByAggregateInput = {
    id?: SortOrder
    id_kategori?: SortOrder
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

  export type KategoriUpdateOneRequiredWithoutGolongansNestedInput = {
    create?: XOR<KategoriCreateWithoutGolongansInput, KategoriUncheckedCreateWithoutGolongansInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutGolongansInput
    upsert?: KategoriUpsertWithoutGolongansInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutGolongansInput, KategoriUpdateWithoutGolongansInput>, KategoriUncheckedUpdateWithoutGolongansInput>
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

  export type GolonganCreateWithoutKategoriInput = {
    nama: string
  }

  export type GolonganUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama: string
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

  export type GolonganCreateManyKategoriInput = {
    id?: number
    nama: string
  }

  export type GolonganUpdateWithoutKategoriInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GolonganUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
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