---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.removable-media-storage-units
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 可移除介质存储单元

## 1. 范围与适用性

本 PCR 适用于读取或写入可从设备中取出的存储介质的计算机外围设备，包括光盘驱动器、可换磁盘驱动器、磁带驱动器和闪存卡读卡器。产品是设备本身，而不是可移除介质。固定介质驱动器、闪存卡、独立音视频播放设备及主机不在范围内。分类名称依据 `un-cpc-3-0-structure-2025` 核验；设备与介质的区别依据 `un-cpc-2-1-removable-storage` 的解释性说明。

前景数据包覆盖外购部件接收到装配、功能测试及工厂出厂包装。部件制造通过上游数据集表示，包括半导体制造和电路板贴装，不得视为无环境负荷。本清单为精简的部件装配路线；一体化部件制造需增加实测单元过程。不得将光驱的部件用量直接用于磁带机或读卡器。`epa-sustainable-electronics-roadmap` 的电子产品生命周期分解支持区分部件生产、装配及不合格品，但不提供本类设备的单位消耗系数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.removable-media-storage-units |
| classification_refs | CPC 3.0: 45272；仅用于分类身份 |
| covered_products | 用于计算机的可换光盘驱动器、磁盘驱动器、磁带驱动器及闪存卡读卡器 |
| excluded_products | 固定介质驱动器；闪存卡及记录介质；主机；独立音视频播放设备 |
| representative_product | 经工厂测试且不附可移除介质的光盘驱动器 |
| production_route | 外购已贴装控制电路板及成品机械部件；装配；功能测试；包装 |
| market_state | 工厂出厂的全新、已测试设备；包装与设备净质量分别记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为主机读取或写入指定格式的可移除介质 |
| How much | 同一指定型号的成品设备净质量 1 kg；同时报告设备数量及 kg/台 |
| How well | 声明接口、支持介质、读写能力、传输速率及验收测试判据 |
| How long or cycle | 一个生产批次至最终验收；本生产阶段数据包不以服务寿命归一化 |
| reference_flow_link | reference_product；生产声明单位，不代表全寿命存储服务等效 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 可移动媒体存储单元 `d0af9a31-3017-4ab7-a6e4-172f40cd7bb1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备类型；型号；支持的可移除介质格式；接口；读写能力；传输速率及测试方法；设备净质量 kg/台；包含的附件；包装配置；工厂；国家；生产期；外购部件边界；验收合格率 |

所有必需限定信息均应在前景数据包中声明。存储服务比较还需规定工作负载、介质消耗、运行模式、可靠性及服务期限；仅凭本生产声明单位不能认定功能等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | 参考产品 | Mass | kg | 称量不含包装和可移除介质的合格设备；按型号实测 kg/台换算台数。不得将存储容量换算为设备质量。 |
| energy | 电力 | Net calorific value | MJ | 保留实测能量；kWh 乘以 3.6 换算为 MJ。每个电表覆盖范围仅分配一次，测试用电不得在装配用电中重复计入。 |
| component_mass | 部件 | Mass | kg | 使用接收部件质量，并核对装入质量、不合格品、退货和库存变化。已贴装电路板数据集包含其板载部件，禁止重复计入。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | 纳入部件接收、装配、测试、返工、包装以及相应用能和生产不合格品。外购部件须关联上游生产数据。 | epa-sustainable-electronics-roadmap |
| boundary_disclosure | data package | 分别披露厂门到厂门前景边界及上游覆盖范围；进厂运输应纳入供应数据集或另建实测运输过程，仅计入一次。由于不含下游使用及处置，本数据包不是完整产品生命周期足迹。 | ghg-protocol-product-standard |
| boundary_completeness | site inventory | 将实际物料清单及场址工艺台账与所列交换逐项核对。实际跨界的新增部件、化学品、燃料、水、废物或直接排放均需单列原子流；判定不存在须有场址证据，不得假定为零。 | ghg-protocol-product-standard |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 用于设备装配的外购成品部件及已贴装电路板到厂 |
| starting_condition_role | 前景入口，不是零负荷截断点 |
| product_classification_scope | 可移除介质计算机存储设备，不含可移除介质本身 |
| recursive_input_rule | 若外购完整驱动器装入机壳，应将其作为同类产品输入记录一次，注明供应商边界并关联上游数据集；不得递归重复装配或遗漏其负荷。 |
| upstream_dataset_requirement | 每项外购部件关联地域及技术适用的生产数据集；披露缺失关联，避免部件清单与原材料清单重叠。 |
| disclosure | 起始状态；部件自制或外购边界；运输覆盖；生产期；包含的附件；损失；排除项；未表示的下游阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 部件装配、功能测试及包装 | required | 所有设备；部件卡片依据物料清单条件纳入 | 前景生产 | 1 kg 合格设备净质量 |

装配、测试及包装共用一个生产台账进行参考产出及损失核对，因此合并为一个批次过程。采集协议仍保留操作级用电及测试时间记录。内部转移及返工不应虚构为外购中间产品流。

### 过程：部件装配、功能测试及包装（`assembly`）

#### 输入

##### 产品流

###### 已贴装存储驱动器控制电路板（`controller_board`）

设备外购该控制电路板时纳入。

- 选定流：已贴装存储驱动器控制电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：设备外购该控制电路板时纳入。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 成品钢制驱动器壳体（`steel_housing`）

型号采用外购钢制壳体时纳入；不得用于塑料外壳。

- 选定流：成品钢制驱动器壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：型号采用外购钢制壳体时纳入；不得用于塑料外壳。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 光盘驱动器主轴电机（`motor`）

单独外购光驱主轴电机时纳入；已包含在外购机芯数据集中时排除。

- 选定流：光盘驱动器主轴电机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：单独外购光驱主轴电机时纳入；已包含在外购机芯数据集中时排除。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 光盘驱动器激光拾取头组件（`laser_pickup`）

单独外购光学激光拾取头时纳入；按模块计入，不重复计入其内部零件。

- 选定流：光盘驱动器激光拾取头组件 `634db7bf-732f-47ee-9546-ac7f2026a939`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：单独外购光学激光拾取头时纳入；按模块计入，不重复计入其内部零件。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 磁带驱动器读写磁头（`tape_head`）

单独外购磁带驱动器磁头时纳入。

- 选定流：磁带驱动器读写磁头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：单独外购磁带驱动器磁头时纳入。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 闪存卡插座（`card_connector`）

单独外购闪存卡插座时纳入；已安装在外购贴装板上时排除。

- 选定流：闪存卡插座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：单独外购闪存卡插座时纳入；已安装在外购贴装板上时排除。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 钢螺钉（`screws`）

装配领用钢螺钉时纳入；记录实际牌号及镀层。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：装配领用钢螺钉时纳入；记录实际牌号及镀层。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 瓦楞纸箱（`box`）

采用瓦楞纸运输箱时纳入；记录每箱质量及装箱台数。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：采用瓦楞纸运输箱时纳入；记录每箱质量及装箱台数。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


###### 电力（`electricity`）

装配、测试及包装外购电力，含应归属的共享服务；保留操作分表记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 纳入条件：装配、测试及包装外购电力，含应归属的共享服务；保留操作分表记录。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


#### 输出

##### 产品流

###### 可移动媒体存储单元（`reference_product`）

仅记录验收合格设备；参考产出不含包装质量。

- 选定流：可移动媒体存储单元 `d0af9a31-3017-4ab7-a6e4-172f40cd7bb1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：仅记录验收合格设备；参考产出不含包装质量。
- 数量规则：由验收台数及实测 kg/台计算合格净质量，再归一化为 1 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


