import * as Yup from 'yup'
import * as S from './Form.styles'
import { useForm, PersonalInformationsData } from '../../providers'
import Multiselect from 'multiselect-react-dropdown'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

export interface FormProps {
  testId?: string
}

const createPersonalInformationSchema = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  return Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    // language: Yup.string().required('This field is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
  })
}

export const PersonalInformationForm = () => {
  const PersonalInformationSchema = createPersonalInformationSchema()
  const { personalInformationsData, setPersonalInformationsData } = useForm()

  return (
    <S.FormWrapper>
      <S.Title>Personal Information</S.Title>
      <S.SubTitle>Tell us about yourself</S.SubTitle>
      <S.Formik
        validateOnBlur
        enableReinitialize={true}
        validateOnMount
        initialValues={{
          firstName: personalInformationsData.firstName,
          lastName: personalInformationsData.lastName,
          phoneNumber: personalInformationsData.phoneNumber
        }}
        validationSchema={PersonalInformationSchema}
        onSubmit={() => undefined}
      >
        {({ isValid, errors, touched, values }) => {
          /**
           * Updates the data on the context api through the useForm hook
           */
          const _handleChange = (e: any) => {
            const { name, value } = e.target
            const allValid = isValid && value !== ''
            setPersonalInformationsData((prevState: any) => ({
              ...prevState,
              isValid: allValid,
              [name]: value
            }))
          }

          return (
            <S.Form>
              <S.Field
                name="firstName"
                value={personalInformationsData.firstName}
                onChange={_handleChange}
                placeholder="First name"
              />
              {errors.firstName && touched.firstName ? (
                <S.ErrorMessage data-testid={'error-first-name'}>
                  {errors.firstName}
                </S.ErrorMessage>
              ) : null}

              <Multiselect
                isObject={false}
                onRemove={(selectList) =>
                  _handleChange({
                    target: { name: 'languages', value: selectList }
                  })
                }
                onSelect={(selectList) =>
                  _handleChange({
                    target: { name: 'languages', value: selectList }
                  })
                }
                options={[
                  'English',
                  'Spanish',
                  'French',
                  'Chinese',
                  'Portuguese'
                ]}
                selectedValues={personalInformationsData.languages}
                placeholder="Languages"
                hidePlaceholder
                avoidHighlightFirstOption
                showArrow
                customArrow={<BsChevronDown />}
                customCloseIcon={
                  <>
                    &nbsp;&nbsp;&nbsp;
                    <AiOutlineClose />
                  </>
                }
                style={{
                  chips: {
                    color: 'black',
                    background: '#F8EDE9'
                  },
                  searchBox: {
                    padding: '10px',
                    marginTop: '30px',
                    height: '48px',
                    borderBottom: '1px solid #CBCDD3',
                    borderRadius: '4px'
                  }
                }}
              />

              <S.Field
                name="lastName"
                value={personalInformationsData.lastName}
                onChange={_handleChange}
                placeholder="Last name"
              />
              {errors.lastName && touched.lastName ? (
                <S.ErrorMessage>{errors.lastName}</S.ErrorMessage>
              ) : null}
              <S.Field
                name="phoneNumber"
                value={personalInformationsData.phoneNumber}
                onChange={_handleChange}
                placeholder="Phone number"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <S.ErrorMessage>{errors.phoneNumber}</S.ErrorMessage>
              ) : null}
            </S.Form>
          )
        }}
      </S.Formik>
    </S.FormWrapper>
  )
}
