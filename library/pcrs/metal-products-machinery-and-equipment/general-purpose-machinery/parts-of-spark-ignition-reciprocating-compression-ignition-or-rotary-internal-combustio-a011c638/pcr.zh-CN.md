---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-compression-ignition-or-rotary-internal-combustio-a011c638
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 点燃往复式、压燃式或旋转式活塞内燃机零件

## 1. 范围与适用性

本 PCR 适用于以外购发动机零件毛坯制造，并以合格成品零件状态交付至工厂门口的全新非航空用点燃往复式、压燃式或旋转式活塞内燃机零件。涵盖的单独销售零件包括气缸体、气缸盖、活塞、活塞环、连杆、曲轴、凸轮轴、飞轮、歧管以及主要产品身份属于上述发动机零件的其他产品。

本 PCR 涵盖机加工与尺寸精加工、条件适用的热处理或表面处理、最终清洗、检验和包装。不包括完整发动机、航空发动机零件、涡轮喷气发动机和涡轮螺桨发动机零件、主要身份并非发动机零件的通用机动车零件、再制造零件、进入报告场址前的毛坯生产、资本设备、员工差旅、使用、维护和报废阶段。若场址内进行毛坯铸造或锻造，应增设前景过程并核实原子交换，不得将其隐含在外购毛坯投入中。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-compression-ignition-or-rotary-internal-combustio-a011c638 |
| classification_refs | CPC 3.0：43151，exact |
| covered_products | 主要设计用于点燃往复式、压燃式或旋转式活塞内燃机的全新非航空用零件 |
| excluded_products | 完整发动机；CPC 43152 航空发动机零件；涡轮机零件；过滤器；通用车辆零件；再制造零件；不具备发动机成品零件身份的散装金属毛坯 |
| representative_product | 以外购发动机零件毛坯制造的合格成品发动机零件 |
| production_route | 外购毛坯接收；机加工与尺寸精加工；条件适用的热处理或表面处理；最终清洗、检验和包装 |
| market_state | 工厂门口状态的全新、已清洗、已检验合格成品零件；包装作为单独投入记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一项符合要求的上述内燃活塞发动机非航空用成品零件 |
| How much | 1 kg 成品合格发动机零件净质量，不含包装 |
| How well | 符合声明的图纸、材料牌号、尺寸与公差、热处理或涂层状态、清洁度要求和验收试验规范 |
| How long or cycle | 工厂门口状态下一个完整制造批次或报告期生产批；不计入使用阶段服务寿命 |
| reference_flow_link | 最终检验后合格成品零件的净质量，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 火花往复式、压燃式或旋转式活塞内燃机的零件 `1feb7c65-f70a-45fa-b290-0cdd5f7f56eb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称及图号或零件号；适用发动机类型；材料牌号和毛坯成形路线；来料毛坯状态；机加工路线；热处理状态；表面处理或涂层状态；成品净质量；清洁度和验收规范；生产场址和地理范围；报告期；包装配置；分配方法；废水和废物去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 验收合格的成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在规定清洗和处理完成后称量验收合格零件；排除托盘、瓦楞纸板、可拆卸防护包装、量具、工装和不合格零件。 |
| `batch_normalization` | 所有过程交换 | Mass 或相应行的 Tiangong 流属性 | 相应行的参考单位 | 汇总同一场址、路线、产品族和报告期内的交换，以合格成品零件净质量为除数，并按每 1 kg 参考产品表示。 |
| `electricity_conversion` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量 kWh，并按 3.6 MJ/kWh 换算为 MJ；披露电表边界、电压等级、电网地理范围和所含损耗。 |
| `water_mass_conversion` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量计量；若按体积计量，应采用规定参考条件下实测或有文件依据的密度换算，并保留原始体积记录。 |
| `packaging_reuse` | 可重复使用托盘投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 依据经核实的重复使用次数和装载利用率，仅分配本次报告运输所占托盘质量；若重复使用未经核实，则记录托盘全部质量。 |

## 5. 系统边界

前景边界始于制造场址接收外购发动机零件毛坯，终于工厂门口的验收合格成品零件及其包装材料。毛坯、电力、燃料、水、化学品和包装的上游生产与交付均应链接上游数据集。场址直接废物和基本流排放应在内部回收之后、外部处理或排放之前记录，并披露去向和控制系统。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 场址接收状态的外购发动机零件毛坯，并声明零件族、材料牌号、成形路线、供应商、质量和已包含的上游加工 |
| starting_condition_role | 上游产品投入及前景制造起点 |
| product_classification_scope | CPC 3.0 子类 43151 的非航空用成品零件；CPC 43152 航空发动机零件不属于本 PCR |
| recursive_input_rule | 已具有 CPC 43151 成品身份的外购流应作为具有自身数据集的上游部件处理，不得改称毛坯或再次计作参考产品；数据集本地中间转移仍属内部流 |
| upstream_dataset_requirement | 各外购毛坯、能源载体、水、化学品和包装投入均采用在地理、技术和材料方面具有代表性的上游数据集 |
| disclosure | 声明毛坯材料与成形路线、所含上游工序、场址过程、外包处理、内部回收、减排措施、废物去向、包装、排除项及分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_rule` | foreground_start | 从外购发动机零件毛坯的实测接收开始；场址内铸造或锻造属于附加前景过程，不得隐含在毛坯投入中。 | `us-epa-metal-products-machinery-2003` |
| `boundary_process_rule` | foreground_processes | 纳入满足声明产品规范所需的机加工、全部场址内热处理或表面处理、最终清洗、检验和包装。 | `eu-sf-bat-2024`, `us-epa-metal-products-machinery-2003` |
| `boundary_end_rule` | foreground_end | 终点为工厂门口验收合格成品零件质量和单独计量的包装；内部回收后记录直接废物和基本流排放。 |  |
| `boundary_exclusion_rule` | excluded_life_cycle_stages | 排除使用、维护、报废、资本设备、员工差旅及已由所链接上游数据集表示的过程。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining` | 机加工与尺寸精加工 | `required` | 外购毛坯路线始终纳入；若成品零件无需机加工，则未经复核不得采用本 PCR 路线 | 将外购毛坯转化为机加工零件的前景加工 | 合格成品零件净质量 |
| `heat_surface_treatment` | 热处理与表面处理 | `conditional` | 声明的零件规范要求场址内热处理、碱性清洗、酸洗、涂层预处理或表面精整时纳入 | 条件适用的前景处理 | 与合格产出关联的已处理中间品质量 |
| `final_inspection_packing` | 最终清洗、检验和包装 | `required` | 始终纳入最终检验和包装；仅在水跨越过程边界时纳入水洗相关行 | 前景验收和工厂门口准备 | 合格成品零件净质量 |

### 过程：机加工与尺寸精加工（`machining`）

#### 输入

##### 产品流

###### 外购发动机零件毛坯（`machining_blank_input`）

记录进入机加工的毛坯实测量，并声明材料牌号、成形路线、供应商和来料状态。

- 选定流：发动机零件毛坯 `abde866d-f4f6-4226-8f7b-571ea254ec5f`
- 流属性/单位：Mass / kg
- 数量规则：计量发放至报告生产批的来料毛坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`

