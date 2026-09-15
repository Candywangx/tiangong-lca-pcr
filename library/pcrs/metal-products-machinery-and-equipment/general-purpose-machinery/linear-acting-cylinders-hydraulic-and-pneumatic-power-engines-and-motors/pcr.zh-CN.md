---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.linear-acting-cylinders-hydraulic-and-pneumatic-power-engines-and-motors
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 直线作用的液压和气压动力装置（液压缸和气压缸）

## 1. 范围与适用性

本 PCR 适用于将流体压力转化为往复直线力和运动的成品液压缸与气压缸。范围包括作为产品供应的单活塞杆、双活塞杆、单作用和双作用缸；当一体化缓冲或传感配置属于申报产品时，也在范围内。

产品边界不包括旋转式液压或气压马达、泵、压缩机、阀门、成套流体动力系统、单独供应的缸用零件、电动直线执行器、未随缸供应的安装五金、使用阶段液压介质或压缩空气供应、维护及寿命终止。前景数据包必须说明产品是液压缸还是气压缸；若未报告按产量加权的构成，不得将两种技术平均。

通常的报告边界为从摇篮到工厂大门：包括外购材料、毛坯、零部件、公用工程和包装的上游生产；场内实际发生的零部件制造与精加工；装配；验收或功能试验；以及成品放行前的包装。ISO 缸标准确认了本范围中的液压缸与气压缸产品，CPC 正式记录则将其与其他流体动力发动机及马达区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.linear-acting-cylinders-hydraulic-and-pneumatic-power-engines-and-motors |
| classification_refs | CPC 3.0：43211（精确分类语境；映射接受另行治理） |
| covered_products | 成品液压或气压直线作用缸，包括单作用或双作用、单活塞杆或双活塞杆设计 |
| excluded_products | 旋转式流体动力马达；泵；压缩机；阀门；成套流体动力系统；单独供应的缸用零件；电动直线执行器 |
| representative_product | 工厂大门处的一件完成制造并通过验收试验的液压或气压直线作用缸 |
| production_route | 接收成形毛坯和外购零件；机加工及适用的精加工；装配；液压验收试验或气动功能试验；包装 |
| market_state | 可销售成品缸，以干燥状态或含已申报的残余试验介质、按工厂大门交付状态包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在申报额定压力下提供往复直线力与运动的成品液压缸或气压缸 |
| How much | 工厂大门处 1 kg 合格缸产品 |
| How well | 满足申报的缸径、行程、安装方式、额定压力、泄漏或功能验收准则、材料规范和随附附件配置 |
| How long or cycle | 申报设计寿命或额定工作循环基准；若无可用信息，应披露质量型功能单位未表示寿命性能 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 液压或气压介质；单作用或双作用；单活塞杆或双活塞杆；缸径；行程；额定压力；安装和缓冲配置；传感配置；缸筒、活塞杆、端盖、活塞和密封件的主要材料；产品净质量；验收试验标准或程序；残余试验介质；生产地域和基准年；制造与表面精加工路线；随附包装；申报设计寿命或循环额定值 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品及所有归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化至 1 kg 合格且已包装的缸产品。除非托盘和可回用运输包装属于申报产品系统，否则应排除。 |
| `energy_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电量，按 1 kWh = 3.6 MJ 转换；不得把上游发电排放作为直接前景排放重复加入。 |
| `gas_volume_basis` | 工业氧气与压缩空气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按仪表参考压力和温度报告体积并披露这些条件；未经换算不得混用标准、标况和实际立方米。 |
| `water_mass_basis` | 工艺用水与清洗废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用直接质量记录；按体积计量时，应记录水密度与换算所用参考条件。 |
| `test_fluid_volume_basis` | 液压试验用液 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 仅记录跨越前景边界的净新液补充量；循环试验回路库存以及随产品带出的介质应另行披露。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成形缸用零件毛坯、外购精加工零件、密封件、工艺化学品、公用工程和包装已交付至报告制造场址 |
| starting_condition_role | 前景起始条件；所有外购投入的上游生产与交付仍由链接的上游数据集表示 |
| product_classification_scope | 仅包括成品液压与气压直线作用缸；单独供应的零件及非直线作用流体动力发动机或马达不属于该产品身份 |
| recursive_input_rule | 外购 CPC 43211 缸作为投入时，应记录为上游产品投入，不得在本 PCR 内递归展开；单独采购的 CPC 43251 零件仍作为零件投入 |
| upstream_dataset_requirement | 每项外购产品及公用工程投入均应链接到地域、技术和产品状态相容的上游数据集；披露代理数据和缺失的上游数据集 |
| disclosure | 披露自制与外购比例、材料和表面处理路线、液压与气压产品构成、不合格品处理、场内处理、包装基准、试验介质回收、时间覆盖和截断 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景及上游边界 | 包括外购投入的生产与交付、场内零部件制造和适用精加工、装配、验收或功能试验，以及至工厂大门放行前的包装。 | `un-cpc-3-0-structure-2025`; `iso-6020-2-2015`; `iso-15552-2018`; `iso-10100-2020` |
| `boundary_make_or_buy` | 外购与场内生产零件 | 记录实际自制与外购比例。不得将同一精加工零件既作为外购投入，又作为场内机加工产出重复计算。 | `festo-dnc-standard-cylinders-2017`; `skf-hydraulic-seals-general-technical-information` |
| `boundary_route_specific_exchanges` | 机加工、清洗、涂覆和试验路线 | 将实际跨越过程边界的每种材料、化学品、公用工程、废物和直接基本流排放分别作为原子交换加入；未采用的路线应有证据并省略。 | `skf-hydraulic-seals-general-technical-information`; `iso-10100-2020` |
| `boundary_use_and_end_of_life` | 下游阶段 | 默认工厂大门数据集排除安装、使用阶段液压介质或压缩空气供应、维护和寿命终止；仅在另行申报扩展系统边界时纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | 零部件成形、机加工、清洗及适用的表面精加工 | conditional | 按报告场址实际自制或精加工的产量加权份额纳入；外购精加工零件作为装配过程的上游投入 | 前景零部件生产 | 每 kg 合格缸产品 |
| `assembly_test_packaging` | 装配、验收或功能试验与包装 | required | 始终纳入；液压和气压试验介质卡仅适用于所表示的产品路线 | 前景最终生产 | 1 kg 合格已包装缸产品 |

### 过程：零部件成形、机加工、清洗及适用的表面精加工（`component_manufacture`）

#### 输入

##### 产品流

###### 成形缸用零件毛坯（`formed_parts_input`）

记录进入场内机加工的成形主要零件毛坯。合金、零件构成、供应商和成形路线均为必需前景限定信息。

- 选定流：成形缸筒主要部件，毛坯 `d49e36f8-d7ec-4e9d-aa51-0705a64c2b39`
- 流属性/单位：Mass / kg
- 数量规则：消耗的外购和内部转移毛坯质量，扣除有记录的可回用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`festo-dnc-standard-cylinders-2017`

###### 零部件制造用电（`machining_electricity`）

记录成形、机加工、珩磨或滚压光整、磨削、抛光、清洗及范围内精加工设备的计量用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：范围内零部件作业计量或按可辩护方法分配的耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_utilities`
- 来源：`skf-hydraulic-seals-general-technical-information`

