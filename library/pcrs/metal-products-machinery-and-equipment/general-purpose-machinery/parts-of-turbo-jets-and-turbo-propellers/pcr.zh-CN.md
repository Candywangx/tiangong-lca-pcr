---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-turbo-jets-and-turbo-propellers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 涡轮喷气发动机和涡轮螺旋桨发动机的零件

## 1. 范围与适用性

本 PCR 适用于新制涡轮喷气发动机和涡轮螺旋桨发动机零件的门到门制造：从外购近净成形预制件进入制造场址开始，经精密机加工以及适用的热处理、表面处理、连接、清洗和检验，直至一个未包装的合格成品零件在制造商厂门交付。范围包括单独供应的叶片、导向叶片、盘、轴、机匣、燃烧室零件和其他可识别发动机零件。范围不包括完整发动机、辅助动力装置、非发动机航空器零件、工装、维修与大修、发动机装配或安装、使用、维护、出厂后运输、包装和寿命终止。零件号、图样版次、合金牌号、关键性类别、制造路线、生产场址和验收状态为必填前景限定信息。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0：43155，涡轮喷气发动机和涡轮螺旋桨发动机的零件 |
| covered_products | 为涡轮喷气或涡轮螺旋桨发动机设计并单独供应的新制成品零件，包括叶片、导向叶片、盘、轴、机匣和燃烧室零件 |
| excluded_products | 完整发动机；辅助动力装置；其他反作用式发动机；非发动机航空器零件；工装；维修或大修零件；包装 |
| representative_product | 以零件号和图样版次识别的一个未包装合格涡轮发动机成品零件 |
| production_route | 外购近净成形预制件后进行精密机加工；仅在申报零件实际采用时纳入热处理、连接、化学铣削、涂层、清洗和无损检验 |
| market_state | 制造商厂门处未装机、洁净、未包装且已验收的新零件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合获批设计资料的新制涡轮喷气或涡轮螺旋桨发动机零件 |
| How much | 1 kg 已验收成品零件净质量 |
| How well | 符合所声明的零件号、图样版次、材料规范、工艺路线和验收准则 |
| How long or cycle | 一个完整制造与验收周期；不计入使用寿命服务 |
| reference_flow_link | `rf_finished_engine_part` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 涡轮喷气发动机和涡轮螺旋桨发动机的零件 `4dfe38dc-4e31-4840-b627-49ca65a2accd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号；图样版次；发动机型号或获批适用性；合金和材料规范；关键性类别；制造路线；生产场址及地域；生产期；新零件状态；验收与检验状态；净质量计量基准；未包装厂门状态 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注或等效字段中声明全部必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 已验收参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终清洗和验收后测量净质量；排除可拆保护帽、夹具、运输包装和不合格零件。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 以 MJ 记录计量的交付电力；原始记录为 kWh 时按精确换算 1 kWh = 3.6 MJ，并保留原始读数。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力及仪表报告实际体积还是标准体积；不得与电力合并。 |
| `material_mass` | 预制件、化学品、废料、废水及直接二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用跨越过程边界的净质量；声明氢氧化钠溶液浓度以及废水是否为湿质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 从外购预制件进入制造场址开始，到未包装零件通过最终验收并到达厂门为止；纳入机加工、所有已声明的现场条件工序、公用工程、直接排放、不合格品和废物。 | `us-epa-aerospace-ctg-1997`; `nasa-cr-159464-1979` |
| `boundary_upstream_inputs` | 外购投入 | 以独立上游数据集表示预制件、电力、天然气、水和化学品的生产；不得在本前景数据集内重复其上游生产。 |  |
| `boundary_exclusions` | 排除阶段 | 除非研究明确扩展边界并单独报告，否则排除资本设备、工装生产、员工通勤、包装、出厂后运输、发动机装配、安装、使用、维护、维修、大修和寿命终止。 |  |
| `boundary_route_disclosure` | 条件工序 | 仅在申报零件实际执行时纳入热处理、化学铣削、涂层、连接及其清洗或废物处理；披露所有已纳入和不适用的路线。 | `us-epa-aerospace-ctg-1997` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址大门接收的外购发动机或涡轮部件近净成形预制件 |
| starting_condition_role | 前景精加工的上游供应中间产品和起始产品 |
| product_classification_scope | 涡轮喷气和涡轮螺旋桨发动机成品零件；起始预制件可属于更宽泛的发动机及涡轮零件类别 |
| recursive_input_rule | 将收到的预制件作为一次投入记录。若其由另一场址供应且应用本 PCR 会造成递归，则在申报的收货预制件状态停止追溯，并连接独立的上游预制件数据集。 |
| upstream_dataset_requirement | 上游数据集必须识别合金牌号、预制件路线、产品状态、供应商地域、交付状态和交付质量。 |
| disclosure | 披露预制件身份、合金规范、成形或铸造路线、供应商边界、纳入的精加工步骤及任何同类别递归截断。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `preform_receipt` | 预制件接收与准备 | required | 始终纳入；使用实际进入场址的外购预制件 | 前景起始状态 | 每 kg 已验收零件接收的预制件 kg |
| `precision_machining` | 精密机加工与机械精整 | required | 始终纳入；记录实际机加工和清洗工序 | 前景生产 | 已验收机加工零件 kg |
| `thermal_processing` | 热处理 | conditional | 申报零件使用炉子或热循环时纳入 | 前景调质 | 热处理后零件 kg |
| `surface_processing` | 化学铣削、涂层与表面清洗 | conditional | 纳入申报零件实际执行的各工序 | 前景表面调质 | 表面处理后零件 kg |
| `final_inspection` | 最终检验与验收 | required | 始终纳入 | 前景质量验收 | 已验收成品零件 kg |

### 过程：预制件接收与准备（`preform_receipt`）

#### 输入

##### 产品流

###### 外购近净成形预制件（`purchased_preform`）

记录实际交付预制件质量，并保留其合金牌号、成形路线、供应商和交付状态。

- 选定流：发动机及涡轮部件近净成形预制件 `3789e1b9-f247-49c1-97ad-6036de9b6976`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按生产订单发料的已验收预制件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

### 过程：精密机加工与机械精整（`precision_machining`）

#### 输入

##### 产品流

###### 机加工电力（`machining_electricity`）

记录生产订单对应的机加工单元所消耗的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量机加工单元电力；无直接分表时按设备时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：

###### 机加工工艺用水（`machining_process_water`）

记录以补水或清洗水形式跨越机加工边界的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产订单应占的补水和清洗用水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 切削液浓缩液（`cutting_fluid_concentrate`）

仅记录纳入机加工工序所消耗的新鲜切削液浓缩液。

- 选定流：金属加工切削液浓缩液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测消耗的浓缩液补加量；排除系统中留存并循环使用的工作液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

#### 输出

##### 废物流

###### 镍基高温合金机加工废料（`nickel_superalloy_scrap`）

记录作为废物离开过程且分类收集的镍基高温合金切屑、碎屑和废品。

- 选定流：镍基高温合金机加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测分类收集的切屑、碎屑和废品；零件不含镍基高温合金时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 钛合金机加工废料（`titanium_alloy_scrap`）

记录作为废物离开过程且分类收集的钛合金切屑、碎屑和废品。

- 选定流：钛合金机加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测分类收集的切屑、碎屑和废品；零件不含钛合金时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 不锈钢机加工废料（`stainless_steel_scrap`）

记录作为废物离开过程且分类收集的不锈钢切屑、碎屑和废品。

- 选定流：不锈钢机加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测分类收集的切屑、碎屑和废品；零件不含不锈钢时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 铝合金机加工废料（`aluminium_alloy_scrap`）

记录作为废物离开过程且分类收集的铝合金切屑、碎屑和废品。

- 选定流：铝合金机加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测分类收集的切屑、碎屑和废品；零件不含铝合金时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

### 过程：热处理（`thermal_processing`）

#### 输入

##### 产品流

###### 炉用天然气（`thermal_natural_gas`）

记录交付给纳入的燃气热处理设备的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：纳入的热处理循环消耗的计量天然气；全电炉不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 热处理电力（`thermal_electricity`）

记录纳入炉次及其辅助设备所消耗的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：纳入的炉次及辅助设备计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：

#### 输出

##### 基本流

###### 直接化石源二氧化碳（`thermal_fossil_co2`）

记录热处理现场燃料燃烧直接排放的化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用烟气实测，或依据炉用燃料计量值和有记录的燃料碳含量计算直接化石源 CO2；排除上游电力排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：化学铣削、涂层与表面清洗（`surface_processing`）

#### 输入

##### 产品流

###### 表面处理工艺用水（`surface_process_water`）

记录交付给纳入的化学铣削、涂层和清洗工序的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：纳入表面工序的补水和漂洗水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-ctg-1997`