###### 外购机加工电力（`machining_electricity`）

记录电表边界内供给机床、切削液系统、抽排系统及机加工直接关联设备的净电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量并归属于报告机加工批次的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`

###### 机加工工艺用水（`machining_process_water`）

记录用于水混溶切削液、切屑处理或机加工冲洗且跨越机加工边界的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量归属于机加工批次的工艺补水和冲洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 切削液补加（`machining_cutting_fluid`）

记录加入机加工系统的原供应状态切削液产品，并声明配方、浓缩液比例和循环液边界。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：归属于机加工批次的采购、发料和槽液补加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机加工发动机零部件（`machined_parts_output`）

记录从机加工过程转出、尚未进入任何条件适用热处理或表面处理的实测质量。

- 选定流：机加工发动机零部件 `a203f078-d7e0-4345-b18f-9785059b4419`
- 流属性/单位：Mass / kg
- 数量规则：计量从机加工过程放行的机加工零件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_machining_records`

##### 废物流

###### 金属切屑（`machining_metal_swarf`）

记录工件去除且经内部排液和金属回收后以分流切屑状态跨越边界的金属。

- 选定流：金属切屑 `97cead07-5379-4dc0-85a1-d53e89ad0cff`
- 流属性/单位：Mass / kg
- 数量规则：计量外运切屑质量；若夹带液体具有实质影响，应按有文件依据的数据修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 废切削液（`machining_spent_coolant`）

