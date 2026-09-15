---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.steam-turbines-and-other-vapour-turbines
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 蒸汽轮机及其他蒸气轮机

## 1. 范围与适用性

本 PCR 适用于完整蒸汽轮机及其他蒸气轮机制造并在申报制造商发运门交付时的从摇篮到大门前景数据包。若声明的参考产品属于 CPC 43141，本 PCR 覆盖工业用、公用事业用、凝汽式、背压式、发电机驱动和机械驱动轮机。

产品边界由声明的供货范围决定。裸机、底座安装轮机和成套汽轮发电机组不可互换。齿轮箱、发电机、凝汽器、润滑系统、控制系统、管道、仪表及其他辅机只有在随声明参考产品一并转移时才纳入。单独供应的轮机零件、蒸汽或其他蒸气发生锅炉、水轮机、燃气轮机、客户现场安装与调试、运行、维护、翻新和报废阶段不在本 PCR 范围内。

该产品类别需要独立规范方法，因为轮机质量、合金选择、蒸汽参数、驱动任务、模块化构型和成套范围会实质性改变物料清单与工厂活动。因此必须使用产品特定前景记录；CPC 叶节点或通用轮机平均值不能构成充分清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.steam-turbines-and-other-vapour-turbines |
| classification_refs | CPC 3.0：43141，蒸汽轮机及其他蒸气轮机（`un-cpc-3-0-2025`） |
| covered_products | 作为裸机、轮机模块或已声明的发电机驱动或机械驱动轮机成套装置供应的完整蒸汽轮机及其他蒸气轮机 |
| excluded_products | 单独供应的零件；锅炉和蒸汽发生器；水轮机和水轮；燃气轮机；未随声明轮机转移的发电机、齿轮箱、凝汽器、控制系统和辅机 |
| representative_product | 已做好发运准备，并明确转子、缸体、叶片、阀门、轴承、底座、辅机和成套范围的蒸汽轮机 |
| production_route | 产品特定工程与采购；部件成形或采购；机械加工与热处理；有条件的连接和表面处理；装配；平衡与工厂试验；防护与发运准备 |
| market_state | 制造商发运门处全新、完整且已验收的轮机或声明的轮机成套装置；声明轮机净质量和所含设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将蒸汽或其他声明蒸气的热能转换为机械轴功、并已做好发运准备的蒸汽轮机或其他蒸气轮机 |
| How much | 制造商发运门处声明的完整轮机或轮机成套装置净质量 1,000 kg |
| How well | 满足声明的额定轴功率或发电功率、入口和排汽蒸汽参数、转速和适用时的频率、驱动任务、验收准则及成套范围 |
| How long or cycle | 将声明的设计寿命和负荷谱作为产品元数据报告；本制造参考流不按寿命运行量分摊工厂负荷 |
| reference_flow_link | `p_assembly_testing` 的一个输出行 `steam_turbine_product` 等于 1,000 kg 参考数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 已做好发运准备的轮机净质量 1,000 kg |
| 参考产品流 | 蒸汽轮机及其他蒸气轮机 `d073d1e4-584a-4467-878f-0845a4f0c868` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 轮机类型和型号；裸机或成套范围；发电机驱动或机械驱动任务；额定输出；入口压力和温度；排汽或背压参数；再热和抽汽构型；转速；适用时的电网频率；产品净质量；所含模块和辅机；制造场址和地域；申报期；验收试验状态 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或计算声明轮机范围的验收净质量。运输包装和工装不计入分母，但在发运时转移或耗用的应保留为清单投入。 |
| `material_mass_basis` | 外购金属、耗材、产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 一致记录干基或供货态质量，披露留存流体和涂层质量，并将每项数量归一化至 1,000 kg 参考产品净质量。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 分配前保留原始计量电量；按恒等关系 1 kWh = 3.6 MJ 换算，并披露电压、电网组合、地域和输配损耗。 |
| `gas_volume_basis` | 天然气、工业氧气和 UUID 尚未解决的工业氩气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在声明的温度、压力和湿度参考条件下报告气体计量体积；不得合并不同气体，也不得在没有成分和密度依据时换算为质量。 |
| `mass_balance_check` | 材料制造和最终装配 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一产品订单基准上核对验收产品质量、留存耗材、退料、实测工艺废钢及其他单独记录的输出。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 产品系统 | 纳入全部外购材料和能源的上游生产，以及申报制造商控制下直至工厂门验收和发运准备的前景活动。任何排除均须记录并说明理由。 | `ec-pef-recommendation-2021-annexes` |
| `boundary_declared_package` | 产品范围 | 只建模商业供货范围中实际包含的轮机、模块、底座、流体、控制系统、发电机、齿轮箱、凝汽器、管道、仪表和辅机；披露每个纳入和排除的成套单元。 | `siemens-energy-industrial-steam-turbines-2021`; `ge-steam-power-product-catalog-2020` |
| `boundary_component_supply` | 外购或内部制造部件 | 对外购锻件、缸体、叶片、阀门、轴承和模块，在收货门接入供应商从摇篮到大门数据集。对内部制造，采集实际成形、热处理、机械加工、连接和精加工交换，且不得与供应商加工重复计算。 | `ge-steam-power-product-catalog-2020`; `ec-pef-recommendation-2021-annexes` |
| `boundary_post_gate` | 下游阶段 | 本制造数据集排除发运门后的外运、现场安装与调试、蒸汽生产、轮机运行、维护、翻新和报废；这些阶段仅在单独下游生命周期模型中报告。 | `ec-pef-recommendation-2021-annexes` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件以实际交付产品状态进入申报制造商厂门；上游开采、材料生产、成形和供应商加工通过供应商或代表性上游数据集连接 |
| starting_condition_role | 在保持从摇篮到大门完整性的同时，将产品特定前景制造与上游材料及部件生产分开 |
| product_classification_scope | 符合语义产品边界和 CPC 43141 语境的完整蒸汽轮机及其他蒸气轮机 |
| recursive_input_rule | 不得将同类别外购完整轮机吸收到前景输出中。应将其作为独立产品投入，记录其上游数据集、质量、构型和用途，并从申报场址清单中排除其制造，以避免递归和重复计算。 |
| upstream_dataset_requirement | 每项外购材料、部件、燃料、电力供应、气体、工艺化学品和包装均需具有地域与技术代表性的上游数据集，或明确记录的数据缺口。 |
| disclosure | 声明制造场址、申报期、轮机型号和任务、合金与部件供货状态、内部与供应商工序、裸机与成套范围、验收净质量、分配、排除项、数据缺口和省略的下游阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_material_fabrication` | 轮机部件制造与精加工 | required | 始终纳入制造商控制的部件生产、机械加工、精加工及外购部件接收；各条件交换仅在采用其指定路线时适用。 | 前景材料转换与部件制备 | 按产品订单计量并归一化至 1,000 kg 验收轮机净质量 |
| `p_assembly_testing` | 轮机装配、平衡、充液与工厂验收试验 | required | 始终纳入制造商控制的最终装配与验收活动。 | 前景装配与验收 | 按验收轮机或声明的成套装置计量，并归一化至 1,000 kg 净质量 |
| `p_preservation_dispatch` | 防护涂装与发运准备 | required | 纳入发运门前实际耗用或转移的防护和装载板投入；只有在证实指定交换不存在时，相应行才可为零。 | 前景发运准备 | 按验收轮机发运单位计量，并归一化至 1,000 kg 净质量 |

### 过程：轮机部件制造与精加工（`p_material_fabrication`）

#### 输入

##### 产品流

###### 交付的低合金钢锻件（`low_alloy_steel_forging`）

记录转子、叶片、轴或其他轮机部件所耗用的交付低合金钢锻件实测质量。必须声明牌号、锻造状态、热处理、部件用途、供应商和所含上游加工。

- 选定流：低合金钢锻件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放至产品订单的实测净质量，并按有记录的退料调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ge-steam-power-product-catalog-2020`

