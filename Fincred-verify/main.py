import time
from fastapi import FastAPI
from celery_config import celery
from get_youtube import handle_get_youtube
from celery.result import AsyncResult
# import scipy
# from celery.result import AsyncResult
app = FastAPI()




@app.get("/")
async def root():
    return {"message": "Welcome to FinCredVerify!"}

@app.get("/analyze_video/{video_id}")
async def get_video_title(video_id):
    task = handle_get_youtube.apply_async(args=[video_id])

    # Return an initial message
    return {"message": "Analyzing video... (Task ID: {})".format(task.id)}
@app.get("/task_status/{task_id}")
async def get_task_status(task_id):
    result = AsyncResult(task_id, app=celery)
    if result.ready():
        result_value = result.result
        return {"message": "Video analysis completed", "result": result_value}
    else:
        return {"message": "Video analysis in progress"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)

