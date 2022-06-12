## Skills
React, NextJs

## How to run
```bash
npm run dev
# or
yarn dev
```

## 구현 기능 설명 
### Admin
* 왼쪽에 위치한 element를 drag 하여 오른쪽 영역에 drop하면 drag된 태그가 생성됩니다. 
* 해당 태그를 클릭하면 하단에서 innerText(button의 경우 alert message 포함)를 수정할 수 있습니다.
* 수정한 내용은 화면상에 출력되는 config 또는 생성된 태그에 보여집니다.
* 화면에 출력되는 내용
    * Mouse : 구역 내의 x,y 좌표값 출력
    * Dragging : drag되고 있는 element의 종류 출력
    * Instance : drag 되어 생성된 태그의 수
    * Config : drag 되어 생성된 태그에 담긴 정보
* Nav
    * Save : 현재 만들어진 태그 리스트를 저장합니다.
    * Undo : 태그가 만들어질 때(add), 태그를 클릭하여 text 또는 message를 수정할 때(edit)를 history로 관리하여 이전 작업으로 돌아갑니다.
    * Redo : Undo 버튼을 통해 취소한 작업을 재실행합니다.
    * Export : 현재 상태를 localStorage에 저장합니다.
    * Import : localStorage에 저장된 정보를 가져와 화면에 출력합니다.
    * View : Save 된 정보를 출력합니다. (Save하지 않을 시 미출력)

### Consumer
* Admin에서 Save를 통해 저장한 정보가 보여집니다.

## 기능 명세
* history,setHistory (useState) : add, edit이 이뤄질 때 작업 기록한 배열
* mergeHistory (function) : redo, undo 기능 사용을 위해 step을 인자로 전달받아 history에서 step만큼 splice한 결과물을 합쳐 return
* step : history.length - walkStep
* walkStep : undo시 +1(최대 history.length), redo시 -1(최소 0)

## 시연 동영상
### Save & View
![fasdeli](https://user-images.githubusercontent.com/66302651/173227218-c3959dc3-4e8e-42a0-8022-7705678f1910.gif)

### Export & Import
![import](https://user-images.githubusercontent.com/66302651/173227350-7f18ca09-1afe-4794-b610-62f2918a1c24.gif)

### Undo & Redo
![undo](https://user-images.githubusercontent.com/66302651/173227405-00882b23-344f-4e35-b21e-100c9e3d80e6.gif)