###### 轮机叶片用钛坯料（`titanium_billet`）

仅当声明轮机含钛叶片或系统边界内制造的其他坯料成形钛部件时记录钛坯料。不得用钛板、钛管或钛型材身份代替。

- 选定流：钛坯料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放至产品订单的实测钛坯料质量；无坯料成形钛部件时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ge-steam-power-product-catalog-2020`

###### 部件制造用电（`fabrication_electricity`）

记录分配给部件制造的外购电力，包括制造商控制的机械加工、热处理、连接、清洗、平衡准备和车间服务。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：产品订单的独立计量用电，或按因果驱动分配的车间实测用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-pef-recommendation-2021-annexes`

###### 直接燃烧热处理用天然气（`heat_treatment_natural_gas`）

仅当气态天然气在前景边界内用于热处理或其他部件制造燃烧时记录。必须声明供应商、成分、计量参考条件、燃烧技术和分配。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配至产品订单的计量或账单体积；无前景天然气燃烧时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 部件制造工艺用水（`fabrication_process_water`）

记录机械加工、冷却、水基清洗或表面准备中跨越前景边界的工艺用水。必须声明水源、水质、密度换算、循环边界和排放路径。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至产品订单的实测补充水，不含内部循环量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 切削液（`cutting_fluid`）

