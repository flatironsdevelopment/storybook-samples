import * as Yup from 'yup'
import * as S from './Form.styles'
import { useForm } from '../../providers'

export interface FormProps {
  testId?: string
}

const createProviderInformationSchema = () => {
  return Yup.object().shape({
    insurances: Yup.string().required('Insurances is required'),
    speciality: Yup.string().required('Speciality is required'),
    about: Yup.string().required('About is required')
  })
}

export const ProviderInformationForm = () => {
  const ProviderInformationSchema = createProviderInformationSchema()
  const { providerInformationsData, setProviderInformationsData } = useForm()

  return (
    <S.FormWrapper>
      <S.Title>Provider Information</S.Title>
      <S.SubTitle>Tell us your practice</S.SubTitle>
      <S.Formik
        validateOnBlur
        enableReinitialize={true}
        validateOnMount
        initialValues={{
          insurances: providerInformationsData.insurances,
          speciality: providerInformationsData.speciality,
          about: providerInformationsData.about
        }}
        validationSchema={ProviderInformationSchema}
        onSubmit={() => undefined}
      >
        {({ isValid, errors, touched }) => {
          /**
           * Updates the data on the context api through the useForm hook
           */
          const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            const allValid = isValid && value !== ''
            setProviderInformationsData((prevState: any) => ({
              ...prevState,
              isValid: allValid,
              [name]: value
            }))
          }

          return (
            <S.Form>
              <S.Field
                name="insurances"
                value={providerInformationsData.insurances}
                onChange={_handleChange}
                placeholder="Insurances"
              />
              {errors.insurances && touched.insurances ? (
                <S.ErrorMessage>{errors.insurances}</S.ErrorMessage>
              ) : null}
              <S.Field
                name="speciality"
                value={providerInformationsData.speciality}
                onChange={_handleChange}
                placeholder="Speciality"
              />
              {errors.speciality && touched.speciality ? (
                <S.ErrorMessage>{errors.speciality}</S.ErrorMessage>
              ) : null}
              <S.TextArea
                as="textarea"
                name="about"
                value={providerInformationsData.about}
                onChange={_handleChange}
                placeholder="Tell us about yourself"
              />
              {errors.about && touched.about ? (
                <S.ErrorMessage>{errors.about}</S.ErrorMessage>
              ) : null}
            </S.Form>
          )
        }}
      </S.Formik>
    </S.FormWrapper>
  )
}
