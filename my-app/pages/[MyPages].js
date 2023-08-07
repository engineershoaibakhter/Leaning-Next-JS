import { useRouter } from "next/router"

export default function MyPages() {
    const router=useRouter();
    const pageNumber=router.query.MyPages
  return (
    <div>
        Your Page is {pageNumber}
    </div>
  )
}