记录轮机部件机械加工中耗用的切削液补充量。声明配方、含水率、浓度、循环边界和供应商。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：产品订单机械加工领用的实测补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 药芯焊丝（`flux_cored_wire`）

只有在声明轮机或成套装置采用药芯焊丝电弧焊时记录药芯焊丝。记录焊丝牌号、熔敷金属规范、退料和未用余量。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：产品订单实测耗用焊丝；未使用药芯焊丝时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ge-steam-power-product-catalog-2020`

###### 工业氩气保护气（`industrial_argon`）

仅当焊接或其他惰性气体制造操作使用工业氩气时记录。声明纯度、混合成分、供货状态、计量参考条件和损耗边界。

- 选定流：工业氩气
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配至产品订单的计量或供应商记录氩气体积；未使用氩气时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 热切割用工业氧气（`industrial_oxygen`）

仅当氧气用于氧燃料切割或另一前景制造操作时记录。声明纯度、压力、参考条件、供应商和具体操作。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配至产品订单的计量或供应商记录氧气体积；未使用氧气时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`postindustrial_steel_scrap`）

记录作为工业后废钢离开前景的分类钢制边角料、切屑、车屑和不合格钢件。分别报告合金类别、污染、干湿基准、回收去向及切削液含量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外运或进入独立建模回收过程的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废切削油（`waste_cutting_oil`）

仅当油基废切削液从机械加工系统单独移出时记录。不得与水基冷却液、金属屑或废水合并。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转移处理的废切削油实测质量；未产生油基废切削液时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 金属表面处理废水（`metal_finishing_wastewater`）

仅当部件清洗或表面处理形成的水相废水离开循环系统进行处理或排放时记录。声明成分、处理状态、固液分离、质量基准和接收边界。

- 选定流：金属表面处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开前景水循环的实测废水质量；无此类外排流时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 前景天然气燃烧产生的化石源二氧化碳（`heat_treatment_fossil_co2`）

只记录制造边界内天然气燃烧直接排放的化石源二氧化碳。燃料供应上游排放和外购电力排放留在相应上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用烟气实测清单，或依据已分配燃气体积、供应商成分或碳含量及有记录的氧化基准计算；无前景化石燃料燃烧时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：轮机装配、平衡、充液与工厂验收试验（`p_assembly_testing`）

#### 输入

##### 产品流

###### 装配与工厂试验用电（`assembly_test_electricity`）

记录声明工厂边界内装配、转子搬运、平衡、泵、试验台、控制和验收活动所用外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：产品订单的独立计量装配试验用电，或按因果驱动分配的实测用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-pef-recommendation-2021-annexes`

