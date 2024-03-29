export default function Skeleton({skeletonNum}) {
  return (
  <>
    <div className="grid grid-cols-4 gap-6">
        {skeletonNum.map()(
            
        )}
    </div>
  </>
  )
}
