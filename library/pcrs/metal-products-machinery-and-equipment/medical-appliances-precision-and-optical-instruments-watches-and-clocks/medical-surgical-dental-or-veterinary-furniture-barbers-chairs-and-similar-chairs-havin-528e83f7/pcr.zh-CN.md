---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-dental-or-veterinary-furniture-barbers-chairs-and-similar-chairs-havin-528e83f7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 医疗、外科、牙科或兽医用的家具；理发椅及类似有旋转、可躺及升降的椅子

## 1. 范围与适用性

本 PCR 适用于一件完整的医疗、外科、牙科或兽医专用家具从摇篮到制造商工厂门的生产。对于理发椅或类似椅具，仅当完整产品同时具有旋转、可躺和升降运动时纳入。适用示例包括手术台、检查台、带机械调节机构的病床、牙科治疗椅、治疗床，以及因专用家具功能而确定产品身份的相应兽医用家具。

本 PCR 适用于手动、液压、气动或电动调节的产品，也适用于有软包或无软包接触面的产品。必须声明产品配置、预期用途、调节机构、载荷/性能等级、净质量和市场状态。前景边界包括采购材料进厂、部件准备、制造、适用时的厂内表面处理、总装、出厂测试和包装。

不具有上述专用功能的普通家用或办公家具、轮椅、独立医疗或牙科器械、诊断设备、灭菌器、单独销售的备件、建筑安装、配送、使用、维护、修理和生命末期均不在范围内。带牙科设备的牙科椅仅就家具制造清单纳入；单独建模的牙科设备应采用其适用方法。`un-cpc-3-0-structure-2025` 支持 CPC 身份，`epd-norway-npcr-026-2024` 支持完整家具、部件、电动家具和表面处理的范围背景。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-dental-or-veterinary-furniture-barbers-chairs-and-similar-chairs-havin-528e83f7 |
| classification_refs | CPC 3.0: 48180 — 医疗、外科、牙科或兽医用的家具；理发椅及类似有旋转、可躺及升降的椅子 |
| covered_products | 完整的医疗、外科、牙科或兽医用家具；同时具有旋转、可躺和升降运动的完整理发椅或类似椅具 |
| excluded_products | 普通家具；轮椅；独立器械、诊断设备和灭菌器；单独销售的零部件；配送、使用和生命末期服务 |
| representative_product | 制造商工厂门处一件可投放市场的完整可调节家具 |
| production_route | 采购材料和部件 → 部件准备与制造 → 条件性表面处理 → 总装、出厂测试和包装 |
| market_state | 工厂门处已完成、质量放行并包装的产品；除非单独声明再制造路线，否则为新制产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供一件完整家具，履行所声明的医疗、外科、牙科、兽医用途或合格多运动椅具功能 |
| How much | 一件成品 |
| How well | 符合制造商声明的预期用途、调节功能、载荷/性能等级、尺寸规范和质量放行准则 |
| How long or cycle | 一个制造批次；使用寿命和使用阶段性能不属于本从摇篮到工厂门参考，若用于下游须另行声明 |
| reference_flow_link | 一件成品的实测净质量把按件计的声明单位连接到按质量计的天工参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一件质量放行成品的实测净质量（kg），不含运输包装 |
| 参考产品流 | 医疗、外科、牙科或兽医用的家具，理发椅及类似有旋转、可躺及升降的椅子 `e39dcb5d-76b1-4daa-b234-4016b382ad57` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型和预期用途；型号/配置；手动、液压、气动或电动调节路线；所含电气/电子和牙科设备部件；软包和表面处理规范；载荷/性能等级；产品净质量；包装配置和质量；制造场址和地理范围；报告期；新制或已声明的再制造市场状态 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息意味着参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终总装和测试后、运输包装前测量一件质量放行产品的净质量；包装另行记录。 |
| `component_count_to_mass` | 采购部件和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用批次特定称量或供应商文件质量将采购件数换算为干态供货质量，并保留件数及换算证据。 |
| `electricity_energy_basis` | 采购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表读数，按声明的精确单位恒等关系将计费电能换算为 MJ，并披露电网地理范围、电压等级和损耗边界。 |
| `gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量气体体积以及计费或参考温度和压力；不得混合未经修正体积和标准体积。 |
| `one_item_normalization` | 全部清单行 | 行特定 | 行特定 | 对同一报告期内的每项交换进行分配或计算，然后归一化到一件合格成品并披露其净质量。 |

## 5. 系统边界

前景系统始于采购材料、部件、包装、电力、燃料和工艺用水跨越制造场址大门，止于完整产品通过出厂测试并完成发运包装。每项采购投入的上游生产数据作为背景数据链接，不在前景过程中重复创建。

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_include_manufacturing` | 从摇篮到工厂门前景 | 纳入场内部件准备、切割/成形/机加工/焊接、条件性表面处理、总装、出厂测试、归属于合格产出的返工以及包装。 | epd-norway-npcr-026-2024 |
| `boundary_include_surface_treatments` | 任何已施加表面处理 | 即使表面处理占产品质量比例很小，也要声明每种表面处理材料及其场内公用工程、废物和直接排放。 | epd-norway-npcr-026-2024 |
| `boundary_exclude_downstream` | 下游阶段 | 从本数据集中排除工厂门后的配送、安装、使用、维护、修理、更换和生命末期；任何下游情景须单独披露。 | epd-norway-npcr-026-2024 |
| `boundary_no_capital_goods` | 制造基础设施 | 排除资本设备和建筑，除非研究目标明确要求纳入并披露该偏离。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址大门接收的采购原材料、成品部件、包装、电力、燃料和工艺用水，并具有供应商和供货状态记录 |
| starting_condition_role | 前景制造门；上游生产保留在链接的背景数据集中 |
| product_classification_scope | 经审查的 CPC 48180 语义边界内的完整产品；规范 PCR 身份不依赖外部分类代码 |
| recursive_input_rule | 若同一产品类别的完整产品进入翻新或再制造，仅在声明的起始状态将其记录一次为供应产品投入，不在本前景数据集中递归展开其既往制造 |
| upstream_dataset_requirement | 为每项采购材料、部件、能源载体、水和包装投入链接具有地理、技术和供货状态代表性的上游数据集 |
| disclosure | 声明新制或再制造路线、产品配置、所含机构/电子部件、净质量、表面处理路线、包装、场址地理范围、报告期、分配和全部排除阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | 材料和部件准备与制造 | `required` | 始终纳入；仅记录声明材料清单中实际存在的原子材料和部件 | 前景框架、面板、软包和调节机构准备 | 离开制造过程的一件合格产品 |
| `surface_treatment` | 表面准备和涂装 | `conditional` | 当除油、漂洗、涂装或热固化发生在报告场址边界内时纳入 | 前景表面处理 | 一件产品的一套合格已处理部件 |
| `assembly_testing_packaging` | 最终总装、出厂测试和包装 | `required` | 始终纳入；具名包装行仅在使用该包装组件时适用 | 前景完工和参考产品输出 | 一件质量放行并包装的产品 |