###### 轮机润滑油充装（`turbine_lubricating_oil`）

记录试验中耗用或留存在转移轮机或所含油系统中的润滑油。声明矿物或合成基础油、牌号、黏度、试验后回收量、最终留存量和成套范围。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：产品订单的实测补充量加最终留存充装量，再扣除回收复用油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`siemens-energy-industrial-steam-turbines-2021`; `ge-steam-power-product-catalog-2020`

###### 工厂试验工艺用水（`test_process_water`）

记录水压试验、冲洗或清洗中跨越边界的工艺用水。在补充水进入或废水流离开前景前，不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至产品订单试验和验收的实测补充水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的蒸汽轮机或其他蒸气轮机（`steam_turbine_product`）

记录完成装配和工厂验收、已做好发运准备的轮机或声明的成套装置。该输出名称和 UUID 指完整产品，不指单独供应零件或下游发电。

- 选定流：蒸汽轮机及其他蒸气轮机 `d073d1e4-584a-4467-878f-0845a4f0c868`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归一化后正好为 1,000 kg 验收参考产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 验收轮机或声明的成套装置净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`; `siemens-energy-industrial-steam-turbines-2021`

##### 废物流

##### 基本流

### 过程：防护涂装与发运准备（`p_preservation_dispatch`）

#### 输入

##### 产品流

###### 双组分环氧富锌底漆（`epoxy_zinc_primer`）

仅当实际防护体系在发运前使用双组分环氧富锌涂层时记录此底漆。其他涂层配方须作为独立前景流识别，不得代入通用底漆 UUID。

- 选定流：双组分环氧富锌底漆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：声明产品耗用的实测混合涂料质量，扣除单独记录的废料；未使用此配方时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 木制托盘或装载板（`wooden_pallet`）

记录发运单位耗用或随产品转移的木制托盘、滑撬或装载板。声明木材树种或产品说明、处理、含水基准、复用状态和是否跨越发运门。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：产品订单耗用或随产品转移的实测质量；无木制装载板跨越边界时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收轮机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造操作 | 技术可行时，通过产品订单物料领用、机器时间、能源、试验、废物和直接排放的独立计量或其他细分方式避免分配。 | `ec-pef-recommendation-2021-annexes` |
| `allocation_physical_relationship` | 剩余共用负荷 | 无法细分时，采用能够代表负荷驱动的有记录因果物理关系，如实测机器小时、试验台小时、加工质量、炉次装载量或占用生产时间。若质量并非因果驱动，不得仅按最终产品质量分配全部负荷。 | `ec-pef-recommendation-2021-annexes` |
| `allocation_other_relationship` | 无可辩护物理关系 | 只有在说明为何无法细分且不存在因果物理关系后，方可采用包括经济分配在内的其他关系。报告分配因子、数据期间、受影响流及敏感性。 | `ec-pef-recommendation-2021-annexes` |
| `allocation_scrap_and_waste` | 废钢、废切削油和废水 | 分别报告废物处理和任何回收建模。除非下游生命周期模型声明并一致应用经审查的回收方法，否则不得在前景清单中计入避免原生材料的抵扣。 | `ec-pef-recommendation-2021-annexes` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p_material_fabrication`; `p_assembly_testing`; `p_preservation_dispatch` | 产品特定材料、气体、流体、涂料和发运投入 | 批准的物料清单、采购与领用记录、退料记录、气瓶记录、涂料配制单和最终充装单 | 产品订单；物料身份；牌号或配方；供应商；交付状态；领用总量；退料；留存量；单位；所含成套单元；日期 | 将批准 BOM 与仓储、供应商、生产、涂装、气瓶和充装记录核对 | kg 或声明条件下的 m3 | 每产品订单，并在验收时核对 | 每个验收产品订单的完整制造期；仅汇总声明申报期内订单 | 申报场址全部操作及声明的供应商部件门 | 净消耗量等于领用加直接收货减有记录退料和可复用回收量，再按验收产品净质量归一化 | 签署的 BOM 版本、可追溯材质证明、校准秤、供应商发票、领退料记录、气瓶票据和验收构型 |
| `cp_utility_meters` | `p_material_fabrication`; `p_assembly_testing` | 电力、天然气和工艺用水 | 仪表读数、账单、设备日志、生产小时和分配驱动记录 | 仪表编号；起止读数；单位；时间；产品订单；机器或炉；负荷；运行时间；参考条件；分配驱动 | 优先使用分表；否则核对场址总表并仅按分配层级分配 | kWh、MJ、m3 或 kg | 连续或批次读数，至少每月核对 | 完整产品订单制造窗口及覆盖分配用订单与运行模式的代表性申报期 | 申报场址及已识别车间、炉、试验台或水循环 | 保留原始读数后换算单位；按细分或有记录因果驱动分配；按验收净质量归一化 | 仪表校准、账单、总表与分表核对、停机与占用日志及声明的电网与燃气条件 |
| `cp_waste_records` | `p_material_fabrication` | 工业后钢废料、废切削油和金属表面处理废水 | 地磅读数、容器重量、转移联单、废水仪表、实验室记录和处理接收单 | 产品订单或批次；废物身份；毛重与皮重；含水或含油量；污染；处理状态；去向；日期；分配驱动 | 每次转移称重，或计量离开循环系统的废水，并与场址废物总量核对 | kg | 每次转移，并按月和产品订单核对 | 所含产品订单的完整制造窗口 | 申报场址至废物移交或声明的处理边界 | 扣除皮重；避免重复计算附着于废钢的液体；按有记录产生驱动分配共用转移量 | 校准秤或仪表、转移联单、成分重要时的实验室结果及处理接收单 |
| `cp_direct_emissions` | `p_material_fabrication` | 直接化石源二氧化碳 | 烟气实测，或含供应商成分、碳含量、氧化基准和炉次分配的燃料记录 | 实测 CO2 或燃料体积；参考条件；碳因子；氧化因子；运行时间；炉负荷；产品订单；生物源比例 | 优先使用经核实直接监测；否则用采集燃料和有记录的供应商或场址因子计算 | kg CO2 或 m3 燃料 | 每炉次或申报期，并分配至产品订单 | 所含订单的完整前景燃烧期 | 仅申报场址燃烧 | 排除燃料和电力上游排放；按与燃料相同的分配方式分配直接化石源 CO2 | 仪器校准或供应商燃料证书、因子来源、计算表及燃料用量核对 |
| `cp_product_acceptance` | `p_assembly_testing` | 验收轮机输出和参考分母 | 最终质量说明、构型基线、验收证书和发运放行 | 产品订单；型号；序列号；净质量；成套纳入项；额定输出；蒸汽参数；转速；频率；试验状态；验收日期 | 使用批准的工程质量汇总或校准称量，并与验收构型核对 | kg | 每台验收轮机或成套装置 | 声明申报期内每个产品订单 | 申报制造商和发运门 | 仅汇总声明范围一致的验收产品；全部交换归一化至 1,000 kg 净质量 | 批准的竣工构型、质量说明、签署的验收证据和发运放行 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化数量 = 产品订单交换量 / 验收产品净质量 × 1,000 kg | 适用协议的净交换量；`cp_product_acceptance` 的验收产品净质量 | 每 1,000 kg 参考产品的交换量 | `ec-pef-recommendation-2021-annexes` |
| `calc_electricity_conversion` | `fabrication_electricity`; `assembly_test_electricity` | 电力 MJ = 实测 kWh × 3.6 MJ/kWh | `cp_utility_meters` 的实测 kWh 和分配结果 | 参考流归一化前的电力 MJ |  |
| `calc_net_material_consumption` | BOM 控制投入 | 净耗用 = 直接收货 + 仓库领用 - 未用退料 - 单独记录的可复用回收量 | `cp_bom_materials` 的 BOM、收货、领用、退料和回收记录 | 各原子流的 kg 或 m3 净投入 | `ec-pef-recommendation-2021-annexes` |
| `calc_direct_fossil_co2` | `heat_treatment_fossil_co2` | 采用经核实的直接 CO2 实测值；否则以已分配燃料量乘以有记录的供应商或场址特定化石碳因子和氧化基准，并保留参考条件换算和生物源比例 | 已分配天然气；成分或碳含量；氧化基准；监测记录 | kg 直接化石源 CO2 |  |
| `calc_shared_operation_assignment` | 共用公用工程和废物 | 首先细分；无法细分时，以经核对的共用总量乘以产品订单的有记录因果物理分配因子 | 经核对车间总量；产品订单和总驱动量 | 参考归一化前的已分配交换量 | `ec-pef-recommendation-2021-annexes` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 竣工型号、驱动任务、蒸汽参数、验收状态、净质量和成套纳入项必须与参考流及商业供货边界一致。 | 构型基线、质量说明、验收证书和发运放行 |
| `dq_bom_completeness` | 材料和部件投入 | 将产品特定 BOM 与采购、领用、退料和竣工记录核对；识别所有环境相关材料和能源流，并记录排除项。 | 批准的 BOM 版本、材质证明、核对记录和排除清单（`ec-pef-recommendation-2021-annexes`） |
| `dq_temporal_coverage` | 全部前景数据 | 覆盖每个所含产品订单的完整制造期。共用场址数据须覆盖能代表分配所用订单和运行模式的期间。 | 带日期记录、生产日历、仪表覆盖和缺口日志 |
| `dq_measurement` | 仪表、秤、气体和废物记录 | 采用经校准或财务核对的计量；换算前保留原始单位和参考条件。 | 校准证书、账单、地磅单、仪表核对和换算表 |
| `dq_representativeness` | 上游数据集 | 匹配材料牌号与产品状态、供应商地域、生产技术、能源市场和时间期间；披露代理和未解决身份。 | 供应商信息、数据集元数据、代表性评价和数据缺口清单 |
| `dq_mass_balance` | 制造和装配 | 解释投入、验收产品、留存流体或涂层、退料、废钢、其他废物和在制品之间的物料平衡差异。 | 产品订单物料平衡表和签署审核 |
| `dq_no_double_counting` | 供应商和前景加工 | 外购部件数据集与内部操作不得同时包含同一成形、热处理、机械加工、连接、涂装、试验或包装步骤。 | 过程责任矩阵和供应商数据集边界说明 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | 参考产品 | 产品不是完整蒸汽轮机或其他蒸气轮机、缺少验收净质量、或未声明裸机与成套纳入和排除项时，校验失败。 | `un-cpc-3-0-2025`; `siemens-energy-industrial-steam-turbines-2021` |
| `validate_reference_amount` | 参考流 | 要求恰有一个 `steam_turbine_product` 输出，归一化后正好为 1,000 kg；包装质量不得计入产品净质量分母。 |  |
| `validate_atomic_inventory` | 清单行 | 每项交换必须具有一个方向、一个流类型、一个具体流身份、一个数量生成模式、一个基准，并在采集或采集计算时具有一个协议。拒绝合并的公用工程、燃料、气体、涂料、材料、废物或排放。 | `ec-pef-recommendation-2021-annexes` |
| `validate_conditional_routes` | 条件投入和输出 | 只有当数据集证明指定路线或交换不存在时，零值才有效；否则必须提供实测值和路线限定信息。 |  |
| `validate_uuid_semantics` | TianGong 引用 | 每个采用 UUID 必须保持经审核的流类型、分类、属性、单位组和正式中文 baseName；未解决行必须不含 UUID，并在 manifest 审查元数据中声明。 |  |
| `validate_mass_and_energy` | 前景计算 | 单位换算、共用操作分配、产品归一化、气体参考条件和物料平衡须可由保留的原始记录复算。 | `ec-pef-recommendation-2021-annexes` |
| `validate_boundary_completeness` | 从摇篮到大门结果 | 外购材料、部件、能源、工艺化学品和包装须有上游数据集或明确数据缺口；前景废物和直接排放须识别，且不得重复计算供应商操作。 | `ec-pef-recommendation-2021-annexes`; `ge-steam-power-product-catalog-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 验收蒸汽轮机或其他蒸气轮机的产品特定从摇篮到大门前景制造数据集 |
| downstream_use | 对构型和供货范围匹配的轮机作为 `secondary_dataset` 或 `background_dataset`；作为另行建模的电站、工业驱动、安装、使用、维护或报废生命周期模型的前景投入 |
| allowed_use | 仅在轮机任务、额定输出、蒸汽参数、质量、裸机与成套范围、制造地域和技术、申报期、分配和上游数据集代表性兼容且已披露时用于比较或建模 |
| excluded_use | 不是发电数据集；不是蒸汽生产数据集；不是水轮机、燃气轮机或风力机数据集；不是单独供应零件数据集；不是使用阶段效率或寿命默认值；不能代表未声明的轮机成套装置 |
| required_metadata | PCR id 与版本状态；产品型号和序列号或研究标识；轮机和驱动类型；额定输出；蒸汽入口、排汽、再热和抽汽参数；转速和频率；设计寿命元数据；验收净质量；成套纳入与排除项；制造场址和地域；申报期；部件供货状态；分配；截断；数据缺口；来源与背景数据集版本 |
| required_quality_disclosure | 前景与供应商数据占比；BOM 和物料平衡完整性；仪表和秤质量；时间、地域和技术代表性；分配驱动；未解决 UUID；缺失经验范围；排除项；代理；不确定性和敏感性 |
| update_trigger | 轮机设计或成套范围、合金或部件供货状态、制造路线、场址或能源供应、分配、上游数据集、TianGong UUID 身份、验收基准或本 PCR 证据发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，43141 行，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 官方分类身份；按 43153 行将完整轮机与零件分开 |
| `siemens-energy-industrial-steam-turbines-2021` | 手册（`handbook`） | Siemens Energy，*Industrial steam turbines from 2 to 250 MW*，2021。https://assets.siemens-energy.com/dam/79160ff2-731e-4ffe-9ab2-b0360117cdde/SE-Brochure-Industrial-Steam-Turbines-2021-pdf_Original%20file.pdf（检索日期 2026-09-05） | 发电机驱动与机械驱动范围；裸机和成套构型；模块化装配；油系统；缸体与辅机限定信息 |
| `ge-steam-power-product-catalog-2020` | 手册（`handbook`） | GE Steam Power，*GE Steam Power product catalog*，2020。https://www.gevernova.com/content/dam/gepower-steam/global/en_US/documents/Steam-Product-Catalog.pdf（检索日期 2026-09-05） | 锻造转子和叶片制造；钢和条件性钛材料；焊接与铸造结构；预装单元；成套辅机 |
| `ec-pef-recommendation-2021-annexes` | 官方指南（`official_guidance`） | 欧盟委员会，*Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annexes 1 to 2*，2021。https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf（检索日期 2026-09-05） | 产品特定 BOM 和制造数据；完整性和有记录排除；场址特定数据；边界定义；优先细分的分配与数据质量规则 |
