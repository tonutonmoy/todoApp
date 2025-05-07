import z from 'zod';
const registerUser = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
    }),
    description: z.string({
      required_error: 'description is required!',
    }),
    isShowing: z
      .boolean({
        required_error: 'isShowing is required!',
      })
   
  }),
});

export const UserValidations = { registerUser };
