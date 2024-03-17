import { TeamMemberInterface } from '@/sanity/interface'

type Props = {
  teamMember: TeamMemberInterface
}

const formatDate = ({ teamMember }: Props) => {
  const data = teamMember.joinedTeam

  const dateObject = new Date(data)

  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject)
  const year = dateObject.getFullYear()

  const formattedDate = {
    month,
    year,
  }

  return formattedDate
}

export default formatDate
