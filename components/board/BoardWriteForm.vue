<template>
  <form @submit.prevent="write()">
    <label for="bTitle" class="form-label">title</label>
    <input
      id="btitle"
      ref="btitle"
      v-model="btitle"
      type="text"
      class="form-control"
      placeholder="제목을 입력하세요."
    />
    <label for="bContent" class="form-label">content</label>
    <textarea
      id="bcontent"
      ref="bcontent"
      v-model="bcontent"
      type="text"
      rows="5"
      class="form-control"
      placeholder="내용을 입력하세요."
    />
    <div>
      <!-- Styled -->
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
    <button class="btn btn-success">{{ buttonName }}</button>
  </form>
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
