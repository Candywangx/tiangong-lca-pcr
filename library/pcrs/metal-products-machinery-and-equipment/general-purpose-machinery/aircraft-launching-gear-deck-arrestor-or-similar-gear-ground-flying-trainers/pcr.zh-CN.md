---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.aircraft-launching-gear-deck-arrestor-or-similar-gear-ground-flying-trainers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 航空器发射装置；甲板拦阻装置或类似装置；地面飞行训练器

## 1. 范围与适用性

本 PCR 适用于在制造商工厂门口交付的一套完整且通过验收试验的飞机发射装置、甲板或跑道拦阻装置、类似的飞机发射/回收装置，或地面飞行训练设备。核算对象是一个采购或生产订单下交付的配置，包括制造商控制的制造、表面处理、装配、软件配置、功能试验和交付准备。

本类别包括蒸汽或电磁发射设备及其控制系统、拦阻发动机及控制系统、岸基拦阻系统，以及地面飞行模拟机或飞行训练设备。必须声明产品族、鉴定依据、性能等级、安装选项、净质量和包装后质量。NAVSEA 舰队维修手册支持发射/回收设备边界和质量保证性能验证；美国海军运行报告记录了具有代表性的岸基与舰载功能试验；FAA 第 60 部分支持飞行训练设备的客观和主观鉴定试验（`navsea-jfmm-alre-2024`、`us-navy-ford-alre-test-2017`、`faa-part-60-fstd`）。

