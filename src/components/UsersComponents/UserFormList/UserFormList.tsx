import { ChangeEvent, Dispatch, memo, MutableRefObject, SetStateAction } from 'react'
import s from './index.module.scss'
import { Box, List, ListItem, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { EditableSpan } from 'components/EditableSpan'
import { SocialContactsMap } from 'components/SocialContactsMap'
import { ExtendedInitialResponseProfileUser } from 'common/types'
import { useUserFormList } from 'common/hooks/useUserFormList'

type Props = {
  editMode: boolean
  profileUserState: ExtendedInitialResponseProfileUser
  formRef: MutableRefObject<HTMLDivElement | null>
  setEditMode: (arg: boolean) => void
  setProfileUserState: Dispatch<SetStateAction<ExtendedInitialResponseProfileUser>>
  saveForm: () => void
}

export const UserFormList = memo(
  ({ profileUserState, editMode, formRef, setProfileUserState, setEditMode, saveForm }: Props) => {
    const { errorLocal, formItems, collectionOfForm, collectionOfFormCheckbox, collectionOfFormSocial } =
      useUserFormList(profileUserState, setProfileUserState)

    return (
      <Box className={s.user__box} ref={formRef}>
        <List sx={{ width: '118%' }}>
          {formItems.map((item) => (
            <ListItem key={item.label} className={s.user__item}>
              <Typography sx={{ fontWeight: 'bold', padding: '10px 9px', lineHeight: '0px' }}>{item.label}:</Typography>
              <EditableSpan
                error={errorLocal && errorLocal[item.prop] !== undefined}
                helperText={errorLocal && errorLocal[item.prop]}
                title={item.title}
                label={item.label}
                className={s.user__name}
                editMode={editMode}
                setEditMode={setEditMode}
                onChange={(e: ChangeEvent<HTMLInputElement>) => collectionOfForm(item.prop, e.currentTarget.value)}
                saveForm={saveForm}
              />
            </ListItem>
          ))}
          <ListItem className={s.user__item}>
            <Typography sx={{ fontWeight: 'bold', padding: '10px 9px' }}>Job Seeker:</Typography>
            <Checkbox
              name="lookingForAJob"
              color="success"
              checked={profileUserState.lookingForAJob}
              disabled={!editMode}
              onChange={(e) => collectionOfFormCheckbox(e)}
              sx={{ width: 'fit-content', padding: '0' }}
            />
          </ListItem>
        </List>
        <SocialContactsMap
          editMode={editMode}
          additionalClass={s.user__social}
          saveForm={saveForm}
          setEditMode={setEditMode}
          collectionOfFormSocial={collectionOfFormSocial}
        />
      </Box>
    )
  }
)