记录从机加工系统排出并送往回收、处理或处置的废切削液，与水性废水分开记录。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：计量从场址外运的废切削液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 机加工废水（`machining_wastewater`）

记录由切削液排放、切屑排液或机加工冲洗产生的实测水性废物流，并声明组成和去向。

- 选定流：机加工废水
- 流属性/单位：Mass / kg
- 数量规则：计量跨越场址边界或进入场内处理的水性机加工废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 基本流

###### 排入空气的残余颗粒物（`machining_particulate_air`）

记录收集和治理后的实测残余颗粒物空气排放；收集的粉尘不得在此作为基本流排放记录。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：计量或依据场址记录计算治理后的残余颗粒物排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_machining_records`
- 来源：`eu-sf-bat-2024`

### 过程：热处理与表面处理（`heat_surface_treatment`）

#### 输入

##### 产品流

###### 进入处理的机加工零件（`treatment_machined_parts_input`）

记录进入场址内处理的机加工零件质量，并识别规定的热处理或表面处理路线。

- 选定流：机加工发动机零部件 `a203f078-d7e0-4345-b18f-9785059b4419`
- 流属性/单位：Mass / kg
- 数量规则：计量发往处理路线的零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`

###### 处理用电力（`treatment_electricity`）

记录供给处理炉、泵、通风、漂洗及直接关联设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量并归属于已处理零件的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`eu-sf-bat-2024`

###### 处理加热用天然气（`treatment_natural_gas`）

处理路线使用天然气时，记录处理炉或直接关联加热设备中燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量并归属于已处理零件的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`eu-sf-bat-2024`

###### 处理用工艺用水（`treatment_process_water`）

记录声明处理路线中用于槽液配制、淬火、清洗或漂洗的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量并归属于已处理零件的处理用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 碱性清洗用氢氧化钠（`treatment_sodium_hydroxide`）

仅在采用该化学品时，记录用于碱性清洗的原供应状态氢氧化钠质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：归属于已处理零件的采购和槽液补加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 酸洗用盐酸（`treatment_hydrochloric_acid`）

仅在声明路线使用盐酸时记录原供应状态盐酸，并保留酸浓度和槽液补加记录。

- 选定流：盐酸 `964d524a-87f5-4b63-a856-2e31a8f21b67`
- 流属性/单位：Mass / kg
- 数量规则：发放至处理槽的原供应状态酸质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已处理发动机零件中间品（`treated_parts_output`）

记录从声明的热处理或表面处理路线转往最终验收的质量。

- 选定流：已处理发动机零件中间品
- 流属性/单位：Mass / kg
- 数量规则：计量放行至最终检验的已处理零件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_records`

##### 废物流

###### 废盐酸酸洗液（`treatment_spent_pickling_acid`）

废盐酸槽液应与漂洗废水分开记录，并声明浓度、溶解金属含量和去向。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：计量从槽中移出并送往回收、处理或处置的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 金属精加工废水（`treatment_wastewater`）

记录声明的清洗、漂洗、酸洗、淬火或表面处理序列产生的水性废水，不包括单独移出的废槽液。

- 选定流：金属精加工废水
- 流属性/单位：Mass / kg
- 数量规则：计量跨越场址边界或进入场内处理的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 基本流

###### 处理燃料产生的化石源二氧化碳（`treatment_fossil_co2_air`）

记录处理炉燃料燃烧直接排放的化石源二氧化碳，不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据计量燃料和场址燃料含碳量计算，或计量直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_records`

### 过程：最终清洗、检验和包装（`final_inspection_packing`）