飞机与航天器发动机、整架飞机、舰船或机场土建工程、航母或跑道结构、培训服务、现场安装、使用、维护和报废处理均不在本 PCR 范围内。外购材料、组件、电力、燃料和化学品的上游生产通过关联的供应商数据集表征，不在前景中重复核算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.aircraft-launching-gear-deck-arrestor-or-similar-gear-ground-flying-trainers |
| classification_refs | CPC 3.0：43134，exact（`un-cpc-3-0-2025`） |
| covered_products | 完整的飞机发射装置；甲板或跑道拦阻装置及类似回收装置；地面飞行模拟机和飞行训练设备 |
| excluded_products | 飞机发动机；整架飞机；舰船、跑道、建筑物和固定土建工程；安装、培训、维护、修理、使用及报废服务 |
| representative_product | 在制造商工厂门口交付的一套已配置并通过验收试验的设备或合同系统 |
| production_route | 外购组件和材料 -> 条件性金属制造 -> 条件性表面处理/涂装 -> 子系统集成和总装 -> 配置与验收试验 -> 交付准备 |
| market_state | 全新、完整、通过验收试验并以工厂门口交付配置提供的设备；可重复使用的运输工装另行识别 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一套具有所声明功能和配置的完整飞机发射/回收设备或地面飞行训练设备 |
| How much | 一套交付设备或一个合同系统交付单元 |
| How well | 符合所声明的采购规范、产品族性能等级、安全要求和有文件记录的验收试验准则 |
| How long or cycle | 一个制造和验收周期；设计寿命仅作元数据，不用于缩放工厂门口清单 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 套已验收交付设备的实测净质量 |
| 参考产品流 | 航空器发射装置，甲板着陆拦阻装置或类似装置，地面飞行练习器 `26408ad7-8d1b-4d01-946e-e40d87aa0f2f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族；型号与配置；发射/回收/训练功能；性能或鉴定等级；主要动力技术；净质量；包装后质量；所含控制系统和辅助设备；验收试验依据；制造地理位置；报告期；工厂门口交付状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量已通过所声明验收依据的一套完整合同设备交付的净质量；披露件数、共同构成该套设备的模块、滞留液体，并说明净质量不含交付包装。 |
| `mass_accounting` | 材料、中间产品、废物、包装和油品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按适用情况使用实测或核对后的干质量/净质量；记录水分、滞留液体、涂层和包装口径，并将材料投入与产品、废物及实测损失核对。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始读数，并按精确恒等式 1 kWh = 3.6 MJ 换算；披露电压等级、地理位置、损耗和计量边界。 |
| `gas_volume` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | 按供应商或仪表的参考状态报告体积，并披露温度、压力及参考状态换算。 |
| `allocation_consistency` | 共用设施记录 | 对应清单行的流属性 | 对应行参考单位 | 每项共用仪表拆分采用同一报告期和一个有文件记录、与消耗过程具有物理关系的驱动因素，不得重复计入空转或返工负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告制造商厂门接收的外购材料、组件、公用工程、燃料和工艺化学品 |
| starting_condition_role | 制造商控制生产的前景进入状态；上游负荷由关联数据集提供 |
| product_classification_scope | 第 1、2 节语义边界内的完整设备，不依赖用于定位本 PCR 的分类代码 |
| recursive_input_rule | 同类别的外购发射/回收或训练设备作为一个原子产品投入记录并关联其上游数据集，不在此前景包内递归拆解 |
| upstream_dataset_requirement | 每项外购产品、燃料、公用工程和化学品必须关联地域和技术具有代表性的上游数据集；主要组件和金属优先采用供应商特定数据 |
| disclosure | 声明自制/外购决策、外包表面处理、排除的安装或土建、试验能源边界、返工、包装状态、报告期、场址及同类别外购设备 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有产品族 | 纳入制造商控制的制造、处理、装配、配置、验收试验和交付准备，直至工厂门口放行；排除安装、使用、维护和报废。 | `navsea-jfmm-alre-2024`; `faa-part-60-fstd` |
| `boundary_conditional_routes` | 路线特定作业 | 仅当条件性过程处于报告制造商的运营或财务控制下时纳入；否则记录外购处理后组件或服务并关联上游数据集，不得重复负荷。 | `ec-stm-bref-2006`; `ec-sts-bref-2020` |
| `boundary_testing` | 验收试验 | 纳入交付前所有工厂验收、客观、主观、功能或代表性载荷试验的公用工程、燃料、试验液、替换件、废物及直接排放。 | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |
| `boundary_capital_goods` | 生产和试验基础设施 | 默认排除厂房和通用资本设备；当研究目标要求或预期贡献重大时，披露并纳入产品专用模具、工装或试验台。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | 金属切割、成形、焊接和机加工 | conditional | 报告边界内制造结构件或机械零件时纳入 | 前景组件制造 | kg 合格制造组件 |
| `surface_treatment` | 金属预处理、精整和涂装 | conditional | 报告边界内实施水基、电解、化学或有机涂装路线时逐项纳入 | 前景表面保护 | m2 处理表面及 kg 合格处理组件 |
| `subsystem_assembly` | 子系统集成和总装 | required | 始终纳入制造商控制的机械、液压、电气、电子和软件集成 | 前景装配 | 一套已装配设备配置 |
| `acceptance_testing` | 配置验证和验收试验 | required | 始终纳入设备放行所需试验；燃料和液压行仍按试验路线条件性适用 | 前景试验 | 一套合格设备配置及试验小时记录 |
| `delivery_preparation` | 防护、包装和工厂门口放行 | required | 始终纳入放行检查和实际交付包装；仅当指定包装组件确实不存在时相应行方可为零 | 前景交付准备 | 一套工厂门口参考产品 |

### 过程：金属切割、成形、焊接和机加工（`metal_fabrication`）

#### 输入

##### 产品流

###### 制造零件所用碳钢板（`mf_carbon_steel_plate`）

记录进入参考产品内部切割、成形、焊接或机加工的碳钢板净领用质量。

- 选定流：碳钢板（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：材料领退记录的净领用质量，不含未开封退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：

###### 制造设备消耗的电力（`mf_electricity`）

记录切割、成形、焊接、机加工、抽排及本地辅助设备的计量或物理拆分外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仪表读数或按合格制造工单拆分的共用仪表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

###### 氧燃料作业使用的工业氧气（`mf_industrial_oxygen`）

仅在边界内切割、加热或焊接消耗氧气时纳入，记录供应商或校准流量计体积。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考状态调整气瓶或储罐库存变化后的交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用氧燃料作业的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

###### 制造加热使用的气态天然气（`mf_natural_gas`）

仅在边界内预热、热处理或干燥燃烧气态天然气时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考状态计量的用量或经库存调整的交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用天然气加热的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格制造金属组件（`mf_fabricated_metal_component`）

记录从制造转入表面处理或装配的核对质量；该流是前景内部中间产品。

- 选定流：飞机发射、回收或训练设备用制造金属组件（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：转入下一前景过程的合格组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每份合格制造输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：

##### 废物流

###### 分选碳钢制造废料（`mf_steel_scrap`）

记录作为单一已表征废物流离开前景的边角料、切屑和不合格碳钢；不得从钢材投入中净扣回收价值。

- 选定流：碳钢制造废料（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：离开制造过程的称重分选废料，扣除经证实的内部重熔或再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emission_records`
- 来源：

