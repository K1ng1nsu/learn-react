// validation.ts
export const validateNumber = (value: string): string | null => {
    if (value.trim() === '') return 'Please enter a number';
    if (isNaN(parseInt(value))) return 'Not a valid number';
    return null;
};