###### 湿式机加工与清洗用工艺水（`machining_process_water`）

仅在水跨越场址过程边界进入湿式机加工或清洗时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量的新鲜工艺水投入；排除内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_utilities`
- 来源：

###### 水溶性金属加工液（`metalworking_fluid`）

记录前景作业消耗的配制型水溶性机加工液浓缩物或即用液；不得以某一种组成化学品替代。

- 选定流：水溶性金属加工液
- 流属性/单位：Mass / kg
- 数量规则：根据期初库存、期末库存和场外退料调整的外购补充液消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`skf-hydraulic-seals-general-technical-information`

###### 碱洗用氢氧化钠（`alkaline_cleaning_sodium_hydroxide`）

仅当申报的清洗或表面预处理路线消耗氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：由溶液质量和经核验浓度计算的氢氧化钠纯物质当量消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_chemicals`
- 来源：

###### HVOF 涂覆用工业氧气（`hvof_oxygen`）

仅当前景边界内实施高速氧燃料喷涂时记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：供应至范围内 HVOF 涂覆的计量工业氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_utilities`
- 来源：`skf-hydraulic-seals-general-technical-information`

#### 输出

##### 产品流

###### 已机加工并精加工的缸用零部件（`finished_parts_output`）

记录离开场内零部件制造、转入装配的合格零部件质量。

- 选定流：已机加工并精加工的缸体零部件 `10c2da25-4cfe-4d11-a8a2-cc05ab9ef994`
- 流属性/单位：Mass / kg
- 数量规则：转入装配的合格精加工零件计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_outputs`
- 来源：`festo-dnc-standard-cylinders-2017`; `skf-hydraulic-seals-general-technical-information`

