---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.magnetic-media-not-recorded-except-cards-with-a-magnetic-stripe
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未记录的磁性介质，带磁条的卡除外

## 1. 范围与适用性

本 PCR 用于生产未记录磁性记录介质的前景制造数据，包括卷装磁带、盒式磁带、带盒及软磁盘。排除硬盘驱动器、光学介质、固态存储器、已记录内容和磁条卡。现行 CPC 名称由 `un-cpc-3-0-structure-2025` 核验；具体纳入和排除事项采用明确标为历史资料的 `un-cpc-2-1-magnetic-media-note`。

代表路线为在聚合物基膜上涂布磁性颗粒，继以干燥和整饰。钡铁氧体颜料和聚酯型聚氨酯黏结剂卡片是条件示例，并非强制组合配方。具体数据集必须采用实际配方。金属蒸镀磁带、不同颜料、基材或黏结剂须记录路线适配，并分别记录原子交换、实测收率和能耗。不得将涂布默认值套用于沉积工艺。制造专用的溶剂核算、按格式限定的合格品收率及递归涂布卷材投入构成本独立方法学的必要性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.magnetic-media-not-recorded-except-cards-with-a-magnetic-stripe |
| classification_refs | CPC 3.0 47530 |
| covered_products | 未记录的柔性磁带和软磁盘，包括整体盒式磁带／带盒组件。 |
| excluded_products | 硬盘驱动器；光学和固态介质；已记录介质；磁条卡；存储服务。 |
| representative_product | 一种指定格式的未记录颗粒涂布磁带，交付至工厂大门。 |
| production_route | 外购基膜和配方成分 → 分散／涂布 → 干燥 → 压延／分切 → 检测及包装；外购已涂布卷材整饰为条件路线。 |
| market_state | 全新、合格、未记录介质；分别声明大卷、裸盘或已组装盒式磁带／带盒状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一种声明的、可供后续记录的磁性记录介质。 |
| How much | 工厂大门处净重 1 kg 的合格介质；仅组装产品包含整体壳体，不含运输包装。 |
| How well | 满足声明的格式、尺寸、磁性／读写验收及空白状态规范；原生容量或记录时长仅作补充，不得由质量推定。 |
| How long or cycle | 一次制造交付；不假定档案保存寿命、重复使用次数或存储服务期。 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未记录的磁性介质，带磁条的卡除外 `40bcd8b1-541d-4314-9e57-fc1250fd692e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 格式和预期记录功能；大卷／裸盘／组装状态；净质量和包装边界；基膜聚合物及厚度；颜料和黏结剂配方；带宽和带长或盘片尺寸；原生未压缩容量或记录时长及测试条件；含工厂伺服信息说明的空白状态定义；验收测试和废品率；涂布／沉积／整饰路线；场址、地域及报告期；溶剂捕集／回收／销毁系统；上游边界。 |

在前景数据包中声明全部必需限定信息。按质量归一化并不构成不同格式或存储容量之间的功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass` | 合格产品 | Mass | kg | 采用实测合格净质量 M，区分整体壳体与可移除运输包装。件数采用同格式实测平均质量换算；薄膜面积采用实测单位面积质量换算。 |
| `formulation_basis` | 涂料成分 | Mass | kg | 分别记录每种聚合物、颜料和溶剂；利用实测固含量／组成及库存变化核对湿基交付量。不得同时将供应溶液和全部组分重复计入。 |
| `energy_conversion` | 电力和天然气 | 能量；体积 | MJ; m3 | 电力：1 kWh = 3.6 MJ，精确换算。气体体积须声明温度、压力、干湿状态和体积修正；仅在气体换算为能量时使用供应商热值。 |
| `solvent_species` | 溶剂衡算 | Mass | kg | 每种溶剂投入和排放均采用该物质质量，不以总 VOC 质量代替。浓度与排气体积统一至同一温度、压力和水分基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明制造场址接收基膜、配方组分和部件，或外购已涂布磁性卷材。 |
| starting_condition_role | 前景从门到门制造起点；供应商生产保留为上游。 |
| product_classification_scope | CPC 3.0 47530 |
| recursive_input_rule | 外购同类已涂布卷材保留供应商输出状态和上游数据集；追溯一次至声明的供应商边界。不得将最终过程连接回自身，也不得在前景重复加入外购卷材组分。 |
| upstream_dataset_requirement | 为每项外购交换及交付能量链接代表性供应商数据集；交付运输仅计一次，明确是否已在供应商范围内。 |
| disclosure | 声明一体化涂布或仅整饰、捕集与排放溶剂、内部循环、外包作业、包装、公用工程及处理边界；区分从门到门结果与链接上游后的从摇篮到大门结果。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | foreground | 纳入实际配料、涂布、干燥、整饰及验收检测，并计入归属的洁净室和溶剂管理负荷。软磁盘采用冲切及声明的取向处理，不默认套用磁带取向步骤。 | `epa-ap42-magnetic-tape` |
| `boundary_solvents` | solvent_control | 纳入储存、混合、涂布、清洗、废物管理及回收损失；区分内部捕集溶剂、最终排放和外运废物。 | `epa-magnetic-tape-risk-review` |
| `boundary_extension` | dataset_instantiation | 卡片构成代表性初始清单。须与实际配方、公用工程计量、废物台账及排污许可核对：实际存在的每种润滑剂、交联剂、颜料、包装部件、制冷剂泄漏和燃烧污染物均须增加独立原子交换。认定不存在须有记录；缺少卡片不等于截断。 | `quantegy-magnetic-tape-components` |
| `boundary_downstream` | lifecycle | 止于合格空白介质出厂。下游记录、存储驱动设备、数据中心运行及寿命终结须建立独立情景；制造中不计避免存储能耗的抵扣。通过链接数据集纳入厂外生产废物处理。 | `un-cpc-2-1-magnetic-media-note` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `manufacture` | 介质涂布和整饰 | required | 全部数据集；声明实际路线。 | 前景生产 | 1 kg 合格介质 |
| `utilities` | 场址共用公用工程及直接碳排放 | required | 全部数据集；记录每项不存在的交换。 | 归属的辅助作业 | 同一合格介质 |
| `solvent_control` | 溶剂回收及最终排放 | conditional | 厂内处理含溶剂涂料、清洗液或回收溶剂时。 | 废物及排放核算 | 同一合格介质 |

