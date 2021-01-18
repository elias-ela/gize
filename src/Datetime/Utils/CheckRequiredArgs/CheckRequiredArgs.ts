export const checkRequiredArgs = (args: IArguments, required: number) => {
  if (args.length < required) {
    throw new TypeError(
      `${required} argument${required > 1 ? 's' : ''} required, but only ${
        args.length
      } given.`,
    )
  }
}