##### 基本流

###### 制造过程天然气燃烧产生的化石二氧化碳（`mf_fossil_co2`）

仅纳入制造边界内直接燃烧，上游供应链排放保留在天然气数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：用 `calc_direct_fossil_co2` 根据天然气实测用量、供应商特定碳含量和有文件记录的氧化率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套采用天然气加热的参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

### 过程：金属预处理、精整和涂装（`surface_treatment`）

#### 输入

##### 产品流

###### 配槽和漂洗工艺用水（`st_process_water`）

记录用于水基配槽和漂洗的工艺用水；闭路循环水不得重复作为新投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量补充水和漂洗水质量，或用实测密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套参考产品及披露的处理面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-stm-bref-2006`

###### 水基处理使用的氢氧化钠（`st_sodium_hydroxide`）

仅在氢氧化钠用于所声明边界内的清洗、蚀刻、槽液维护或废水处理时纳入，并记录产品质量和浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：经库存调整的氢氧化钠产品质量，并披露溶液浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套参考产品及披露的处理面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-stm-bref-2006`

###### 设备所用表面涂料（`st_surface_coating`）

本行只表示所声明的一种底漆、油漆或保护涂料；其他配方必须另建原子行。

- 选定流：溶剂型保护性表面涂料（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：领用质量减未开封退回质量，并披露配方、固含量和转移路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套参考产品及披露的涂覆面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-sts-bref-2020`

###### 表面处理消耗的电力（`st_electricity`）

记录电化学反应、泵、通风、抽排、干燥及其他边界内处理设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：处理线仪表读数，或按运行时间和额定负载物理拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套参考产品及披露的处理面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格表面处理金属组件（`st_treated_component`）

记录转入装配的合格处理组件质量；该流是前景内部中间产品。

- 选定流：飞机发射、回收或训练设备用表面处理金属组件（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：转入装配的合格组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每份合格表面处理输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 废物流

###### 废表面处理槽液（`st_spent_process_solution`）

记录一种离开前景的已表征废槽液；不同化学组成必须分别建行。

- 选定流：废碱性表面处理液（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：送处理或处置的废碱液称重质量，或用体积和密度计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套参考产品及披露的处理面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emission_records`
- 来源：`ec-stm-bref-2006`

###### 表面处理废水（`st_wastewater`）

记录内部循环后进入现场或场外废水处理的已表征水相出水，不得与废槽液合并。

- 选定流：含溶解金属的表面处理废水（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测排放质量，或将计量体积按实测密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套参考产品及披露的处理面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emission_records`
- 来源：`ec-stm-bref-2006`

##### 基本流

###### 涂装产生的非甲烷挥发性有机物（`st_nmvoc`）

纳入扣除回收溶剂和治理后，所声明溶剂型涂料直接向空气的排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测排放，或用 `calc_surface_material_balance` 进行涂料溶剂质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套参考产品及披露的涂覆面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-sts-bref-2020`

