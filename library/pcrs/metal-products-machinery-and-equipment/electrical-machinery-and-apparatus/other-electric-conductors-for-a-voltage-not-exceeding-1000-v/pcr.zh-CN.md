---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-not-exceeding-1000-v
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用于电压不超过 1 000 伏的其他电导体

## 1. 范围与适用性

本 PCR 用于编制工厂大门口边界的前景数据，适用对象为额定电压不超过 1 000 V、且未归入更具体导体类别的待售绝缘电导体。它覆盖单芯或多芯铜导体产品；若实际产品采用其他导体金属、绝缘体系、屏蔽、铠装、护套、连接器或包装，必须逐项增加相应的路线特定投入。

本 PCR 不覆盖绝缘绕组线、同轴电缆及其他同轴导体、车辆/航空器/船舶用点火线束或其他线束、额定电压超过 1 000 V 的导体、光纤电缆、裸露未绝缘导线，以及安装、使用和寿命终止活动。联合国产品总分类层级确定了这一剩余类别边界；NPCR 027 证明待售电缆和电线可由不同材料制成。综合制造过程把盘条和聚合物料经拉丝、退火、绞合、挤出、成缆、检验和包装转化为独立的可销售导体，具有实质性方法需求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-not-exceeding-1000-v |
| classification_refs | CPC 3.0：46340，精确映射语境；分类映射边仍须遵守存储库的接受治理流程 |
| covered_products | 额定电压不超过 1 000 V、准备销售且不属于绕组线、同轴导体、车辆/航空器/船舶线束或光纤电缆的绝缘电线和电缆 |
| excluded_products | CPC 46310、46320、46330、46350 和 46360 产品；裸导体；上游金属和聚合物生产；安装、使用及寿命终止阶段 |
| representative_product | 以铜为导体、以 PVC 绝缘，并在工厂大门口以检验合格可销售状态交付的低压电线或电缆 |
| production_route | 接收盘条和配混料；拉丝与退火；需要时绞合；绝缘挤出；按条件成缆、护套、标识、检验和包装 |
| market_state | 制造工厂大门口的成品、检验合格且可销售绝缘导体；声明额定电压、芯线结构、导体截面积、材料和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够在所声明电压、导体、绝缘和安装规范内传输电流的成品绝缘电导体 |
| How much | 制造工厂大门口 1 kg 可销售导体净质量 |
| How well | 符合声明的产品标准且额定电压不超过 1 000 V；声明导体材料与截面积、芯数、绝缘和护套材料、电阻以及检验状态 |
| How long or cycle | 一个完整制造批次或报告期生产批；使用寿命不在本工厂大门口参考流内，不得据此推断 |
| reference_flow_link | 过程输出行 `reference_product`，归一化到 1 kg 可销售产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于电压不超过 1 000 伏的其他电导体 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 额定电压；适用产品标准；导体材料；导体类别与截面积；芯数；绝缘、护套、屏蔽和铠装材料；连接器状态；单位长度净质量；所代表的产品长度；制造场址和地理范围；报告期；分材料再生含量；包装配置 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任一限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和质量清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告可销售导体净质量，不含可分离运输包装；所有前景交换归一化到 1 kg 可销售产品净质量。 |
| `length_to_mass` | 以长度记录的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用产品及批次特定的实测单位长度净质量将长度换算为质量，并保留实测长度、单位长度质量和换算过程。 |
| `energy_conversion` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位，并以有记录的单位恒等式换算为 MJ；不得以电网的上游排放替代购入电力投入。 |
| `packaging_mass` | 各包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量每种包装材料，并按该包装配置所承载产品的净质量归一化。 |

## 5. 系统边界