### 过程：材料和部件准备与制造（`material_fabrication`）

#### 输入

##### 产品流

###### 热轧带钢（`hot_rolled_strip_steel`）

记录经切割、成形或焊接后进入产品的外购热轧非合金带钢。

- 选定流：带钢，卷材 `984781e6-5296-48d7-a630-553209cd51c5`
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品的实测领用质量减去有记录的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 不锈钢板（`stainless_steel_sheet`）

仅在声明的产品材料清单中存在时记录不锈钢板；天工 UUID 尚未解决。

- 选定流：不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品的实测领用质量减去有记录的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 铝挤压型材（`aluminium_extrusion_profile`）

仅当框架或支承结构使用铝挤压型材时记录。

- 选定流：铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品的实测领用质量减去有记录的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 软质聚氨酯泡沫（`flexible_polyurethane_foam`）

仅对软包配置记录软质聚氨酯缓冲泡沫；天工 UUID 尚未解决。

- 选定流：软质聚氨酯泡沫
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品所含泡沫实测质量，包括废料分拣前可归属的切割损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行软包产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### PVC 涂层聚酯织物（`pvc_coated_polyester_fabric`）

仅在使用时记录供货的 PVC 涂层聚酯软包织物；天工 UUID 尚未解决。

- 选定流：PVC 涂层聚酯织物
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品所含供货织物实测质量加可归属的切割损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行软包产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 电动直线执行器（`electric_linear_actuator`）

