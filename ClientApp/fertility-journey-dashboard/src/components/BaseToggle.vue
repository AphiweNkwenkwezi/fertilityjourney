<template>
    <div class="toggle-container">
      <label class="toggle-switch">
        <input
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
        />
        <span class="slider"></span>
      </label>
      <span class="toggle-label">
        {{ modelValue ? 'Active' : 'Disabled' }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseToggle',
    props: {
      modelValue: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .toggle-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
  
  input:checked + .slider {
    background-color: #67ADB9;
  }
  
  input:checked + .slider:before {
    transform: translateX(18px);
  }
  
  .toggle-label {
    font-size: 0.875rem;
    color: #333;
  }
  </style>
  