前景边界起于购入导体原料、绝缘材料、辅料、能源、水和包装进入制造场址，纳入拉丝、退火、绞合、挤出、按条件进行的成缆和护套、标识、检验、厂内运输、包装、过程废品、废工艺介质及场址直接排放，止于检验合格的可销售导体和在工厂大门口分开的制造废物。上游供应、出厂配送、安装、使用损耗和寿命终止应由链接数据集或后续生命周期模型阶段表达，不计入本前景过程。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入制造场址大门口的购入盘条或其他已声明导体原料、配制绝缘/护套料、辅料、能源、水和包装 |
| starting_condition_role | 进入综合导体制造的上游产品 |
| product_classification_scope | 额定电压不超过 1 000 V 的剩余待售绝缘电导体类别，不含已点名的相邻导体类别 |
| recursive_input_rule | 属于同一类别的购入绝缘导体或电缆组件作为带独立数据集的上游产品投入记录一次；不得在本前景过程中再次展开其制造 |
| upstream_dataset_requirement | 为每项购入投入链接在地理、技术、时间和材料方面具有代表性的上游数据集，并披露再生含量、配方和供应商代理 |
| disclosure | 声明额定电压、结构、材料、纳入的制造工序、排除或外包工序、场址、时期、分配、包装，以及是否有同类别导体跨越边界 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入从购入投入进入场址到检验合格产品离开工厂大门口期间直接消耗的所有材料、能源、水、辅料和包装投入，以及制造废物与直接排放。 | `environdec-epd-ies-0024248-2025` |
| `boundary_variant_disclosure` | 产品变体 | 将实际导体金属、聚合物、添加剂、屏蔽、铠装、护套、连接器和包装组件分别作为原子交换增加，不得使用笼统材料行。 | `epd-norge-npcr-027-2022` |
| `boundary_stage_exclusions` | 下游阶段 | 前景过程排除配送、安装、使用和寿命终止；构建从摇篮到坟墓模型时应声明并另设这些情景。 | `epd-norge-npcr-027-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `electric_conductor_manufacturing` | 低压导体综合制造与包装 | required | 始终纳入；只有产品结构证据证明不适用时，才可省略路线不适用的原子行 | 通过拉丝、退火、绞合、挤出、按条件成缆/护套、检验和包装进行前景转化 | 1 kg 可销售成品导体净质量 |

### 过程：低压导体综合制造与包装（`electric_conductor_manufacturing`）

#### 输入

##### 产品流

###### 铜导体原料（`copper_wire_rod`）

铜盘条进入代表性路线并被拉制为导体线材。

- 选定流：铜盘条 `99715c69-4245-44ff-a438-0e0d68377386`
- 流属性/单位：Mass / kg
- 数量规则：代表生产批领用质量，扣除退回且未使用的盘条
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### PVC 电缆绝缘料（`pvc_insulation_compound`）

产品采用 PVC 绝缘或护套时，配制 PVC 料进入过程。其 Tiangong 精确身份尚未解决；若在场内配混，树脂、增塑剂、稳定剂、填料等分别购入的配方成分不得合并到本行。

- 选定流：PVC 电缆绝缘料
- 流属性/单位：Mass / kg
- 数量规则：代表性 PVC 绝缘产品批次领用质量，扣除可回用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 着色母粒（`colour_masterbatch`）

绝缘料或护套料需要着色或其他母粒时纳入。

- 选定流：母粒 `71dc7f76-bcc0-4239-a8d7-03132cef6b16`
- 流属性/单位：Mass / kg
- 数量规则：代表生产批实测母粒领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 购入电力（`electricity`）

购入电力为拉丝、退火、绞合、挤出、成缆、检验和包装提供能源。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：通过电表计量并按有记录的物理驱动因素分配到代表生产批的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`environdec-epd-ies-0024248-2025`

###### 厂内运输柴油（`diesel_fuel`）

只有当前景边界内由场址控制的叉车或其他厂内运输设备燃烧柴油时才纳入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：计量或经发票核对的适用厂内运输柴油，并分配到代表生产批
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_emissions`
- 来源：`environdec-epd-ies-0024248-2025`

###### 工艺补充水（`process_water`）

工艺用水作为拉丝乳化液、挤出冷却或其他生产接触系统的实测补充水进入；循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：代表生产批跨越场址边界的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`environdec-epd-ies-0024248-2025`

###### 拉丝润滑乳化液（`drawing_lubricant_emulsion`）

场内进行拉丝时纳入购入的配制乳化液或浓缩液，不得使用笼统润滑剂类别。

- 选定流：拉丝润滑乳化液
- 流属性/单位：Mass / kg
- 数量规则：代表生产批向拉丝系统补加的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 木托盘（`wooden_pallet`）