#### 输入

##### 产品流

###### 待检验发动机零件中间品（`final_part_input`）

记录进入最终验收的内部零件质量，无论其由机加工直接进入还是经过条件适用的处理；应识别路线和处理状态。

- 选定流：待检验发动机零件中间品
- 流属性/单位：Mass / kg
- 数量规则：计量进入最终检验的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`

###### 最终检验和包装用电力（`final_electricity`）

记录供给最终清洗、测量、无损检测、检验和包装设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量或有文件依据地分配至合格与不合格零件的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`

###### 最终水洗用工艺用水（`final_process_water`）

仅在验收前执行最终水洗步骤时记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量归属于生产批次的最终清洗用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 瓦楞纸板包装（`packing_corrugated_cardboard`）

记录随产品跨越工厂门口的瓦楞纸板；仅在确实未使用或由单独建模的可重复使用容器替代时不记录。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：计量分配至已发运合格零件的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`

###### 木制托盘（`packing_wooden_pallet`）

采用托盘包装路线时，记录运输所用木制托盘的应归属质量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：依据经核实的重复使用次数和装载利用率分配实测托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_final_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格成品发动机零件（`reference_engine_part_output`）

这是完成全部规定加工、清洗和验收检查后的参考产品，不含包装质量。

- 选定流：火花往复式、压燃式或旋转式活塞内燃机的零件 `1feb7c65-f70a-45fa-b290-0cdd5f7f56eb`
- 流属性/单位：Mass / kg
- 数量规则：根据实测合格成品零件净质量归一化为 1.0 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_final_records`

##### 废物流

###### 最终清洗废水（`final_cleaning_wastewater`）

记录最终零件清洗产生的条件适用水性废物流，并声明清洗化学品、污染物、处理方式和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越过程边界的最终清洗废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 不合格发动机零件（`rejected_engine_part`）

记录作为废物离开前景边界的整件或部分完成的不合格发动机零件，并与机加工切屑分开。

