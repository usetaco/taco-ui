export class TacoError {
  errorCode: number
  errorTitle: string
  errorMessage: string

  constructor(errorCode: number, errorTitle: string, errorMessage: string) {
    this.errorCode = errorCode
    this.errorTitle = errorTitle
    this.errorMessage = errorMessage
  }

  static createError({
    errorCode = 500,
    errorTitle = 'Uh oh, something went wrong...',
    errorMessage = 'Oops! An error ocurred. Please try again.',
  }: {
    errorCode?: number
    errorTitle?: string
    errorMessage?: string
  }): TacoError {
    return new TacoError(errorCode, errorTitle, errorMessage)
  }
}
