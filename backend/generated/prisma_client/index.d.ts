
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
 * Model Brinquedo
 * 
 */
export type Brinquedo = $Result.DefaultSelection<Prisma.$BrinquedoPayload>
/**
 * Model BrinquedoLocado
 * 
 */
export type BrinquedoLocado = $Result.DefaultSelection<Prisma.$BrinquedoLocadoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Locacao
 * 
 */
export type Locacao = $Result.DefaultSelection<Prisma.$LocacaoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model TipoBrinquedo
 * 
 */
export type TipoBrinquedo = $Result.DefaultSelection<Prisma.$TipoBrinquedoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Funcao: {
  GERENTE: 'GERENTE',
  CAIXA: 'CAIXA',
  AGENTE_LOCACAO: 'AGENTE_LOCACAO',
  ANALISTA_CADASTRO: 'ANALISTA_CADASTRO',
  ALMOXARIFE: 'ALMOXARIFE'
};

export type Funcao = (typeof Funcao)[keyof typeof Funcao]


export const PgtoStatus: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  ATRASO: 'ATRASO'
};

export type PgtoStatus = (typeof PgtoStatus)[keyof typeof PgtoStatus]

}

export type Funcao = $Enums.Funcao

export const Funcao: typeof $Enums.Funcao

export type PgtoStatus = $Enums.PgtoStatus