##### 废物流

###### 钢切屑（`steel_swarf`）

记录离开本过程、送往再循环、回收或处置的钢机加工切屑；披露附着金属加工液的污染情况。

- 选定流：钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位：Mass / kg
- 数量规则：计量湿基或干基切屑质量，并声明水分和附着加工液基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_outputs`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

记录在分配处理负荷之前送往场内处理、下水道或场外处理的清洗废水。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：离开清洗作业的计量废水；排除内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_outputs`
- 来源：

### 过程：装配、验收或功能试验与包装（`assembly_test_packaging`）

#### 输入

##### 产品流

###### 装配用已机加工并精加工缸用零部件（`finished_parts_input`）

记录进入装配的内部转移与外购精加工缸用零部件总质量，且不得重复计算。

- 选定流：已机加工并精加工的缸体零部件 `10c2da25-4cfe-4d11-a8a2-cc05ab9ef994`
- 流属性/单位：Mass / kg
- 数量规则：进入装配且已与自制/外购比例核对的精加工零件计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`festo-dnc-standard-cylinders-2017`

###### 弹性体缸用密封件套组（`elastomer_seal_sets`）

将装配所用活塞杆密封、活塞密封、防尘圈及静密封元件作为一个按质量计量的成品密封件套组交换；披露材料族，且不得以丁腈橡胶原料身份作代理。

- 选定流：弹性体缸用密封件套组
- 流属性/单位：Mass / kg
- 数量规则：安装密封件套组质量加生产损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`festo-dnc-standard-cylinders-2017`

###### 验收试验用液压油（`hydraulic_test_fluid`）

仅记录液压缸试验的净新液补充量；不得把循环回路库存作为新增投入。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume / m3
- 数量规则：期初库存加采购量，减期末库存、场外退回量和回收量，并分配至合格液压缸
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格液压缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance_testing`
- 来源：`iso-10100-2020`

###### 气动功能试验用压缩空气（`pneumatic_test_air`）

记录输送至试验台、用于合格及不合格气压缸的压缩空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：按申报参考条件计量的试验空气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格气压缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_testing`
- 来源：`iso-15552-2018`

###### 装配、试验与包装用电（`assembly_electricity`）

