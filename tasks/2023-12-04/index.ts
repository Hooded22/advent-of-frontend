export function memoize<TArgument, TFunctionReturn>(calculation: (arg: TArgument) => TFunctionReturn) {
    if(typeof calculation !== 'function') {
        throw new Error('Function to be memoized must be a function.')
    }

    const calls = new Map<TArgument, TFunctionReturn>();

    return (arg: TArgument) => {
        const existingCall = calls.get(arg);

        if(existingCall !== undefined) {
            return existingCall
        }

        const result = calculation(arg);
        calls.set(arg, result)

        return result
    }
}