木托盘随可销售产品离开工厂大门口时纳入。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量除以其承载产品净质量，并按有记录的重复使用次数调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明包装配置下每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 低密度聚乙烯包装膜（`ldpe_packaging_film`）

PE-LD 薄膜用于包裹或保护可销售产品时纳入。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：声明装运配置实际使用的实测薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明包装配置下每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 瓦楞纸板包装（`corrugated_cardboard`）

瓦楞纸板用作产品包装板、保护件、纸箱或隔板时纳入。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：声明装运配置实际使用的实测瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明包装配置下每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 聚丙烯包装带（`polypropylene_strap`）

聚丙烯带用于固定声明的电缆或托盘装运时纳入，其精确 Tiangong UUID 尚未解决。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass / kg
- 数量规则：声明装运配置实际使用的实测包装带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明包装配置下每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 纸质产品标签（`paper_label`）

纸质标签附着于声明的可销售产品或其包装时纳入。

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位：Mass / kg
- 数量规则：声明装运配置实际使用的实测纸质标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明包装配置下每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`environdec-epd-ies-0024248-2025`

##### 废物流

综合制造过程没有必须纳入的废物投入。若场内处理再生废物，应把每种具体废物材料作为原子投入增加，并披露其预处理边界。

##### 基本流

基线前景行不要求基本流投入；购入水作为产品投入表达，上游资源开采属于链接数据集。

#### 输出

##### 产品流

###### 低压电导体成品（`reference_product`）

检验合格的可销售导体是定量参考输出；尚未确认精确 Tiangong 产品流 UUID。

- 选定流：用于电压不超过 1 000 伏的其他电导体
- 流属性/单位：Mass / kg
- 数量规则：按参考流定义为 1 kg 可销售产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`epd-norge-npcr-027-2022`

##### 废物流

###### 分拣废铜（`copper_scrap`）

拉丝、绞合、开机或不合格品处理产生并单独收集铜废料时，该流离开过程。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测分拣废铜质量，扣除经核证的同过程内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 分拣 PVC 废料（`pvc_scrap`）

挤出清机、开机、修边或废品产生的 PVC 与含金属电缆废料分开收集时纳入。

- 选定流：聚氯乙烯 `389a97eb-6bcb-4a51-a49b-79893dbc7d41`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测分拣 PVC 废料质量，扣除经核证的同过程内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`environdec-epd-ies-0024248-2025`

###### 废拉丝润滑乳化液（`spent_drawing_emulsion`）

只有从拉丝系统排出并送往场外处理时才纳入，其精确 Tiangong 废物流 UUID 尚未解决。

- 选定流：废拉丝润滑乳化液
- 流属性/单位：Mass / kg
- 数量规则：送往场外处理的实测排出质量，不含循环浴液库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`environdec-epd-ies-0024248-2025`

##### 基本流

###### 场内柴油燃烧产生的化石源二氧化碳（`fossil_co2_from_diesel`）