##### 废物流

###### 废弃光盘驱动器（`reject`）

不合格光驱整机废弃时纳入；记录废物去向。返工品未废弃前不属于废物。

- 选定流：废弃光盘驱动器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 纳入条件：不合格光驱整机废弃时纳入；记录废物去向。返工品未废弃前不属于废物。
- 数量规则：由 cp_batch 汇总同期净交换量，按 normalize_batch 除以合格产出净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch`


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared production | 分配共享负荷前先采用产品线及操作级计量。无法细分时采用经论证的物理驱动因素，例如设备占用时间；说明其与资源消耗的关系并进行敏感性检查。 | ghg-protocol-product-standard |
| allocation_rejects | yield and recycling | 测试失败及返工负荷保留在合格产出中。不合格品另行记录，不得作为可售参考产品。声明一致的回收分配方法，不得扣除假定的原生材料替代收益。 | ghg-protocol-product-standard |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch | assembly | 部件、用能、包装、合格产品及不合格品 | 批次台账及仪表 | 型号；批号；部件身份；领用质量；退货；期初期末库存；合格台数；设备净质量；不合格品质量；电表读数；运行及测试时数；去向 | 以校准称量、分表计量、验收测试及废物转移记录核对物料清单、采购和生产台账 | kg; count; MJ; h | 每批次及每个计量区间 | 完整声明生产期，含停机及返工 | 指定工厂及共享服务 | 汇总同期净交换量；共享服务分配一次；除以合格产出净质量 | 校准记录；供应商规格；发票；测试日志；废物收据；分配核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有交换 | q_i = 已分配的批次净交换量 i / 批次合格产出净质量；参考产出为 1 kg | cp_batch 数量及合格台数乘以实测 kg/台 | 每 kg 参考产品的 kg 或 MJ | |
| net_issues | 外购部件 | 净领用量 = 期初库存 + 接收量 - 期末库存 - 供应商退货；与装入部件及实测不合格品核对 | cp_batch 质量台账 | 部件输入质量 | |
| meter_partition | 电力 | 汇总操作分表；未分表共享服务按合理设备占用时间分配；与场址总电费账单核对 | cp_batch 用能及运行时数 | 归属于本批次的外购电力 | |

以上为前景台账核算恒等关系，不是文献推算的合格率或消耗估计。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 设备及部件 | 核验可移除介质功能及实际物料清单；记录外购电路板贴装状态和机械模块范围 | 供应商图纸及验收规格 |
| dq_period | 所有记录 | 使用相互匹配的同一生产期；报告缺失期间、计量分配、代表性及不确定性 | cp_batch；ghg-protocol-product-standard 第 8 章 |
| dq_coverage | 材料及废物平衡 | 按测量不确定性调查领用质量、设备产出、废料、退货及库存变化之间的差异；不规定无依据的容差 | 签署的质量平衡表及废物收据 |
| dq_ranges | 前景数量 | 采集实际数量；不得以通用光驱、磁带机或读卡器基准替代缺失测量 | cp_batch |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | 必须提供所有限定信息、设备净质量及验收记录。不得将固定介质驱动器或可移除介质作为参考设备。 | un-cpc-2-1-removable-storage |
| validate_inventory | quantities | 核查各实际交换均为原子流、以合格产出归一化、由 cp_batch 支持且仅分配一次；核对物料清单、电力及废物总量。缺失数据属于未解决项，不是零。 | ghg-protocol-product-standard |
| validate_boundary | downstream claims | 必须明确上游关联并披露未建模阶段；若无额外使用及报废模型，不得凭本生产阶段数据包开展全寿命服务比较。 | ghg-protocol-product-standard |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定型号可移除介质设备的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为边界兼容的主机或外围设备生命周期模型的生产输入 |
| excluded_use | 可移除介质制造；固定介质驱动器生产；通用全寿命存储服务比较；完整生命周期足迹声明 |
| required_metadata | 型号；设备技术；场址；国家；期间；净质量；台数；验收判据；物料清单范围；上游关联；运输处理；分配 |
| required_quality_disclosure | 测量覆盖；供应商数据缺口；未解决流身份；缺失上游数据集；不确定性；排除项 |
| update_trigger | 物料清单、制造路线、供应商技术、测试规程、场址能源或参考产品规格发生变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 分类结构，2025 年 6 月 30 日；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；检索日期 2026-09-09 | 精确分类名称；independence_key: un-cpc-3-0-structure-2025 |
| un-cpc-2-1-removable-storage | official_guidance | 联合国统计司，CPC 2.1 第 45272 项解释性说明；https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45272 ；检索日期 2026-09-09 | 前一版本的设备与介质边界说明，不声称其为 CPC 3.0 解释文本；independence_key: un-cpc-2-1 |
| epa-sustainable-electronics-roadmap | official_guidance | 美国 EPA，E. Sahle-Demessie，《可持续电子产品路线图》，第 7、11、16 张幻灯片；https://www.epa.gov/sites/default/files/2014-05/documents/roadmap.pdf ；检索日期 2026-09-09 | 电子部件、装配及不合格品的分解，以及实测能耗需求；无数量系数；independence_key: epa-sustainable-electronics-roadmap |
| ghg-protocol-product-standard | standard | WRI/WBCSD，《产品生命周期核算与报告标准》，2011 年，第 7–9 章；https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；检索日期 2026-09-09 | 将边界披露、原始记录及分配层级用于生产数据集，不声明完全符合该标准；independence_key: ghg-protocol-product-standard-2011 |