- 选定流：不合格发动机零件
- 流属性/单位：Mass / kg
- 数量规则：计量送往回收、边界外返工、处理或处置的不合格零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共享前景作业 | 优先采用过程细分、分表计量、机时记录和路线特定领料记录，将交换直接归属于报告零件族。 |  |
| `allocation_residual` | 不可分离的共享公用工程 | 采用因果关系最强的实测驱动因素分配剩余共享公用工程，例如机时、处理负荷或批次占用容量；仅在无更具因果性的记录时采用质量分配，并披露敏感性。 |  |
| `allocation_internal_recovery` | 场内回收的切削液、金属、水或热 | 仅记录跨越过程边界的净补加和净输出；场内循环不设置抵扣，并保留证明回收闭环的记录。 | `us-epa-metal-products-machinery-2003` |
| `allocation_exported_scrap` | 外运切屑和不合格零件 | 前景结果中将外运废料和不合格零件作为废物输出，不给予避免负担抵扣；若研究目标要求采用其他回收约定，应披露并检验其影响。 |  |
| `allocation_packaging_reuse` | 可重复使用托盘 | 按经核实的重复使用次数和实际装载利用率分配托盘质量；缺少这些记录时计入托盘全部质量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `machining` | 全部机加工投入和输出 | 电表、秤量、领料、维护、废物转移和排放控制记录 | 批次号；零件号；毛坯质量；合格质量；电力；水；切削液补加；机加工转移；切屑；废切削液；废水；残余粉尘 | 将生产、公用工程、槽液、废物和治理记录核对至同一批次或报告期 | 视具体流采用 kg、MJ、m3 | 每批或每个计量间隔，最多按月汇总 | 具有代表性的连续 12 个月，或说明理由的完整较短生产期 | 声明产品使用的全部机加工设备和直接关联抽排设备 | 汇总同边界记录，扣除有文件依据的场内回流，再按合格净质量归一化 | 经校准的秤和仪表；发票；领料记录；槽液日志；废物联单；治理监测；质量平衡核对 |
| `cp_treatment_records` | `heat_surface_treatment` | 全部条件适用处理投入和输出 | 批次票、电表、槽液日志、秤量、燃料、废物转移和烟气计算记录 | 处理路线；批次号；投入和输出质量；电力；天然气；水；氢氧化钠；盐酸及浓度；废槽液；废水；直接化石源二氧化碳 | 按路线核对处理票据、仪表、槽液添加、废物外运和燃料记录 | 视具体流采用 kg、MJ、m3 | 每批或每个计量间隔，最多按月汇总 | 具有代表性的连续 12 个月，或说明理由的完整较短生产期 | 声明产品使用的全部场址内热处理和表面处理线 | 按处理路线汇总，避免重复计算内部槽液循环，并按合格净质量归一化 | 经校准的仪表；槽液分析；化学品发票；燃料记录；废物联单；处理规范；质量与碳核对 |
| `cp_final_records` | `final_inspection_packing` | 最终投入、公用工程、包装、合格产品、清洗废水和不合格品 | 秤量、检验、清洗、包装领料、发运和不合格品记录 | 路线状态；投入质量；电力；水；纸板；托盘质量和重复使用次数；合格质量；清洗废水；不合格质量；验收结果 | 将检验、包装、发运和不合格品记录核对至同一生产批 | 视具体流采用 kg、MJ | 每批或每次发运，最多按月汇总 | 具有代表性的连续 12 个月，或说明理由的完整较短生产期 | 声明产品的全部最终清洗、检验、试验和包装作业 | 将合格净质量与包装和不合格品分别汇总；所有行按合格净质量归一化 | 经校准的秤和仪表；检验放行单；包装领料；托盘复用证据；发运记录；不合格品处置 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期相应行数量 / 报告期合格成品零件净质量 | 相应行数量；合格成品零件净质量 | 每 1 kg 参考产品的行数量 |  |
| `calc_electricity_mj` | 所有电力行 | 电力 MJ = 计量 kWh × 3.6 MJ/kWh | 计量 kWh | 以 MJ 表示的电力 |  |
| `calc_water_mass` | 按体积计量的水和废水 | 质量 = 实测体积 × 声明参考条件下的有文件依据密度 | 体积；密度；温度或参考条件 | 以 kg 表示的质量 |  |
| `calc_direct_fossil_co2` | `treatment_fossil_co2_air` | 依据计量燃料和有文件依据的含碳量计算直接化石源二氧化碳，或采用经核实的场址排放计算；不得计入上游电力排放 | 燃料数量；燃料组成或经核实的场址因子 | 直接化石源二氧化碳质量 |  |
| `calc_pallet_allocation` | `packing_wooden_pallet` | 应归属托盘质量 = 托盘质量 × 本次发运装载份额 / 经核实的重复使用次数 | 托盘质量；装载份额；重复使用次数 | 分配后的托盘质量 |  |
| `calc_mass_reconciliation` | 机加工和最终验收 | 毛坯投入质量 = 合格产出质量 + 外运切屑 + 不合格零件质量 + 有文件依据的库存变化 + 其他逐项识别的质量输出，允许在声明的计量不确定度内存在差异 | 毛坯、合格品、切屑、不合格品、库存变化、其他已识别输出 | 质量平衡差额 | `us-epa-metal-products-machinery-2003` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和中间品 | 声明零件号、发动机类型、图纸版本、材料牌号、成形路线、处理状态和验收规范。 | 发布图纸、物料清单、工艺路线卡和检验放行单 |
| `dq_boundary` | 所有过程 | 分子和合格质量分母采用相同场址、过程边界、产品族和期间；记录外包及上游过程。 | 过程图、仪表边界图、供应商声明和边界核对 |
| `dq_measurement` | 质量、能源、水、化学品、废物和排放记录 | 使用经校准或核实的仪器，并保留原始单位、换算因子及不确定度或估算标识。 | 校准证书、仪表检查、磅单和计算工作簿 |
| `dq_temporal` | 前景清单 | 优先采用连续 12 个月；较短生产期应说明理由，并证明已代表开机、停机、维护和不合格状况。 | 带日期的生产与公用工程记录及代表性声明 |
| `dq_completeness` | 原子交换 | 核对毛坯质量、合格质量、切屑、废液、废水、不合格品、包装、能源和条件适用处理化学品；解释每个未纳入的适用行。 | 质量平衡、公用工程核对、废物联单和签署的完整性复核 |
| `dq_route_specificity` | 条件适用处理和包装行 | 将每个条件适用行标记为适用或不适用并保留证据；仅填零值而无适用性声明视为不完整。 | 工艺路线卡、处理规范、清洗记录和包装指令 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 确认数据集描述的是 CPC 43151 非航空用成品发动机零件，且全部必需限定信息和准确的参考流 UUID 均已提供。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | 参考流 | 确认归一化后合格成品零件净输出为 1 kg，且不含包装和不合格品。 |  |
| `validation_inventory_accounting` | 过程清单 | 确认每张清单卡片仅含一个原子交换，且每个适用行均有计量或计算数量、单位、采集协议以及已披露的去向或供应边界。 |  |
| `validation_mass_balance` | 机加工和最终验收 | 调查超出有文件依据的计量不确定度的质量平衡差异；不得通过插入未识别废物流强制平衡。 | `us-epa-metal-products-machinery-2003` |
| `validation_energy_water` | 电力、燃料、水和废水 | 将仪表记录核对至同一产品期间，核实 kWh 至 MJ 及体积至质量的换算，并避免在机加工、处理和最终清洗之间重复计算。 |  |
| `validation_treatment_route` | 条件适用处理 | 确认路线适用时已纳入处理投入、废物、直接燃料排放和治理输出；仅在有路线证据时才可不纳入。 | `eu-sf-bat-2024`, `us-epa-metal-products-machinery-2003` |
| `validation_allocation` | 共享作业和可重复使用托盘 | 确认已披露因果分配驱动因素、内部回收处理、废料约定、托盘复用证据和敏感性。 |  |
| `validation_unresolved_identity` | UUID 为空的行 | 在核实准确的公开 state-100 Tiangong 流之前，保留具体行名和 manifest 未解决项；不得以代理流替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经复核后可发布为 `secondary_dataset` 或 `background_dataset` 的前景生产数据包 |
| downstream_use | 用于声明发动机零件族和制造路线的产品碳足迹、过程 LCA、供应商比较和 lifecyclemodel 构建 |
| allowed_use | 适用于零件身份、材料、毛坯路线、处理状态、地理、技术、分配和报告期均具有代表性的情形 |
| excluded_use | 不适用于完整发动机、航空发动机零件、再制造零件、使用阶段性能、报废阶段或未限定的跨重大差异零件族与路线平均值 |
| required_metadata | PCR id 和版本；参考流 UUID；零件和发动机身份；材料和毛坯路线；场址和地理；技术；处理与包装路线；报告期；上游数据集链接；分配；截断；数据质量；未解决身份 |
| required_quality_disclosure | 一手数据占比；仪表和秤量覆盖率；时间与地理代表性；质量平衡结果；估算占比；废水和废物去向；治理措施；分配敏感性；托盘复用证据；不确定度 |
| update_trigger | 图纸、材料、供应商毛坯路线、机加工技术、处理化学品、能源供应、废水处理、分配、包装配置、场址或数据时效发生对结果有实质影响的变化 |

## 11. 数据源

| Source id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Structure》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-05 | CPC 43151 官方产品身份和层级，以及与 CPC 43152 航空发动机零件的区分 |
| `eu-sf-bat-2024` | `official_guidance` | 欧盟委员会，Commission Implementing Decision (EU) 2024/2974 of 29 November 2024 establishing BAT conclusions for the smitheries and foundries industry，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ%3AL_202402974，检索日期 2026-09-05 | 精整和热处理过程定义、处理用能背景以及精整粉尘收集 |
| `us-epa-metal-products-machinery-2003` | `official_guidance` | 美国环境保护署，Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category，EPA-821-B-03-001，2003 年 2 月，https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf，检索日期 2026-09-05 | 机加工过程、切削液、金属切屑、冲洗、清洗、废液和机加工废水的过程分解 |