### 过程：子系统集成和总装（`subsystem_assembly`）

#### 输入

##### 产品流

###### 转入装配的制造金属组件（`as_fabricated_component`）

记录进入装配的关联前景制造或处理组件质量，不得重复加入上游负荷。

- 选定流：飞机发射、回收或训练设备用制造金属组件（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：与 `mf_fabricated_metal_component` 或 `st_treated_component` 核对的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已装配设备配置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：

###### 安装于设备的电气控制柜（`as_control_cabinet`）

仅在配置中安装独立外购电气控制柜时纳入，按物料清单记录实际型号和数量。

- 选定流：电气控制柜（UUID 未解决）
- 流属性/单位：件数 / item
- 数量规则：安装的合格数量减放行前拆除数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已装配设备配置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`us-navy-ford-alre-test-2017`

###### 安装于设备的液压动力单元（`as_hydraulic_power_unit`）

仅在液压发射、回收、固定或控制配置中纳入，并声明额定压力和功率。

- 选定流：液压动力单元（UUID 未解决）
- 流属性/单位：件数 / item
- 数量规则：安装的合格数量减放行前拆除数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已装配设备配置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：

###### 地面训练器安装的可视显示单元（`as_visual_display_unit`）

仅在地面飞行训练器配置中安装独立外购显示单元时纳入，并声明显示技术和配置。

- 选定流：电子可视显示单元（UUID 未解决）
- 流属性/单位：件数 / item
- 数量规则：安装的合格数量减放行前拆除数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已装配地面飞行训练器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`faa-part-60-fstd`

###### 设备初次加注的液压油（`as_hydraulic_oil`）

仅在液压油保留在交付配置内时纳入；声明牌号并区分初装油和试验补油。

- 选定流：抗磨液压油（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：期初库存加收货减期末库存和回收油，并与产品留存加注量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已装配液压设备配置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：

###### 装配和集成消耗的电力（`as_electricity`）

记录装配工具、起吊、电子集成、软件装载和装配区辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：装配区仪表读数或按工单进行的物理拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套已装配设备配置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待验收试验的已装配设备（`as_assembled_equipment`）

记录一套转入验收试验的已配置装配件；该流是前景内部中间产品。

- 选定流：已装配飞机发射、回收或地面训练设备（UUID 未解决）
- 流属性/单位：件数 / item
- 数量规则：转入试验的合格装配件数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每份装配输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_and_output_records`
- 来源：

##### 废物流

##### 基本流

### 过程：配置验证和验收试验（`acceptance_testing`）

#### 输入

##### 产品流

###### 验收试验消耗的电力（`at_electricity`）

记录被测设备、模拟器、负载、仪器、冷却及试验区辅助设备在规定验收试验中的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：专用仪表读数，或对有文件记录的试验序列进行功率-时间积分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_and_output_records`
- 来源：`us-navy-ford-alre-test-2017`; `faa-part-60-fstd`

###### 试验辅助动力消耗的柴油（`at_diesel_fuel`）

仅在柴油动力单元、负载系统或辅助发电机处于验收试验边界内运行时纳入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：验收试验工单的期初库存加收货减期末库存和经核实退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用柴油试验动力的合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

###### 验收试验期间添加的液压油（`at_hydraulic_oil`）

仅纳入试验期间添加且未计入产品留存初装油的新抗磨液压油；声明牌号和去向。

- 选定流：抗磨液压油（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：验收试验工单的实测补加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格液压设备配置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_and_output_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入交付准备的验收合格设备（`at_tested_equipment`）

只记录达到所声明放行准则的配置；不合格或返工设备仍应纳入报告期核对。