export const PgtoStatus: typeof $Enums.PgtoStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brinquedos
 * const brinquedos = await prisma.brinquedo.findMany()
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
   * // Fetch zero or more Brinquedos
   * const brinquedos = await prisma.brinquedo.findMany()
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
   * `prisma.brinquedo`: Exposes CRUD operations for the **Brinquedo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brinquedos
    * const brinquedos = await prisma.brinquedo.findMany()
    * ```
    */
  get brinquedo(): Prisma.BrinquedoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brinquedoLocado`: Exposes CRUD operations for the **BrinquedoLocado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrinquedoLocados
    * const brinquedoLocados = await prisma.brinquedoLocado.findMany()
    * ```
    */
  get brinquedoLocado(): Prisma.BrinquedoLocadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locacao`: Exposes CRUD operations for the **Locacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locacaos
    * const locacaos = await prisma.locacao.findMany()
    * ```
    */
  get locacao(): Prisma.LocacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoBrinquedo`: Exposes CRUD operations for the **TipoBrinquedo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoBrinquedos
    * const tipoBrinquedos = await prisma.tipoBrinquedo.findMany()
    * ```
    */
  get tipoBrinquedo(): Prisma.TipoBrinquedoDelegate<ExtArgs, ClientOptions>;
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
    Brinquedo: 'Brinquedo',
    BrinquedoLocado: 'BrinquedoLocado',
    Cliente: 'Cliente',
    Funcionario: 'Funcionario',
    Locacao: 'Locacao',
    Pagamento: 'Pagamento',
    TipoBrinquedo: 'TipoBrinquedo'
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
      modelProps: "brinquedo" | "brinquedoLocado" | "cliente" | "funcionario" | "locacao" | "pagamento" | "tipoBrinquedo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Brinquedo: {
        payload: Prisma.$BrinquedoPayload<ExtArgs>
        fields: Prisma.BrinquedoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrinquedoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrinquedoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          findFirst: {
            args: Prisma.BrinquedoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrinquedoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          findMany: {
            args: Prisma.BrinquedoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>[]
          }
          create: {
            args: Prisma.BrinquedoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          createMany: {
            args: Prisma.BrinquedoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrinquedoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>[]
          }
          delete: {
            args: Prisma.BrinquedoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          update: {
            args: Prisma.BrinquedoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          deleteMany: {
            args: Prisma.BrinquedoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrinquedoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrinquedoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>[]
          }
          upsert: {
            args: Prisma.BrinquedoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoPayload>
          }
          aggregate: {
            args: Prisma.BrinquedoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrinquedo>
          }
          groupBy: {
            args: Prisma.BrinquedoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrinquedoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrinquedoCountArgs<ExtArgs>
            result: $Utils.Optional<BrinquedoCountAggregateOutputType> | number
          }
        }
      }
      BrinquedoLocado: {
        payload: Prisma.$BrinquedoLocadoPayload<ExtArgs>
        fields: Prisma.BrinquedoLocadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrinquedoLocadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrinquedoLocadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          findFirst: {
            args: Prisma.BrinquedoLocadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrinquedoLocadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          findMany: {
            args: Prisma.BrinquedoLocadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>[]
          }
          create: {
            args: Prisma.BrinquedoLocadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          createMany: {
            args: Prisma.BrinquedoLocadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrinquedoLocadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>[]
          }
          delete: {
            args: Prisma.BrinquedoLocadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          update: {
            args: Prisma.BrinquedoLocadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          deleteMany: {
            args: Prisma.BrinquedoLocadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrinquedoLocadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrinquedoLocadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>[]
          }
          upsert: {
            args: Prisma.BrinquedoLocadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrinquedoLocadoPayload>
          }
          aggregate: {
            args: Prisma.BrinquedoLocadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrinquedoLocado>
          }
          groupBy: {
            args: Prisma.BrinquedoLocadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrinquedoLocadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrinquedoLocadoCountArgs<ExtArgs>
            result: $Utils.Optional<BrinquedoLocadoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Locacao: {
        payload: Prisma.$LocacaoPayload<ExtArgs>
        fields: Prisma.LocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          findFirst: {
            args: Prisma.LocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          findMany: {
            args: Prisma.LocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>[]
          }
          create: {
            args: Prisma.LocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          createMany: {
            args: Prisma.LocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>[]
          }
          delete: {
            args: Prisma.LocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          update: {
            args: Prisma.LocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>[]
          }
          upsert: {
            args: Prisma.LocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          aggregate: {
            args: Prisma.LocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocacao>
          }
          groupBy: {
            args: Prisma.LocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocacaoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      TipoBrinquedo: {
        payload: Prisma.$TipoBrinquedoPayload<ExtArgs>
        fields: Prisma.TipoBrinquedoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoBrinquedoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoBrinquedoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          findFirst: {
            args: Prisma.TipoBrinquedoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoBrinquedoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          findMany: {
            args: Prisma.TipoBrinquedoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>[]
          }
          create: {
            args: Prisma.TipoBrinquedoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          createMany: {
            args: Prisma.TipoBrinquedoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoBrinquedoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>[]
          }
          delete: {
            args: Prisma.TipoBrinquedoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          update: {
            args: Prisma.TipoBrinquedoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          deleteMany: {
            args: Prisma.TipoBrinquedoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoBrinquedoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoBrinquedoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>[]
          }
          upsert: {
            args: Prisma.TipoBrinquedoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBrinquedoPayload>
          }
          aggregate: {
            args: Prisma.TipoBrinquedoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoBrinquedo>
          }
          groupBy: {
            args: Prisma.TipoBrinquedoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoBrinquedoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoBrinquedoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoBrinquedoCountAggregateOutputType> | number
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
    brinquedo?: BrinquedoOmit
    brinquedoLocado?: BrinquedoLocadoOmit
    cliente?: ClienteOmit
    funcionario?: FuncionarioOmit
    locacao?: LocacaoOmit
    pagamento?: PagamentoOmit
    tipoBrinquedo?: TipoBrinquedoOmit
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
   * Count Type BrinquedoCountOutputType
   */

  export type BrinquedoCountOutputType = {
    brinquedosLocados: number
  }

  export type BrinquedoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brinquedosLocados?: boolean | BrinquedoCountOutputTypeCountBrinquedosLocadosArgs
  }

  // Custom InputTypes
  /**
   * BrinquedoCountOutputType without action
   */
  export type BrinquedoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoCountOutputType
     */
    select?: BrinquedoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrinquedoCountOutputType without action
   */
  export type BrinquedoCountOutputTypeCountBrinquedosLocadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrinquedoLocadoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    locacoes: number
    pagamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacoes?: boolean | ClienteCountOutputTypeCountLocacoesArgs
    pagamentos?: boolean | ClienteCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountLocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocacaoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }


  /**
   * Count Type LocacaoCountOutputType
   */

  export type LocacaoCountOutputType = {
    brinquedosLocados: number
  }

  export type LocacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brinquedosLocados?: boolean | LocacaoCountOutputTypeCountBrinquedosLocadosArgs
  }

  // Custom InputTypes
  /**
   * LocacaoCountOutputType without action
   */
  export type LocacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocacaoCountOutputType
     */
    select?: LocacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocacaoCountOutputType without action
   */
  export type LocacaoCountOutputTypeCountBrinquedosLocadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrinquedoLocadoWhereInput
  }


  /**
   * Count Type TipoBrinquedoCountOutputType
   */

  export type TipoBrinquedoCountOutputType = {
    brinquedos: number
  }

  export type TipoBrinquedoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brinquedos?: boolean | TipoBrinquedoCountOutputTypeCountBrinquedosArgs
  }

  // Custom InputTypes
  /**
   * TipoBrinquedoCountOutputType without action
   */
  export type TipoBrinquedoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedoCountOutputType
     */
    select?: TipoBrinquedoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoBrinquedoCountOutputType without action
   */
  export type TipoBrinquedoCountOutputTypeCountBrinquedosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrinquedoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Brinquedo
   */

  export type AggregateBrinquedo = {
    _count: BrinquedoCountAggregateOutputType | null
    _avg: BrinquedoAvgAggregateOutputType | null
    _sum: BrinquedoSumAggregateOutputType | null
    _min: BrinquedoMinAggregateOutputType | null
    _max: BrinquedoMaxAggregateOutputType | null
  }

  export type BrinquedoAvgAggregateOutputType = {
    valor_locacao: Decimal | null
  }

  export type BrinquedoSumAggregateOutputType = {
    valor_locacao: Decimal | null
  }

  export type BrinquedoMinAggregateOutputType = {
    cod: string | null
    nome: string | null
    tipo_brinquedo: string | null
    marca: string | null
    data_aquisicao: Date | null
    valor_locacao: Decimal | null
    ativo: boolean | null
  }

  export type BrinquedoMaxAggregateOutputType = {
    cod: string | null
    nome: string | null
    tipo_brinquedo: string | null
    marca: string | null
    data_aquisicao: Date | null
    valor_locacao: Decimal | null
    ativo: boolean | null
  }

  export type BrinquedoCountAggregateOutputType = {
    cod: number
    nome: number
    tipo_brinquedo: number
    marca: number
    data_aquisicao: number
    valor_locacao: number
    ativo: number
    _all: number
  }


  export type BrinquedoAvgAggregateInputType = {
    valor_locacao?: true
  }

  export type BrinquedoSumAggregateInputType = {
    valor_locacao?: true
  }

  export type BrinquedoMinAggregateInputType = {
    cod?: true
    nome?: true
    tipo_brinquedo?: true
    marca?: true
    data_aquisicao?: true
    valor_locacao?: true
    ativo?: true
  }

  export type BrinquedoMaxAggregateInputType = {
    cod?: true
    nome?: true
    tipo_brinquedo?: true
    marca?: true
    data_aquisicao?: true
    valor_locacao?: true
    ativo?: true
  }

  export type BrinquedoCountAggregateInputType = {
    cod?: true
    nome?: true
    tipo_brinquedo?: true
    marca?: true
    data_aquisicao?: true
    valor_locacao?: true
    ativo?: true
    _all?: true
  }

  export type BrinquedoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brinquedo to aggregate.
     */
    where?: BrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brinquedos to fetch.
     */
    orderBy?: BrinquedoOrderByWithRelationInput | BrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brinquedos
    **/
    _count?: true | BrinquedoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrinquedoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrinquedoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrinquedoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrinquedoMaxAggregateInputType
  }

  export type GetBrinquedoAggregateType<T extends BrinquedoAggregateArgs> = {
        [P in keyof T & keyof AggregateBrinquedo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrinquedo[P]>
      : GetScalarType<T[P], AggregateBrinquedo[P]>
  }




  export type BrinquedoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrinquedoWhereInput
    orderBy?: BrinquedoOrderByWithAggregationInput | BrinquedoOrderByWithAggregationInput[]
    by: BrinquedoScalarFieldEnum[] | BrinquedoScalarFieldEnum
    having?: BrinquedoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrinquedoCountAggregateInputType | true
    _avg?: BrinquedoAvgAggregateInputType
    _sum?: BrinquedoSumAggregateInputType
    _min?: BrinquedoMinAggregateInputType
    _max?: BrinquedoMaxAggregateInputType
  }

  export type BrinquedoGroupByOutputType = {
    cod: string
    nome: string
    tipo_brinquedo: string
    marca: string
    data_aquisicao: Date
    valor_locacao: Decimal
    ativo: boolean
    _count: BrinquedoCountAggregateOutputType | null
    _avg: BrinquedoAvgAggregateOutputType | null
    _sum: BrinquedoSumAggregateOutputType | null
    _min: BrinquedoMinAggregateOutputType | null
    _max: BrinquedoMaxAggregateOutputType | null
  }

  type GetBrinquedoGroupByPayload<T extends BrinquedoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrinquedoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrinquedoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrinquedoGroupByOutputType[P]>
            : GetScalarType<T[P], BrinquedoGroupByOutputType[P]>
        }
      >
    >


  export type BrinquedoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    tipo_brinquedo?: boolean
    marca?: boolean
    data_aquisicao?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
    brinquedosLocados?: boolean | Brinquedo$brinquedosLocadosArgs<ExtArgs>
    _count?: boolean | BrinquedoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedo"]>

  export type BrinquedoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    tipo_brinquedo?: boolean
    marca?: boolean
    data_aquisicao?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedo"]>

  export type BrinquedoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    tipo_brinquedo?: boolean
    marca?: boolean
    data_aquisicao?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedo"]>

  export type BrinquedoSelectScalar = {
    cod?: boolean
    nome?: boolean
    tipo_brinquedo?: boolean
    marca?: boolean
    data_aquisicao?: boolean
    valor_locacao?: boolean
    ativo?: boolean
  }

  export type BrinquedoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cod" | "nome" | "tipo_brinquedo" | "marca" | "data_aquisicao" | "valor_locacao" | "ativo", ExtArgs["result"]["brinquedo"]>
  export type BrinquedoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
    brinquedosLocados?: boolean | Brinquedo$brinquedosLocadosArgs<ExtArgs>
    _count?: boolean | BrinquedoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrinquedoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
  }
  export type BrinquedoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoBrinquedo?: boolean | TipoBrinquedoDefaultArgs<ExtArgs>
  }

  export type $BrinquedoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brinquedo"
    objects: {
      tipoBrinquedo: Prisma.$TipoBrinquedoPayload<ExtArgs>
      brinquedosLocados: Prisma.$BrinquedoLocadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cod: string
      nome: string
      tipo_brinquedo: string
      marca: string
      data_aquisicao: Date
      valor_locacao: Prisma.Decimal
      ativo: boolean
    }, ExtArgs["result"]["brinquedo"]>
    composites: {}
  }

  type BrinquedoGetPayload<S extends boolean | null | undefined | BrinquedoDefaultArgs> = $Result.GetResult<Prisma.$BrinquedoPayload, S>

  type BrinquedoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrinquedoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrinquedoCountAggregateInputType | true
    }

  export interface BrinquedoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brinquedo'], meta: { name: 'Brinquedo' } }
    /**
     * Find zero or one Brinquedo that matches the filter.
     * @param {BrinquedoFindUniqueArgs} args - Arguments to find a Brinquedo
     * @example
     * // Get one Brinquedo
     * const brinquedo = await prisma.brinquedo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrinquedoFindUniqueArgs>(args: SelectSubset<T, BrinquedoFindUniqueArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brinquedo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrinquedoFindUniqueOrThrowArgs} args - Arguments to find a Brinquedo
     * @example
     * // Get one Brinquedo
     * const brinquedo = await prisma.brinquedo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrinquedoFindUniqueOrThrowArgs>(args: SelectSubset<T, BrinquedoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brinquedo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoFindFirstArgs} args - Arguments to find a Brinquedo
     * @example
     * // Get one Brinquedo
     * const brinquedo = await prisma.brinquedo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrinquedoFindFirstArgs>(args?: SelectSubset<T, BrinquedoFindFirstArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brinquedo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoFindFirstOrThrowArgs} args - Arguments to find a Brinquedo
     * @example
     * // Get one Brinquedo
     * const brinquedo = await prisma.brinquedo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrinquedoFindFirstOrThrowArgs>(args?: SelectSubset<T, BrinquedoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brinquedos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brinquedos
     * const brinquedos = await prisma.brinquedo.findMany()
     * 
     * // Get first 10 Brinquedos
     * const brinquedos = await prisma.brinquedo.findMany({ take: 10 })
     * 
     * // Only select the `cod`
     * const brinquedoWithCodOnly = await prisma.brinquedo.findMany({ select: { cod: true } })
     * 
     */
    findMany<T extends BrinquedoFindManyArgs>(args?: SelectSubset<T, BrinquedoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brinquedo.
     * @param {BrinquedoCreateArgs} args - Arguments to create a Brinquedo.
     * @example
     * // Create one Brinquedo
     * const Brinquedo = await prisma.brinquedo.create({
     *   data: {
     *     // ... data to create a Brinquedo
     *   }
     * })
     * 
     */
    create<T extends BrinquedoCreateArgs>(args: SelectSubset<T, BrinquedoCreateArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brinquedos.
     * @param {BrinquedoCreateManyArgs} args - Arguments to create many Brinquedos.
     * @example
     * // Create many Brinquedos
     * const brinquedo = await prisma.brinquedo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrinquedoCreateManyArgs>(args?: SelectSubset<T, BrinquedoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brinquedos and returns the data saved in the database.
     * @param {BrinquedoCreateManyAndReturnArgs} args - Arguments to create many Brinquedos.
     * @example
     * // Create many Brinquedos
     * const brinquedo = await prisma.brinquedo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brinquedos and only return the `cod`
     * const brinquedoWithCodOnly = await prisma.brinquedo.createManyAndReturn({
     *   select: { cod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrinquedoCreateManyAndReturnArgs>(args?: SelectSubset<T, BrinquedoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brinquedo.
     * @param {BrinquedoDeleteArgs} args - Arguments to delete one Brinquedo.
     * @example
     * // Delete one Brinquedo
     * const Brinquedo = await prisma.brinquedo.delete({
     *   where: {
     *     // ... filter to delete one Brinquedo
     *   }
     * })
     * 
     */
    delete<T extends BrinquedoDeleteArgs>(args: SelectSubset<T, BrinquedoDeleteArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brinquedo.
     * @param {BrinquedoUpdateArgs} args - Arguments to update one Brinquedo.
     * @example
     * // Update one Brinquedo
     * const brinquedo = await prisma.brinquedo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrinquedoUpdateArgs>(args: SelectSubset<T, BrinquedoUpdateArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brinquedos.
     * @param {BrinquedoDeleteManyArgs} args - Arguments to filter Brinquedos to delete.
     * @example
     * // Delete a few Brinquedos
     * const { count } = await prisma.brinquedo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrinquedoDeleteManyArgs>(args?: SelectSubset<T, BrinquedoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brinquedos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brinquedos
     * const brinquedo = await prisma.brinquedo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrinquedoUpdateManyArgs>(args: SelectSubset<T, BrinquedoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brinquedos and returns the data updated in the database.
     * @param {BrinquedoUpdateManyAndReturnArgs} args - Arguments to update many Brinquedos.
     * @example
     * // Update many Brinquedos
     * const brinquedo = await prisma.brinquedo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brinquedos and only return the `cod`
     * const brinquedoWithCodOnly = await prisma.brinquedo.updateManyAndReturn({
     *   select: { cod: true },
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
    updateManyAndReturn<T extends BrinquedoUpdateManyAndReturnArgs>(args: SelectSubset<T, BrinquedoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brinquedo.
     * @param {BrinquedoUpsertArgs} args - Arguments to update or create a Brinquedo.
     * @example
     * // Update or create a Brinquedo
     * const brinquedo = await prisma.brinquedo.upsert({
     *   create: {
     *     // ... data to create a Brinquedo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brinquedo we want to update
     *   }
     * })
     */
    upsert<T extends BrinquedoUpsertArgs>(args: SelectSubset<T, BrinquedoUpsertArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brinquedos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoCountArgs} args - Arguments to filter Brinquedos to count.
     * @example
     * // Count the number of Brinquedos
     * const count = await prisma.brinquedo.count({
     *   where: {
     *     // ... the filter for the Brinquedos we want to count
     *   }
     * })
    **/
    count<T extends BrinquedoCountArgs>(
      args?: Subset<T, BrinquedoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrinquedoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brinquedo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrinquedoAggregateArgs>(args: Subset<T, BrinquedoAggregateArgs>): Prisma.PrismaPromise<GetBrinquedoAggregateType<T>>

    /**
     * Group by Brinquedo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoGroupByArgs} args - Group by arguments.
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
      T extends BrinquedoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrinquedoGroupByArgs['orderBy'] }
        : { orderBy?: BrinquedoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrinquedoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrinquedoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brinquedo model
   */
  readonly fields: BrinquedoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brinquedo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrinquedoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoBrinquedo<T extends TipoBrinquedoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoBrinquedoDefaultArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brinquedosLocados<T extends Brinquedo$brinquedosLocadosArgs<ExtArgs> = {}>(args?: Subset<T, Brinquedo$brinquedosLocadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brinquedo model
   */ 
  interface BrinquedoFieldRefs {
    readonly cod: FieldRef<"Brinquedo", 'String'>
    readonly nome: FieldRef<"Brinquedo", 'String'>
    readonly tipo_brinquedo: FieldRef<"Brinquedo", 'String'>
    readonly marca: FieldRef<"Brinquedo", 'String'>
    readonly data_aquisicao: FieldRef<"Brinquedo", 'DateTime'>
    readonly valor_locacao: FieldRef<"Brinquedo", 'Decimal'>
    readonly ativo: FieldRef<"Brinquedo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Brinquedo findUnique
   */
  export type BrinquedoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which Brinquedo to fetch.
     */
    where: BrinquedoWhereUniqueInput
  }

  /**
   * Brinquedo findUniqueOrThrow
   */
  export type BrinquedoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which Brinquedo to fetch.
     */
    where: BrinquedoWhereUniqueInput
  }

  /**
   * Brinquedo findFirst
   */
  export type BrinquedoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which Brinquedo to fetch.
     */
    where?: BrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brinquedos to fetch.
     */
    orderBy?: BrinquedoOrderByWithRelationInput | BrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brinquedos.
     */
    cursor?: BrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brinquedos.
     */
    distinct?: BrinquedoScalarFieldEnum | BrinquedoScalarFieldEnum[]
  }

  /**
   * Brinquedo findFirstOrThrow
   */
  export type BrinquedoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which Brinquedo to fetch.
     */
    where?: BrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brinquedos to fetch.
     */
    orderBy?: BrinquedoOrderByWithRelationInput | BrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brinquedos.
     */
    cursor?: BrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brinquedos.
     */
    distinct?: BrinquedoScalarFieldEnum | BrinquedoScalarFieldEnum[]
  }

  /**
   * Brinquedo findMany
   */
  export type BrinquedoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which Brinquedos to fetch.
     */
    where?: BrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brinquedos to fetch.
     */
    orderBy?: BrinquedoOrderByWithRelationInput | BrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brinquedos.
     */
    cursor?: BrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brinquedos.
     */
    skip?: number
    distinct?: BrinquedoScalarFieldEnum | BrinquedoScalarFieldEnum[]
  }

  /**
   * Brinquedo create
   */
  export type BrinquedoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * The data needed to create a Brinquedo.
     */
    data: XOR<BrinquedoCreateInput, BrinquedoUncheckedCreateInput>
  }

  /**
   * Brinquedo createMany
   */
  export type BrinquedoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brinquedos.
     */
    data: BrinquedoCreateManyInput | BrinquedoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brinquedo createManyAndReturn
   */
  export type BrinquedoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * The data used to create many Brinquedos.
     */
    data: BrinquedoCreateManyInput | BrinquedoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brinquedo update
   */
  export type BrinquedoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * The data needed to update a Brinquedo.
     */
    data: XOR<BrinquedoUpdateInput, BrinquedoUncheckedUpdateInput>
    /**
     * Choose, which Brinquedo to update.
     */
    where: BrinquedoWhereUniqueInput
  }

  /**
   * Brinquedo updateMany
   */
  export type BrinquedoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brinquedos.
     */
    data: XOR<BrinquedoUpdateManyMutationInput, BrinquedoUncheckedUpdateManyInput>
    /**
     * Filter which Brinquedos to update
     */
    where?: BrinquedoWhereInput
    /**
     * Limit how many Brinquedos to update.
     */
    limit?: number
  }

  /**
   * Brinquedo updateManyAndReturn
   */
  export type BrinquedoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * The data used to update Brinquedos.
     */
    data: XOR<BrinquedoUpdateManyMutationInput, BrinquedoUncheckedUpdateManyInput>
    /**
     * Filter which Brinquedos to update
     */
    where?: BrinquedoWhereInput
    /**
     * Limit how many Brinquedos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brinquedo upsert
   */
  export type BrinquedoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * The filter to search for the Brinquedo to update in case it exists.
     */
    where: BrinquedoWhereUniqueInput
    /**
     * In case the Brinquedo found by the `where` argument doesn't exist, create a new Brinquedo with this data.
     */
    create: XOR<BrinquedoCreateInput, BrinquedoUncheckedCreateInput>
    /**
     * In case the Brinquedo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrinquedoUpdateInput, BrinquedoUncheckedUpdateInput>
  }

  /**
   * Brinquedo delete
   */
  export type BrinquedoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    /**
     * Filter which Brinquedo to delete.
     */
    where: BrinquedoWhereUniqueInput
  }

  /**
   * Brinquedo deleteMany
   */
  export type BrinquedoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brinquedos to delete
     */
    where?: BrinquedoWhereInput
    /**
     * Limit how many Brinquedos to delete.
     */
    limit?: number
  }

  /**
   * Brinquedo.brinquedosLocados
   */
  export type Brinquedo$brinquedosLocadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    where?: BrinquedoLocadoWhereInput
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    cursor?: BrinquedoLocadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrinquedoLocadoScalarFieldEnum | BrinquedoLocadoScalarFieldEnum[]
  }

  /**
   * Brinquedo without action
   */
  export type BrinquedoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
  }


  /**
   * Model BrinquedoLocado
   */

  export type AggregateBrinquedoLocado = {
    _count: BrinquedoLocadoCountAggregateOutputType | null
    _avg: BrinquedoLocadoAvgAggregateOutputType | null
    _sum: BrinquedoLocadoSumAggregateOutputType | null
    _min: BrinquedoLocadoMinAggregateOutputType | null
    _max: BrinquedoLocadoMaxAggregateOutputType | null
  }

  export type BrinquedoLocadoAvgAggregateOutputType = {
    valor_unitario: Decimal | null
  }

  export type BrinquedoLocadoSumAggregateOutputType = {
    valor_unitario: Decimal | null
  }

  export type BrinquedoLocadoMinAggregateOutputType = {
    cod: string | null
    valor_unitario: Decimal | null
    nome: string | null
    cod_locacao: string | null
    data_devolucao: Date | null
    cod_brinquedo: string | null
    ativo: boolean | null
  }

  export type BrinquedoLocadoMaxAggregateOutputType = {
    cod: string | null
    valor_unitario: Decimal | null
    nome: string | null
    cod_locacao: string | null
    data_devolucao: Date | null
    cod_brinquedo: string | null
    ativo: boolean | null
  }

  export type BrinquedoLocadoCountAggregateOutputType = {
    cod: number
    valor_unitario: number
    nome: number
    cod_locacao: number
    data_devolucao: number
    cod_brinquedo: number
    ativo: number
    _all: number
  }


  export type BrinquedoLocadoAvgAggregateInputType = {
    valor_unitario?: true
  }

  export type BrinquedoLocadoSumAggregateInputType = {
    valor_unitario?: true
  }

  export type BrinquedoLocadoMinAggregateInputType = {
    cod?: true
    valor_unitario?: true
    nome?: true
    cod_locacao?: true
    data_devolucao?: true
    cod_brinquedo?: true
    ativo?: true
  }

  export type BrinquedoLocadoMaxAggregateInputType = {
    cod?: true
    valor_unitario?: true
    nome?: true
    cod_locacao?: true
    data_devolucao?: true
    cod_brinquedo?: true
    ativo?: true
  }

  export type BrinquedoLocadoCountAggregateInputType = {
    cod?: true
    valor_unitario?: true
    nome?: true
    cod_locacao?: true
    data_devolucao?: true
    cod_brinquedo?: true
    ativo?: true
    _all?: true
  }

  export type BrinquedoLocadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrinquedoLocado to aggregate.
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrinquedoLocados to fetch.
     */
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrinquedoLocadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrinquedoLocados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrinquedoLocados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrinquedoLocados
    **/
    _count?: true | BrinquedoLocadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrinquedoLocadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrinquedoLocadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrinquedoLocadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrinquedoLocadoMaxAggregateInputType
  }

  export type GetBrinquedoLocadoAggregateType<T extends BrinquedoLocadoAggregateArgs> = {
        [P in keyof T & keyof AggregateBrinquedoLocado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrinquedoLocado[P]>
      : GetScalarType<T[P], AggregateBrinquedoLocado[P]>
  }




  export type BrinquedoLocadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrinquedoLocadoWhereInput
    orderBy?: BrinquedoLocadoOrderByWithAggregationInput | BrinquedoLocadoOrderByWithAggregationInput[]
    by: BrinquedoLocadoScalarFieldEnum[] | BrinquedoLocadoScalarFieldEnum
    having?: BrinquedoLocadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrinquedoLocadoCountAggregateInputType | true
    _avg?: BrinquedoLocadoAvgAggregateInputType
    _sum?: BrinquedoLocadoSumAggregateInputType
    _min?: BrinquedoLocadoMinAggregateInputType
    _max?: BrinquedoLocadoMaxAggregateInputType
  }

  export type BrinquedoLocadoGroupByOutputType = {
    cod: string
    valor_unitario: Decimal
    nome: string
    cod_locacao: string
    data_devolucao: Date
    cod_brinquedo: string
    ativo: boolean
    _count: BrinquedoLocadoCountAggregateOutputType | null
    _avg: BrinquedoLocadoAvgAggregateOutputType | null
    _sum: BrinquedoLocadoSumAggregateOutputType | null
    _min: BrinquedoLocadoMinAggregateOutputType | null
    _max: BrinquedoLocadoMaxAggregateOutputType | null
  }

  type GetBrinquedoLocadoGroupByPayload<T extends BrinquedoLocadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrinquedoLocadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrinquedoLocadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrinquedoLocadoGroupByOutputType[P]>
            : GetScalarType<T[P], BrinquedoLocadoGroupByOutputType[P]>
        }
      >
    >


  export type BrinquedoLocadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    valor_unitario?: boolean
    nome?: boolean
    cod_locacao?: boolean
    data_devolucao?: boolean
    cod_brinquedo?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedoLocado"]>

  export type BrinquedoLocadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    valor_unitario?: boolean
    nome?: boolean
    cod_locacao?: boolean
    data_devolucao?: boolean
    cod_brinquedo?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedoLocado"]>

  export type BrinquedoLocadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    valor_unitario?: boolean
    nome?: boolean
    cod_locacao?: boolean
    data_devolucao?: boolean
    cod_brinquedo?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brinquedoLocado"]>

  export type BrinquedoLocadoSelectScalar = {
    cod?: boolean
    valor_unitario?: boolean
    nome?: boolean
    cod_locacao?: boolean
    data_devolucao?: boolean
    cod_brinquedo?: boolean
    ativo?: boolean
  }

  export type BrinquedoLocadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cod" | "valor_unitario" | "nome" | "cod_locacao" | "data_devolucao" | "cod_brinquedo" | "ativo", ExtArgs["result"]["brinquedoLocado"]>
  export type BrinquedoLocadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }
  export type BrinquedoLocadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }
  export type BrinquedoLocadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    brinquedo?: boolean | BrinquedoDefaultArgs<ExtArgs>
  }

  export type $BrinquedoLocadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrinquedoLocado"
    objects: {
      locacao: Prisma.$LocacaoPayload<ExtArgs>
      brinquedo: Prisma.$BrinquedoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cod: string
      valor_unitario: Prisma.Decimal
      nome: string
      cod_locacao: string
      data_devolucao: Date
      cod_brinquedo: string
      ativo: boolean
    }, ExtArgs["result"]["brinquedoLocado"]>
    composites: {}
  }

  type BrinquedoLocadoGetPayload<S extends boolean | null | undefined | BrinquedoLocadoDefaultArgs> = $Result.GetResult<Prisma.$BrinquedoLocadoPayload, S>

  type BrinquedoLocadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrinquedoLocadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrinquedoLocadoCountAggregateInputType | true
    }

  export interface BrinquedoLocadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrinquedoLocado'], meta: { name: 'BrinquedoLocado' } }
    /**
     * Find zero or one BrinquedoLocado that matches the filter.
     * @param {BrinquedoLocadoFindUniqueArgs} args - Arguments to find a BrinquedoLocado
     * @example
     * // Get one BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrinquedoLocadoFindUniqueArgs>(args: SelectSubset<T, BrinquedoLocadoFindUniqueArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrinquedoLocado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrinquedoLocadoFindUniqueOrThrowArgs} args - Arguments to find a BrinquedoLocado
     * @example
     * // Get one BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrinquedoLocadoFindUniqueOrThrowArgs>(args: SelectSubset<T, BrinquedoLocadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrinquedoLocado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoFindFirstArgs} args - Arguments to find a BrinquedoLocado
     * @example
     * // Get one BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrinquedoLocadoFindFirstArgs>(args?: SelectSubset<T, BrinquedoLocadoFindFirstArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrinquedoLocado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoFindFirstOrThrowArgs} args - Arguments to find a BrinquedoLocado
     * @example
     * // Get one BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrinquedoLocadoFindFirstOrThrowArgs>(args?: SelectSubset<T, BrinquedoLocadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrinquedoLocados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrinquedoLocados
     * const brinquedoLocados = await prisma.brinquedoLocado.findMany()
     * 
     * // Get first 10 BrinquedoLocados
     * const brinquedoLocados = await prisma.brinquedoLocado.findMany({ take: 10 })
     * 
     * // Only select the `cod`
     * const brinquedoLocadoWithCodOnly = await prisma.brinquedoLocado.findMany({ select: { cod: true } })
     * 
     */
    findMany<T extends BrinquedoLocadoFindManyArgs>(args?: SelectSubset<T, BrinquedoLocadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrinquedoLocado.
     * @param {BrinquedoLocadoCreateArgs} args - Arguments to create a BrinquedoLocado.
     * @example
     * // Create one BrinquedoLocado
     * const BrinquedoLocado = await prisma.brinquedoLocado.create({
     *   data: {
     *     // ... data to create a BrinquedoLocado
     *   }
     * })
     * 
     */
    create<T extends BrinquedoLocadoCreateArgs>(args: SelectSubset<T, BrinquedoLocadoCreateArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrinquedoLocados.
     * @param {BrinquedoLocadoCreateManyArgs} args - Arguments to create many BrinquedoLocados.
     * @example
     * // Create many BrinquedoLocados
     * const brinquedoLocado = await prisma.brinquedoLocado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrinquedoLocadoCreateManyArgs>(args?: SelectSubset<T, BrinquedoLocadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrinquedoLocados and returns the data saved in the database.
     * @param {BrinquedoLocadoCreateManyAndReturnArgs} args - Arguments to create many BrinquedoLocados.
     * @example
     * // Create many BrinquedoLocados
     * const brinquedoLocado = await prisma.brinquedoLocado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrinquedoLocados and only return the `cod`
     * const brinquedoLocadoWithCodOnly = await prisma.brinquedoLocado.createManyAndReturn({
     *   select: { cod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrinquedoLocadoCreateManyAndReturnArgs>(args?: SelectSubset<T, BrinquedoLocadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrinquedoLocado.
     * @param {BrinquedoLocadoDeleteArgs} args - Arguments to delete one BrinquedoLocado.
     * @example
     * // Delete one BrinquedoLocado
     * const BrinquedoLocado = await prisma.brinquedoLocado.delete({
     *   where: {
     *     // ... filter to delete one BrinquedoLocado
     *   }
     * })
     * 
     */
    delete<T extends BrinquedoLocadoDeleteArgs>(args: SelectSubset<T, BrinquedoLocadoDeleteArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrinquedoLocado.
     * @param {BrinquedoLocadoUpdateArgs} args - Arguments to update one BrinquedoLocado.
     * @example
     * // Update one BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrinquedoLocadoUpdateArgs>(args: SelectSubset<T, BrinquedoLocadoUpdateArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrinquedoLocados.
     * @param {BrinquedoLocadoDeleteManyArgs} args - Arguments to filter BrinquedoLocados to delete.
     * @example
     * // Delete a few BrinquedoLocados
     * const { count } = await prisma.brinquedoLocado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrinquedoLocadoDeleteManyArgs>(args?: SelectSubset<T, BrinquedoLocadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrinquedoLocados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrinquedoLocados
     * const brinquedoLocado = await prisma.brinquedoLocado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrinquedoLocadoUpdateManyArgs>(args: SelectSubset<T, BrinquedoLocadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrinquedoLocados and returns the data updated in the database.
     * @param {BrinquedoLocadoUpdateManyAndReturnArgs} args - Arguments to update many BrinquedoLocados.
     * @example
     * // Update many BrinquedoLocados
     * const brinquedoLocado = await prisma.brinquedoLocado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrinquedoLocados and only return the `cod`
     * const brinquedoLocadoWithCodOnly = await prisma.brinquedoLocado.updateManyAndReturn({
     *   select: { cod: true },
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
    updateManyAndReturn<T extends BrinquedoLocadoUpdateManyAndReturnArgs>(args: SelectSubset<T, BrinquedoLocadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrinquedoLocado.
     * @param {BrinquedoLocadoUpsertArgs} args - Arguments to update or create a BrinquedoLocado.
     * @example
     * // Update or create a BrinquedoLocado
     * const brinquedoLocado = await prisma.brinquedoLocado.upsert({
     *   create: {
     *     // ... data to create a BrinquedoLocado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrinquedoLocado we want to update
     *   }
     * })
     */
    upsert<T extends BrinquedoLocadoUpsertArgs>(args: SelectSubset<T, BrinquedoLocadoUpsertArgs<ExtArgs>>): Prisma__BrinquedoLocadoClient<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrinquedoLocados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoCountArgs} args - Arguments to filter BrinquedoLocados to count.
     * @example
     * // Count the number of BrinquedoLocados
     * const count = await prisma.brinquedoLocado.count({
     *   where: {
     *     // ... the filter for the BrinquedoLocados we want to count
     *   }
     * })
    **/
    count<T extends BrinquedoLocadoCountArgs>(
      args?: Subset<T, BrinquedoLocadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrinquedoLocadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrinquedoLocado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrinquedoLocadoAggregateArgs>(args: Subset<T, BrinquedoLocadoAggregateArgs>): Prisma.PrismaPromise<GetBrinquedoLocadoAggregateType<T>>

    /**
     * Group by BrinquedoLocado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrinquedoLocadoGroupByArgs} args - Group by arguments.
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
      T extends BrinquedoLocadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrinquedoLocadoGroupByArgs['orderBy'] }
        : { orderBy?: BrinquedoLocadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrinquedoLocadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrinquedoLocadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrinquedoLocado model
   */
  readonly fields: BrinquedoLocadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrinquedoLocado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrinquedoLocadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locacao<T extends LocacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocacaoDefaultArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brinquedo<T extends BrinquedoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrinquedoDefaultArgs<ExtArgs>>): Prisma__BrinquedoClient<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrinquedoLocado model
   */ 
  interface BrinquedoLocadoFieldRefs {
    readonly cod: FieldRef<"BrinquedoLocado", 'String'>
    readonly valor_unitario: FieldRef<"BrinquedoLocado", 'Decimal'>
    readonly nome: FieldRef<"BrinquedoLocado", 'String'>
    readonly cod_locacao: FieldRef<"BrinquedoLocado", 'String'>
    readonly data_devolucao: FieldRef<"BrinquedoLocado", 'DateTime'>
    readonly cod_brinquedo: FieldRef<"BrinquedoLocado", 'String'>
    readonly ativo: FieldRef<"BrinquedoLocado", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BrinquedoLocado findUnique
   */
  export type BrinquedoLocadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter, which BrinquedoLocado to fetch.
     */
    where: BrinquedoLocadoWhereUniqueInput
  }

  /**
   * BrinquedoLocado findUniqueOrThrow
   */
  export type BrinquedoLocadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter, which BrinquedoLocado to fetch.
     */
    where: BrinquedoLocadoWhereUniqueInput
  }

  /**
   * BrinquedoLocado findFirst
   */
  export type BrinquedoLocadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter, which BrinquedoLocado to fetch.
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrinquedoLocados to fetch.
     */
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrinquedoLocados.
     */
    cursor?: BrinquedoLocadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrinquedoLocados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrinquedoLocados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrinquedoLocados.
     */
    distinct?: BrinquedoLocadoScalarFieldEnum | BrinquedoLocadoScalarFieldEnum[]
  }

  /**
   * BrinquedoLocado findFirstOrThrow
   */
  export type BrinquedoLocadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter, which BrinquedoLocado to fetch.
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrinquedoLocados to fetch.
     */
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrinquedoLocados.
     */
    cursor?: BrinquedoLocadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrinquedoLocados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrinquedoLocados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrinquedoLocados.
     */
    distinct?: BrinquedoLocadoScalarFieldEnum | BrinquedoLocadoScalarFieldEnum[]
  }

  /**
   * BrinquedoLocado findMany
   */
  export type BrinquedoLocadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter, which BrinquedoLocados to fetch.
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrinquedoLocados to fetch.
     */
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrinquedoLocados.
     */
    cursor?: BrinquedoLocadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrinquedoLocados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrinquedoLocados.
     */
    skip?: number
    distinct?: BrinquedoLocadoScalarFieldEnum | BrinquedoLocadoScalarFieldEnum[]
  }

  /**
   * BrinquedoLocado create
   */
  export type BrinquedoLocadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * The data needed to create a BrinquedoLocado.
     */
    data: XOR<BrinquedoLocadoCreateInput, BrinquedoLocadoUncheckedCreateInput>
  }

  /**
   * BrinquedoLocado createMany
   */
  export type BrinquedoLocadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrinquedoLocados.
     */
    data: BrinquedoLocadoCreateManyInput | BrinquedoLocadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrinquedoLocado createManyAndReturn
   */
  export type BrinquedoLocadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * The data used to create many BrinquedoLocados.
     */
    data: BrinquedoLocadoCreateManyInput | BrinquedoLocadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrinquedoLocado update
   */
  export type BrinquedoLocadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * The data needed to update a BrinquedoLocado.
     */
    data: XOR<BrinquedoLocadoUpdateInput, BrinquedoLocadoUncheckedUpdateInput>
    /**
     * Choose, which BrinquedoLocado to update.
     */
    where: BrinquedoLocadoWhereUniqueInput
  }

  /**
   * BrinquedoLocado updateMany
   */
  export type BrinquedoLocadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrinquedoLocados.
     */
    data: XOR<BrinquedoLocadoUpdateManyMutationInput, BrinquedoLocadoUncheckedUpdateManyInput>
    /**
     * Filter which BrinquedoLocados to update
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * Limit how many BrinquedoLocados to update.
     */
    limit?: number
  }

  /**
   * BrinquedoLocado updateManyAndReturn
   */
  export type BrinquedoLocadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * The data used to update BrinquedoLocados.
     */
    data: XOR<BrinquedoLocadoUpdateManyMutationInput, BrinquedoLocadoUncheckedUpdateManyInput>
    /**
     * Filter which BrinquedoLocados to update
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * Limit how many BrinquedoLocados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrinquedoLocado upsert
   */
  export type BrinquedoLocadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * The filter to search for the BrinquedoLocado to update in case it exists.
     */
    where: BrinquedoLocadoWhereUniqueInput
    /**
     * In case the BrinquedoLocado found by the `where` argument doesn't exist, create a new BrinquedoLocado with this data.
     */
    create: XOR<BrinquedoLocadoCreateInput, BrinquedoLocadoUncheckedCreateInput>
    /**
     * In case the BrinquedoLocado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrinquedoLocadoUpdateInput, BrinquedoLocadoUncheckedUpdateInput>
  }

  /**
   * BrinquedoLocado delete
   */
  export type BrinquedoLocadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    /**
     * Filter which BrinquedoLocado to delete.
     */
    where: BrinquedoLocadoWhereUniqueInput
  }

  /**
   * BrinquedoLocado deleteMany
   */
  export type BrinquedoLocadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrinquedoLocados to delete
     */
    where?: BrinquedoLocadoWhereInput
    /**
     * Limit how many BrinquedoLocados to delete.
     */
    limit?: number
  }

  /**
   * BrinquedoLocado without action
   */
  export type BrinquedoLocadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    endereco: string | null
    data_nascimento: Date | null
    telefone: string | null
    ativo: boolean | null
  }

  export type ClienteMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    endereco: string | null
    data_nascimento: Date | null
    telefone: string | null
    ativo: boolean | null
  }

  export type ClienteCountAggregateOutputType = {
    cpf: number
    nome: number
    endereco: number
    data_nascimento: number
    telefone: number
    ativo: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    data_nascimento?: true
    telefone?: true
    ativo?: true
  }

  export type ClienteMaxAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    data_nascimento?: true
    telefone?: true
    ativo?: true
  }

  export type ClienteCountAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    data_nascimento?: true
    telefone?: true
    ativo?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date
    telefone: string
    ativo: boolean
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    ativo?: boolean
    locacoes?: boolean | Cliente$locacoesArgs<ExtArgs>
    pagamentos?: boolean | Cliente$pagamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    ativo?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "endereco" | "data_nascimento" | "telefone" | "ativo", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacoes?: boolean | Cliente$locacoesArgs<ExtArgs>
    pagamentos?: boolean | Cliente$pagamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      locacoes: Prisma.$LocacaoPayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      endereco: string
      data_nascimento: Date
      telefone: string
      ativo: boolean
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locacoes<T extends Cliente$locacoesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$locacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends Cliente$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly data_nascimento: FieldRef<"Cliente", 'DateTime'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly ativo: FieldRef<"Cliente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.locacoes
   */
  export type Cliente$locacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    where?: LocacaoWhereInput
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    cursor?: LocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Cliente.pagamentos
   */
  export type Cliente$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    telefone: string | null
    funcao: $Enums.Funcao | null
    senha: string | null
    ativo: boolean | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    telefone: string | null
    funcao: $Enums.Funcao | null
    senha: string | null
    ativo: boolean | null
  }

  export type FuncionarioCountAggregateOutputType = {
    cpf: number
    nome: number
    telefone: number
    funcao: number
    senha: number
    ativo: number
    _all: number
  }


  export type FuncionarioMinAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
    funcao?: true
    senha?: true
    ativo?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
    funcao?: true
    senha?: true
    ativo?: true
  }

  export type FuncionarioCountAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
    funcao?: true
    senha?: true
    ativo?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    cpf: string
    nome: string
    telefone: string
    funcao: $Enums.Funcao
    senha: string
    ativo: boolean
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
    funcao?: boolean
    senha?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
    funcao?: boolean
    senha?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
    funcao?: boolean
    senha?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
    funcao?: boolean
    senha?: boolean
    ativo?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "telefone" | "funcao" | "senha" | "ativo", ExtArgs["result"]["funcionario"]>

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      telefone: string
      funcao: $Enums.Funcao
      senha: string
      ativo: boolean
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Funcionario model
   */ 
  interface FuncionarioFieldRefs {
    readonly cpf: FieldRef<"Funcionario", 'String'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly telefone: FieldRef<"Funcionario", 'String'>
    readonly funcao: FieldRef<"Funcionario", 'Funcao'>
    readonly senha: FieldRef<"Funcionario", 'String'>
    readonly ativo: FieldRef<"Funcionario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
  }


  /**
   * Model Locacao
   */

  export type AggregateLocacao = {
    _count: LocacaoCountAggregateOutputType | null
    _min: LocacaoMinAggregateOutputType | null
    _max: LocacaoMaxAggregateOutputType | null
  }

  export type LocacaoMinAggregateOutputType = {
    cod: string | null
    data_hora: Date | null
    cpf_cliente: string | null
    ativo: boolean | null
    pgto_status: $Enums.PgtoStatus | null
  }

  export type LocacaoMaxAggregateOutputType = {
    cod: string | null
    data_hora: Date | null
    cpf_cliente: string | null
    ativo: boolean | null
    pgto_status: $Enums.PgtoStatus | null
  }

  export type LocacaoCountAggregateOutputType = {
    cod: number
    data_hora: number
    cpf_cliente: number
    ativo: number
    pgto_status: number
    _all: number
  }


  export type LocacaoMinAggregateInputType = {
    cod?: true
    data_hora?: true
    cpf_cliente?: true
    ativo?: true
    pgto_status?: true
  }

  export type LocacaoMaxAggregateInputType = {
    cod?: true
    data_hora?: true
    cpf_cliente?: true
    ativo?: true
    pgto_status?: true
  }

  export type LocacaoCountAggregateInputType = {
    cod?: true
    data_hora?: true
    cpf_cliente?: true
    ativo?: true
    pgto_status?: true
    _all?: true
  }

  export type LocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locacao to aggregate.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locacaos
    **/
    _count?: true | LocacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocacaoMaxAggregateInputType
  }

  export type GetLocacaoAggregateType<T extends LocacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocacao[P]>
      : GetScalarType<T[P], AggregateLocacao[P]>
  }




  export type LocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocacaoWhereInput
    orderBy?: LocacaoOrderByWithAggregationInput | LocacaoOrderByWithAggregationInput[]
    by: LocacaoScalarFieldEnum[] | LocacaoScalarFieldEnum
    having?: LocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocacaoCountAggregateInputType | true
    _min?: LocacaoMinAggregateInputType
    _max?: LocacaoMaxAggregateInputType
  }

  export type LocacaoGroupByOutputType = {
    cod: string
    data_hora: Date
    cpf_cliente: string
    ativo: boolean
    pgto_status: $Enums.PgtoStatus
    _count: LocacaoCountAggregateOutputType | null
    _min: LocacaoMinAggregateOutputType | null
    _max: LocacaoMaxAggregateOutputType | null
  }

  type GetLocacaoGroupByPayload<T extends LocacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    data_hora?: boolean
    cpf_cliente?: boolean
    ativo?: boolean
    pgto_status?: boolean
    brinquedosLocados?: boolean | Locacao$brinquedosLocadosArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pagamento?: boolean | Locacao$pagamentoArgs<ExtArgs>
    _count?: boolean | LocacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locacao"]>

  export type LocacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    data_hora?: boolean
    cpf_cliente?: boolean
    ativo?: boolean
    pgto_status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locacao"]>

  export type LocacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    data_hora?: boolean
    cpf_cliente?: boolean
    ativo?: boolean
    pgto_status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locacao"]>

  export type LocacaoSelectScalar = {
    cod?: boolean
    data_hora?: boolean
    cpf_cliente?: boolean
    ativo?: boolean
    pgto_status?: boolean
  }

  export type LocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cod" | "data_hora" | "cpf_cliente" | "ativo" | "pgto_status", ExtArgs["result"]["locacao"]>
  export type LocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brinquedosLocados?: boolean | Locacao$brinquedosLocadosArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pagamento?: boolean | Locacao$pagamentoArgs<ExtArgs>
    _count?: boolean | LocacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type LocacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $LocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locacao"
    objects: {
      brinquedosLocados: Prisma.$BrinquedoLocadoPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs>
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cod: string
      data_hora: Date
      cpf_cliente: string
      ativo: boolean
      pgto_status: $Enums.PgtoStatus
    }, ExtArgs["result"]["locacao"]>
    composites: {}
  }

  type LocacaoGetPayload<S extends boolean | null | undefined | LocacaoDefaultArgs> = $Result.GetResult<Prisma.$LocacaoPayload, S>

  type LocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocacaoCountAggregateInputType | true
    }

  export interface LocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locacao'], meta: { name: 'Locacao' } }
    /**
     * Find zero or one Locacao that matches the filter.
     * @param {LocacaoFindUniqueArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocacaoFindUniqueArgs>(args: SelectSubset<T, LocacaoFindUniqueArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocacaoFindUniqueOrThrowArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindFirstArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocacaoFindFirstArgs>(args?: SelectSubset<T, LocacaoFindFirstArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindFirstOrThrowArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locacaos
     * const locacaos = await prisma.locacao.findMany()
     * 
     * // Get first 10 Locacaos
     * const locacaos = await prisma.locacao.findMany({ take: 10 })
     * 
     * // Only select the `cod`
     * const locacaoWithCodOnly = await prisma.locacao.findMany({ select: { cod: true } })
     * 
     */
    findMany<T extends LocacaoFindManyArgs>(args?: SelectSubset<T, LocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locacao.
     * @param {LocacaoCreateArgs} args - Arguments to create a Locacao.
     * @example
     * // Create one Locacao
     * const Locacao = await prisma.locacao.create({
     *   data: {
     *     // ... data to create a Locacao
     *   }
     * })
     * 
     */
    create<T extends LocacaoCreateArgs>(args: SelectSubset<T, LocacaoCreateArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locacaos.
     * @param {LocacaoCreateManyArgs} args - Arguments to create many Locacaos.
     * @example
     * // Create many Locacaos
     * const locacao = await prisma.locacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocacaoCreateManyArgs>(args?: SelectSubset<T, LocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locacaos and returns the data saved in the database.
     * @param {LocacaoCreateManyAndReturnArgs} args - Arguments to create many Locacaos.
     * @example
     * // Create many Locacaos
     * const locacao = await prisma.locacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locacaos and only return the `cod`
     * const locacaoWithCodOnly = await prisma.locacao.createManyAndReturn({
     *   select: { cod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, LocacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locacao.
     * @param {LocacaoDeleteArgs} args - Arguments to delete one Locacao.
     * @example
     * // Delete one Locacao
     * const Locacao = await prisma.locacao.delete({
     *   where: {
     *     // ... filter to delete one Locacao
     *   }
     * })
     * 
     */
    delete<T extends LocacaoDeleteArgs>(args: SelectSubset<T, LocacaoDeleteArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locacao.
     * @param {LocacaoUpdateArgs} args - Arguments to update one Locacao.
     * @example
     * // Update one Locacao
     * const locacao = await prisma.locacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocacaoUpdateArgs>(args: SelectSubset<T, LocacaoUpdateArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locacaos.
     * @param {LocacaoDeleteManyArgs} args - Arguments to filter Locacaos to delete.
     * @example
     * // Delete a few Locacaos
     * const { count } = await prisma.locacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocacaoDeleteManyArgs>(args?: SelectSubset<T, LocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locacaos
     * const locacao = await prisma.locacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocacaoUpdateManyArgs>(args: SelectSubset<T, LocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locacaos and returns the data updated in the database.
     * @param {LocacaoUpdateManyAndReturnArgs} args - Arguments to update many Locacaos.
     * @example
     * // Update many Locacaos
     * const locacao = await prisma.locacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locacaos and only return the `cod`
     * const locacaoWithCodOnly = await prisma.locacao.updateManyAndReturn({
     *   select: { cod: true },
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
    updateManyAndReturn<T extends LocacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, LocacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locacao.
     * @param {LocacaoUpsertArgs} args - Arguments to update or create a Locacao.
     * @example
     * // Update or create a Locacao
     * const locacao = await prisma.locacao.upsert({
     *   create: {
     *     // ... data to create a Locacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locacao we want to update
     *   }
     * })
     */
    upsert<T extends LocacaoUpsertArgs>(args: SelectSubset<T, LocacaoUpsertArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoCountArgs} args - Arguments to filter Locacaos to count.
     * @example
     * // Count the number of Locacaos
     * const count = await prisma.locacao.count({
     *   where: {
     *     // ... the filter for the Locacaos we want to count
     *   }
     * })
    **/
    count<T extends LocacaoCountArgs>(
      args?: Subset<T, LocacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocacaoAggregateArgs>(args: Subset<T, LocacaoAggregateArgs>): Prisma.PrismaPromise<GetLocacaoAggregateType<T>>

    /**
     * Group by Locacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoGroupByArgs} args - Group by arguments.
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
      T extends LocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locacao model
   */
  readonly fields: LocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brinquedosLocados<T extends Locacao$brinquedosLocadosArgs<ExtArgs> = {}>(args?: Subset<T, Locacao$brinquedosLocadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoLocadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagamento<T extends Locacao$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Locacao$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Locacao model
   */ 
  interface LocacaoFieldRefs {
    readonly cod: FieldRef<"Locacao", 'String'>
    readonly data_hora: FieldRef<"Locacao", 'DateTime'>
    readonly cpf_cliente: FieldRef<"Locacao", 'String'>
    readonly ativo: FieldRef<"Locacao", 'Boolean'>
    readonly pgto_status: FieldRef<"Locacao", 'PgtoStatus'>
  }
    

  // Custom InputTypes
  /**
   * Locacao findUnique
   */
  export type LocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao findUniqueOrThrow
   */
  export type LocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao findFirst
   */
  export type LocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locacaos.
     */
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao findFirstOrThrow
   */
  export type LocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locacaos.
     */
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao findMany
   */
  export type LocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacaos to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao create
   */
  export type LocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Locacao.
     */
    data: XOR<LocacaoCreateInput, LocacaoUncheckedCreateInput>
  }

  /**
   * Locacao createMany
   */
  export type LocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locacaos.
     */
    data: LocacaoCreateManyInput | LocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locacao createManyAndReturn
   */
  export type LocacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Locacaos.
     */
    data: LocacaoCreateManyInput | LocacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locacao update
   */
  export type LocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Locacao.
     */
    data: XOR<LocacaoUpdateInput, LocacaoUncheckedUpdateInput>
    /**
     * Choose, which Locacao to update.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao updateMany
   */
  export type LocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locacaos.
     */
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Locacaos to update
     */
    where?: LocacaoWhereInput
    /**
     * Limit how many Locacaos to update.
     */
    limit?: number
  }

  /**
   * Locacao updateManyAndReturn
   */
  export type LocacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * The data used to update Locacaos.
     */
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Locacaos to update
     */
    where?: LocacaoWhereInput
    /**
     * Limit how many Locacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locacao upsert
   */
  export type LocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Locacao to update in case it exists.
     */
    where: LocacaoWhereUniqueInput
    /**
     * In case the Locacao found by the `where` argument doesn't exist, create a new Locacao with this data.
     */
    create: XOR<LocacaoCreateInput, LocacaoUncheckedCreateInput>
    /**
     * In case the Locacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocacaoUpdateInput, LocacaoUncheckedUpdateInput>
  }

  /**
   * Locacao delete
   */
  export type LocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter which Locacao to delete.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao deleteMany
   */
  export type LocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locacaos to delete
     */
    where?: LocacaoWhereInput
    /**
     * Limit how many Locacaos to delete.
     */
    limit?: number
  }

  /**
   * Locacao.brinquedosLocados
   */
  export type Locacao$brinquedosLocadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrinquedoLocado
     */
    select?: BrinquedoLocadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrinquedoLocado
     */
    omit?: BrinquedoLocadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoLocadoInclude<ExtArgs> | null
    where?: BrinquedoLocadoWhereInput
    orderBy?: BrinquedoLocadoOrderByWithRelationInput | BrinquedoLocadoOrderByWithRelationInput[]
    cursor?: BrinquedoLocadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrinquedoLocadoScalarFieldEnum | BrinquedoLocadoScalarFieldEnum[]
  }

  /**
   * Locacao.pagamento
   */
  export type Locacao$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * Locacao without action
   */
  export type LocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    valor_pagamento: Decimal | null
    valor_locacao: Decimal | null
  }

  export type PagamentoSumAggregateOutputType = {
    valor_pagamento: Decimal | null
    valor_locacao: Decimal | null
  }

  export type PagamentoMinAggregateOutputType = {
    cod: string | null
    cpf_cliente: string | null
    cod_locacao: string | null
    data_pagamento: Date | null
    valor_pagamento: Decimal | null
    valor_locacao: Decimal | null
    ativo: boolean | null
  }

  export type PagamentoMaxAggregateOutputType = {
    cod: string | null
    cpf_cliente: string | null
    cod_locacao: string | null
    data_pagamento: Date | null
    valor_pagamento: Decimal | null
    valor_locacao: Decimal | null
    ativo: boolean | null
  }

  export type PagamentoCountAggregateOutputType = {
    cod: number
    cpf_cliente: number
    cod_locacao: number
    data_pagamento: number
    valor_pagamento: number
    valor_locacao: number
    ativo: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    valor_pagamento?: true
    valor_locacao?: true
  }

  export type PagamentoSumAggregateInputType = {
    valor_pagamento?: true
    valor_locacao?: true
  }

  export type PagamentoMinAggregateInputType = {
    cod?: true
    cpf_cliente?: true
    cod_locacao?: true
    data_pagamento?: true
    valor_pagamento?: true
    valor_locacao?: true
    ativo?: true
  }

  export type PagamentoMaxAggregateInputType = {
    cod?: true
    cpf_cliente?: true
    cod_locacao?: true
    data_pagamento?: true
    valor_pagamento?: true
    valor_locacao?: true
    ativo?: true
  }

  export type PagamentoCountAggregateInputType = {
    cod?: true
    cpf_cliente?: true
    cod_locacao?: true
    data_pagamento?: true
    valor_pagamento?: true
    valor_locacao?: true
    ativo?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    cod: string
    cpf_cliente: string
    cod_locacao: string
    data_pagamento: Date
    valor_pagamento: Decimal
    valor_locacao: Decimal
    ativo: boolean
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    cpf_cliente?: boolean
    cod_locacao?: boolean
    data_pagamento?: boolean
    valor_pagamento?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    cpf_cliente?: boolean
    cod_locacao?: boolean
    data_pagamento?: boolean
    valor_pagamento?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    cpf_cliente?: boolean
    cod_locacao?: boolean
    data_pagamento?: boolean
    valor_pagamento?: boolean
    valor_locacao?: boolean
    ativo?: boolean
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    cod?: boolean
    cpf_cliente?: boolean
    cod_locacao?: boolean
    data_pagamento?: boolean
    valor_pagamento?: boolean
    valor_locacao?: boolean
    ativo?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cod" | "cpf_cliente" | "cod_locacao" | "data_pagamento" | "valor_pagamento" | "valor_locacao" | "ativo", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | LocacaoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      locacao: Prisma.$LocacaoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cod: string
      cpf_cliente: string
      cod_locacao: string
      data_pagamento: Date
      valor_pagamento: Prisma.Decimal
      valor_locacao: Prisma.Decimal
      ativo: boolean
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `cod`
     * const pagamentoWithCodOnly = await prisma.pagamento.findMany({ select: { cod: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `cod`
     * const pagamentoWithCodOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { cod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `cod`
     * const pagamentoWithCodOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { cod: true },
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
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locacao<T extends LocacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocacaoDefaultArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pagamento model
   */ 
  interface PagamentoFieldRefs {
    readonly cod: FieldRef<"Pagamento", 'String'>
    readonly cpf_cliente: FieldRef<"Pagamento", 'String'>
    readonly cod_locacao: FieldRef<"Pagamento", 'String'>
    readonly data_pagamento: FieldRef<"Pagamento", 'DateTime'>
    readonly valor_pagamento: FieldRef<"Pagamento", 'Decimal'>
    readonly valor_locacao: FieldRef<"Pagamento", 'Decimal'>
    readonly ativo: FieldRef<"Pagamento", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model TipoBrinquedo
   */

  export type AggregateTipoBrinquedo = {
    _count: TipoBrinquedoCountAggregateOutputType | null
    _min: TipoBrinquedoMinAggregateOutputType | null
    _max: TipoBrinquedoMaxAggregateOutputType | null
  }

  export type TipoBrinquedoMinAggregateOutputType = {
    cod: string | null
    nome: string | null
    ativo: boolean | null
  }

  export type TipoBrinquedoMaxAggregateOutputType = {
    cod: string | null
    nome: string | null
    ativo: boolean | null
  }

  export type TipoBrinquedoCountAggregateOutputType = {
    cod: number
    nome: number
    ativo: number
    _all: number
  }


  export type TipoBrinquedoMinAggregateInputType = {
    cod?: true
    nome?: true
    ativo?: true
  }

  export type TipoBrinquedoMaxAggregateInputType = {
    cod?: true
    nome?: true
    ativo?: true
  }

  export type TipoBrinquedoCountAggregateInputType = {
    cod?: true
    nome?: true
    ativo?: true
    _all?: true
  }

  export type TipoBrinquedoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBrinquedo to aggregate.
     */
    where?: TipoBrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBrinquedos to fetch.
     */
    orderBy?: TipoBrinquedoOrderByWithRelationInput | TipoBrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoBrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBrinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBrinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoBrinquedos
    **/
    _count?: true | TipoBrinquedoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoBrinquedoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoBrinquedoMaxAggregateInputType
  }

  export type GetTipoBrinquedoAggregateType<T extends TipoBrinquedoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoBrinquedo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoBrinquedo[P]>
      : GetScalarType<T[P], AggregateTipoBrinquedo[P]>
  }




  export type TipoBrinquedoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoBrinquedoWhereInput
    orderBy?: TipoBrinquedoOrderByWithAggregationInput | TipoBrinquedoOrderByWithAggregationInput[]
    by: TipoBrinquedoScalarFieldEnum[] | TipoBrinquedoScalarFieldEnum
    having?: TipoBrinquedoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoBrinquedoCountAggregateInputType | true
    _min?: TipoBrinquedoMinAggregateInputType
    _max?: TipoBrinquedoMaxAggregateInputType
  }

  export type TipoBrinquedoGroupByOutputType = {
    cod: string
    nome: string
    ativo: boolean
    _count: TipoBrinquedoCountAggregateOutputType | null
    _min: TipoBrinquedoMinAggregateOutputType | null
    _max: TipoBrinquedoMaxAggregateOutputType | null
  }

  type GetTipoBrinquedoGroupByPayload<T extends TipoBrinquedoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoBrinquedoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoBrinquedoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoBrinquedoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoBrinquedoGroupByOutputType[P]>
        }
      >
    >


  export type TipoBrinquedoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    ativo?: boolean
    brinquedos?: boolean | TipoBrinquedo$brinquedosArgs<ExtArgs>
    _count?: boolean | TipoBrinquedoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoBrinquedo"]>

  export type TipoBrinquedoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["tipoBrinquedo"]>

  export type TipoBrinquedoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cod?: boolean
    nome?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["tipoBrinquedo"]>

  export type TipoBrinquedoSelectScalar = {
    cod?: boolean
    nome?: boolean
    ativo?: boolean
  }

  export type TipoBrinquedoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cod" | "nome" | "ativo", ExtArgs["result"]["tipoBrinquedo"]>
  export type TipoBrinquedoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brinquedos?: boolean | TipoBrinquedo$brinquedosArgs<ExtArgs>
    _count?: boolean | TipoBrinquedoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoBrinquedoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoBrinquedoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoBrinquedoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoBrinquedo"
    objects: {
      brinquedos: Prisma.$BrinquedoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cod: string
      nome: string
      ativo: boolean
    }, ExtArgs["result"]["tipoBrinquedo"]>
    composites: {}
  }

  type TipoBrinquedoGetPayload<S extends boolean | null | undefined | TipoBrinquedoDefaultArgs> = $Result.GetResult<Prisma.$TipoBrinquedoPayload, S>

  type TipoBrinquedoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoBrinquedoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoBrinquedoCountAggregateInputType | true
    }

  export interface TipoBrinquedoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoBrinquedo'], meta: { name: 'TipoBrinquedo' } }
    /**
     * Find zero or one TipoBrinquedo that matches the filter.
     * @param {TipoBrinquedoFindUniqueArgs} args - Arguments to find a TipoBrinquedo
     * @example
     * // Get one TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoBrinquedoFindUniqueArgs>(args: SelectSubset<T, TipoBrinquedoFindUniqueArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoBrinquedo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoBrinquedoFindUniqueOrThrowArgs} args - Arguments to find a TipoBrinquedo
     * @example
     * // Get one TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoBrinquedoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoBrinquedoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBrinquedo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoFindFirstArgs} args - Arguments to find a TipoBrinquedo
     * @example
     * // Get one TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoBrinquedoFindFirstArgs>(args?: SelectSubset<T, TipoBrinquedoFindFirstArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBrinquedo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoFindFirstOrThrowArgs} args - Arguments to find a TipoBrinquedo
     * @example
     * // Get one TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoBrinquedoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoBrinquedoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoBrinquedos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoBrinquedos
     * const tipoBrinquedos = await prisma.tipoBrinquedo.findMany()
     * 
     * // Get first 10 TipoBrinquedos
     * const tipoBrinquedos = await prisma.tipoBrinquedo.findMany({ take: 10 })
     * 
     * // Only select the `cod`
     * const tipoBrinquedoWithCodOnly = await prisma.tipoBrinquedo.findMany({ select: { cod: true } })
     * 
     */
    findMany<T extends TipoBrinquedoFindManyArgs>(args?: SelectSubset<T, TipoBrinquedoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoBrinquedo.
     * @param {TipoBrinquedoCreateArgs} args - Arguments to create a TipoBrinquedo.
     * @example
     * // Create one TipoBrinquedo
     * const TipoBrinquedo = await prisma.tipoBrinquedo.create({
     *   data: {
     *     // ... data to create a TipoBrinquedo
     *   }
     * })
     * 
     */
    create<T extends TipoBrinquedoCreateArgs>(args: SelectSubset<T, TipoBrinquedoCreateArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoBrinquedos.
     * @param {TipoBrinquedoCreateManyArgs} args - Arguments to create many TipoBrinquedos.
     * @example
     * // Create many TipoBrinquedos
     * const tipoBrinquedo = await prisma.tipoBrinquedo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoBrinquedoCreateManyArgs>(args?: SelectSubset<T, TipoBrinquedoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoBrinquedos and returns the data saved in the database.
     * @param {TipoBrinquedoCreateManyAndReturnArgs} args - Arguments to create many TipoBrinquedos.
     * @example
     * // Create many TipoBrinquedos
     * const tipoBrinquedo = await prisma.tipoBrinquedo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoBrinquedos and only return the `cod`
     * const tipoBrinquedoWithCodOnly = await prisma.tipoBrinquedo.createManyAndReturn({
     *   select: { cod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoBrinquedoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoBrinquedoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoBrinquedo.
     * @param {TipoBrinquedoDeleteArgs} args - Arguments to delete one TipoBrinquedo.
     * @example
     * // Delete one TipoBrinquedo
     * const TipoBrinquedo = await prisma.tipoBrinquedo.delete({
     *   where: {
     *     // ... filter to delete one TipoBrinquedo
     *   }
     * })
     * 
     */
    delete<T extends TipoBrinquedoDeleteArgs>(args: SelectSubset<T, TipoBrinquedoDeleteArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoBrinquedo.
     * @param {TipoBrinquedoUpdateArgs} args - Arguments to update one TipoBrinquedo.
     * @example
     * // Update one TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoBrinquedoUpdateArgs>(args: SelectSubset<T, TipoBrinquedoUpdateArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoBrinquedos.
     * @param {TipoBrinquedoDeleteManyArgs} args - Arguments to filter TipoBrinquedos to delete.
     * @example
     * // Delete a few TipoBrinquedos
     * const { count } = await prisma.tipoBrinquedo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoBrinquedoDeleteManyArgs>(args?: SelectSubset<T, TipoBrinquedoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoBrinquedos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoBrinquedos
     * const tipoBrinquedo = await prisma.tipoBrinquedo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoBrinquedoUpdateManyArgs>(args: SelectSubset<T, TipoBrinquedoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoBrinquedos and returns the data updated in the database.
     * @param {TipoBrinquedoUpdateManyAndReturnArgs} args - Arguments to update many TipoBrinquedos.
     * @example
     * // Update many TipoBrinquedos
     * const tipoBrinquedo = await prisma.tipoBrinquedo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoBrinquedos and only return the `cod`
     * const tipoBrinquedoWithCodOnly = await prisma.tipoBrinquedo.updateManyAndReturn({
     *   select: { cod: true },
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
    updateManyAndReturn<T extends TipoBrinquedoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoBrinquedoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoBrinquedo.
     * @param {TipoBrinquedoUpsertArgs} args - Arguments to update or create a TipoBrinquedo.
     * @example
     * // Update or create a TipoBrinquedo
     * const tipoBrinquedo = await prisma.tipoBrinquedo.upsert({
     *   create: {
     *     // ... data to create a TipoBrinquedo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoBrinquedo we want to update
     *   }
     * })
     */
    upsert<T extends TipoBrinquedoUpsertArgs>(args: SelectSubset<T, TipoBrinquedoUpsertArgs<ExtArgs>>): Prisma__TipoBrinquedoClient<$Result.GetResult<Prisma.$TipoBrinquedoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoBrinquedos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoCountArgs} args - Arguments to filter TipoBrinquedos to count.
     * @example
     * // Count the number of TipoBrinquedos
     * const count = await prisma.tipoBrinquedo.count({
     *   where: {
     *     // ... the filter for the TipoBrinquedos we want to count
     *   }
     * })
    **/
    count<T extends TipoBrinquedoCountArgs>(
      args?: Subset<T, TipoBrinquedoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoBrinquedoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoBrinquedo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoBrinquedoAggregateArgs>(args: Subset<T, TipoBrinquedoAggregateArgs>): Prisma.PrismaPromise<GetTipoBrinquedoAggregateType<T>>

    /**
     * Group by TipoBrinquedo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBrinquedoGroupByArgs} args - Group by arguments.
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
      T extends TipoBrinquedoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoBrinquedoGroupByArgs['orderBy'] }
        : { orderBy?: TipoBrinquedoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoBrinquedoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoBrinquedoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoBrinquedo model
   */
  readonly fields: TipoBrinquedoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoBrinquedo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoBrinquedoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brinquedos<T extends TipoBrinquedo$brinquedosArgs<ExtArgs> = {}>(args?: Subset<T, TipoBrinquedo$brinquedosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrinquedoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoBrinquedo model
   */ 
  interface TipoBrinquedoFieldRefs {
    readonly cod: FieldRef<"TipoBrinquedo", 'String'>
    readonly nome: FieldRef<"TipoBrinquedo", 'String'>
    readonly ativo: FieldRef<"TipoBrinquedo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TipoBrinquedo findUnique
   */
  export type TipoBrinquedoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which TipoBrinquedo to fetch.
     */
    where: TipoBrinquedoWhereUniqueInput
  }

  /**
   * TipoBrinquedo findUniqueOrThrow
   */
  export type TipoBrinquedoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which TipoBrinquedo to fetch.
     */
    where: TipoBrinquedoWhereUniqueInput
  }

  /**
   * TipoBrinquedo findFirst
   */
  export type TipoBrinquedoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which TipoBrinquedo to fetch.
     */
    where?: TipoBrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBrinquedos to fetch.
     */
    orderBy?: TipoBrinquedoOrderByWithRelationInput | TipoBrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBrinquedos.
     */
    cursor?: TipoBrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBrinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBrinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBrinquedos.
     */
    distinct?: TipoBrinquedoScalarFieldEnum | TipoBrinquedoScalarFieldEnum[]
  }

  /**
   * TipoBrinquedo findFirstOrThrow
   */
  export type TipoBrinquedoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which TipoBrinquedo to fetch.
     */
    where?: TipoBrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBrinquedos to fetch.
     */
    orderBy?: TipoBrinquedoOrderByWithRelationInput | TipoBrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBrinquedos.
     */
    cursor?: TipoBrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBrinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBrinquedos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBrinquedos.
     */
    distinct?: TipoBrinquedoScalarFieldEnum | TipoBrinquedoScalarFieldEnum[]
  }

  /**
   * TipoBrinquedo findMany
   */
  export type TipoBrinquedoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter, which TipoBrinquedos to fetch.
     */
    where?: TipoBrinquedoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBrinquedos to fetch.
     */
    orderBy?: TipoBrinquedoOrderByWithRelationInput | TipoBrinquedoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoBrinquedos.
     */
    cursor?: TipoBrinquedoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBrinquedos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBrinquedos.
     */
    skip?: number
    distinct?: TipoBrinquedoScalarFieldEnum | TipoBrinquedoScalarFieldEnum[]
  }

  /**
   * TipoBrinquedo create
   */
  export type TipoBrinquedoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoBrinquedo.
     */
    data: XOR<TipoBrinquedoCreateInput, TipoBrinquedoUncheckedCreateInput>
  }

  /**
   * TipoBrinquedo createMany
   */
  export type TipoBrinquedoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoBrinquedos.
     */
    data: TipoBrinquedoCreateManyInput | TipoBrinquedoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoBrinquedo createManyAndReturn
   */
  export type TipoBrinquedoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoBrinquedos.
     */
    data: TipoBrinquedoCreateManyInput | TipoBrinquedoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoBrinquedo update
   */
  export type TipoBrinquedoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoBrinquedo.
     */
    data: XOR<TipoBrinquedoUpdateInput, TipoBrinquedoUncheckedUpdateInput>
    /**
     * Choose, which TipoBrinquedo to update.
     */
    where: TipoBrinquedoWhereUniqueInput
  }

  /**
   * TipoBrinquedo updateMany
   */
  export type TipoBrinquedoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoBrinquedos.
     */
    data: XOR<TipoBrinquedoUpdateManyMutationInput, TipoBrinquedoUncheckedUpdateManyInput>
    /**
     * Filter which TipoBrinquedos to update
     */
    where?: TipoBrinquedoWhereInput
    /**
     * Limit how many TipoBrinquedos to update.
     */
    limit?: number
  }

  /**
   * TipoBrinquedo updateManyAndReturn
   */
  export type TipoBrinquedoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * The data used to update TipoBrinquedos.
     */
    data: XOR<TipoBrinquedoUpdateManyMutationInput, TipoBrinquedoUncheckedUpdateManyInput>
    /**
     * Filter which TipoBrinquedos to update
     */
    where?: TipoBrinquedoWhereInput
    /**
     * Limit how many TipoBrinquedos to update.
     */
    limit?: number
  }

  /**
   * TipoBrinquedo upsert
   */
  export type TipoBrinquedoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoBrinquedo to update in case it exists.
     */
    where: TipoBrinquedoWhereUniqueInput
    /**
     * In case the TipoBrinquedo found by the `where` argument doesn't exist, create a new TipoBrinquedo with this data.
     */
    create: XOR<TipoBrinquedoCreateInput, TipoBrinquedoUncheckedCreateInput>
    /**
     * In case the TipoBrinquedo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoBrinquedoUpdateInput, TipoBrinquedoUncheckedUpdateInput>
  }

  /**
   * TipoBrinquedo delete
   */
  export type TipoBrinquedoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
    /**
     * Filter which TipoBrinquedo to delete.
     */
    where: TipoBrinquedoWhereUniqueInput
  }

  /**
   * TipoBrinquedo deleteMany
   */
  export type TipoBrinquedoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBrinquedos to delete
     */
    where?: TipoBrinquedoWhereInput
    /**
     * Limit how many TipoBrinquedos to delete.
     */
    limit?: number
  }

  /**
   * TipoBrinquedo.brinquedos
   */
  export type TipoBrinquedo$brinquedosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brinquedo
     */
    select?: BrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brinquedo
     */
    omit?: BrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrinquedoInclude<ExtArgs> | null
    where?: BrinquedoWhereInput
    orderBy?: BrinquedoOrderByWithRelationInput | BrinquedoOrderByWithRelationInput[]
    cursor?: BrinquedoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrinquedoScalarFieldEnum | BrinquedoScalarFieldEnum[]
  }

  /**
   * TipoBrinquedo without action
   */
  export type TipoBrinquedoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBrinquedo
     */
    select?: TipoBrinquedoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBrinquedo
     */
    omit?: TipoBrinquedoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBrinquedoInclude<ExtArgs> | null
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


  export const BrinquedoScalarFieldEnum: {
    cod: 'cod',
    nome: 'nome',
    tipo_brinquedo: 'tipo_brinquedo',
    marca: 'marca',
    data_aquisicao: 'data_aquisicao',
    valor_locacao: 'valor_locacao',
    ativo: 'ativo'
  };

  export type BrinquedoScalarFieldEnum = (typeof BrinquedoScalarFieldEnum)[keyof typeof BrinquedoScalarFieldEnum]


  export const BrinquedoLocadoScalarFieldEnum: {
    cod: 'cod',
    valor_unitario: 'valor_unitario',
    nome: 'nome',
    cod_locacao: 'cod_locacao',
    data_devolucao: 'data_devolucao',
    cod_brinquedo: 'cod_brinquedo',
    ativo: 'ativo'
  };

  export type BrinquedoLocadoScalarFieldEnum = (typeof BrinquedoLocadoScalarFieldEnum)[keyof typeof BrinquedoLocadoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    endereco: 'endereco',
    data_nascimento: 'data_nascimento',
    telefone: 'telefone',
    ativo: 'ativo'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    telefone: 'telefone',
    funcao: 'funcao',
    senha: 'senha',
    ativo: 'ativo'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const LocacaoScalarFieldEnum: {
    cod: 'cod',
    data_hora: 'data_hora',
    cpf_cliente: 'cpf_cliente',
    ativo: 'ativo',
    pgto_status: 'pgto_status'
  };

  export type LocacaoScalarFieldEnum = (typeof LocacaoScalarFieldEnum)[keyof typeof LocacaoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    cod: 'cod',
    cpf_cliente: 'cpf_cliente',
    cod_locacao: 'cod_locacao',
    data_pagamento: 'data_pagamento',
    valor_pagamento: 'valor_pagamento',
    valor_locacao: 'valor_locacao',
    ativo: 'ativo'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const TipoBrinquedoScalarFieldEnum: {
    cod: 'cod',
    nome: 'nome',
    ativo: 'ativo'
  };

  export type TipoBrinquedoScalarFieldEnum = (typeof TipoBrinquedoScalarFieldEnum)[keyof typeof TipoBrinquedoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Funcao'
   */
  export type EnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao'>
    


  /**
   * Reference to a field of type 'Funcao[]'
   */
  export type ListEnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao[]'>
    


  /**
   * Reference to a field of type 'PgtoStatus'
   */
  export type EnumPgtoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PgtoStatus'>
    


  /**
   * Reference to a field of type 'PgtoStatus[]'
   */
  export type ListEnumPgtoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PgtoStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BrinquedoWhereInput = {
    AND?: BrinquedoWhereInput | BrinquedoWhereInput[]
    OR?: BrinquedoWhereInput[]
    NOT?: BrinquedoWhereInput | BrinquedoWhereInput[]
    cod?: UuidFilter<"Brinquedo"> | string
    nome?: StringFilter<"Brinquedo"> | string
    tipo_brinquedo?: UuidFilter<"Brinquedo"> | string
    marca?: StringFilter<"Brinquedo"> | string
    data_aquisicao?: DateTimeFilter<"Brinquedo"> | Date | string
    valor_locacao?: DecimalFilter<"Brinquedo"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Brinquedo"> | boolean
    tipoBrinquedo?: XOR<TipoBrinquedoScalarRelationFilter, TipoBrinquedoWhereInput>
    brinquedosLocados?: BrinquedoLocadoListRelationFilter
  }

  export type BrinquedoOrderByWithRelationInput = {
    cod?: SortOrder
    nome?: SortOrder
    tipo_brinquedo?: SortOrder
    marca?: SortOrder
    data_aquisicao?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
    tipoBrinquedo?: TipoBrinquedoOrderByWithRelationInput
    brinquedosLocados?: BrinquedoLocadoOrderByRelationAggregateInput
  }

  export type BrinquedoWhereUniqueInput = Prisma.AtLeast<{
    cod?: string
    nome?: string
    AND?: BrinquedoWhereInput | BrinquedoWhereInput[]
    OR?: BrinquedoWhereInput[]
    NOT?: BrinquedoWhereInput | BrinquedoWhereInput[]
    tipo_brinquedo?: UuidFilter<"Brinquedo"> | string
    marca?: StringFilter<"Brinquedo"> | string
    data_aquisicao?: DateTimeFilter<"Brinquedo"> | Date | string
    valor_locacao?: DecimalFilter<"Brinquedo"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Brinquedo"> | boolean
    tipoBrinquedo?: XOR<TipoBrinquedoScalarRelationFilter, TipoBrinquedoWhereInput>
    brinquedosLocados?: BrinquedoLocadoListRelationFilter
  }, "cod" | "nome">

  export type BrinquedoOrderByWithAggregationInput = {
    cod?: SortOrder
    nome?: SortOrder
    tipo_brinquedo?: SortOrder
    marca?: SortOrder
    data_aquisicao?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
    _count?: BrinquedoCountOrderByAggregateInput
    _avg?: BrinquedoAvgOrderByAggregateInput
    _max?: BrinquedoMaxOrderByAggregateInput
    _min?: BrinquedoMinOrderByAggregateInput
    _sum?: BrinquedoSumOrderByAggregateInput
  }

  export type BrinquedoScalarWhereWithAggregatesInput = {
    AND?: BrinquedoScalarWhereWithAggregatesInput | BrinquedoScalarWhereWithAggregatesInput[]
    OR?: BrinquedoScalarWhereWithAggregatesInput[]
    NOT?: BrinquedoScalarWhereWithAggregatesInput | BrinquedoScalarWhereWithAggregatesInput[]
    cod?: UuidWithAggregatesFilter<"Brinquedo"> | string
    nome?: StringWithAggregatesFilter<"Brinquedo"> | string
    tipo_brinquedo?: UuidWithAggregatesFilter<"Brinquedo"> | string
    marca?: StringWithAggregatesFilter<"Brinquedo"> | string
    data_aquisicao?: DateTimeWithAggregatesFilter<"Brinquedo"> | Date | string
    valor_locacao?: DecimalWithAggregatesFilter<"Brinquedo"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolWithAggregatesFilter<"Brinquedo"> | boolean
  }

  export type BrinquedoLocadoWhereInput = {
    AND?: BrinquedoLocadoWhereInput | BrinquedoLocadoWhereInput[]
    OR?: BrinquedoLocadoWhereInput[]
    NOT?: BrinquedoLocadoWhereInput | BrinquedoLocadoWhereInput[]
    cod?: UuidFilter<"BrinquedoLocado"> | string
    valor_unitario?: DecimalFilter<"BrinquedoLocado"> | Decimal | DecimalJsLike | number | string
    nome?: StringFilter<"BrinquedoLocado"> | string
    cod_locacao?: UuidFilter<"BrinquedoLocado"> | string
    data_devolucao?: DateTimeFilter<"BrinquedoLocado"> | Date | string
    cod_brinquedo?: UuidFilter<"BrinquedoLocado"> | string
    ativo?: BoolFilter<"BrinquedoLocado"> | boolean
    locacao?: XOR<LocacaoScalarRelationFilter, LocacaoWhereInput>
    brinquedo?: XOR<BrinquedoScalarRelationFilter, BrinquedoWhereInput>
  }

  export type BrinquedoLocadoOrderByWithRelationInput = {
    cod?: SortOrder
    valor_unitario?: SortOrder
    nome?: SortOrder
    cod_locacao?: SortOrder
    data_devolucao?: SortOrder
    cod_brinquedo?: SortOrder
    ativo?: SortOrder
    locacao?: LocacaoOrderByWithRelationInput
    brinquedo?: BrinquedoOrderByWithRelationInput
  }

  export type BrinquedoLocadoWhereUniqueInput = Prisma.AtLeast<{
    cod?: string
    AND?: BrinquedoLocadoWhereInput | BrinquedoLocadoWhereInput[]
    OR?: BrinquedoLocadoWhereInput[]
    NOT?: BrinquedoLocadoWhereInput | BrinquedoLocadoWhereInput[]
    valor_unitario?: DecimalFilter<"BrinquedoLocado"> | Decimal | DecimalJsLike | number | string
    nome?: StringFilter<"BrinquedoLocado"> | string
    cod_locacao?: UuidFilter<"BrinquedoLocado"> | string
    data_devolucao?: DateTimeFilter<"BrinquedoLocado"> | Date | string
    cod_brinquedo?: UuidFilter<"BrinquedoLocado"> | string
    ativo?: BoolFilter<"BrinquedoLocado"> | boolean
    locacao?: XOR<LocacaoScalarRelationFilter, LocacaoWhereInput>
    brinquedo?: XOR<BrinquedoScalarRelationFilter, BrinquedoWhereInput>
  }, "cod">

  export type BrinquedoLocadoOrderByWithAggregationInput = {
    cod?: SortOrder
    valor_unitario?: SortOrder
    nome?: SortOrder
    cod_locacao?: SortOrder
    data_devolucao?: SortOrder
    cod_brinquedo?: SortOrder
    ativo?: SortOrder
    _count?: BrinquedoLocadoCountOrderByAggregateInput
    _avg?: BrinquedoLocadoAvgOrderByAggregateInput
    _max?: BrinquedoLocadoMaxOrderByAggregateInput
    _min?: BrinquedoLocadoMinOrderByAggregateInput
    _sum?: BrinquedoLocadoSumOrderByAggregateInput
  }

  export type BrinquedoLocadoScalarWhereWithAggregatesInput = {
    AND?: BrinquedoLocadoScalarWhereWithAggregatesInput | BrinquedoLocadoScalarWhereWithAggregatesInput[]
    OR?: BrinquedoLocadoScalarWhereWithAggregatesInput[]
    NOT?: BrinquedoLocadoScalarWhereWithAggregatesInput | BrinquedoLocadoScalarWhereWithAggregatesInput[]
    cod?: UuidWithAggregatesFilter<"BrinquedoLocado"> | string
    valor_unitario?: DecimalWithAggregatesFilter<"BrinquedoLocado"> | Decimal | DecimalJsLike | number | string
    nome?: StringWithAggregatesFilter<"BrinquedoLocado"> | string
    cod_locacao?: UuidWithAggregatesFilter<"BrinquedoLocado"> | string
    data_devolucao?: DateTimeWithAggregatesFilter<"BrinquedoLocado"> | Date | string
    cod_brinquedo?: UuidWithAggregatesFilter<"BrinquedoLocado"> | string
    ativo?: BoolWithAggregatesFilter<"BrinquedoLocado"> | boolean
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cpf?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    data_nascimento?: DateTimeFilter<"Cliente"> | Date | string
    telefone?: StringFilter<"Cliente"> | string
    ativo?: BoolFilter<"Cliente"> | boolean
    locacoes?: LocacaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    locacoes?: LocacaoOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    data_nascimento?: DateTimeFilter<"Cliente"> | Date | string
    telefone?: StringFilter<"Cliente"> | string
    ativo?: BoolFilter<"Cliente"> | boolean
    locacoes?: LocacaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }, "cpf">

  export type ClienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringWithAggregatesFilter<"Cliente"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    ativo?: BoolWithAggregatesFilter<"Cliente"> | boolean
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    cpf?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
    funcao?: EnumFuncaoFilter<"Funcionario"> | $Enums.Funcao
    senha?: StringFilter<"Funcionario"> | string
    ativo?: BoolFilter<"Funcionario"> | boolean
  }

  export type FuncionarioOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    funcao?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
    funcao?: EnumFuncaoFilter<"Funcionario"> | $Enums.Funcao
    senha?: StringFilter<"Funcionario"> | string
    ativo?: BoolFilter<"Funcionario"> | boolean
  }, "cpf">

  export type FuncionarioOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    funcao?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Funcionario"> | string
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    telefone?: StringWithAggregatesFilter<"Funcionario"> | string
    funcao?: EnumFuncaoWithAggregatesFilter<"Funcionario"> | $Enums.Funcao
    senha?: StringWithAggregatesFilter<"Funcionario"> | string
    ativo?: BoolWithAggregatesFilter<"Funcionario"> | boolean
  }

  export type LocacaoWhereInput = {
    AND?: LocacaoWhereInput | LocacaoWhereInput[]
    OR?: LocacaoWhereInput[]
    NOT?: LocacaoWhereInput | LocacaoWhereInput[]
    cod?: UuidFilter<"Locacao"> | string
    data_hora?: DateTimeFilter<"Locacao"> | Date | string
    cpf_cliente?: StringFilter<"Locacao"> | string
    ativo?: BoolFilter<"Locacao"> | boolean
    pgto_status?: EnumPgtoStatusFilter<"Locacao"> | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }

  export type LocacaoOrderByWithRelationInput = {
    cod?: SortOrder
    data_hora?: SortOrder
    cpf_cliente?: SortOrder
    ativo?: SortOrder
    pgto_status?: SortOrder
    brinquedosLocados?: BrinquedoLocadoOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
    pagamento?: PagamentoOrderByWithRelationInput
  }

  export type LocacaoWhereUniqueInput = Prisma.AtLeast<{
    cod?: string
    AND?: LocacaoWhereInput | LocacaoWhereInput[]
    OR?: LocacaoWhereInput[]
    NOT?: LocacaoWhereInput | LocacaoWhereInput[]
    data_hora?: DateTimeFilter<"Locacao"> | Date | string
    cpf_cliente?: StringFilter<"Locacao"> | string
    ativo?: BoolFilter<"Locacao"> | boolean
    pgto_status?: EnumPgtoStatusFilter<"Locacao"> | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }, "cod">

  export type LocacaoOrderByWithAggregationInput = {
    cod?: SortOrder
    data_hora?: SortOrder
    cpf_cliente?: SortOrder
    ativo?: SortOrder
    pgto_status?: SortOrder
    _count?: LocacaoCountOrderByAggregateInput
    _max?: LocacaoMaxOrderByAggregateInput
    _min?: LocacaoMinOrderByAggregateInput
  }

  export type LocacaoScalarWhereWithAggregatesInput = {
    AND?: LocacaoScalarWhereWithAggregatesInput | LocacaoScalarWhereWithAggregatesInput[]
    OR?: LocacaoScalarWhereWithAggregatesInput[]
    NOT?: LocacaoScalarWhereWithAggregatesInput | LocacaoScalarWhereWithAggregatesInput[]
    cod?: UuidWithAggregatesFilter<"Locacao"> | string
    data_hora?: DateTimeWithAggregatesFilter<"Locacao"> | Date | string
    cpf_cliente?: StringWithAggregatesFilter<"Locacao"> | string
    ativo?: BoolWithAggregatesFilter<"Locacao"> | boolean
    pgto_status?: EnumPgtoStatusWithAggregatesFilter<"Locacao"> | $Enums.PgtoStatus
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    cod?: UuidFilter<"Pagamento"> | string
    cpf_cliente?: StringFilter<"Pagamento"> | string
    cod_locacao?: UuidFilter<"Pagamento"> | string
    data_pagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valor_pagamento?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Pagamento"> | boolean
    locacao?: XOR<LocacaoScalarRelationFilter, LocacaoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    cod?: SortOrder
    cpf_cliente?: SortOrder
    cod_locacao?: SortOrder
    data_pagamento?: SortOrder
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
    locacao?: LocacaoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    cod?: string
    cod_locacao?: string
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    cpf_cliente?: StringFilter<"Pagamento"> | string
    data_pagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valor_pagamento?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Pagamento"> | boolean
    locacao?: XOR<LocacaoScalarRelationFilter, LocacaoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "cod" | "cod_locacao">

  export type PagamentoOrderByWithAggregationInput = {
    cod?: SortOrder
    cpf_cliente?: SortOrder
    cod_locacao?: SortOrder
    data_pagamento?: SortOrder
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    cod?: UuidWithAggregatesFilter<"Pagamento"> | string
    cpf_cliente?: StringWithAggregatesFilter<"Pagamento"> | string
    cod_locacao?: UuidWithAggregatesFilter<"Pagamento"> | string
    data_pagamento?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    valor_pagamento?: DecimalWithAggregatesFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalWithAggregatesFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolWithAggregatesFilter<"Pagamento"> | boolean
  }

  export type TipoBrinquedoWhereInput = {
    AND?: TipoBrinquedoWhereInput | TipoBrinquedoWhereInput[]
    OR?: TipoBrinquedoWhereInput[]
    NOT?: TipoBrinquedoWhereInput | TipoBrinquedoWhereInput[]
    cod?: UuidFilter<"TipoBrinquedo"> | string
    nome?: StringFilter<"TipoBrinquedo"> | string
    ativo?: BoolFilter<"TipoBrinquedo"> | boolean
    brinquedos?: BrinquedoListRelationFilter
  }

  export type TipoBrinquedoOrderByWithRelationInput = {
    cod?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    brinquedos?: BrinquedoOrderByRelationAggregateInput
  }

  export type TipoBrinquedoWhereUniqueInput = Prisma.AtLeast<{
    cod?: string
    nome?: string
    AND?: TipoBrinquedoWhereInput | TipoBrinquedoWhereInput[]
    OR?: TipoBrinquedoWhereInput[]
    NOT?: TipoBrinquedoWhereInput | TipoBrinquedoWhereInput[]
    ativo?: BoolFilter<"TipoBrinquedo"> | boolean
    brinquedos?: BrinquedoListRelationFilter
  }, "cod" | "nome">

  export type TipoBrinquedoOrderByWithAggregationInput = {
    cod?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    _count?: TipoBrinquedoCountOrderByAggregateInput
    _max?: TipoBrinquedoMaxOrderByAggregateInput
    _min?: TipoBrinquedoMinOrderByAggregateInput
  }

  export type TipoBrinquedoScalarWhereWithAggregatesInput = {
    AND?: TipoBrinquedoScalarWhereWithAggregatesInput | TipoBrinquedoScalarWhereWithAggregatesInput[]
    OR?: TipoBrinquedoScalarWhereWithAggregatesInput[]
    NOT?: TipoBrinquedoScalarWhereWithAggregatesInput | TipoBrinquedoScalarWhereWithAggregatesInput[]
    cod?: UuidWithAggregatesFilter<"TipoBrinquedo"> | string
    nome?: StringWithAggregatesFilter<"TipoBrinquedo"> | string
    ativo?: BoolWithAggregatesFilter<"TipoBrinquedo"> | boolean
  }

  export type BrinquedoCreateInput = {
    cod?: string
    nome: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    tipoBrinquedo: TipoBrinquedoCreateNestedOneWithoutBrinquedosInput
    brinquedosLocados?: BrinquedoLocadoCreateNestedManyWithoutBrinquedoInput
  }

  export type BrinquedoUncheckedCreateInput = {
    cod?: string
    nome: string
    tipo_brinquedo: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    brinquedosLocados?: BrinquedoLocadoUncheckedCreateNestedManyWithoutBrinquedoInput
  }

  export type BrinquedoUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    tipoBrinquedo?: TipoBrinquedoUpdateOneRequiredWithoutBrinquedosNestedInput
    brinquedosLocados?: BrinquedoLocadoUpdateManyWithoutBrinquedoNestedInput
  }

  export type BrinquedoUncheckedUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo_brinquedo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedosLocados?: BrinquedoLocadoUncheckedUpdateManyWithoutBrinquedoNestedInput
  }

  export type BrinquedoCreateManyInput = {
    cod?: string
    nome: string
    tipo_brinquedo: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type BrinquedoUpdateManyMutationInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoUncheckedUpdateManyInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo_brinquedo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoCreateInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    data_devolucao: Date | string
    ativo?: boolean
    locacao: LocacaoCreateNestedOneWithoutBrinquedosLocadosInput
    brinquedo: BrinquedoCreateNestedOneWithoutBrinquedosLocadosInput
  }

  export type BrinquedoLocadoUncheckedCreateInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    cod_locacao: string
    data_devolucao: Date | string
    cod_brinquedo: string
    ativo?: boolean
  }

  export type BrinquedoLocadoUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacao?: LocacaoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput
    brinquedo?: BrinquedoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput
  }

  export type BrinquedoLocadoUncheckedUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_brinquedo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoCreateManyInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    cod_locacao: string
    data_devolucao: Date | string
    cod_brinquedo: string
    ativo?: boolean
  }

  export type BrinquedoLocadoUpdateManyMutationInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoUncheckedUpdateManyInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_brinquedo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteCreateInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    locacoes?: LocacaoCreateNestedManyWithoutClienteInput
    pagamentos?: PagamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    locacoes?: LocacaoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacoes?: LocacaoUpdateManyWithoutClienteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacoes?: LocacaoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
  }

  export type ClienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionarioCreateInput = {
    cpf: string
    nome: string
    telefone: string
    funcao: $Enums.Funcao
    senha: string
    ativo?: boolean
  }

  export type FuncionarioUncheckedCreateInput = {
    cpf: string
    nome: string
    telefone: string
    funcao: $Enums.Funcao
    senha: string
    ativo?: boolean
  }

  export type FuncionarioUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionarioUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionarioCreateManyInput = {
    cpf: string
    nome: string
    telefone: string
    funcao: $Enums.Funcao
    senha: string
    ativo?: boolean
  }

  export type FuncionarioUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocacaoCreateInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoCreateNestedManyWithoutLocacaoInput
    cliente: ClienteCreateNestedOneWithoutLocacoesInput
    pagamento?: PagamentoCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateInput = {
    cod?: string
    data_hora?: Date | string
    cpf_cliente: string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedCreateNestedManyWithoutLocacaoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUpdateManyWithoutLocacaoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutLocacoesNestedInput
    pagamento?: PagamentoUpdateOneWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutLocacaoNestedInput
  }

  export type LocacaoCreateManyInput = {
    cod?: string
    data_hora?: Date | string
    cpf_cliente: string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
  }

  export type LocacaoUpdateManyMutationInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
  }

  export type LocacaoUncheckedUpdateManyInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
  }

  export type PagamentoCreateInput = {
    cod?: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    locacao: LocacaoCreateNestedOneWithoutPagamentoInput
    cliente: ClienteCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateInput = {
    cod?: string
    cpf_cliente: string
    cod_locacao: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type PagamentoUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacao?: LocacaoUpdateOneRequiredWithoutPagamentoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PagamentoCreateManyInput = {
    cod?: string
    cpf_cliente: string
    cod_locacao: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type PagamentoUpdateManyMutationInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PagamentoUncheckedUpdateManyInput = {
    cod?: StringFieldUpdateOperationsInput | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoBrinquedoCreateInput = {
    cod?: string
    nome: string
    ativo?: boolean
    brinquedos?: BrinquedoCreateNestedManyWithoutTipoBrinquedoInput
  }

  export type TipoBrinquedoUncheckedCreateInput = {
    cod?: string
    nome: string
    ativo?: boolean
    brinquedos?: BrinquedoUncheckedCreateNestedManyWithoutTipoBrinquedoInput
  }

  export type TipoBrinquedoUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedos?: BrinquedoUpdateManyWithoutTipoBrinquedoNestedInput
  }

  export type TipoBrinquedoUncheckedUpdateInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedos?: BrinquedoUncheckedUpdateManyWithoutTipoBrinquedoNestedInput
  }

  export type TipoBrinquedoCreateManyInput = {
    cod?: string
    nome: string
    ativo?: boolean
  }

  export type TipoBrinquedoUpdateManyMutationInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoBrinquedoUncheckedUpdateManyInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TipoBrinquedoScalarRelationFilter = {
    is?: TipoBrinquedoWhereInput
    isNot?: TipoBrinquedoWhereInput
  }

  export type BrinquedoLocadoListRelationFilter = {
    every?: BrinquedoLocadoWhereInput
    some?: BrinquedoLocadoWhereInput
    none?: BrinquedoLocadoWhereInput
  }

  export type BrinquedoLocadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrinquedoCountOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    tipo_brinquedo?: SortOrder
    marca?: SortOrder
    data_aquisicao?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoAvgOrderByAggregateInput = {
    valor_locacao?: SortOrder
  }

  export type BrinquedoMaxOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    tipo_brinquedo?: SortOrder
    marca?: SortOrder
    data_aquisicao?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoMinOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    tipo_brinquedo?: SortOrder
    marca?: SortOrder
    data_aquisicao?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoSumOrderByAggregateInput = {
    valor_locacao?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocacaoScalarRelationFilter = {
    is?: LocacaoWhereInput
    isNot?: LocacaoWhereInput
  }

  export type BrinquedoScalarRelationFilter = {
    is?: BrinquedoWhereInput
    isNot?: BrinquedoWhereInput
  }

  export type BrinquedoLocadoCountOrderByAggregateInput = {
    cod?: SortOrder
    valor_unitario?: SortOrder
    nome?: SortOrder
    cod_locacao?: SortOrder
    data_devolucao?: SortOrder
    cod_brinquedo?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoLocadoAvgOrderByAggregateInput = {
    valor_unitario?: SortOrder
  }

  export type BrinquedoLocadoMaxOrderByAggregateInput = {
    cod?: SortOrder
    valor_unitario?: SortOrder
    nome?: SortOrder
    cod_locacao?: SortOrder
    data_devolucao?: SortOrder
    cod_brinquedo?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoLocadoMinOrderByAggregateInput = {
    cod?: SortOrder
    valor_unitario?: SortOrder
    nome?: SortOrder
    cod_locacao?: SortOrder
    data_devolucao?: SortOrder
    cod_brinquedo?: SortOrder
    ativo?: SortOrder
  }

  export type BrinquedoLocadoSumOrderByAggregateInput = {
    valor_unitario?: SortOrder
  }

  export type LocacaoListRelationFilter = {
    every?: LocacaoWhereInput
    some?: LocacaoWhereInput
    none?: LocacaoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type LocacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
  }

  export type EnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type FuncionarioCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    funcao?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    funcao?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    funcao?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
  }

  export type EnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type EnumPgtoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PgtoStatus | EnumPgtoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPgtoStatusFilter<$PrismaModel> | $Enums.PgtoStatus
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PagamentoNullableScalarRelationFilter = {
    is?: PagamentoWhereInput | null
    isNot?: PagamentoWhereInput | null
  }

  export type LocacaoCountOrderByAggregateInput = {
    cod?: SortOrder
    data_hora?: SortOrder
    cpf_cliente?: SortOrder
    ativo?: SortOrder
    pgto_status?: SortOrder
  }

  export type LocacaoMaxOrderByAggregateInput = {
    cod?: SortOrder
    data_hora?: SortOrder
    cpf_cliente?: SortOrder
    ativo?: SortOrder
    pgto_status?: SortOrder
  }

  export type LocacaoMinOrderByAggregateInput = {
    cod?: SortOrder
    data_hora?: SortOrder
    cpf_cliente?: SortOrder
    ativo?: SortOrder
    pgto_status?: SortOrder
  }

  export type EnumPgtoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PgtoStatus | EnumPgtoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPgtoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PgtoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPgtoStatusFilter<$PrismaModel>
    _max?: NestedEnumPgtoStatusFilter<$PrismaModel>
  }

  export type PagamentoCountOrderByAggregateInput = {
    cod?: SortOrder
    cpf_cliente?: SortOrder
    cod_locacao?: SortOrder
    data_pagamento?: SortOrder
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    cod?: SortOrder
    cpf_cliente?: SortOrder
    cod_locacao?: SortOrder
    data_pagamento?: SortOrder
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    cod?: SortOrder
    cpf_cliente?: SortOrder
    cod_locacao?: SortOrder
    data_pagamento?: SortOrder
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
    ativo?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    valor_pagamento?: SortOrder
    valor_locacao?: SortOrder
  }

  export type BrinquedoListRelationFilter = {
    every?: BrinquedoWhereInput
    some?: BrinquedoWhereInput
    none?: BrinquedoWhereInput
  }

  export type BrinquedoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoBrinquedoCountOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type TipoBrinquedoMaxOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type TipoBrinquedoMinOrderByAggregateInput = {
    cod?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type TipoBrinquedoCreateNestedOneWithoutBrinquedosInput = {
    create?: XOR<TipoBrinquedoCreateWithoutBrinquedosInput, TipoBrinquedoUncheckedCreateWithoutBrinquedosInput>
    connectOrCreate?: TipoBrinquedoCreateOrConnectWithoutBrinquedosInput
    connect?: TipoBrinquedoWhereUniqueInput
  }

  export type BrinquedoLocadoCreateNestedManyWithoutBrinquedoInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput> | BrinquedoLocadoCreateWithoutBrinquedoInput[] | BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput | BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput[]
    createMany?: BrinquedoLocadoCreateManyBrinquedoInputEnvelope
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
  }

  export type BrinquedoLocadoUncheckedCreateNestedManyWithoutBrinquedoInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput> | BrinquedoLocadoCreateWithoutBrinquedoInput[] | BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput | BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput[]
    createMany?: BrinquedoLocadoCreateManyBrinquedoInputEnvelope
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TipoBrinquedoUpdateOneRequiredWithoutBrinquedosNestedInput = {
    create?: XOR<TipoBrinquedoCreateWithoutBrinquedosInput, TipoBrinquedoUncheckedCreateWithoutBrinquedosInput>
    connectOrCreate?: TipoBrinquedoCreateOrConnectWithoutBrinquedosInput
    upsert?: TipoBrinquedoUpsertWithoutBrinquedosInput
    connect?: TipoBrinquedoWhereUniqueInput
    update?: XOR<XOR<TipoBrinquedoUpdateToOneWithWhereWithoutBrinquedosInput, TipoBrinquedoUpdateWithoutBrinquedosInput>, TipoBrinquedoUncheckedUpdateWithoutBrinquedosInput>
  }

  export type BrinquedoLocadoUpdateManyWithoutBrinquedoNestedInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput> | BrinquedoLocadoCreateWithoutBrinquedoInput[] | BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput | BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput[]
    upsert?: BrinquedoLocadoUpsertWithWhereUniqueWithoutBrinquedoInput | BrinquedoLocadoUpsertWithWhereUniqueWithoutBrinquedoInput[]
    createMany?: BrinquedoLocadoCreateManyBrinquedoInputEnvelope
    set?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    disconnect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    delete?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    update?: BrinquedoLocadoUpdateWithWhereUniqueWithoutBrinquedoInput | BrinquedoLocadoUpdateWithWhereUniqueWithoutBrinquedoInput[]
    updateMany?: BrinquedoLocadoUpdateManyWithWhereWithoutBrinquedoInput | BrinquedoLocadoUpdateManyWithWhereWithoutBrinquedoInput[]
    deleteMany?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
  }

  export type BrinquedoLocadoUncheckedUpdateManyWithoutBrinquedoNestedInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput> | BrinquedoLocadoCreateWithoutBrinquedoInput[] | BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput | BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput[]
    upsert?: BrinquedoLocadoUpsertWithWhereUniqueWithoutBrinquedoInput | BrinquedoLocadoUpsertWithWhereUniqueWithoutBrinquedoInput[]
    createMany?: BrinquedoLocadoCreateManyBrinquedoInputEnvelope
    set?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    disconnect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    delete?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    update?: BrinquedoLocadoUpdateWithWhereUniqueWithoutBrinquedoInput | BrinquedoLocadoUpdateWithWhereUniqueWithoutBrinquedoInput[]
    updateMany?: BrinquedoLocadoUpdateManyWithWhereWithoutBrinquedoInput | BrinquedoLocadoUpdateManyWithWhereWithoutBrinquedoInput[]
    deleteMany?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
  }

  export type LocacaoCreateNestedOneWithoutBrinquedosLocadosInput = {
    create?: XOR<LocacaoCreateWithoutBrinquedosLocadosInput, LocacaoUncheckedCreateWithoutBrinquedosLocadosInput>
    connectOrCreate?: LocacaoCreateOrConnectWithoutBrinquedosLocadosInput
    connect?: LocacaoWhereUniqueInput
  }

  export type BrinquedoCreateNestedOneWithoutBrinquedosLocadosInput = {
    create?: XOR<BrinquedoCreateWithoutBrinquedosLocadosInput, BrinquedoUncheckedCreateWithoutBrinquedosLocadosInput>
    connectOrCreate?: BrinquedoCreateOrConnectWithoutBrinquedosLocadosInput
    connect?: BrinquedoWhereUniqueInput
  }

  export type LocacaoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput = {
    create?: XOR<LocacaoCreateWithoutBrinquedosLocadosInput, LocacaoUncheckedCreateWithoutBrinquedosLocadosInput>
    connectOrCreate?: LocacaoCreateOrConnectWithoutBrinquedosLocadosInput
    upsert?: LocacaoUpsertWithoutBrinquedosLocadosInput
    connect?: LocacaoWhereUniqueInput
    update?: XOR<XOR<LocacaoUpdateToOneWithWhereWithoutBrinquedosLocadosInput, LocacaoUpdateWithoutBrinquedosLocadosInput>, LocacaoUncheckedUpdateWithoutBrinquedosLocadosInput>
  }

  export type BrinquedoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput = {
    create?: XOR<BrinquedoCreateWithoutBrinquedosLocadosInput, BrinquedoUncheckedCreateWithoutBrinquedosLocadosInput>
    connectOrCreate?: BrinquedoCreateOrConnectWithoutBrinquedosLocadosInput
    upsert?: BrinquedoUpsertWithoutBrinquedosLocadosInput
    connect?: BrinquedoWhereUniqueInput
    update?: XOR<XOR<BrinquedoUpdateToOneWithWhereWithoutBrinquedosLocadosInput, BrinquedoUpdateWithoutBrinquedosLocadosInput>, BrinquedoUncheckedUpdateWithoutBrinquedosLocadosInput>
  }

  export type LocacaoCreateNestedManyWithoutClienteInput = {
    create?: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput> | LocacaoCreateWithoutClienteInput[] | LocacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutClienteInput | LocacaoCreateOrConnectWithoutClienteInput[]
    createMany?: LocacaoCreateManyClienteInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput> | PagamentoCreateWithoutClienteInput[] | PagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutClienteInput | PagamentoCreateOrConnectWithoutClienteInput[]
    createMany?: PagamentoCreateManyClienteInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type LocacaoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput> | LocacaoCreateWithoutClienteInput[] | LocacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutClienteInput | LocacaoCreateOrConnectWithoutClienteInput[]
    createMany?: LocacaoCreateManyClienteInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput> | PagamentoCreateWithoutClienteInput[] | PagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutClienteInput | PagamentoCreateOrConnectWithoutClienteInput[]
    createMany?: PagamentoCreateManyClienteInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type LocacaoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput> | LocacaoCreateWithoutClienteInput[] | LocacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutClienteInput | LocacaoCreateOrConnectWithoutClienteInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutClienteInput | LocacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: LocacaoCreateManyClienteInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutClienteInput | LocacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutClienteInput | LocacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput> | PagamentoCreateWithoutClienteInput[] | PagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutClienteInput | PagamentoCreateOrConnectWithoutClienteInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutClienteInput | PagamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagamentoCreateManyClienteInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutClienteInput | PagamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutClienteInput | PagamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type LocacaoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput> | LocacaoCreateWithoutClienteInput[] | LocacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutClienteInput | LocacaoCreateOrConnectWithoutClienteInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutClienteInput | LocacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: LocacaoCreateManyClienteInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutClienteInput | LocacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutClienteInput | LocacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput> | PagamentoCreateWithoutClienteInput[] | PagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutClienteInput | PagamentoCreateOrConnectWithoutClienteInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutClienteInput | PagamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagamentoCreateManyClienteInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutClienteInput | PagamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutClienteInput | PagamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type EnumFuncaoFieldUpdateOperationsInput = {
    set?: $Enums.Funcao
  }

  export type BrinquedoLocadoCreateNestedManyWithoutLocacaoInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput> | BrinquedoLocadoCreateWithoutLocacaoInput[] | BrinquedoLocadoUncheckedCreateWithoutLocacaoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutLocacaoInput | BrinquedoLocadoCreateOrConnectWithoutLocacaoInput[]
    createMany?: BrinquedoLocadoCreateManyLocacaoInputEnvelope
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutLocacoesInput = {
    create?: XOR<ClienteCreateWithoutLocacoesInput, ClienteUncheckedCreateWithoutLocacoesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutLocacoesInput
    connect?: ClienteWhereUniqueInput
  }

  export type PagamentoCreateNestedOneWithoutLocacaoInput = {
    create?: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutLocacaoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type BrinquedoLocadoUncheckedCreateNestedManyWithoutLocacaoInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput> | BrinquedoLocadoCreateWithoutLocacaoInput[] | BrinquedoLocadoUncheckedCreateWithoutLocacaoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutLocacaoInput | BrinquedoLocadoCreateOrConnectWithoutLocacaoInput[]
    createMany?: BrinquedoLocadoCreateManyLocacaoInputEnvelope
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedOneWithoutLocacaoInput = {
    create?: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutLocacaoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type EnumPgtoStatusFieldUpdateOperationsInput = {
    set?: $Enums.PgtoStatus
  }

  export type BrinquedoLocadoUpdateManyWithoutLocacaoNestedInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput> | BrinquedoLocadoCreateWithoutLocacaoInput[] | BrinquedoLocadoUncheckedCreateWithoutLocacaoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutLocacaoInput | BrinquedoLocadoCreateOrConnectWithoutLocacaoInput[]
    upsert?: BrinquedoLocadoUpsertWithWhereUniqueWithoutLocacaoInput | BrinquedoLocadoUpsertWithWhereUniqueWithoutLocacaoInput[]
    createMany?: BrinquedoLocadoCreateManyLocacaoInputEnvelope
    set?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    disconnect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    delete?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    update?: BrinquedoLocadoUpdateWithWhereUniqueWithoutLocacaoInput | BrinquedoLocadoUpdateWithWhereUniqueWithoutLocacaoInput[]
    updateMany?: BrinquedoLocadoUpdateManyWithWhereWithoutLocacaoInput | BrinquedoLocadoUpdateManyWithWhereWithoutLocacaoInput[]
    deleteMany?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
  }

  export type ClienteUpdateOneRequiredWithoutLocacoesNestedInput = {
    create?: XOR<ClienteCreateWithoutLocacoesInput, ClienteUncheckedCreateWithoutLocacoesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutLocacoesInput
    upsert?: ClienteUpsertWithoutLocacoesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutLocacoesInput, ClienteUpdateWithoutLocacoesInput>, ClienteUncheckedUpdateWithoutLocacoesInput>
  }

  export type PagamentoUpdateOneWithoutLocacaoNestedInput = {
    create?: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutLocacaoInput
    upsert?: PagamentoUpsertWithoutLocacaoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutLocacaoInput, PagamentoUpdateWithoutLocacaoInput>, PagamentoUncheckedUpdateWithoutLocacaoInput>
  }

  export type BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoNestedInput = {
    create?: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput> | BrinquedoLocadoCreateWithoutLocacaoInput[] | BrinquedoLocadoUncheckedCreateWithoutLocacaoInput[]
    connectOrCreate?: BrinquedoLocadoCreateOrConnectWithoutLocacaoInput | BrinquedoLocadoCreateOrConnectWithoutLocacaoInput[]
    upsert?: BrinquedoLocadoUpsertWithWhereUniqueWithoutLocacaoInput | BrinquedoLocadoUpsertWithWhereUniqueWithoutLocacaoInput[]
    createMany?: BrinquedoLocadoCreateManyLocacaoInputEnvelope
    set?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    disconnect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    delete?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    connect?: BrinquedoLocadoWhereUniqueInput | BrinquedoLocadoWhereUniqueInput[]
    update?: BrinquedoLocadoUpdateWithWhereUniqueWithoutLocacaoInput | BrinquedoLocadoUpdateWithWhereUniqueWithoutLocacaoInput[]
    updateMany?: BrinquedoLocadoUpdateManyWithWhereWithoutLocacaoInput | BrinquedoLocadoUpdateManyWithWhereWithoutLocacaoInput[]
    deleteMany?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateOneWithoutLocacaoNestedInput = {
    create?: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutLocacaoInput
    upsert?: PagamentoUpsertWithoutLocacaoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutLocacaoInput, PagamentoUpdateWithoutLocacaoInput>, PagamentoUncheckedUpdateWithoutLocacaoInput>
  }

  export type LocacaoCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<LocacaoCreateWithoutPagamentoInput, LocacaoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: LocacaoCreateOrConnectWithoutPagamentoInput
    connect?: LocacaoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<ClienteCreateWithoutPagamentosInput, ClienteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type LocacaoUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<LocacaoCreateWithoutPagamentoInput, LocacaoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: LocacaoCreateOrConnectWithoutPagamentoInput
    upsert?: LocacaoUpsertWithoutPagamentoInput
    connect?: LocacaoWhereUniqueInput
    update?: XOR<XOR<LocacaoUpdateToOneWithWhereWithoutPagamentoInput, LocacaoUpdateWithoutPagamentoInput>, LocacaoUncheckedUpdateWithoutPagamentoInput>
  }

  export type ClienteUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutPagamentosInput, ClienteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagamentosInput
    upsert?: ClienteUpsertWithoutPagamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPagamentosInput, ClienteUpdateWithoutPagamentosInput>, ClienteUncheckedUpdateWithoutPagamentosInput>
  }

  export type BrinquedoCreateNestedManyWithoutTipoBrinquedoInput = {
    create?: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput> | BrinquedoCreateWithoutTipoBrinquedoInput[] | BrinquedoUncheckedCreateWithoutTipoBrinquedoInput[]
    connectOrCreate?: BrinquedoCreateOrConnectWithoutTipoBrinquedoInput | BrinquedoCreateOrConnectWithoutTipoBrinquedoInput[]
    createMany?: BrinquedoCreateManyTipoBrinquedoInputEnvelope
    connect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
  }

  export type BrinquedoUncheckedCreateNestedManyWithoutTipoBrinquedoInput = {
    create?: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput> | BrinquedoCreateWithoutTipoBrinquedoInput[] | BrinquedoUncheckedCreateWithoutTipoBrinquedoInput[]
    connectOrCreate?: BrinquedoCreateOrConnectWithoutTipoBrinquedoInput | BrinquedoCreateOrConnectWithoutTipoBrinquedoInput[]
    createMany?: BrinquedoCreateManyTipoBrinquedoInputEnvelope
    connect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
  }

  export type BrinquedoUpdateManyWithoutTipoBrinquedoNestedInput = {
    create?: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput> | BrinquedoCreateWithoutTipoBrinquedoInput[] | BrinquedoUncheckedCreateWithoutTipoBrinquedoInput[]
    connectOrCreate?: BrinquedoCreateOrConnectWithoutTipoBrinquedoInput | BrinquedoCreateOrConnectWithoutTipoBrinquedoInput[]
    upsert?: BrinquedoUpsertWithWhereUniqueWithoutTipoBrinquedoInput | BrinquedoUpsertWithWhereUniqueWithoutTipoBrinquedoInput[]
    createMany?: BrinquedoCreateManyTipoBrinquedoInputEnvelope
    set?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    disconnect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    delete?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    connect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    update?: BrinquedoUpdateWithWhereUniqueWithoutTipoBrinquedoInput | BrinquedoUpdateWithWhereUniqueWithoutTipoBrinquedoInput[]
    updateMany?: BrinquedoUpdateManyWithWhereWithoutTipoBrinquedoInput | BrinquedoUpdateManyWithWhereWithoutTipoBrinquedoInput[]
    deleteMany?: BrinquedoScalarWhereInput | BrinquedoScalarWhereInput[]
  }

  export type BrinquedoUncheckedUpdateManyWithoutTipoBrinquedoNestedInput = {
    create?: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput> | BrinquedoCreateWithoutTipoBrinquedoInput[] | BrinquedoUncheckedCreateWithoutTipoBrinquedoInput[]
    connectOrCreate?: BrinquedoCreateOrConnectWithoutTipoBrinquedoInput | BrinquedoCreateOrConnectWithoutTipoBrinquedoInput[]
    upsert?: BrinquedoUpsertWithWhereUniqueWithoutTipoBrinquedoInput | BrinquedoUpsertWithWhereUniqueWithoutTipoBrinquedoInput[]
    createMany?: BrinquedoCreateManyTipoBrinquedoInputEnvelope
    set?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    disconnect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    delete?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    connect?: BrinquedoWhereUniqueInput | BrinquedoWhereUniqueInput[]
    update?: BrinquedoUpdateWithWhereUniqueWithoutTipoBrinquedoInput | BrinquedoUpdateWithWhereUniqueWithoutTipoBrinquedoInput[]
    updateMany?: BrinquedoUpdateManyWithWhereWithoutTipoBrinquedoInput | BrinquedoUpdateManyWithWhereWithoutTipoBrinquedoInput[]
    deleteMany?: BrinquedoScalarWhereInput | BrinquedoScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type NestedEnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type NestedEnumPgtoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PgtoStatus | EnumPgtoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPgtoStatusFilter<$PrismaModel> | $Enums.PgtoStatus
  }

  export type NestedEnumPgtoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PgtoStatus | EnumPgtoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PgtoStatus[] | ListEnumPgtoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPgtoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PgtoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPgtoStatusFilter<$PrismaModel>
    _max?: NestedEnumPgtoStatusFilter<$PrismaModel>
  }

  export type TipoBrinquedoCreateWithoutBrinquedosInput = {
    cod?: string
    nome: string
    ativo?: boolean
  }

  export type TipoBrinquedoUncheckedCreateWithoutBrinquedosInput = {
    cod?: string
    nome: string
    ativo?: boolean
  }

  export type TipoBrinquedoCreateOrConnectWithoutBrinquedosInput = {
    where: TipoBrinquedoWhereUniqueInput
    create: XOR<TipoBrinquedoCreateWithoutBrinquedosInput, TipoBrinquedoUncheckedCreateWithoutBrinquedosInput>
  }

  export type BrinquedoLocadoCreateWithoutBrinquedoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    data_devolucao: Date | string
    ativo?: boolean
    locacao: LocacaoCreateNestedOneWithoutBrinquedosLocadosInput
  }

  export type BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    cod_locacao: string
    data_devolucao: Date | string
    ativo?: boolean
  }

  export type BrinquedoLocadoCreateOrConnectWithoutBrinquedoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    create: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput>
  }

  export type BrinquedoLocadoCreateManyBrinquedoInputEnvelope = {
    data: BrinquedoLocadoCreateManyBrinquedoInput | BrinquedoLocadoCreateManyBrinquedoInput[]
    skipDuplicates?: boolean
  }

  export type TipoBrinquedoUpsertWithoutBrinquedosInput = {
    update: XOR<TipoBrinquedoUpdateWithoutBrinquedosInput, TipoBrinquedoUncheckedUpdateWithoutBrinquedosInput>
    create: XOR<TipoBrinquedoCreateWithoutBrinquedosInput, TipoBrinquedoUncheckedCreateWithoutBrinquedosInput>
    where?: TipoBrinquedoWhereInput
  }

  export type TipoBrinquedoUpdateToOneWithWhereWithoutBrinquedosInput = {
    where?: TipoBrinquedoWhereInput
    data: XOR<TipoBrinquedoUpdateWithoutBrinquedosInput, TipoBrinquedoUncheckedUpdateWithoutBrinquedosInput>
  }

  export type TipoBrinquedoUpdateWithoutBrinquedosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoBrinquedoUncheckedUpdateWithoutBrinquedosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoUpsertWithWhereUniqueWithoutBrinquedoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    update: XOR<BrinquedoLocadoUpdateWithoutBrinquedoInput, BrinquedoLocadoUncheckedUpdateWithoutBrinquedoInput>
    create: XOR<BrinquedoLocadoCreateWithoutBrinquedoInput, BrinquedoLocadoUncheckedCreateWithoutBrinquedoInput>
  }

  export type BrinquedoLocadoUpdateWithWhereUniqueWithoutBrinquedoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    data: XOR<BrinquedoLocadoUpdateWithoutBrinquedoInput, BrinquedoLocadoUncheckedUpdateWithoutBrinquedoInput>
  }

  export type BrinquedoLocadoUpdateManyWithWhereWithoutBrinquedoInput = {
    where: BrinquedoLocadoScalarWhereInput
    data: XOR<BrinquedoLocadoUpdateManyMutationInput, BrinquedoLocadoUncheckedUpdateManyWithoutBrinquedoInput>
  }

  export type BrinquedoLocadoScalarWhereInput = {
    AND?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
    OR?: BrinquedoLocadoScalarWhereInput[]
    NOT?: BrinquedoLocadoScalarWhereInput | BrinquedoLocadoScalarWhereInput[]
    cod?: UuidFilter<"BrinquedoLocado"> | string
    valor_unitario?: DecimalFilter<"BrinquedoLocado"> | Decimal | DecimalJsLike | number | string
    nome?: StringFilter<"BrinquedoLocado"> | string
    cod_locacao?: UuidFilter<"BrinquedoLocado"> | string
    data_devolucao?: DateTimeFilter<"BrinquedoLocado"> | Date | string
    cod_brinquedo?: UuidFilter<"BrinquedoLocado"> | string
    ativo?: BoolFilter<"BrinquedoLocado"> | boolean
  }

  export type LocacaoCreateWithoutBrinquedosLocadosInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    cliente: ClienteCreateNestedOneWithoutLocacoesInput
    pagamento?: PagamentoCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateWithoutBrinquedosLocadosInput = {
    cod?: string
    data_hora?: Date | string
    cpf_cliente: string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoCreateOrConnectWithoutBrinquedosLocadosInput = {
    where: LocacaoWhereUniqueInput
    create: XOR<LocacaoCreateWithoutBrinquedosLocadosInput, LocacaoUncheckedCreateWithoutBrinquedosLocadosInput>
  }

  export type BrinquedoCreateWithoutBrinquedosLocadosInput = {
    cod?: string
    nome: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    tipoBrinquedo: TipoBrinquedoCreateNestedOneWithoutBrinquedosInput
  }

  export type BrinquedoUncheckedCreateWithoutBrinquedosLocadosInput = {
    cod?: string
    nome: string
    tipo_brinquedo: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type BrinquedoCreateOrConnectWithoutBrinquedosLocadosInput = {
    where: BrinquedoWhereUniqueInput
    create: XOR<BrinquedoCreateWithoutBrinquedosLocadosInput, BrinquedoUncheckedCreateWithoutBrinquedosLocadosInput>
  }

  export type LocacaoUpsertWithoutBrinquedosLocadosInput = {
    update: XOR<LocacaoUpdateWithoutBrinquedosLocadosInput, LocacaoUncheckedUpdateWithoutBrinquedosLocadosInput>
    create: XOR<LocacaoCreateWithoutBrinquedosLocadosInput, LocacaoUncheckedCreateWithoutBrinquedosLocadosInput>
    where?: LocacaoWhereInput
  }

  export type LocacaoUpdateToOneWithWhereWithoutBrinquedosLocadosInput = {
    where?: LocacaoWhereInput
    data: XOR<LocacaoUpdateWithoutBrinquedosLocadosInput, LocacaoUncheckedUpdateWithoutBrinquedosLocadosInput>
  }

  export type LocacaoUpdateWithoutBrinquedosLocadosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    cliente?: ClienteUpdateOneRequiredWithoutLocacoesNestedInput
    pagamento?: PagamentoUpdateOneWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateWithoutBrinquedosLocadosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    pagamento?: PagamentoUncheckedUpdateOneWithoutLocacaoNestedInput
  }

  export type BrinquedoUpsertWithoutBrinquedosLocadosInput = {
    update: XOR<BrinquedoUpdateWithoutBrinquedosLocadosInput, BrinquedoUncheckedUpdateWithoutBrinquedosLocadosInput>
    create: XOR<BrinquedoCreateWithoutBrinquedosLocadosInput, BrinquedoUncheckedCreateWithoutBrinquedosLocadosInput>
    where?: BrinquedoWhereInput
  }

  export type BrinquedoUpdateToOneWithWhereWithoutBrinquedosLocadosInput = {
    where?: BrinquedoWhereInput
    data: XOR<BrinquedoUpdateWithoutBrinquedosLocadosInput, BrinquedoUncheckedUpdateWithoutBrinquedosLocadosInput>
  }

  export type BrinquedoUpdateWithoutBrinquedosLocadosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    tipoBrinquedo?: TipoBrinquedoUpdateOneRequiredWithoutBrinquedosNestedInput
  }

  export type BrinquedoUncheckedUpdateWithoutBrinquedosLocadosInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo_brinquedo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocacaoCreateWithoutClienteInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoCreateNestedManyWithoutLocacaoInput
    pagamento?: PagamentoCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateWithoutClienteInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedCreateNestedManyWithoutLocacaoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoCreateOrConnectWithoutClienteInput = {
    where: LocacaoWhereUniqueInput
    create: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput>
  }

  export type LocacaoCreateManyClienteInputEnvelope = {
    data: LocacaoCreateManyClienteInput | LocacaoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutClienteInput = {
    cod?: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    locacao: LocacaoCreateNestedOneWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateWithoutClienteInput = {
    cod?: string
    cod_locacao: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type PagamentoCreateOrConnectWithoutClienteInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput>
  }

  export type PagamentoCreateManyClienteInputEnvelope = {
    data: PagamentoCreateManyClienteInput | PagamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type LocacaoUpsertWithWhereUniqueWithoutClienteInput = {
    where: LocacaoWhereUniqueInput
    update: XOR<LocacaoUpdateWithoutClienteInput, LocacaoUncheckedUpdateWithoutClienteInput>
    create: XOR<LocacaoCreateWithoutClienteInput, LocacaoUncheckedCreateWithoutClienteInput>
  }

  export type LocacaoUpdateWithWhereUniqueWithoutClienteInput = {
    where: LocacaoWhereUniqueInput
    data: XOR<LocacaoUpdateWithoutClienteInput, LocacaoUncheckedUpdateWithoutClienteInput>
  }

  export type LocacaoUpdateManyWithWhereWithoutClienteInput = {
    where: LocacaoScalarWhereInput
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyWithoutClienteInput>
  }

  export type LocacaoScalarWhereInput = {
    AND?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
    OR?: LocacaoScalarWhereInput[]
    NOT?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
    cod?: UuidFilter<"Locacao"> | string
    data_hora?: DateTimeFilter<"Locacao"> | Date | string
    cpf_cliente?: StringFilter<"Locacao"> | string
    ativo?: BoolFilter<"Locacao"> | boolean
    pgto_status?: EnumPgtoStatusFilter<"Locacao"> | $Enums.PgtoStatus
  }

  export type PagamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutClienteInput, PagamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<PagamentoCreateWithoutClienteInput, PagamentoUncheckedCreateWithoutClienteInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutClienteInput, PagamentoUncheckedUpdateWithoutClienteInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutClienteInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    cod?: UuidFilter<"Pagamento"> | string
    cpf_cliente?: StringFilter<"Pagamento"> | string
    cod_locacao?: UuidFilter<"Pagamento"> | string
    data_pagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valor_pagamento?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Pagamento"> | boolean
  }

  export type BrinquedoLocadoCreateWithoutLocacaoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    data_devolucao: Date | string
    ativo?: boolean
    brinquedo: BrinquedoCreateNestedOneWithoutBrinquedosLocadosInput
  }

  export type BrinquedoLocadoUncheckedCreateWithoutLocacaoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    data_devolucao: Date | string
    cod_brinquedo: string
    ativo?: boolean
  }

  export type BrinquedoLocadoCreateOrConnectWithoutLocacaoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    create: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput>
  }

  export type BrinquedoLocadoCreateManyLocacaoInputEnvelope = {
    data: BrinquedoLocadoCreateManyLocacaoInput | BrinquedoLocadoCreateManyLocacaoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutLocacoesInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    pagamentos?: PagamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutLocacoesInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutLocacoesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutLocacoesInput, ClienteUncheckedCreateWithoutLocacoesInput>
  }

  export type PagamentoCreateWithoutLocacaoInput = {
    cod?: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    cliente: ClienteCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutLocacaoInput = {
    cod?: string
    cpf_cliente: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type PagamentoCreateOrConnectWithoutLocacaoInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
  }

  export type BrinquedoLocadoUpsertWithWhereUniqueWithoutLocacaoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    update: XOR<BrinquedoLocadoUpdateWithoutLocacaoInput, BrinquedoLocadoUncheckedUpdateWithoutLocacaoInput>
    create: XOR<BrinquedoLocadoCreateWithoutLocacaoInput, BrinquedoLocadoUncheckedCreateWithoutLocacaoInput>
  }

  export type BrinquedoLocadoUpdateWithWhereUniqueWithoutLocacaoInput = {
    where: BrinquedoLocadoWhereUniqueInput
    data: XOR<BrinquedoLocadoUpdateWithoutLocacaoInput, BrinquedoLocadoUncheckedUpdateWithoutLocacaoInput>
  }

  export type BrinquedoLocadoUpdateManyWithWhereWithoutLocacaoInput = {
    where: BrinquedoLocadoScalarWhereInput
    data: XOR<BrinquedoLocadoUpdateManyMutationInput, BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoInput>
  }

  export type ClienteUpsertWithoutLocacoesInput = {
    update: XOR<ClienteUpdateWithoutLocacoesInput, ClienteUncheckedUpdateWithoutLocacoesInput>
    create: XOR<ClienteCreateWithoutLocacoesInput, ClienteUncheckedCreateWithoutLocacoesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutLocacoesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutLocacoesInput, ClienteUncheckedUpdateWithoutLocacoesInput>
  }

  export type ClienteUpdateWithoutLocacoesInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pagamentos?: PagamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutLocacoesInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pagamentos?: PagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PagamentoUpsertWithoutLocacaoInput = {
    update: XOR<PagamentoUpdateWithoutLocacaoInput, PagamentoUncheckedUpdateWithoutLocacaoInput>
    create: XOR<PagamentoCreateWithoutLocacaoInput, PagamentoUncheckedCreateWithoutLocacaoInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutLocacaoInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutLocacaoInput, PagamentoUncheckedUpdateWithoutLocacaoInput>
  }

  export type PagamentoUpdateWithoutLocacaoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cliente?: ClienteUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutLocacaoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocacaoCreateWithoutPagamentoInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoCreateNestedManyWithoutLocacaoInput
    cliente: ClienteCreateNestedOneWithoutLocacoesInput
  }

  export type LocacaoUncheckedCreateWithoutPagamentoInput = {
    cod?: string
    data_hora?: Date | string
    cpf_cliente: string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedCreateNestedManyWithoutLocacaoInput
  }

  export type LocacaoCreateOrConnectWithoutPagamentoInput = {
    where: LocacaoWhereUniqueInput
    create: XOR<LocacaoCreateWithoutPagamentoInput, LocacaoUncheckedCreateWithoutPagamentoInput>
  }

  export type ClienteCreateWithoutPagamentosInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    locacoes?: LocacaoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPagamentosInput = {
    cpf: string
    nome: string
    endereco: string
    data_nascimento: Date | string
    telefone: string
    ativo?: boolean
    locacoes?: LocacaoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPagamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPagamentosInput, ClienteUncheckedCreateWithoutPagamentosInput>
  }

  export type LocacaoUpsertWithoutPagamentoInput = {
    update: XOR<LocacaoUpdateWithoutPagamentoInput, LocacaoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<LocacaoCreateWithoutPagamentoInput, LocacaoUncheckedCreateWithoutPagamentoInput>
    where?: LocacaoWhereInput
  }

  export type LocacaoUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: LocacaoWhereInput
    data: XOR<LocacaoUpdateWithoutPagamentoInput, LocacaoUncheckedUpdateWithoutPagamentoInput>
  }

  export type LocacaoUpdateWithoutPagamentoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUpdateManyWithoutLocacaoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutLocacoesNestedInput
  }

  export type LocacaoUncheckedUpdateWithoutPagamentoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoNestedInput
  }

  export type ClienteUpsertWithoutPagamentosInput = {
    update: XOR<ClienteUpdateWithoutPagamentosInput, ClienteUncheckedUpdateWithoutPagamentosInput>
    create: XOR<ClienteCreateWithoutPagamentosInput, ClienteUncheckedCreateWithoutPagamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPagamentosInput, ClienteUncheckedUpdateWithoutPagamentosInput>
  }

  export type ClienteUpdateWithoutPagamentosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacoes?: LocacaoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPagamentosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacoes?: LocacaoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type BrinquedoCreateWithoutTipoBrinquedoInput = {
    cod?: string
    nome: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    brinquedosLocados?: BrinquedoLocadoCreateNestedManyWithoutBrinquedoInput
  }

  export type BrinquedoUncheckedCreateWithoutTipoBrinquedoInput = {
    cod?: string
    nome: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    brinquedosLocados?: BrinquedoLocadoUncheckedCreateNestedManyWithoutBrinquedoInput
  }

  export type BrinquedoCreateOrConnectWithoutTipoBrinquedoInput = {
    where: BrinquedoWhereUniqueInput
    create: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput>
  }

  export type BrinquedoCreateManyTipoBrinquedoInputEnvelope = {
    data: BrinquedoCreateManyTipoBrinquedoInput | BrinquedoCreateManyTipoBrinquedoInput[]
    skipDuplicates?: boolean
  }

  export type BrinquedoUpsertWithWhereUniqueWithoutTipoBrinquedoInput = {
    where: BrinquedoWhereUniqueInput
    update: XOR<BrinquedoUpdateWithoutTipoBrinquedoInput, BrinquedoUncheckedUpdateWithoutTipoBrinquedoInput>
    create: XOR<BrinquedoCreateWithoutTipoBrinquedoInput, BrinquedoUncheckedCreateWithoutTipoBrinquedoInput>
  }

  export type BrinquedoUpdateWithWhereUniqueWithoutTipoBrinquedoInput = {
    where: BrinquedoWhereUniqueInput
    data: XOR<BrinquedoUpdateWithoutTipoBrinquedoInput, BrinquedoUncheckedUpdateWithoutTipoBrinquedoInput>
  }

  export type BrinquedoUpdateManyWithWhereWithoutTipoBrinquedoInput = {
    where: BrinquedoScalarWhereInput
    data: XOR<BrinquedoUpdateManyMutationInput, BrinquedoUncheckedUpdateManyWithoutTipoBrinquedoInput>
  }

  export type BrinquedoScalarWhereInput = {
    AND?: BrinquedoScalarWhereInput | BrinquedoScalarWhereInput[]
    OR?: BrinquedoScalarWhereInput[]
    NOT?: BrinquedoScalarWhereInput | BrinquedoScalarWhereInput[]
    cod?: UuidFilter<"Brinquedo"> | string
    nome?: StringFilter<"Brinquedo"> | string
    tipo_brinquedo?: UuidFilter<"Brinquedo"> | string
    marca?: StringFilter<"Brinquedo"> | string
    data_aquisicao?: DateTimeFilter<"Brinquedo"> | Date | string
    valor_locacao?: DecimalFilter<"Brinquedo"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Brinquedo"> | boolean
  }

  export type BrinquedoLocadoCreateManyBrinquedoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    cod_locacao: string
    data_devolucao: Date | string
    ativo?: boolean
  }

  export type BrinquedoLocadoUpdateWithoutBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacao?: LocacaoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput
  }

  export type BrinquedoLocadoUncheckedUpdateWithoutBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoUncheckedUpdateManyWithoutBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocacaoCreateManyClienteInput = {
    cod?: string
    data_hora?: Date | string
    ativo?: boolean
    pgto_status?: $Enums.PgtoStatus
  }

  export type PagamentoCreateManyClienteInput = {
    cod?: string
    cod_locacao: string
    data_pagamento?: Date | string
    valor_pagamento: Decimal | DecimalJsLike | number | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type LocacaoUpdateWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUpdateManyWithoutLocacaoNestedInput
    pagamento?: PagamentoUpdateOneWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
    brinquedosLocados?: BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateManyWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pgto_status?: EnumPgtoStatusFieldUpdateOperationsInput | $Enums.PgtoStatus
  }

  export type PagamentoUpdateWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    locacao?: LocacaoUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PagamentoUncheckedUpdateManyWithoutClienteInput = {
    cod?: StringFieldUpdateOperationsInput | string
    cod_locacao?: StringFieldUpdateOperationsInput | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_pagamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoCreateManyLocacaoInput = {
    cod?: string
    valor_unitario: Decimal | DecimalJsLike | number | string
    nome: string
    data_devolucao: Date | string
    cod_brinquedo: string
    ativo?: boolean
  }

  export type BrinquedoLocadoUpdateWithoutLocacaoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedo?: BrinquedoUpdateOneRequiredWithoutBrinquedosLocadosNestedInput
  }

  export type BrinquedoLocadoUncheckedUpdateWithoutLocacaoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_brinquedo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoLocadoUncheckedUpdateManyWithoutLocacaoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    valor_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nome?: StringFieldUpdateOperationsInput | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_brinquedo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BrinquedoCreateManyTipoBrinquedoInput = {
    cod?: string
    nome: string
    marca: string
    data_aquisicao: Date | string
    valor_locacao: Decimal | DecimalJsLike | number | string
    ativo?: boolean
  }

  export type BrinquedoUpdateWithoutTipoBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedosLocados?: BrinquedoLocadoUpdateManyWithoutBrinquedoNestedInput
  }

  export type BrinquedoUncheckedUpdateWithoutTipoBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    brinquedosLocados?: BrinquedoLocadoUncheckedUpdateManyWithoutBrinquedoNestedInput
  }

  export type BrinquedoUncheckedUpdateManyWithoutTipoBrinquedoInput = {
    cod?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_locacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
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