仅对电动调节配置记录完整外购电动直线执行器；天工 UUID 尚未解决。

- 选定流：电动直线执行器
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品所装执行器的实测或供应商文件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行电动调节产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 液压缸（`hydraulic_cylinder`）

仅对液压调节配置记录完整外购液压缸；天工 UUID 尚未解决。

- 选定流：液压缸
- 流属性/单位：Mass / kg
- 数量规则：一件合格产品所装液压缸的实测或供应商文件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行液压调节产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_components`
- 来源：

###### 钢螺钉（`steel_screws`）

记录制造或分总成中装入产品的外购钢螺钉。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：统计已安装螺钉件数，并按批次特定实测或供应商文件质量换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_components`
- 来源：

###### 制造用电（`fabrication_electricity`）

记录场内切割、成形、机加工、焊接和制造辅助设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或将报告期电表量分配给合格制造产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`scrap_steel`）

记录制造产生并转移至已声明处理去向的分类收集废钢。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：称量产生的废钢并扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_scrap`
- 来源：

###### 铝废料（`aluminium_scrap`）

仅当进行铝材制造时记录分类收集的铝废料，并将实际质量转移至已声明去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：称量产生的铝废料并扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一件含制造铝材的质量放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_scrap`
- 来源：

##### 基本流

### 过程：表面准备和涂装（`surface_treatment`）

#### 输入

##### 产品流

###### 热固性粉末涂料（`thermoset_powder_coating`）

仅当场内实施粉末涂装时记录一种配制完成的热固性粉末涂料；天工 UUID 尚未解决。

- 选定流：热固性粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：发出涂料质量减去回收到同一过程的涂料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：一件成品的一套合格涂装部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_materials`
- 来源：epd-norway-npcr-026-2024

###### 氢氧化钠（`surface_sodium_hydroxide`）

仅当场内碱性清洗或表面准备槽使用氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：按溶液质量和实测浓度计算加入的有效氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_materials`
- 来源：

###### 工艺用水（`surface_process_water`）

记录供应给场内清洗和漂洗工序的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量水质量，或以有文件记录的密度将体积换算为质量并分配给处理部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_utilities`
- 来源：

###### 固化用天然气（`surface_natural_gas`）

仅当在场内燃烧天然气为涂层烘炉供热时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量并修正到所声明参考条件的天然气体积，分配给合格涂装部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_utilities`
- 来源：

###### 表面处理用电（`surface_treatment_electricity`）

记录清洗、泵送、通风、涂装和固化设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或将报告期电表量分配给合格处理部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 金属表面处理废水（`metal_finishing_wastewater`）

记录场内金属清洗和漂洗产生、在处理或场外转移前离开过程的水性废水；天工 UUID 尚未解决。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或按有文件记录的密度将体积换算为质量并分配给处理部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_wastes`
- 来源：

###### 粉末涂装废弃物（`powder_coating_waste`）

记录作为单独管理废物离开过程的废粉末涂料及喷房/过滤器残渣。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：称量转移至已声明处理去向的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：一件成品的一套合格涂装部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_wastes`
- 来源：

##### 基本流

###### 固化过程化石源二氧化碳（`surface_fossil_carbon_dioxide`）

仅记录场内天然气燃烧直接排放的化石源二氧化碳；本基本流不含天然气上游和外购电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放质量，或按场址燃料碳平衡计算并分配给合格处理部件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：一件成品的一套合格处理部件
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_direct_emissions`
- 来源：

### 过程：最终总装、出厂测试和包装（`assembly_testing_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录用于发运一件成品的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：一件发运产品所消耗纸箱的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：

###### PE-LD 薄膜（`pe_ld_film`）

记录用于包裹或保护一件成品的低密度聚乙烯薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：一件发运产品所消耗 PE-LD 薄膜的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一件已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 木托盘（`wooden_pallet`）

仅在木托盘随产品发运时记录，并声明托盘复用及分配。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量乘以有文件记录的单件发运产品分配份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一件已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 总装、测试和包装用电（`assembly_packaging_electricity`）