###### 氢氧化钠（`surface_sodium_hydroxide`）

按纯化学品质量记录纳入表面处理槽所消耗的氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据实测溶液补加质量和记录浓度换算氢氧化钠质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-ctg-1997`

###### 表面处理电力（`surface_electricity`）

记录纳入的槽体、通风、涂层和清洗设备所消耗的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：纳入的槽体、通风、涂层和清洗设备应占的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-aerospace-ctg-1997`

#### 输出

##### 废物流

###### 金属表面处理工艺废水（`metal_finishing_wastewater`）

记录离开纳入金属表面处理工序并进入处理环节的具体水性废物流。

- 选定流：金属表面处理工艺废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：排入现场处理或外运处置的湿质量实测值；识别处理去向和主要受控成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-ctg-1997`

### 过程：最终检验与验收（`final_inspection`）

#### 输入

##### 产品流

###### 检验电力（`inspection_electricity`）

记录最终尺寸检验、无损检验和验收设备所消耗的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：尺寸检验、无损检验和验收设备的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`faa-ac-33-8-2009`

#### 输出

##### 产品流

###### 已验收发动机成品零件（`finished_engine_part`）

记录通过最终验收并实现参考流的未包装合格成品零件。

- 选定流：涡轮喷气发动机和涡轮螺旋桨发动机的零件 `4dfe38dc-4e31-4840-b627-49ca65a2accd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按参考流定义，已验收零件净输出恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`; `faa-ac-33-8-2009`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用制造设备 | 分配前优先按生产订单、设备时间、炉装量、槽体处理量或检验时间进行分表计量或单元划分。 |  |
| `allocation_shared_resources` | 剩余共用公用工程 | 采用与消耗存在因果关系的物理驱动量分配剩余共用公用工程；共用负荷重大时报告驱动量和敏感性。 |  |
| `allocation_scrap` | 分类金属废料 | 将机加工废料作为厂门废物输出。除非单独报告明确声明的后果型情景，否则不得从参考产品中扣除回收收益。 |  |
| `allocation_rejects` | 不合格零件 | 将报告期内不合格零件的制造负荷计入合格输出；披露不合格质量和任何返工循环。 | `faa-ac-33-8-2009` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `preform_receipt`; `precision_machining` | 预制件、水、切削液及分类废料 | 收货记录；发料单；称量记录；废物联单 | 零件号；批次；合金；毛重和皮重；发料量；退料量；废料流 | 校准秤及相互核对的生产订单记录 | kg | 每批和每个生产订单 | 有代表性的连续 12 个月或完整生产活动 | 所有纳入生产线 | 汇总投入输出并扣除退料，再除以合格产品净质量 | 校准、批次追溯、质量平衡核对 |
| `cp_energy_records` | `precision_machining`; `thermal_processing`; `surface_processing`; `final_inspection` | 电力和天然气 | 分表；公用工程表；设备运行日志 | 表计起止值；燃料体积；基准条件；设备时间；负荷；生产订单 | 优先直接分表；否则按设备时间和负荷分配场区计量能源 | MJ; m3 | 每批或按月并具订单驱动量 | 有代表性的连续 12 个月或完整生产活动 | 所有纳入设备和共用服务 | 扣除非生产负荷，按记录的物理驱动量分配并归一化到合格 kg | 仪表校准、账单核对、分配校验 |
| `cp_surface_records` | `surface_processing` | 水、氢氧化钠和废水 | 槽液补加日志；浓度检测；水表；排放记录 | 溶液质量；NaOH 浓度；补水和漂洗水；废水湿质量；处理去向 | 校准仪表或秤加实验室浓度记录 | kg | 每次槽液补加和排放 | 有代表性的连续 12 个月或完整生产活动 | 每条纳入表面处理线 | 计算纯 NaOH 质量，汇总水和废水并归一化到合格 kg | 浓度证书、仪表校准、排放联单 |
| `cp_direct_emissions` | `thermal_processing` | 直接化石源 CO2 | 烟气实测或燃料碳核算记录 | 燃料体积；基准条件；碳含量；氧化基准；实测 CO2 | 经验证的烟气方法或有记录的碳平衡计算 | kg | 每次测试活动或报告期 | 与燃料记录同期 | 所有纳入燃气设备 | 扣除生物源碳，避免与上游数据集重复并归一化到合格 kg | 方法记录、燃料证书、计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 全部清单行 | 每参考流数量 = 应占数量 / 已验收成品零件净质量 | 应占数量；合格净质量 | 每 1 kg 合格零件的数量 |  |
| `calc_electricity` | 电力行 | MJ = 记录的 kWh × 3.6；仅在无法直接按订单计量时分配 | kWh；运行时间/负荷驱动量；合格质量 | 应占电力 MJ/kg |  |
| `calc_naoh_mass` | 氢氧化钠 | 纯 NaOH 质量 = 溶液质量 × 实测质量分数 | 溶液质量；浓度 | kg NaOH/kg 合格零件 | `us-epa-aerospace-ctg-1997` |
| `calc_direct_co2` | 直接化石源 CO2 | 使用经验证的 CO2 实测值或燃料碳平衡；现场燃烧只计一次 | 天然气消耗；碳含量；氧化基准或烟气实测 | kg 化石源 CO2/kg 合格零件 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和预制件 | 保留零件号、图样版次、发动机适用性、合金规范、批次、路线、供应状态和验收处置。 | 获批设计/生产记录及批次追溯；`faa-ac-33-8-2009` |
| `dq_measurement` | 仪表、秤和检验 | 使用校准仪器，保留原始读数、换算因子、分配驱动量及不确定度或检出限处理。 | 校准和检验记录 |
| `dq_temporal` | 前景数据集 | 覆盖有代表性的连续 12 个月或完整生产活动；披露停产、低产量原型和异常批次。 | 带日期的生产及公用工程记录 |
| `dq_completeness` | 纳入工序 | 对每个适用过程核对预制件、合格输出、不合格品、分类废料、水、燃料、电力、化学品、废水和直接排放。 | 质量/能量核对及路线清单 |
| `dq_route` | 条件过程 | 声明实际执行及不适用的热处理、表面处理、涂层、连接、清洗和检验工序。 | 工艺流程卡、工序卡或批记录；`us-epa-aerospace-ctg-1997` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | CPC 身份、零件号、图样版次、发动机适用性、合金、路线、新零件状态、验收状态或未包装厂门状态缺失时判定失败。 | `un-cpc-3-0-structure-2025`; `faa-ac-33-8-2009` |
| `validate_reference_mass` | 参考输出 | 要求合格净输出恰为 1 kg，且该质量排除不合格品、夹具、保护帽和包装。 |  |
| `validate_route_inventory` | 过程清单 | 路线记录中的每个已执行工序必须有相应投入、输出、公用工程、废物和直接排放；条件行缺失时须明确标记不适用。 | `us-epa-aerospace-ctg-1997`; `nasa-cr-159464-1979` |
| `validate_no_double_count` | 排放和上游数据集 | 上游电力或燃料供应排放被重复记为直接前景排放，或循环切削液被再次计作新鲜浓缩液时判定失败。 |  |
| `validate_mass_balance` | 材料流 | 调查预制件与产品加废料之间未核对的质量差异，并披露在制品、蒸发、取样或测量不确定度。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未包装且已验收涡轮发动机零件的厂门前景产品制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品足迹、航空发动机供应链、采购、工艺改进及产品身份、路线、地域、时期和分配相容的比较研究 |
| excluded_use | 完整发动机制造或运行；通用航空器零件；维修或大修；在合金、零件关键性、路线或验收状态之间无限定替代 |
| required_metadata | PCR id 和版本；零件号；图样版次；发动机适用性；合金和材料规范；关键性类别；预制件身份；路线；场址和地域；时期；合格质量；不合格率；纳入工序；计量和分配方法；上游数据集 |
| required_quality_disclosure | 数据覆盖；校准；供应商数据质量；质量和能量核对；路线适用性；分配；未解决 UUID；缺失范围证据；不确定度和局限性 |
| update_trigger | 零件设计、合金、预制件路线、热处理、表面工艺、供应商、场址、能源供应、验收准则、分配方法发生变化，或不合格率/资源强度发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 43155 的正式产品身份和分类名称 |
| `us-epa-aerospace-ctg-1997` | `official_guidance` | 美国环境保护署，*Control of Volatile Organic Compound Emissions from Coating Operations at Aerospace Manufacturing and Rework Operations*，EPA-453/R-97-004，1997-12，https://www3.epa.gov/airquality/ctg_act/199712_voc_epa453_r-97-004_aerospace_rework.pdf（检索日期：2026-09-05） | 航空部件工艺分解；条件涂层、化学铣削、热处理、清洗、精整和测试；表面工艺记录 |
| `faa-ac-33-8-2009` | `official_guidance` | 美国联邦航空管理局，*Guidance for Parts Manufacturer Approval of Turbine Engine and Auxiliary Power Unit Parts under Test and Computation*，AC 33-8，2009-08-19，https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_33-8.pdf（检索日期：2026-09-05） | 涡轮发动机零件身份、关键性、设计符合性论证、测试、验收和可追溯性 |
| `nasa-cr-159464-1979` | `literature` | L. W. Sink、G. S. Hoppin III 和 M. Fujii，*Materials for Advanced Turbine Engines, Project Completion Report, Project 1—Low-Cost Directionally-Solidified Turbine Blades, Volume I*，NASA CR-159464，1979-01，https://ntrs.nasa.gov/api/citations/19790015950/downloads/19790015950.pdf（检索日期：2026-09-05） | 涡轮叶片在铸造后进行热处理、机加工、涂层和检验/测试的路线证据 |