- 选定流：通过验收试验的飞机发射、回收或地面训练设备（UUID 未解决）
- 流属性/单位：件数 / item
- 数量规则：根据签署的验收记录统计放行配置数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每份验收试验输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_and_output_records`
- 来源：`us-navy-ford-alre-test-2017`; `faa-part-60-fstd`

##### 废物流

###### 试验后排出的废液压油（`at_waste_hydraulic_oil`）

记录试验后排出并送场外废物路线的已表征油品；留在交付产品中的油不计入本行。

- 选定流：废抗磨液压油（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：转移至指定废物路线的实测排油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套合格液压设备配置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emission_records`
- 来源：

##### 基本流

###### 柴油动力验收试验产生的化石二氧化碳（`at_fossil_co2`）

仅纳入前景内试验燃料的直接燃烧；柴油上游排放保留在柴油数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：用 `calc_direct_fossil_co2` 根据柴油实测质量、供应商特定碳含量和有文件记录的氧化率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套采用柴油试验动力的合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：

### 过程：防护、包装和工厂门口放行（`delivery_preparation`）

#### 输入

##### 产品流

###### 运输木箱使用的锯材（`dp_sawn_timber_crate`）

仅纳入交付木箱中使用的新锯材质量；处理木材和可重复使用工装应另行识别。