记录最终总装工具、调节/功能测试和包装设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或将报告期电表量分配给质量放行产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 质量放行的医疗家具或合格多运动椅具（`reference_product`）

仅在完整产品通过声明的出厂质量和调节功能测试后记录该产品。

- 选定流：医疗、外科、牙科或兽医用的家具，理发椅及类似有旋转、可躺及升降的椅子 `e39dcb5d-76b1-4daa-b234-4016b382ad57`
- 流属性/单位：Mass / kg
- 数量规则：一件质量放行成品的实测净质量，不含运输包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一件质量放行成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product_release`
- 来源：un-cpc-3-0-structure-2025

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多产品制造 | 在技术可行时，先对产品线、表面处理批次和测试单元进行细分和计量，再实施分配。 |  |
| `allocation_shared_utilities` | 共用电力、燃料和水 | 优先使用过程分表；否则采用机器时间、处理面积、槽液处理量或产品质量等能因果表征资源使用的有文件记录物理驱动因子。 |  |
| `allocation_scrap` | 钢、铝和涂料废物 | 在前景边界记录实测外运废物及其实际去向；不得在本从摇篮到工厂门清单内主张避免原生材料生产的抵扣。 |  |
| `allocation_rework` | 返工和不合格品 | 将返工和不合格品负荷分配给引起这些负荷的报告期合格产出；披露异常生产批次，不得省略未通过的出厂测试。 |  |
| `allocation_pallet_reuse` | 可复用木托盘 | 按有文件记录的发运使用次数或其他可审计物理复用记录分配托盘质量；单次使用假设必须明确。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_components` | `material_fabrication` | 每种具名采购材料或部件 | 经批准材料清单、领退料记录、供应商规格、复核称重 | 型号；批次；物料代码；件数；领用质量；退料质量；装入质量；供应商质量 | 将生产订单与库存领退料核对，并通过称重核实件数到质量的换算 | kg 和件数 | 每个生产订单；每月核对 | 代表性报告年度或声明生产批次 | 数据集内全部制造场址 | 汇总合格产品净领用质量并按质量放行件数归一化 | 经批准 BOM 版本、校准秤记录、供应商证明、库存核对 |
| `cp_process_electricity` | `material_fabrication`; `assembly_testing_packaging` | 外购电力 | 分表、总表和生产日志 | 表计起止；倍率；过程；运行时间；合格件数 | 读取专用分表，或用有文件记录的物理驱动因子分配场址总表 | MJ | 每月及生产批次边界 | 与生产产出相同期间 | 报告场址边界 | 扣除有记录的非生产负荷，按过程分配并按合格件归一化 | 表计校准/状态、发票核对、分配工作表 |
| `cp_fabrication_scrap` | `material_fabrication` | 每种具名金属废料 | 磅单、废料箱日志、转移联单 | 材料身份；毛重；皮重；净重；内部回用；去向 | 称量分类废料并与材料质量平衡核对 | kg | 每次转移；每月核对 | 与材料消耗相同期间 | 报告场址制造区域 | 按材料汇总净外运量并按合格件归一化 | 校准秤、转移文件、质量平衡核查 |
| `cp_surface_materials` | `surface_treatment` | 每种具名涂料或槽液化学品 | 采购、领用、浓度和回收记录 | 产品身份；溶液质量；有效浓度；领用质量；回收质量；批次 | 核对化学品/涂料领用与回收，适用时计算有效物质量 | kg | 每次槽液配制或涂装批次 | 与已处理产出相同期间 | 场内表面处理边界 | 汇总净消耗质量，分配给合格处理部件 | SDS/产品规格、浓度检测、库存核对 |
| `cp_surface_utilities` | `surface_treatment` | 工艺用水、天然气和电力 | 水/气/电表及处理日志 | 表计起止；修正系数；参考条件；处理批次；合格产出 | 使用专用表计或有文件记录的因果分配 | kg、m3 和 MJ | 可计量时逐批；至少每月 | 与表面处理产出相同期间 | 场内表面处理边界 | 修正单位/参考条件，分配给合格处理部件并按件归一化 | 表计校准/状态、发票、批次记录 |
| `cp_surface_wastes` | `surface_treatment` | 每种具名废水或涂料废物 | 排放表、罐体/磅单、联单 | 废物身份；数量；密度；处理；去向；日期 | 计量或称量每种分类废物并与投入核对 | kg | 每次排放/转移；每月核对 | 与表面处理投入相同期间 | 从场内产生点到第一废物接收方 | 按废物身份汇总实际外运质量并按件归一化 | 排放记录、密度测量、废物联单、质量平衡核查 |
| `cp_surface_direct_emissions` | `surface_treatment` | 化石源二氧化碳直接排放 | 烟气测量或场址燃料碳平衡 | 烟气流量；浓度；时间；气体体积；燃料碳含量；氧化基准；分配驱动因子 | 测量烟气排放质量，或根据计量燃料及有文件记录的碳平衡计算 | kg | 每次测试或报告期 | 与固化燃料相同期间 | 场内直接排放边界 | 仅计算直接化石 CO2 并分配给合格处理部件 | 仪器校准、燃料实验室数据、计算工作表 |
| `cp_packaging_components` | `assembly_testing_packaging` | 每种具名包装组件 | 包装 BOM、领用记录、复核称重、复用日志 | 组件身份；件数；单件质量；消耗质量；复用次数；产品件数 | 称量包装，或将领用件数乘以经核实单件质量 | kg 和件数 | 每种包装配置；每月核对 | 与发运产出相同期间 | 报告场址包装边界 | 按组件和有文件记录的复用情况计算每件发运产品的分配质量 | 经批准包装 BOM、秤记录、托盘复用日志 |
| `cp_reference_product_release` | `assembly_testing_packaging` | 参考产品 | 最终质量放行、功能测试和称重记录 | 序列号/型号；配置；净质量；测试结果；处置；日期 | 按要求称量每个型号样本或每件产品，仅计入合格放行产出 | kg 和件数 | 每件或有统计依据的批次 | 完整报告期 | 数据集内全部场址和型号 | 汇总放行净质量和件数，报告单件质量及变异性 | 校准秤、签署测试记录、不符合项日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | 具名 BOM 材料 | 材料净投入 = 领用质量 − 有记录的未用退料；外运废料应单列，不得从采购投入交换中扣除 | 领用质量；退料质量；合格件数 | kg/件 |  |
| `calc_count_to_mass` | 螺钉和包装 | 组件质量 = 安装或领用件数 × 批次特定核实单件质量，并与复核称重核对 | 件数；核实单件质量；复核称重 | kg/件 |  |
| `calc_active_sodium_hydroxide` | 氢氧化钠 | 有效 NaOH 质量 = 溶液质量 × 实测质量分数；保留浓度和溶液状态记录 | 溶液质量；实测浓度 | kg 有效 NaOH/件 |  |
| `calc_process_allocation` | 共用公用工程表计 | 单件过程交换 = 修正后报告期过程数量 × 因果分配份额 ÷ 合格件数 | 修正表计量；分配驱动因子；合格件数 | 行单位/件 |  |
| `calc_surface_fossil_co2` | 固化直接排放 | 使用实测烟气质量，或按计量天然气和有文件记录的燃料碳平衡计算化石 CO2；排除上游供应和电力排放 | 烟气数据或修正气量；燃料碳含量；氧化基准；分配驱动因子 | kg 化石 CO2/件 |  |
| `calc_mass_balance` | 制造和表面处理 | 将具名材料投入与产品含量、内部退回、具名废物和有记录的库存变化核对，并调查无法解释的差异 | 投入、退回、产品、废物和库存变化质量 | 质量平衡闭合及异常记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每种代表配置保留型号、预期用途、调节机构、所含电子/设备部件、软包/表面处理、性能等级、净质量和市场状态。 | 经批准规格、BOM、图纸、质量放行记录 |
| `dq_temporal_match` | 全部前景交换 | 使用同一代表性年度或声明批次的投入、废物、排放和合格产出记录；解释替代数据和启停效应。 | 带日期表计、发票、生产日志、联单 |
| `dq_site_coverage` | 多场址数据集 | 纳入实施范围内制造步骤的每个场址，或声明排除项及其定量重要性。 | 场址清单、过程图、合并台账 |
| `dq_meter_and_scale` | 实测数量 | 记录校准或核实状态、分辨率、缺失数据处理以及单位/参考条件换算。 | 校准证书、核实日志、计算工作簿 |
| `dq_bom_completeness` | 材料和包装 | 将经批准材料和包装 BOM 与清单核对；必须明确披露表面处理材料和电气/电子部件。 | 签署的 BOM 核对和异常清单 |
| `dq_waste_destination` | 每项废物流 | 保留废物身份、适用时的危险属性、第一接收方、处理路线以及是否内部回用。 | 废物联单、接收方记录、内部回用日志 |