共用计量负荷仅分配一次。内部涂料、涂布卷材转移及回收溶剂循环属于过程记录，不构成额外采购或避免产品的抵扣。各作业计量保留在采集记录中。

### 过程：介质涂布和整饰（`manufacture`）

#### 输入

##### 产品流

###### 基膜（`pet_base_film`）

inclusion_condition: 在本厂涂布 PET 基膜；不含外购已涂布卷材质量。

- 选定流：聚对苯二甲酸乙二醇酯基膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`quantegy-magnetic-tape-components`

###### 磁性颜料（`barium_ferrite`）

inclusion_condition: 仅适用于钡铁氧体颗粒配方；记录颜料牌号和纯度。

- 选定流：钡铁氧体磁性颜料粉末
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`fujifilm-recording-media`

###### 黏结剂固体（`polyester_urethane`）

inclusion_condition: 仅在使用该聚合物时纳入；供应溶液中的干树脂与每种溶剂分别计量。

- 选定流：聚酯型聚氨酯黏结树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`loc-magnetic-tape-binder-research`

###### 背涂层用炭黑（`carbon_black`）

inclusion_condition: 实际使用炭黑背涂层或导电添加剂时。

- 选定流：炭黑 `104238ef-9017-45d1-a77e-556271cd3f60`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

###### 新投入的涂布及清洗溶剂（`mek_input`）

inclusion_condition: 涂布或清洗使用甲乙酮时；包括树脂溶液带入的溶剂，不计内部回收周转量。

- 选定流：甲乙酮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_solvents 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvents`
- 来源：`epa-ap42-magnetic-tape`

###### 新投入的涂布及清洗溶剂（`toluene_input`）

inclusion_condition: 涂布或清洗使用甲苯时；包括供应混合物带入的溶剂，不计内部回收周转量。

- 选定流：甲苯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_solvents 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvents`
- 来源：`epa-ap42-magnetic-tape`