- 选定流：运输木箱用锯材（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采购和包装记录核实的物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套包装后参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release_records`
- 来源：

###### 包装使用的聚乙烯保护膜（`dp_polyethylene_film`）

仅纳入随产品交付的聚乙烯薄膜质量；其他聚合物薄膜必须另建原子行。

- 选定流：聚乙烯保护膜（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：领用和包装记录核实的物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套包装后参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口参考产品（`reference_product`）

记录通过验收和交付准备的一套完整配置的实测净质量。件数仍是必须声明的功能单位和元数据信息。

- 选定流：航空器发射装置，甲板着陆拦阻装置或类似装置，地面飞行练习器 `26408ad7-8d1b-4d01-946e-e40d87aa0f2f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：恰好 1 套已验收并放行参考产品的实测净质量；分别报告件数、净质量和包装后质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 套参考产品的实测净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release_records`
- 来源：`un-cpc-3-0-2025`; `navsea-jfmm-alre-2024`; `faa-part-60-fstd`

##### 废物流

##### 基本流

任何跨越前景过程边界且未在上文列出的材料、组件、公用工程、包装组件、废物或直接排放，都必须作为一个化学或物理上具体的原子行加入所生产的数据集，不得并入复数的“其他材料”“公用工程”或“废物”行。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产和试验作业 | 优先通过独立计量或物理拆分工单、过程时间、能源、材料领用、试验和废物来避免分配。 |  |
| `allocation_shared_facility` | 无法避免的共用设施负荷 | 无法细分时，按导致负荷的有文件记录物理驱动因素分配，例如按额定负载加权的机器小时、处理面积、实测质量吞吐量或试验功率-时间；只有不存在合理物理关系时才可使用收入。 |  |
| `allocation_scrap` | 回收金属和包装 | 将回收材料作为独立废物或二次材料输出报告，不在前景清单内计入替代初级生产信用；下游研究应一致应用并披露回收分配。 |  |
| `allocation_rework` | 不合格或返工设备 | 用可追溯工单将返工和试验失败负荷分配给同一报告期的合格输出；异常样机或开发负荷应披露，不得静默平均到批量生产。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_bom_records` | `metal_fabrication`; `subsystem_assembly` | 材料和组件投入；中间产品；留存油品 | ERP 领退料、采购、物料清单、地磅和转移记录 | work_order; material_or_component_id; grade_or_model; opening_stock; receipts; issued_quantity; returned_quantity; closing_stock; transferred_quantity; unit; net_mass | 将库存变动与竣工物料清单和合格转移记录核对 | kg 或 item | 每个工单；每月核对 | 至少 12 个有代表性月份，较短生产活动覆盖完整活动期 | 所有报告制造商场址 | 汇总参考产品工单的净领料和合格转移；共用记录仅按声明的物理驱动因素分配 | 签署的材料核对；校准记录；竣工物料清单；差异调查 |
| `cp_energy_and_fuel_records` | `metal_fabrication`; `subsystem_assembly`; `acceptance_testing` | 电力、天然气、氧气、柴油及直接燃烧计算输入 | 仪表、气瓶/储罐、发票和设备运行日志 | meter_id; opening_reading; closing_reading; delivery; opening_stock; closing_stock; reference_conditions; work_order; run_time; rated_load; fuel_carbon_content; oxidation_fraction | 优先专用计量，否则采用库存平衡或有文件记录的功率-时间拆分 | MJ、m3 或 kg | 每批次或每次试验；每月核对 | 与输出相同报告期 | 边界内所有生产和试验区域 | 以表计终值减初值或核对库存；仅按工单和物理驱动因素归属 | 仪表校准；发票核对；参考状态记录；运行日志；供应商燃料检验 |
| `cp_surface_treatment_records` | `surface_treatment` | 水、化学品、涂料、电力、处理输出及 NMVOC 计算输入 | 槽液日志、仪表、涂料领退、面积、生产和治理记录 | bath_id; chemistry; concentration; make_up; drag_out; rinse_water; electricity; coating_issue; coating_return; solvent_fraction; captured_solvent; abatement_efficiency; treated_area; accepted_mass | 将每条处理线和配方与合格组件核对 | kg、MJ 或 m2 | 每次槽液添加和生产批次；每月核对 | 与输出相同报告期 | 边界内每条处理线 | 汇总净补充量和能源；循环液不重复作新投入；关联处理面积和合格质量 | 槽液分析；仪表校准；配方安全数据；涂料核对；治理监测；验收记录 |
| `cp_acceptance_and_output_records` | `subsystem_assembly`; `acceptance_testing` | 已装配和试验中间产品；试验电力和油品 | 配置、试验、放行、仪表和油品领用记录 | serial_or_delivery_id; configuration; test_basis; test_start; test_end; objective_result; subjective_result; functional_result; electricity; oil_issue; oil_retained; rework; release_status | 将签署的试验和放行记录关联专用仪表或设备功率-时间日志 | item、h、MJ 或 kg | 每个验收序列 | 完整报告期 | 每个报告试验设施 | 纳入放行产品所需的所有试验次数和返工；只有独立识别并披露时才排除开发试验 | 签署试验报告；校准仪器；配置基线；不符合项关闭 |
| `cp_waste_and_emission_records` | `metal_fabrication`; `surface_treatment`; `acceptance_testing` | 钢废料、废槽液、废水、废油和直接排放 | 称重单、转移联单、排放仪表、实验室分析和质量平衡记录 | waste_id; chemistry; hazardous_status; gross_mass; tare; discharge_volume; density; destination; recovered_mass; emission_measurement; work_order | 每次装运称重或每次排放计量；汇总前表征化学组成 | kg | 每次装运或排放；每月核对 | 与输出相同报告期 | 边界内所有产生点 | 按单一已表征废物/排放身份和去向汇总；仅扣除经证实的内部再利用 | 校准秤或仪表；实验室报告；废物联单；质量平衡闭合 |
| `cp_packaging_and_release_records` | `delivery_preparation` | 包装投入和工厂门口参考产品 | 装箱单、包装物料单、秤和放行记录 | serial_or_delivery_id; package_component; material_grade; component_mass; reusable_status; net_mass; packaged_mass; item_count; release_signature | 将实际包装材料和最终质量与每次放行交付核对 | kg 或 item | 每次交付 | 完整报告期 | 范围内所有发运场址 | 汇总随产品交付的新包装；可重复使用工装另报；只计签署放行 | 装箱单；校准秤；发运照片或检查；签署放行 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_item` | 所有清单行 | 归一化数量 = 报告期内分配给合格交付的数量 / 合格参考产品数量；平均会掩盖重大差异时保留配置特定结果 | 分配行数量；放行参考产品数量；配置标识 | 每套参考产品的行数量 |  |
| `calc_electricity_conversion` | 所有电力行 | 电力 MJ = 电表 kWh x 3.6 MJ/kWh | 计量 kWh | MJ 电力 |  |
| `calc_inventory_balance` | 材料、化学品、油品、燃料和包装 | 净消耗 = 期初库存 + 收货 - 期末库存 - 有文件记录的未开封退回 - 经核实内部再利用；另报产品留存质量和已表征废物 | 库存变动和转移记录 | 核对后的净投入、留存量和废物 |  |
| `calc_direct_fossil_co2` | `mf_fossil_co2`; `at_fossil_co2` | 化石 CO2 质量 = 实测燃料量 x 供应商特定化石碳含量 x 有文件记录的氧化率 x 44/12；缺少燃料组成或氧化依据时不得计算 | 燃料量；化石碳含量；氧化率 | kg 二氧化碳（化石源） |  |
| `calc_surface_material_balance` | `st_nmvoc`; 处理损失 | 涂料溶剂排放 = 净涂料领用中的溶剂 - 涂层留存溶剂 - 回收溶剂 - 有文件记录的销毁量；将槽液和漂洗投入与留存、废槽液、废水、回收及实测排放核对 | 配方、领退、回收、治理、槽液、漂洗、废物和排放记录 | kg NMVOC 排放和处理质量平衡残差 | `ec-stm-bref-2006`; `ec-sts-bref-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | 参考产品和外购组件 | 保存序号或交付身份、产品族、配置基线、主要选项、性能或鉴定等级及自制/外购状态。 | 竣工物料清单；配置记录；采购规范；放行证书 |
| `dq_temporal_coverage` | 所有前景记录 | 至少覆盖 12 个代表性月份；较短生产活动覆盖完整活动期并披露起止日期、产量、样机、停产和异常返工。 | 记录提取日期；生产台账；异常日志 |
| `dq_measurement` | 计量和称重行 | 使用适用于被测量的校准仪表和秤；记录气体参考状态及液体密度换算。 | 校准证书；仪表图；密度和参考状态记录 |
| `dq_completeness` | 所有过程边界 | 用实测记录核对至少 95% 的已分配投入质量和能源；任何预期超过参考产品质量或前景能源 1% 的单一未跟踪流必须调查，不得自动截断。 | 签署核对；差异调查；新增原子行 |
| `dq_testing` | 验收试验 | 将每套放行设备与实际客观、主观、功能或代表性载荷试验依据、次数、能源、流体、返工和去向关联。 | 签署试验报告；仪器清单；不符合项关闭；`navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |
| `dq_outsourcing` | 外包制造或处理 | 声明供应商、地理、过程路线、接收状态和上游数据集；不得把外包作业报告为零负荷。 | 采购订单；供应商声明；进货检验；上游数据集链接 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 缺少产品族、配置、功能、鉴定/性能等级、净质量、包装后质量、验收依据、地理、报告期或工厂门口状态时判定失败。 | `un-cpc-3-0-2025`; `navsea-jfmm-alre-2024`; `faa-part-60-fstd` |
| `validate_reference_count` | 参考产品 | 归一化后必须恰好为一套放行参考产品并有签署放行记录；多个模块只有在合同交付边界明确时方可合计为一套。 |  |
| `validate_process_routes` | 过程图 | 必须包含装配、验收试验和交付准备；每项内部制造、处理、涂装、液压、燃料和模拟器路线必须启用相应过程及原子行。 | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd`; `ec-stm-bref-2006`; `ec-sts-bref-2020` |
| `validate_atomic_inventory` | 过程清单 | 拒绝复数集合行、合并的公用工程或燃料、代理 UUID、UUID/流属性/单位不匹配，以及没有适用性决定的条件行。 |  |
| `validate_internal_links` | 前景中间产品 | 制造、处理、装配、试验和交付准备之间的转移数量和身份必须核对，且不得重复上游负荷。 |  |
| `validate_direct_emissions` | 燃料和涂装行 | 发生边界内燃烧或溶剂型涂装时必须计算直接化石 CO2 和 NMVOC；必须提供组成和治理输入，否则报告计算不完整。 | `ec-sts-bref-2020` |
| `validate_mass_energy` | 前景记录 | 必须提供材料和能源核对、计量/参考状态证据、处理循环水口径、废物去向，以及材料残差或共用仪表分配说明。 | `ec-stm-bref-2006` |
| `validate_test_release` | 合格输出 | 若缺少受配置控制的验收记录及产品族所需的客观、主观、功能或代表性载荷试验证据，则拒绝输出。 | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一套已配置并通过验收试验的设备在制造商工厂门口交付的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 与声明的产品族、配置、性能/鉴定等级、自制/外购模式、生产地域、技术、验收试验边界和工厂门口状态相符的产品碳足迹或 LCA 模型 |
| excluded_use | 未增加其他模型时，不得用于整架飞机、舰船、跑道、建筑、发射/回收运行、飞行员培训服务、现场安装、维护、使用或报废；未经配置审查不得在发射装置、拦阻装置和地面训练器之间替代 |
| required_metadata | canonical PCR id；产品族；型号/配置；序号或交付依据；性能/鉴定等级；所含控制和辅助设备；主要动力技术；净质量和包装后质量；自制/外购及外包路线；场址和地理；报告期；试验依据；参考状态；分配驱动因素；上游数据集链接 |
| required_quality_disclosure | 完整性和核对结果；仪表与秤校准；气体参考状态；处理化学品和面积；涂料配方及治理；试验次数和返工；废物表征及去向；未解决 UUID 和范围证据需求；偏离与截断 |
| update_trigger | 产品族或鉴定依据变化；材料配置或质量变化；发射/回收/训练器技术变化；液压、控制、显示、涂装、试验或包装路线变化；供应商/地域变化；报告期超过五年；计量、分配或完整性发生重大变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，*CPC Version 3.0 Structure*，代码 43134，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-05 核验源文件哈希） | 正式分类身份和英文标题 |
| `navsea-jfmm-alre-2024` | official_guidance | 美国海军海上系统司令部，*Joint Fleet Maintenance Manual, Volume IV, Chapter 16: Aircraft Launch and Recovery Systems for Aircraft Carriers Only*，COMUSFLTFORCOMINST 4790.3 Rev D Change 4，2024-09-24，https://www.navsea.navy.mil/Portals/103/Documents/SUBMEPP/JFMM/Volume_IV_D4.pdf（2026-09-11 检索并核验原文） | 航空母舰发射/回收设备边界、生产范围和质量保证性能验证 |
| `us-navy-ford-alre-test-2017` | official_guidance | 美国海军，*USS Gerald R. Ford Completes First Arrested Landing and Launch*，2017-07-29，https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/2252477/uss-gerald-r-ford-completes-first-arrested-landing-and-launch/（2026-09-11 检索并核验原文） | EMALS/AAG 系统配置及具有代表性的岸基/舰载功能试验 |
| `faa-part-60-fstd` | standard | 美国联邦航空管理局，*14 CFR Part 60—Flight Simulation Training Device Initial and Continuing Qualification and Use*，汇编规则及鉴定性能标准，https://www.faa.gov/sites/faa.gov/files/about/initiatives/nsp/consolidated_version.pdf（2026-09-05 检索） | 地面飞行训练设备边界、配置数据和客观/主观鉴定试验 |
| `ec-stm-bref-2006` | official_guidance | 欧盟委员会，*Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*，2006-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（2026-09-05 检索） | 条件性水基/电解表面处理过程、水、能源、化学品、废槽液、废水和质量平衡控制 |
| `ec-sts-bref-2020` | official_guidance | 欧盟委员会联合研究中心，*Surface Treatment Using Organic Solvents including Wood and Wood Products Preservation with Chemicals*，2020-12 采纳，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf（2026-09-05 检索） | 条件性飞机及金属制品涂装、清洗和脱脂路线 |
