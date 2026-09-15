---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-camera-recorders
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 摄录一体机及网络摄像头

## 1. 范围与适用性

本 PCR 用于编制摄录一体机（数字式或非数字式）及网络摄像头制造前景数据包。依据 `un-cpc-3-0-notes-2025`，不包括专业电视／视频摄像机及以静态图像拍摄为主的照相机。不具备图像采集功能的独立录像设备不在本语义边界内。共同方法涉及光学采集集成、电子信号处理、功能测试及配置特定的记录功能。摄录一体机与网络摄像头应分别建立型号记录，不得按质量混合平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-camera-recorders |
| classification_refs | CPC 3.0: 47214 (`un-cpc-3-0-structure-2025`; `un-cpc-3-0-notes-2025`) |
| covered_products | 摄录一体机及网络摄像头；声明本机记录或依赖主机的采集方式 |
| excluded_products | 专业电视／视频摄像机；以静态图像为主的数码照相机；独立录像设备；手机；录制服务 |
| representative_product | 经测试合格的新制消费级摄录一体机；网络摄像头作为单独限定的变型 |
| production_route | 采购成品部件后装配、光学校准、固件加载、图像及记录／主机接口测试、包装 |
| market_state | 出厂的新制功能合格设备；产品质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供动态图像采集及声明的本机记录功能或主机接口 |
| How much | 针对一个明确成品型号，以 1 kg 为制造声明基准；同时报告等效设备台数 |
| How well | 声明分辨率、帧率、编码／接口、光学配置和验收测试；型号规格不作为类别通用限值（`sony-ax43a-specifications`） |
| How long or cycle | 一个制造周期。不假定使用寿命；下游功能研究须声明录制时数、寿命及更换需求 |
| reference_flow_link | finished_camera |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 摄像机录像机 `dcf8321d-003e-48d9-b233-1524a7547be9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；摄录一体机或网络摄像头；记录架构；传感器类型；分辨率和帧率；镜头配置；固件；产品质量和台数；随附电池及附件；生产场址和期间；测试协议 |

此为制造声明参考，不表示每千克功能等效。前景数据包须声明所有必需限定信息。中文类别标题为作者译名；UUID 展示保留天工名称。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mass_count | finished_camera | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量型号净质量 m 及合格台数 N。参考质量 M=N×m；每千克数量=q/M。声明电池／附件纳入情况，M 不含包装。 |
| energy_conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 记录，按 1 kWh=3.6 MJ 换算；不得将上游发电排放作为场址直接排放。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| manufacturing_boundary | foreground | 纳入部件装配、光学校准、固件加载、验收测试、返工及工厂包装。适当连接部件生产、入厂交付及出厂制造废物处理。此为局部制造数据集，不是完整产品足迹。 | `ghg-product-standard-2011` |
| route_completeness | actual_site | 声明路线从成品部件开始。场址若自行制造部件、焊接、清洗或涂覆，应为实际的每个原子输入和输出扩展过程图，并替换重复的采购部件负荷。逐项核对物料清单部件、紧固件、适配器及包装组件；不得静默遗漏未列交换。 | `ghg-product-standard-2011` |
| downstream_boundary | dataset_use | 销售设备出厂后的配送、运行、更换及报废阶段不属于本制造声明。生命周期研究须补充这些阶段，包括功能所需的主机设备及记录介质，并披露假设。 | `ghg-product-standard-2011` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已制成镜头、已装联成像电路板及成品外壳交付装配；不得假定上游部件负荷为零 |
| starting_condition_role | 前景装配入口；必须连接上游负荷 |
| product_classification_scope | 摄录一体机及网络摄像头；声明本机记录或依赖主机的采集方式 |
| recursive_input_rule | 不得将成品参考摄像设备回输其自身生产。返工保留在同一批次；采购旧设备须另行声明翻新路线 |
| upstream_dataset_requirement | 连接供应商或代表性上游部件数据集并涵盖交付。披露地域、技术、时间、再生含量及数据集边界 |
| disclosure | 声明实际物料清单、自制／采购边界、随附附件、包装、外包阶段及排除的生命周期阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 装配及功能测试 | required | 所有声明型号 | foreground_production | 包装出口合格型号质量 |
| packing | 包装及放行 | required | 所有声明型号 | foreground_production | 1 kg |

以上过程构成一条集成前景链。内部设备转移不作为第二次采购交换。仅在包装过程记录最终参考输出。条件流卡须提供缺席证明或实际数量。

### 过程：装配及功能测试（`assembly`）

#### 输入

##### 产品流

###### 物镜（`lens`）

必需；记录作为一个组件供应的成品镜头及镜座

- 选定流：照相机、放映机或照相放大机或缩影器用物镜 `cfef9f14-3271-428b-bebe-47ded2db11d4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lens`

###### 成像电路板（`board`）

必需；声明本电路板所含传感器及处理电子器件；其他电路板应单独记录

- 选定流：已装联摄像设备成像电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_board`

###### ABS 外壳（`housing`）

inclusion_condition: 装有 ABS 外壳；声明树脂及成品状态；其他材质另行扩展

- 选定流：ABS 塑料摄像设备外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_housing`

###### 液晶显示模块（`display`）

inclusion_condition: 装有内置液晶显示模块；不计单独拥有的主机显示器

- 选定流：液晶显示模块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_display`

###### 电池组（`battery`）

inclusion_condition: 随附电池组；明确化学体系、容量及所含电子器件

- 选定流：锂离子充电电池组
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_battery`

###### USB 线缆（`cable`）

inclusion_condition: 随附 USB 线缆；明确连接器及长度

- 选定流：USB 线缆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cable`

###### 麦克风（`microphone`）

inclusion_condition: 装有麦克风；已包含在采购电路板模块内时不在此重复计量