###### 外购已涂布磁性卷材（`purchased_coated_web`）

inclusion_condition: 以外购未记录的已涂布卷材进行整饰时；声明卷材状态，仅从前景中扣除上游涂布作业。

- 选定流：未记录的磁性介质，带磁条的卡除外 `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`un-cpc-3-0-structure-2025`

###### 外购整体壳体（`cartridge_housing`）

inclusion_condition: 在本厂组装带盒时；记录壳体物料组成及供应商边界。

- 选定流：空塑料磁带盒壳体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`epa-magnetic-tape-risk-review`

###### 运输纸箱（`corrugated_box`）

inclusion_condition: 瓦楞纸箱跨越出厂边界时；包装质量不计入参考产品质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_materials 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

#### 输出

##### 产品流

###### 合格未记录介质（`reference_product`）

inclusion_condition: 始终纳入；每个数据集仅声明一种格式和交付状态。

- 选定流：未记录的磁性介质，带磁条的卡除外 `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：合格输出 M / M = 1；保留实测 M 和格式特定废品率。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 涂布卷材废料（`coated_tape_trim`）

inclusion_condition: PET 涂布边角料或报废磁带送出厂处理时；不含内部返工。

- 选定流：废磁性涂层 PET 磁带边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-ap42-magnetic-tape`

###### 废涂料固体（`coating_sludge`）

inclusion_condition: 废弃颜料／黏结剂涂料污泥；计量湿质量、干固体和溶剂含量。

- 选定流：废磁性涂料污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-magnetic-tape-risk-review`

### 过程：场址共用公用工程及直接碳排放（`utilities`）

#### 输入

##### 产品流

###### 外购电力（`electricity`）

inclusion_condition: 存在外购电力时纳入；洁净室、干燥、整饰、检测、回收及制冷用电仅计一次。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_utilities 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`

###### 燃烧燃料（`natural_gas`）

inclusion_condition: 干燥、供热或氧化装置实际使用天然气燃料时。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按 cp_utilities 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`

###### 外购工艺用水（`process_water`）

inclusion_condition: 供应清洗、加湿或冷却补水时；计量补水量而非循环量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_utilities 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`

#### 输出

##### 基本流

###### 直接化石源二氧化碳（`fossil_co2`）

inclusion_condition: 厂内燃料燃烧或化石源溶剂氧化时；两类碳源各计一次，不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：对实测燃料及已销毁溶剂的化石碳应用 carbon_balance，再除以 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carbon`

### 过程：溶剂回收及最终排放（`solvent_control`）

#### 输出

##### 废物流

###### 废弃液态溶剂（`spent_solvent`）

inclusion_condition: 该混合废溶剂送外部回收或处理时；记录组成，与污泥分开。

- 选定流：废非卤代甲乙酮—甲苯涂布溶剂混合液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-magnetic-tape-risk-review`

###### 含溶剂水相废水（`recovery_wastewater`）

inclusion_condition: 水相冷凝液或回收水送废水处理时；记录水质量及各溶解溶剂。

- 选定流：磁带溶剂回收废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集汇总期归属数量，采用 normalize 除以合格输出 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-magnetic-tape-risk-review`

##### 基本流

###### 排入空气的甲乙酮（`mek_air`）

inclusion_condition: 捕集／治理后排放甲乙酮时，包括无组织排放及清洗排放。

- 选定流：甲基乙基酮 `fe0acd60-3ddc-11dd-afc7-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_solvents 的分物质测量或 solvent_balance；capture_control 仅作不叠加的替代方法，再除以 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvents`
- 来源：`epa-ap42-magnetic-tape`

###### 排入空气的甲苯（`toluene_air`）

inclusion_condition: 捕集／治理后排放甲苯时，包括无组织排放及清洗排放。