记录装配工具、试验台、搬运及包装设备的计量耗电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：本过程计量或按可辩护方法分配的耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utilities`
- 来源：`iso-10100-2020`

###### 瓦楞纸箱（`corrugated_box`）

记录随缸供应的成品瓦楞纸箱。实际使用的其他包装组件必须作为单独原子交换添加。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随合格产品供应的瓦楞纸箱计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

#### 输出

##### 产品流

###### 合格已包装缸产品（`reference_product_output`）

本行是完成验收或功能试验及包装后的参考产品输出。

- 选定流：线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位：Mass / kg
- 数量规则：固定参考输出 1 kg 合格已包装缸产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格已包装缸产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线和公用工程 | 优先采用过程细分、分表计量、批次记录、设备时间或其他因果驱动因素，再考虑分配。记录驱动因素及其适用的产量。 | `iso-14044-2006` |
| `allocation_recycled_metal` | 钢切屑及其他可回收金属 | 分别报告废物质量和去向。不得在前景清单中扣减原生金属替代收益；任何再循环收益均属于已申报的下游建模方法。 | `iso-14044-2006` |
| `allocation_rejected_products` | 不合格缸与返工零件 | 除非有文件化的物理因果模型支持其他处理，否则将不合格品和返工负荷分配给合格产出；披露内部再循环。 | `iso-14044-2006` |
| `allocation_multi_product_site` | 剩余共用负荷 | 若无法实施细分和因果分配，则按同一报告期的生产质量分配剩余共用负荷，并披露采用设备小时等替代驱动因素的敏感性。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_manufacture` | 成形毛坯和金属加工液 | 采购、库存和转移记录 | 物料身份；供应商；合金或配方；期初库存；收料；期末库存；退料；转移质量 | 将采购和库存记录与生产批次核对 | kg | 每月并年度核对 | 有代表性的连续 12 个月 | 范围内所有零部件作业 | 消耗量 = 期初 + 收料 - 期末 - 退料；按合格产品质量归一化 | 供应商规范、发票、校准秤、库存核对 |
| `cp_component_chemicals` | `component_manufacture` | 清洗与精加工化学品 | 批次表和浓度记录 | 溶液质量或体积；密度；有效浓度；期初和期末库存；场外退回 | 每种具体化学品分别记录并计算纯物质当量质量 | kg | 每次槽液补加并按月汇总 | 有代表性的连续 12 个月 | 范围内每条湿法处理线 | 汇总纯物质当量消耗并按合格产品质量归一化 | 配方证明、浓度试验、校准仪表或秤 |
| `cp_component_utilities` | `component_manufacture` | 电力、工艺水和工业氧气 | 仪表与发票记录 | 仪表编号；期初和期末读数；参考条件；共用负荷驱动因素；停机时间 | 优先分表计量；允许文件化的设备小时分配 | MJ、kg 或 m3，按适用情况 | 每批或每月 | 有代表性的连续 12 个月 | 范围内所有零部件作业 | 扣除范围外负荷，按因果驱动因素分配共用负荷，并按合格产品质量归一化 | 仪表校准、发票、分配工作表 |
| `cp_component_outputs` | `component_manufacture` | 精加工零件、钢切屑和清洗废水 | 转移、称量和废物记录 | 产出质量；不合格品质量；切屑质量；污染基准；废水质量；去向 | 称量合格零件与外运废物，并记录湿基或干基 | kg | 每批并按月核对 | 有代表性的连续 12 个月 | 范围内所有零部件作业 | 分别汇总合格产出和各项废物，并按合格缸质量归一化 | 校准秤、转移单、废物联单、水量平衡 |
| `cp_assembly_materials` | `assembly_test_packaging` | 精加工零件和密封件套组 | 物料清单、领料和损耗记录 | 零件身份；材料；数量；单位质量；领用质量；退料质量；废料 | 将批次受控物料清单与实际领料和损耗记录核对 | kg | 每产品族及每批 | 有代表性的连续 12 个月 | 范围内所有装配线 | 安装质量加损耗，排除退回的可回用库存，并按合格产品质量归一化 | 受控物料清单、供应商规范、校准秤 |
| `cp_acceptance_testing` | `assembly_test_packaging` | 液压油和压缩空气 | 试验台日志和公用工程记录 | 产品路线；合格和不合格数量；试验程序；液压油采购与库存；回收液；空气仪表读数；压力；温度 | 计量试验空气，并将液压油补充量核对到试验批次 | m3 | 每试验批并按月核对 | 有代表性的连续 12 个月 | 范围内所有液压与气动试验台 | 包括合格与不合格试验；仅按文件化批次记录分配；按合格路线特定产品质量归一化 | 受控试验程序、仪表校准、库存核对、验收记录 |
| `cp_assembly_utilities` | `assembly_test_packaging` | 电力 | 仪表和生产记录 | 仪表编号；读数；运行小时；合格产品质量；范围外负荷 | 优先分表计量；允许文件化的设备小时分配 | MJ | 每月 | 有代表性的连续 12 个月 | 装配、试验、搬运与包装设备 | 扣除范围外负荷并按合格产品质量归一化 | 仪表校准、发票核对、分配工作表 |
| `cp_packaging` | `assembly_test_packaging` | 瓦楞纸箱 | 包装领用和产品发运记录 | 包装身份；单位质量；领用数量；退回量；合格发运质量 | 称量代表性包装，并将领用数量与发运记录核对 | kg | 每种包装规范并按月汇总 | 有代表性的连续 12 个月 | 所有随产品供应的工厂大门包装 | 随产品供应的净包装质量按合格产品质量归一化 | 包装规范、校准秤、领用与发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个采集清单行 | 归一化数量 = 报告期交换量 / 合格已包装缸质量 | 交换量；合格已包装产品质量 | 每 kg 参考产品数量 | `iso-14044-2006` |
| `calc_solution_active_mass` | `alkaline_cleaning_sodium_hydroxide` | NaOH 纯物质质量 = 溶液质量 × 经核验的 NaOH 质量分数 | 溶液质量；浓度结果 | kg NaOH |  |
| `calc_electricity_mj` | 电力行 | MJ = 计量 kWh × 3.6 | 计量 kWh | MJ |  |
| `calc_hydraulic_makeup` | `hydraulic_test_fluid` | 净新液补充量 = 期初库存 + 采购 - 期末库存 - 回收场外退回量 | 库存与采购记录 | m3 液压油 | `iso-10100-2020` |
| `calc_make_or_buy_reconciliation` | `finished_parts_input` | 精加工零件总投入 = 内部合格转移 + 外购精加工零件投入；排除已计入内部产出的外购毛坯 | 转移与采购记录 | kg 精加工零件 | `festo-dnc-standard-cylinders-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 报告液压或气压路线、作用型式、活塞杆配置、缸径、行程、额定压力、材料、质量、验收准则及随附附件。 | 受控产品规范和合格物料清单 |
| `dq_temporal_representativeness` | 所有前景数据 | 使用代表正常生产的连续 12 个月；若覆盖期较短，应说明开机、停机和异常批次。 | 有日期的仪表、生产、采购和废物记录 |
| `dq_mass_balance` | 零部件制造和装配 | 将材料投入与合格产品、不合格品、内部退回、废物及库存变化核对；调查无法解释的不平衡。 | 签署的质量平衡工作表与库存核对 |
| `dq_route_separation` | 液压和气压产品 | 分开记录路线特定物料清单和试验介质；合并数据集必须提供文件化的按产量加权构成。 | 产量与路线特定记录 |
| `dq_measurement` | 仪表与秤 | 使用经校准或核验的仪器，并保留单位、参考条件和分配元数据。 | 校准证书、仪表编号及数据提取记录 |
| `dq_completeness` | 过程清单 | 记录申报截断以上实际存在的每项原子材料、化学品、公用工程、包装组件、废物及直接基本流排放；说明排除项和代理。 | 完整性检查表、采购台账、废物登记、许可文件和过程走查 |
| `dq_upstream_compatibility` | 链接的上游数据集 | 尽可能匹配产品状态、地域、技术、再生含量、处理路线和参考期；披露不匹配。 | 数据集选择日志和供应商规范 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产出 | 确认恰好 1 kg 合格已包装缸产出，并已申报全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validation_process_coverage` | 过程图 | 确认纳入装配、验收或功能试验和包装；确认对实际自制份额纳入零部件制造。 | `iso-10100-2020`; `skf-hydraulic-seals-general-technical-information` |
| `validation_route_consistency` | 路线条件行 | 液压试验用液仅适用于液压产品，压缩空气仅适用于气动试验，氢氧化钠仅适用于碱洗，工业氧气仅适用于 HVOF 涂覆。 | `iso-10100-2020`; `iso-15552-2018`; `skf-hydraulic-seals-general-technical-information` |
| `validation_atomic_exchanges` | 所有清单 | 拒绝笼统或组合流名称；每个选定流必须是一个物理、化学、能源、废物或基本流交换。 |  |
| `validation_make_or_buy` | 精加工零件 | 确认外购毛坯、内部精加工零件产出和外购精加工零件之间已核对且无重复计算。 | `festo-dnc-standard-cylinders-2017` |
| `validation_mass_balance` | 物料平衡 | 确认投入、合格产出、不合格品、内部退回、废物和库存变化在场址文件化测量不确定度内平衡。 | `iso-14044-2006` |
| `validation_uuid_and_units` | 含 UUID 的行 | 确认每个 UUID 均为公开状态 100，且选定属性和单位组与该行一致；未解决行保持明确标识。 |  |
| `validation_range_status` | 重要流 | 确认采集前景记录。在核验至少两个独立且边界相容的原始来源前，不得采用外部经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品液压或气压直线作用缸的工厂大门前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品足迹、供应链、设备和生命周期模型，前提是产品规范、地域、技术、时间和工厂大门边界与数据集匹配 |
| excluded_use | 不得直接替代旋转马达、泵、阀门、成套流体动力系统、单独供应的零件、使用阶段能源模型或未申报的液压/气压平均数据 |
| required_metadata | 全部必需限定信息；CPC 语境；场址和地域；基准年；数据所有者；自制/外购比例；生产构成；过程路线；分配；截断；上游数据集；包装；验收程序；未解决 UUID 和代理 |
| required_quality_disclosure | 时间覆盖；仪表和秤质量；质量平衡结果；生产代表性；路线分离；不合格品处理；试验介质回收；上游数据集不匹配；缺失交换；不确定性和范围证据缺口 |
| update_trigger | 产品设计、质量、物料清单、表面处理、液压/气压构成、生产技术、试验程序、包装、供应商地域、分配发生重大变化，或数据超过报告计划规定的有效期 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | dataset | 联合国统计司，CPC 3.0 版结构，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | 正式产品分类身份 |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，CPC 3.0 版解释性注释，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-09-05） | 正式分类层级及成品缸与零件的区分 |
| `china-mof-2024-tariff-adjustment-annex` | official_guidance | 中华人民共和国财政部，2024 年关税调整附件。https://gss.mof.gov.cn/gzdt/zhengcefabu/202405/P020240531308646828162.pdf（检索日期 2026-09-05） | 直线作用液压和气压动力装置的专业中文术语 |
| `iso-6020-2-2015` | standard | ISO 6020-2:2015，液压传动——单活塞杆缸安装尺寸——16 MPa（160 bar）系列——第 2 部分：紧凑系列。https://committee.iso.org/standard/61339.html（检索日期 2026-09-05） | 液压缸适用性及必需设计限定信息 |
| `iso-15552-2018` | standard | ISO 15552:2018，气压传动——可拆卸安装件的气缸，1 000 kPa（10 bar）系列，缸径 32 mm 至 320 mm——基本尺寸、安装尺寸和附件尺寸。https://committee.iso.org/standard/66921.html（检索日期 2026-09-05） | 气压缸适用性及必需设计限定信息 |
| `iso-10100-2020` | standard | ISO 10100:2020，液压传动——液压缸——验收试验。https://committee.iso.org/standard/75271.html（检索日期 2026-09-05） | 液压缸验收试验的纳入与文件化 |
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理——生命周期评价——要求与指南。https://committee.iso.org/standard/38498.html（检索日期 2026-09-05） | LCI 计算、分配、报告与校验框架 |
| `festo-dnc-standard-cylinders-2017` | handbook | Festo，符合 ISO 15552 的 DNC 标准气缸技术数据，2017/11。https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2018/EN/DNC_EN.PDF（检索日期 2026-09-05） | 代表性气压缸零部件与材料 |
| `skf-hydraulic-seals-general-technical-information` | handbook | SKF，液压密封——通用技术信息。https://cdn.skfmediahub.skf.com/api/public/09d1d840c2d1f94d/pdf_preview_medium/HydraulicSeals_SKF_12393_3_EN_screen_pdf_preview_medium.pdf（检索日期 2026-09-05） | 缸孔珩磨或滚压光整、活塞杆淬硬、磨削、硬铬电镀、抛光及替代涂层路线 |