- 选定流：麦克风
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_microphone`

###### SD 存储卡（`memory`）

inclusion_condition: 随附 SD 卡；记录容量；主机已有介质不属于本制造声明

- 选定流：SD 存储卡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_memory`

###### 装配与测试用电（`electricity`）

计量装配、校准、记录或主机接口测试及返工能耗；纳入分配的设施用电

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`

#### 输出

##### 废物流

###### 不合格设备（`reject`）

inclusion_condition: 无法修复的不合格设备外送处理；保留组分及危险部件信息

- 选定流：废弃摄像设备
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reject`

### 过程：包装及放行（`packing`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`box`）

inclusion_condition: 使用瓦楞纸箱；纸箱质量与设备质量分开记录

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_box`

#### 输出

##### 产品流

###### 合格设备（`finished_camera`）

功能测试后记录合格设备净质量及台数；包装不计入参考质量

- 选定流：摄像机录像机 `dcf8321d-003e-48d9-b233-1524a7547be9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次交换量除以合格设备净质量；核对收货、退回及库存变化
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格型号设备，不含包装
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finished_camera`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| separate_models | shared_production | 优先按型号和计量工序细分，再分配共同负荷。无法细分的共用设备电耗按有记录的加工时间和负载分配；不得仅按产品质量在摄录一体机与网络摄像头之间分配。 | `ghg-product-standard-2011` |
| yield_and_recycling | rejects | 将返工及制造不合格品负荷计入同批合格输出。单列外送废物质量及处理；前景制造清单不赋予避免原生生产的抵扣。披露下游回收方法。 | `ghg-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lens | assembly | 物镜 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_board | assembly | 成像电路板 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_housing | assembly | ABS 外壳 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_display | assembly | 液晶显示模块 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_battery | assembly | 电池组 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_cable | assembly | USB 线缆 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_microphone | assembly | 麦克风 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_memory | assembly | SD 存储卡 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_electricity | assembly | 装配与测试用电 | 电表日志 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 分表计量 | MJ | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_reject | assembly | 不合格设备 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_box | packing | 瓦楞纸箱 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |
| cp_finished_camera | packing | 合格设备 | 批次记录 | 批次；型号；日期；交换数量；单位；合格质量；电表或秤编号；库存变化；适用性 | 称量并核对物料清单及仓储／处理记录 | kg | 每批 | 一个声明的代表性连续生产期间；保留日期及停机时间 | 具名工厂及产线 | 汇总物理交换量后除以合格型号质量；不直接平均批次比率 | 适用的校准、发票、物料清单、验收测试及废物转移单 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all_rows | 同型号同期 a_i=sum(q_i)/sum(M_accepted)；电力先将电表 kWh 换算为 MJ | 协议批次数量及合格质量 | kg/kg 或 MJ/kg | `ghg-product-standard-2011` |
| yield | finished_camera | 合格台数除以完成测试台数；保留返工循环及不可修复数量，避免重复计数返工 | 测试与放行日志 | 实测型号合格率，无默认值 | `ghg-product-standard-2011` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| traceability | all_rows | 保留一手记录、校准、供应商边界、期间及地域／技术代表性。明确记录缺失数据及不确定性。 | `ghg-product-standard-2011` |
| configuration | model | 保留物料清单版本、传感器／镜头／记录配置及功能测试判据。制造商规格描述实例，不作为通用验收限值。 | `sony-ax43a-specifications` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| identity_check | reference_product | 拒绝缺少型号、质量／台数核对、记录架构、测试证据或必需限定信息的记录。将专业摄像机及静态图像照相机与本类别分开。 | `un-cpc-3-0-notes-2025` |
| inventory_check | all_rows | 要求计量或计算数量、协议关联、单位、边界兼容的上游链接及明确适用性。缺失数据不等于零。传感器随已装联电路板供货时，防止重复计量。 | `ghg-product-standard-2011` |
| balance_check | batch | 核对部件收货、库存变化、合格设备、不合格品及包装。按仪器不确定性和物料清单证据调查差异；不设无依据的通用容差。 | `ghg-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | manufacturing_foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 连接上游后的明确型号制造贡献 |
| excluded_use | 独立完整生命周期足迹；不同摄像功能的按质量比较 |
| required_metadata | 型号；摄录一体机或网络摄像头；记录架构；传感器类型；分辨率和帧率；镜头配置；固件；产品质量和台数；随附电池及附件；生产场址和期间；测试协议 |
| required_quality_disclosure | 覆盖度、缺失交换、UUID 缺口、分配、不确定性及排除阶段 |
| update_trigger | 物料清单、传感器、记录架构、场址、供应商、能源供应或测试路线变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 访问日期 2026-09-09 | 分类识别 |
| un-cpc-3-0-notes-2025 | official_guidance | UNSD CPC 3.0 Explanatory Notes, pp. 256–257, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; 访问日期 2026-09-09 | 摄录一体机及网络摄像头的纳入范围与排除项 |
| sony-ax43a-specifications | handbook | Sony FDR-AX43A specifications; https://www.sony.com.sg/electronics/handycam-camcorders/fdr-ax43a/specifications; 访问日期 2026-09-09 | 部件功能及型号特定限定信息；不提供制造数量范围 |
| sony-ax100-chinese-guide | handbook | Sony FDR-AX100/FDR-AX100E/HDR-CX900/HDR-CX900E Chinese Help Guide, model information; https://helpguide.sony.net/gbmig/45346571/v1/zh-cn/contents/TP0000433415.html; 访问日期 2026-09-09 | 中文术语“摄录一体机” |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9; summary pp. 14–15; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 访问日期 2026-09-09 | 局部边界披露、一手数据、过程图及分配层级；作为方法指导，不宣称完整足迹合规 |