只有场址控制设备在前景边界内燃烧柴油时，化石源二氧化碳才直接排入空气；本行不含燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址报告并归属于已记录柴油使用和代表生产批的直接化石 CO2 质量；不得采用无引证默认因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品导体净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有共享作业 | 通过生产线分表计量、按批记录物料领用和废物并拆分可独立计量过程，避免分配。 |  |
| `allocation_physical` | 不可避免的共享能源、水、辅料和废物 | 无法拆分时，采用机时、计量负荷、吞吐量或物料质量等反映因果关系的有记录物理驱动因素。 |  |
| `allocation_mass_fallback` | 无可证明因果驱动因素的共享场址记录 | 仅可把可销售产品净质量作为披露的后备方法；报告分配份额、分母、受影响交换及敏感性。 | `environdec-epd-ies-0024248-2025` |
| `scrap_no_avoided_burden` | 制造废料 | 在实测工厂大门口废物边界记录废料，不在前景过程中计入避免负荷；回收收益须在明确链接的下游模型中表达。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `electric_conductor_manufacturing` | 每项单独识别的导体、聚合物、母粒和拉丝乳化液投入 | 称量单、仓库领料、批次配方、采购核对 | 物料身份；批次；期初库存；入库；领用；退料；期末库存；质量 | 将生产净领用量与库存变动和批次配方核对 | kg | 每批；每月核对 | 与产品输出同一报告期 | 声明场址所有纳入产线 | 按原子物料汇总净领用量并除以可销售产品净质量 | 经校准秤记录；供应商规格；库存核对；配方版本 |
| `cp_energy_water` | `electric_conductor_manufacturing` | 电力和工艺补充水 | 仪表和公用工程记录 | 仪表编号；期初/期末读数；单位；产线份额；停机；补水读数 | 读取专用仪表，或按有记录物理驱动因素分配共享仪表 | 仪表原单位和 kg 水 | 连续或每班；每月核对 | 与产品输出同一报告期 | 所有纳入产线和辅助系统 | 期末减期初，剔除有记录的非生产负荷，分配后归一化 | 仪表校准；账单核对；分配工作表 |
| `cp_fuel_and_emissions` | `electric_conductor_manufacturing` | 柴油投入和直接化石 CO2 | 燃料领用、设备工时、核证排放记录 | 燃料身份；质量或体积；密度；设备；工时；批次；直接 CO2 | 核对燃料领用；适用直接燃烧时保留场址排放计算或核证报告 | kg 燃料和 kg CO2 | 每次领用；每月核对 | 与产品输出同一报告期 | 仅场址控制的燃烧设备 | 按实测用量或设备工时分配，并按可销售产品净质量归一化 | 发票；油罐核对；密度记录；排放计算和复核签字 |
| `cp_packaging_inputs` | `electric_conductor_manufacturing` | 每项包装组件 | 包装物料清单和包装记录 | 组件身份；单件质量；使用数量；重复使用次数；装运产品质量 | 称量代表性组件，并将数量与装运记录核对 | kg | 每种包装设计及每次修订 | 报告期采用的包装配置 | 声明的出厂产品包装 | 组件质量乘净消耗数量，再除以包装产品净质量 | 称量记录；物料清单；包装记录；重复使用证据 |
| `cp_waste_outputs` | `electric_conductor_manufacturing` | 各分拣制造废物 | 废物磅单、容器记录、处置联单 | 废物身份；毛重和皮重；去向；内部回用量；批次或时期 | 各废物流分别称量，并核对储存变化和处理联单 | kg | 每次清运；每月核对 | 与产品输出同一报告期 | 所有纳入生产和维护区域 | 出库废物加期末减期初库存，扣除经核证同过程内部回用后归一化 | 校准秤；联单；回收方收据；库存核对 |
| `cp_reference_output` | `electric_conductor_manufacturing` | 可销售成品导体净质量 | 成品和质量放行记录 | 产品代码；电压；结构；毛重；可分离包装质量；长度；单位长度质量；废品质量；放行状态 | 使用放行成品质量，扣除可分离包装，并核对长度—质量换算 | kg | 每批 | 与投入同一报告期 | 所有纳入的可销售产出 | 汇总放行产品净质量；排除废品和可分离包装 | 放行证书；校准秤；长度和单位长度质量核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 每项前景交换 | 归一化交换 = 可归属交换量 / 可销售产品净质量 | 原子交换量；`cp_reference_output` 的可销售产品净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_length_mass` | 以长度记录的产品 | 产品质量 = 实测产品长度 × 批次特定单位长度净质量 | 实测长度；实测 kg/m | 可销售产品净质量 kg |  |
| `calc_packaging_reuse` | 可重复使用托盘或电缆盘 | 包装消耗质量 = 组件质量 / 经核证预期使用次数；无可追溯回收证据不得作重复使用调整 | 组件质量；核证重复使用次数；承载产品质量 | kg 包装/kg 产品净质量 |  |
| `calc_mass_balance` | 导体金属和聚合物 | 投入质量 = 可销售产品含量 + 分拣废料 + 其他有记录损失 ± 库存变化；调查无法解释的残差 | 物料领用；产品组成；废料；库存变化 | 物料平衡和无法解释残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留产品代码、额定电压、标准、导体结构、材料配方、尺寸、单位长度净质量和质量放行状态。 | 产品规格和放行证书 |
| `dq_completeness` | 清单 | 核对实际跨越边界的每种购入材料、添加剂、能源载体、水投入、包装组件、废物和直接排放；把变体特定交换作为独立原子行增加。 | 台账—清单核对和签字完整性复核 |
| `dq_measurement` | 仪表和秤 | 使用经校准仪器，并保留单位换算、分配工作表、毛重/皮重修正和不确定性说明。 | 校准证书和核对工作表 |
| `dq_temporal` | 报告期 | 采用连续且有代表性的时期，统一投入、产出、废物和库存变化记录；披露停机、开机和异常生产。 | 带日期记录和生产日志 |
| `dq_representativeness` | 上游链接 | 匹配导体牌号、再生含量、聚合物配方、电力地理范围、燃料技术、水供应、包装和废物处理，并披露全部代理。 | 供应商数据、数据集元数据和代理清单 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 确认额定电压不超过 1 000 V，且产品不是绕组线、同轴导体、车辆/航空器/船舶线束、超过 1 000 V 的导体或光纤电缆。 | `un-cpc-3-0-structure-2025` |
| `validate_reference` | 参考流 | 确认输出恰为 1 kg 可销售导体净质量、排除可分离包装且披露所有必需限定信息。 | `epd-norge-npcr-027-2022` |
| `validate_atomic_rows` | 清单 | 拒绝合并多种材料、公用工程、燃料、包装组件、废物或排放的行；每行必须是独立具体交换并注明路线条件。 |  |
| `validate_mass_balance` | 导体金属和聚合物 | 要求核对物料平衡并调查无法解释的残差；不得以废料抵减购入投入。 |  |
| `validate_boundary` | 前景过程 | 确认纳入全部直接消耗的制造和包装交换、废物及场址直接排放，同时把上游和下游阶段单独表达。 | `environdec-epd-ies-0024248-2025` |
| `validate_uuid_status` | Tiangong 引用 | 仅接受身份、流类型、属性、单位组和产品状态均与行匹配的公开 state-100 UUID；未解决行必须保持显式。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经复核后可作为 `secondary_dataset` 或 `background_dataset` 发布的工厂大门口前景生产数据集 |
| downstream_use | 用于产品、建筑、电气设备或生命周期模型的链接投入；模型应按需另行增加上游供应和下游配送、安装、使用损耗及寿命终止 |
| allowed_use | 仅在电压、结构、材料、功能、地理范围、时期、边界和分配相容时用于导体比较或建模 |
| excluded_use | 直接比较功能或标准不相容的导体；作为从摇篮到坟墓结果使用；推断使用寿命或运行焦耳损耗；用于被排除的导体类别 |
| required_metadata | PCR id 和版本；产品代码与标准；电压；导体结构；材料组成；单位长度净质量；场址和地理范围；报告期；技术；边界；分配；再生含量；包装；数据源；未解决 UUID |
| required_quality_disclosure | 一手数据占比；仪表和秤覆盖；分配份额及驱动因素；物料平衡残差；代理清单；时间、地理和技术代表性；不确定性和完整性复核 |
| update_trigger | 导体设计或配方、额定电压或产品标准、生产路线或设备、场址或能源结构、供应商或再生含量、包装、废物处理、分配或归一化清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 产品身份、层级及相邻导体类别排除 |
| `un-cpc-1-1-chinese-2004` | `official_guidance` | 联合国统计司，《产品总分类 1.1 版》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于 2026-09-04） | 经核实的专业中文类别名称及相邻电压类别术语 |
| `epd-norge-npcr-027-2022` | `standard` | 挪威 EPD 基金会，NPCR 027:2022《电缆和电线 B 部分》第 2 版，https://www.epd-norge.no/getfile.php/13161971-1741628082/PCRer/NPCR%20027%202022%20Part%20B%20Electrical%20cables%20and%20wires%20A2%20010322.pdf（检索于 2026-09-04） | 电缆和电线范围、声明单位选项、生命周期阶段划分和披露规则 |
| `environdec-epd-ies-0024248-2025` | `dataset` | AB Lietkabelis，EPD-IES-0024248:001，PVC 绝缘无护套内布线电缆 H07V-R 6.0-16.0 mm2，2025-06-13，https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/94d4fb03-6def-4593-a3b9-08dda8b4f7e6/Documents（检索于 2026-09-04） | 代表性低压产品结构、制造投入、包装组件、工厂过程边界、分配示例和前景数据语境；未引入定量范围 |
