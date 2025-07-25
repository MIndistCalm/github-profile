import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface UserSearchProps {
  onSearch: (username: string) => void
}

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9-]+$/, 'Только латинские буквы, цифры и дефис')
    .required('Введите username'),
})

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const formik = useFormik({
    initialValues: { username: '' },
    validationSchema,
    onSubmit: (values) => {
      onSearch(values.username.trim())
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mb-6 flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row items-start gap-2 [@media(max-width:768px)]:gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Input
            type="text"
            name="username"
            placeholder="Введите GitHub username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full flex-1 text-2xl py-2.5 [@media(max-width:768px)]:text-lg"
          />
          {formik.touched.username && formik.errors.username && (
            <div className="w-full text-red-500 text-sm mt-1 sm:mt-0">{formik.errors.username}</div>
          )}
        </div>
        <Button type="submit" className="w-full h-10 sm:w-auto">
          Найти
        </Button>
      </div>
    </form>
  )
}

export default UserSearch