## 9. 校验规则

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认输出恰为一件质量放行的完整产品，其实测净质量使用参考 UUID，且该净质量不含包装。 | un-cpc-3-0-structure-2025 |
| `validate_scope_identity` | 产品类别 | 确认产品具有专用医疗、外科、牙科或兽医家具功能，或确认理发椅/类似椅具同时具有旋转、可躺和升降运动。 | un-cpc-3-0-structure-2025 |
| `validate_atomic_inventory` | 全部清单行 | 拒绝集合标签和组合交换；每行必须保留一个具体流、一个方向、一个流类型、一个属性和一个单位。 |  |
| `validate_conditional_routes` | 路线特定行 | 条件性材料、部件、表面处理、燃料、废物或包装行仅在其具名路线发生时出现，不得以其他流静默替代。 |  |
| `validate_mass_balance` | 制造和表面处理 | 核对投入、退回、产品含量、具名废物和库存变化；在数据集放行前调查并披露无法解释的差异。 |  |
| `validate_direct_emissions` | 化石源二氧化碳 | 确认该行仅含场内化石 CO2 直接排放，不含天然气上游和外购电力排放。 |  |
| `validate_source_and_uuid_gaps` | 未解决清单 | 在审查元数据中保留 UUID 为空的行和范围证据需求；不得替换为代理 UUID 或无依据数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品和场址特定的从摇篮到制造商工厂门前景数据集，经审查后可受控发布为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 医疗、外科、牙科或兽医用家具及合格多运动椅具的供应链 LCA；仅当参考流、配置、边界和数据质量一致时用于产品制造比较 |
| allowed_use | 适用于所声明的型号/配置、制造地理范围、技术、报告期和新制/再制造状态；仅使用披露的产量加权记录汇总变体 |
| excluded_use | 不代表配送、安装、使用寿命、临床使用、维护、修理、更换或生命末期；不适用于普通家具、独立设备或单独销售的零部件 |
| required_metadata | 规范 PCR id；产品子类型/预期用途；型号/配置；机构和电子部件；软包/表面处理；性能等级；净质量；包装；场址/地理范围；报告期；市场状态；分配；数据源；未解决身份和范围需求 |
| required_quality_disclosure | 前景覆盖、表计/秤状态、BOM 核对、时间和场址代表性、分配驱动因子、质量平衡异常、废物去向以及任何代理或缺失数据 |
| update_trigger | 产品配置或机构、材料/表面处理/包装 BOM、制造场址或路线、能源供应、分配方法、废物处理、报告期代表性、参考 UUID 或已解决清单 UUID 发生变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48180 分类身份和英文标题 |
| `un-cpc-1-1-zh-2002` | `official_guidance` | 联合国，《产品总分类版本 1.1》中文版，ST/ESA/STAT/SER.M/77/Ver.1.1，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | 核实稳定 48180 类别的专业中文术语 |
| `epd-norway-npcr-026-2024` | `official_guidance` | 挪威 EPD 基金会，NPCR 026《家具和家具部件 B 部分》，3.0 版，2024 年 10 月 8 日发布，https://www.epd-norge.no/getfile.php/13161869-1741627951/PCRer/NPCR%20026%20%20Furniture_update_2024_v3.0_final-2.pdf | 完整家具和部件范围、按件参考、电动家具、产品阶段表面处理、材料披露及下游阶段区分 |
| `eu-ecolabel-furniture-2016` | `standard` | 欧盟委员会 2016 年 7 月 28 日第 (EU) 2016/1332 号决定（确立家具欧盟生态标签准则），https://eur-lex.europa.eu/eli/dec/2016/1332/oj/eng | 家具定义以及框架、紧固件、织物、涂层织物和聚氨酯泡沫等原子部件/材料术语 |