- 选定流：甲苯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_solvents 的分物质测量或 solvent_balance；capture_control 仅作不叠加的替代方法，再除以 M。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 声明格式的净合格介质
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvents`
- 来源：`epa-ap42-magnetic-tape`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_processes | 按 cp_allocation 直接归属专用物料和能量记录。共用公用工程按实测设备负荷和运行时间分配；存在因果关系时，涂布线可采用涂布面积及实测干燥负荷。记录分配因子和敏感性。不同磁带格式间仅按质量分配须说明理由。 |  |
| `allocation_recovery` | solvent_reuse | 内部溶剂回收减少新采购溶剂，既非销售也非避免产品的抵扣。单独记录回收负荷和厂外回收溶剂输出；若输出具备产品功能，增加具体产品交换并记录处理／分配约定，不自动给予替代抵扣。 | `epa-ap42-magnetic-tape` |
| `allocation_rejects` | accepted_yield | 全部生产及返工负荷归属于合格输出 M。分别记录涂布废膜和涂料污泥；不得用负原料投入表示废料。明确记录厂外再生的分配方式。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacture | 合格参考介质 | 批次验收记录 | format; batch_id; gross_mass; tare_mass; housing_mass; accepted_count; rejected_mass; tape_area; native_capacity; test_method; blank_state | 校准称量及格式特定放行测试 | kg; m2; count | 每批 | 声明报告年度的全部批次或披露的代表性生产期 | 制造及出厂场址 | 按格式汇总合格净质量 M；保留废品质量及测试失败记录 | 秤校准记录、产品规范、放行证明 |
| cp_materials | manufacture | 每种物料及部件 | 库存及批次台账 | row_id; supplier; grade; opening_stock; receipts; closing_stock; returns; dry_fraction; composition; area; component_mass | 称量、仓库核对及供应商组成记录 | kg; m2 | 每次收货、每批；期末盘点 | 与 cp_output 同期 | 声明场址及具名部件供应商 | 消耗量 = 期初 + 收货 - 期末 - 退货；拆分每种组分；除以 M | 发票、安全数据表、物料清单、供应商范围及衡算闭合 |
| cp_solvents | solvent_control | 分别核算甲乙酮和甲苯 | 分物质溶剂台账及排放记录 | species; fresh_input; opening_stock; closing_stock; recovered_internal; exported_solvent; waste_species_mass; residual_in_product; destroyed_mass; exhaust_flow; concentration; capture_fraction; destruction_fraction; uptime | 组成分析、质量计量、配套烟道浓度／流量测量、泄漏调查 | kg; kg/m3; m3 | 每批台账；覆盖代表性运行及异常工况的排放测试 | 同一生产期；对齐采购、库存及废物外运 | 厂内全部溶剂作业区和治理出口 | 分物质衡算或实测排放量 / M；内部回收不计为外部损失 | 分析校准、捕集测试、治理运行率、库存核对 |
| cp_utilities | utilities | 分别计量电力、天然气和补水 | 分表记录 | meter_id; opening_reading; closing_reading; unit; gas_temperature; gas_pressure; water_density; operation_hours; allocation_fraction; supplier_boundary | 读取校准分表；与发票核对 | MJ; kWh; m3; kg | 每班或连续读取；每月核对 | 与 cp_output 同期，含启停及停机负荷 | 全部可归属生产及辅助设备 | 按记录换算后的可归属净读数差 / M | 计量校准、账单、分配证据 |
| cp_waste | manufacture | 每项排出废物流 | 废物转移记录及分析 | row_id; wet_mass; dry_solids; solvent_species_fraction; destination; treatment; opening_stock; closing_stock; internal_rework | 分别称量各流并分析代表性组成 | kg | 每次外运；采样覆盖配方变化 | 同一时期；校正暂存废物变化 | 场址出口及接收处理方 | 核对产生量与转移量；各流 / M；水和溶剂组分均包含于其湿质量 | 转移凭证、实验室结果、处理身份 |
| cp_carbon | utilities | 直接化石源二氧化碳 | 燃料及溶剂碳记录 | fuel_carbon; oxidized_solvent_carbon; fossil_fraction; unoxidized_carbon; stack_co2; carbon_in_co; reporting_period | 燃料组成及溶剂销毁分析，并核对烟道测量 | kg C; kg CO2 | 匹配生产期及燃料变化 | 与 cp_output 同期 | 厂内燃烧和溶剂氧化 | 以氧化的化石碳及分子质量比计算 CO2，再除以 M | 组成证明及闭合碳衡算 |
| cp_allocation | utilities | 共用负荷归属 | 生产排程及计量归属 | equipment_id; product_format; run_hours; measured_power; coated_area; drying_load; allocation_driver; allocated_fraction | 关联生产记录与共用计量总量 | h; m2; MJ; fraction | 每个生产期；汇总期核对 | 与 cp_output 同期 | 共用设备和治理系统 | 共用负荷分配比例之和为一；保留并调查未归属负荷 | 因果分配依据及敏感性结果 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | 全部行 | q_i = 汇总期归属数量_i / M；M > 0。参考输出 = M/M = 1 kg/kg。保留汇总期总量和分配比例。 | cp_output; cp_allocation; linked row protocol | q_i |  |
| `film_conversion` | 基膜及涂布卷材 | 质量 = 实测面积 × 同一薄膜状态的实测单位面积质量；带宽 × 带长为磁带面积。最终质量仅包含实测涂层和壳体。 | cp_materials; cp_output | kg |  |
| `solvent_balance` | MEK; toluene | 空气排放 = 外部新投入 + 期初库存 - 期末库存 - 厂外回收输出 - 外运废物中溶剂 - 合格产品中残留溶剂 - 已销毁溶剂。内部回收相抵。负差额必须调查，不能作为零排放。库存或销毁数据不完整时采用实测排放。 | cp_solvents; cp_waste; cp_materials | kg species | `epa-ap42-magnetic-tape` |
| `capture_control` | 受控溶剂源 | 对独立测量的蒸发物质负荷 L，出口及逸散排放 = L × (1 - 捕集比例 × 去除比例)。采用实际运行率及未捕集排放源。回收属于去除，不属于化学销毁；捕集残余溶剂须进行库存／废物核算。不得将此估算加至全厂物料衡算估算。 | cp_solvents | kg species | `epa-ap42-magnetic-tape` |
| `carbon_balance` | 化石源二氧化碳 | CO2 = 实际氧化为 CO2 的化石碳 × CO2 分子质量／C 原子质量。分别核算燃料和已销毁溶剂；扣除以 CO、有机物或固体残留的碳；保留所用原子量约定。 | cp_carbon | kg CO2 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_completeness` | 前景数据包 | 将全部实际配方成分、包装和排放与代表卡片核对；保留原子扩展及有记录的不存在判定。 | cp_materials; cp_waste; cp_solvents |
| `quality_representativeness` | 全部实测量 | 披露时间、场址和技术覆盖、采样、不确定性、检出限、缺失时期及供应商代理数据。不得用 EPA 历史因子代替场址测量。 | 关联采集协议和来源适用性评估 |
| `quality_ranges` | 定量先验 | 不规定外部数值先验。后续任何推断范围均须至少两项经原文核验、边界／单位／产品状态兼容的独立来源，并综合地域及技术差异。在此之前保留实测值和不确定性。 | 前景采集协议及独立性评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | 要求完整限定信息、单一声明输出状态、正的合格质量及空白介质验收证据。通用流名称本身不能定义可互换的记录服务。 | `un-cpc-3-0-structure-2025` |
| `validate_reconciliation` | inventory | 每项物理交换须具备一个具体身份、兼容单位、原始记录及对应过程。利用投入核对合格输出、废品和库存变化；依据测量不确定性调查衡算差额，不编造容许误差。 |  |
| `validate_solvents` | solvent_control | 检查物质完整性、捕集与去除的区别、内部回收相抵、废物残留及销毁核算。不得同时发布同一溶剂的完全挥发和完全氧化。 | `epa-ap42-magnetic-tape` |
| `validate_boundaries` | upstream_links | 拒绝涂布卷材循环链接、公用工程或运输负荷重复、厂外废物处理缺失。要求明确处理条件作业及代表卡片未列出的实际交换。 |  |
| `validate_comparisons` | downstream_use | 仅在格式、输出状态、容量／质量、边界及分配匹配后允许制造比较。存储服务比较须建立独立功能情景，不得仅依据每 kg 归一化结果推导。 | `quantegy-magnetic-tape-components` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为另行规定的记录／存储模型中的供应商介质制造投入。 |
| allowed_use | 格式／状态匹配的制造过程，并附供应商和废物处理链接及不确定性披露。 |
| excluded_use | 无条件互换磁带、软磁盘、光盘、SSD 或硬盘驱动器；数据中心运行节能；通用档案保存寿命。 |
| required_metadata | 全部参考限定信息；报告期；运营者；地域；净输出；过程路线；包装；供应商；分配；运输和处理边界。 |
| required_quality_disclosure | 初级数据比例、缺失交换、代理身份、测量不确定性、溶剂／碳衡算闭合、条件排除及范围证据局限。 |
| update_trigger | 格式、配方、基材、供应商、制造路线、治理系统、公用工程结构或验收规范变化。 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); 检索日期 2026-09-09; independence_key: `un-cpc-3-0-structure-2025` | CPC 3.0 产品名称与相邻类别区别；47530 行。 |
| `un-cpc-2-1-magnetic-media-note` | `official_guidance` | [CPC Version 2.1, subclass 47530 explanatory note](https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/47530); 检索日期 2026-09-09; independence_key: `un-cpc-2-1-47530` | 历史详细范围：磁带、带盒、盒式磁带和软磁盘；排除硬盘、已记录介质及磁条卡。结合现行 3.0 名称用于语义解释，不作为 3.0 版注释。 |
| `epa-ap42-magnetic-tape` | `official_guidance` | [AP-42 Section 4.2.2.13 Magnetic Tape Manufacturing, September 1990, reformatted January 1995](https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2n.pdf); 检索日期 2026-09-09; independence_key: `epa-ap42-4-2-2-13-1990` | 第 4.2.2.13.1—3 节及工艺图：涂布和整饰、溶剂捕集与销毁的区别、溶剂衡算。美国历史指南仅用于机理，不采用默认消耗量或治理效率。 |
| `epa-magnetic-tape-risk-review` | `official_guidance` | [Hazardous Air Pollutant Emissions From Magnetic Tape Manufacturing Operations: Background Information for Technology and Residual Risk Review](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100923X.TXT); 检索日期 2026-09-09; independence_key: `epa-9100923x` | 第 2 章 2.1.1 和 2.1.3 节：配料、清洗、壳体、溶剂回收、废物及废水来源。不采用法规限值或历史排放比例。 |
| `quantegy-magnetic-tape-components` | `literature` | [A View of Preservation from a Magnetic Tape Manufacturer's Perspective, Quantegy, hosted by Library of Congress](https://www.loc.gov/static/programs/national-film-preservation-board/documents/tvquantegy.pdf); 检索日期 2026-09-09; independence_key: `quantegy-view-preservation` | 第 1—2 页：PET 基膜、背涂层、黏结剂、润滑剂和磁性层的区别；格式特定的物理设计。不采用寿命数值。 |
| `loc-magnetic-tape-binder-research` | `official_guidance` | [Magnetic Tape Sticky Shed Research: Characterization, Diagnosis, and Treatment](https://www.loc.gov/preservation/scientists/projects/sticky_shed.html); 检索日期 2026-09-09; independence_key: `loc-sticky-shed-research` | 下载的官方 HTML 中的背景和项目说明：历史音视频磁带采用聚酯型聚氨酯黏结剂；仅支持条件性黏结剂身份，不代表通用现代配方或寿命。 |
| `fujifilm-recording-media` | `literature` | [Recording Media, Fujifilm Global](https://global.fujifilm.com/en/about/corporate/field/storage); 检索日期 2026-09-09; independence_key: `fujifilm-global-recording-media` | 计算机磁记录带部分：商业化钡铁氧体磁带路线。不引入性能或寿命宣称。 |
