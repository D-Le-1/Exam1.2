export const validateEmail = (value: string): string | null => {
  if (!value) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? null : 'Invalid email format';
};

export const validatePhone = (value: string): string | null => {
  if (!value) return 'Phone is required';
  const phoneRegex = /^(0|\+84)\d{9}$/;
  return phoneRegex.test(value) ? null : 'Invalid phone format';
};

export const validatePassword = (value: string): string | null => {
  if (!value) return 'Password is required';
  if (value.length < 6) return 'Password must be at least 6 characters';
};
