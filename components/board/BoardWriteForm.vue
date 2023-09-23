<template>
  <div class="container mt-5" @submit.prevent="write()">
    <form>
      <div class="form-group">
        <label for="btitle">제목:</label>
        <input
          id="btitle"
          ref="btitle"
          v-model="btitle"
          type="text"
          class="form-control"
          placeholder="제목을 입력하세요."
        />
      </div>
      <div class="form-group">
        <label for="bcontent">내용:</label>
        <textarea
          id="bcontent"
          ref="bcontent"
          v-model="bcontent"
          class="form-control"
          rows="4"
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>
      <div>
        <b-form-file
          class="my-3"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          @change="addFile($event)"
        ></b-form-file>
        <span v-for="(file, idx) in files" :key="idx">
          {{ file.name }}, &nbsp;&nbsp;
        </span>
      </div>
      <div></div>
      <button type="submit" class="btn btn-primary">{{ buttonName }}</button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BoardWriteForm',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    btitle: {
      get() {
        return this.$store.getters['board/getItem'].boardForm.btitle
      },
      set(item) {
        this.$store.commit('board/setItem', {
          field: 'boardForm',
          subField: 'btitle',
          item,
        })
      },
    },
    bcontent: {
      get() {
        return this.$store.getters['board/getItem'].boardForm.bcontent
      },
      set(item) {
        this.$store.commit('board/setItem', {
          field: 'boardForm',
          subField: 'bcontent',
          item,
        })
      },
    },
    buttonName() {
      switch (this.type) {
        case 'write':
          return '등록'
        case 'update':
          return '수정'
        default:
          return ''
      }
    },
    ...mapGetters({
      files: 'board/getFiles',
    }),
  },
  mounted() {
    this.$store.commit('board/setItem', {
      field: 'boardForm',
      subField: 'files',
      item: [],
    })
  },
  methods: {
    write() {
      if (this.btitle == null || this.btitle === '') {
        alert('제목을 입력하세요.')
        this.$refs.btitle.focus()
        return
      }
      if (this.bcontent == null || this.bcontent === '') {
        alert('내용을 입력하세요.')
        this.$refs.bcontent.focus()
        return
      }
      this.$store.dispatch(`board/${this.type}`)
    },
    addFile(e) {
      this.$store.commit('board/setItem', {
        field: 'boardForm',
        subField: 'files',
        item: [
          e.target.files[0],
          ...this.$store.getters['board/getItem'].boardForm.files,
        ],
      })
    },
  },
}
</script>
<style scoped>
body {
  background-color: #f8f9fa;
}
.container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.comment-button {
  text-align: right;
}
</style>
