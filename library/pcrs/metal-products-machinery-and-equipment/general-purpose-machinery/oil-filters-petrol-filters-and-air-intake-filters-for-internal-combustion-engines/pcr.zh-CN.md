---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.oil-filters-petrol-filters-and-air-intake-filters-for-internal-combustion-engines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 内燃机用机油滤清器、汽油滤清器及进气滤清器

## 1. 范围与适用性

本 PCR 适用于内燃机用成品机油滤清器、汽油滤清器及进气滤清器的工厂生产。它支持针对某一明确滤清器设计和生产场址建立产品特定的门到门前景数据集。外购材料与能源的上游生产、配送、安装、发动机使用、滤清器更换及报废处理不属于前景过程；研究纳入这些阶段时应另行链接相应数据集。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.oil-filters-petrol-filters-and-air-intake-filters-for-internal-combustion-engines |
| classification_refs | CPC 3.0：43915 |
| covered_products | 专为内燃机设计的成品机油滤清器、汽油滤清器及进气滤清器。 |
| excluded_products | 仅用于柴油的燃油滤清器；CPC 43914 下的一般液体或气体过滤设备；单独销售的过滤介质；催化式排气后处理装置；更换、使用和报废服务。 |
| representative_product | 一件具有明确类型、设计、过滤等级和交付状态的可销售滤清器。 |
| production_route | 将处理后的过滤介质与明确的结构件、密封或粘接化合物和销售包装进行转化与装配。 |
| market_state | 在制造厂门完成质量放行并包装的成品。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一件内燃机用成品机油滤清器、汽油滤清器或进气滤清器。 |
| How much | 1 kg 经质量放行的滤清器净重，不含第三级运输包装。 |
| How well | 符合所声明的产品规范以及适用于所选滤清器类型的性能试验规程。 |
| How long or cycle | 一个制造批次或报告期生产汇总量，归一化为 1 kg 合格产出。 |
| reference_flow_link | 过程 `filter_manufacture` 的参考产品输出行 `reference_product`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 机油滤清器、汽油过滤器及内燃机进气过滤器 `0e3e8dc9-4b71-41a8-9e9f-0a6b2938317c` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 滤清器类型；过滤介质及等级；额定流量或公称尺寸；适用的性能试验规程；产品图纸或型号；制造场址及地理范围；报告期；产品净重约定；包装纳入范围；质量放行状态 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失任何限定信息均使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_mass_product_material_waste | 参考产品、材料输入及固态或半固态废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的质量记录，并将净量归一化至 1 kg 合格参考产品。除非具有文件化的质量换算，不得用面积或件数替代。 |
| mu_electricity_energy | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量的 kWh 换算为 MJ，并记录电表边界、电压、电网地理范围和损耗约定。 |
| mu_direct_air_emission | 非甲烷挥发性有机化合物直接排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告测量或计算得到的空气排放质量；排除外购投入数据集已表征的上游排放。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 外购处理滤纸、结构钢制件、端盖、PVC 粘接或密封化合物、电力及瓦楞纸箱到达工厂门。 |
| starting_condition_role | 这些外购交换跨越前景边界；其上游生产由独立的供应商数据集表征。 |
| product_classification_scope | 仅限 CPC 43915 内燃机用成品机油滤清器、汽油滤清器及进气滤清器。 |
| recursive_input_rule | 将每一种实际使用的材料、能源载体、辅料、包装组件、直接排放和废物分别作为原子交换纳入；不得用伞形流替代。 |
| upstream_dataset_requirement | 将每项外购交换链接至地理、技术和产品状态具有代表性的上游数据集，不得把该上游数据集的内部交换导入本前景过程。 |
| disclosure | 声明滤清器类型、介质、所用零部件和化合物、场址、报告期、不合格品处理、包装边界及对本门到门边界的任何偏离。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_required_operations | `filter_manufacture` | 纳入场址内所有适用的放卷、预热、打褶、固化、切割、夹合、内外支撑件和端盖制备、装配、化合物施用、最终固化或冷却、质量控制及销售包装作业。 | `unido-automotive-filter-plant` |
| sb_purchased_inputs | 外购投入 | 将每一种实际使用的材料、辅料、能源和包装组件在工厂门的数量分别作为交换纳入；所列化合物或零部件不适用于声明设计时采用条件行，缺少实际原子交换时另行增补。 | `unido-automotive-filter-plant` |
| sb_direct_outputs | 直接输出 | 纳入合格产品、滤纸边角料、产生时的 PVC 废物、钢废料、产生时的纸板包装废物及直接排放的非甲烷挥发性有机化合物；其他实测场址废物或直接排放应分别增设原子交换。 | `unido-automotive-filter-plant` |
| sb_exclusions | 生命周期阶段 | 前景过程不包含外购数据集内部的上游生产；除非对研究具有重要性，不包含资本品、员工出行、配送、安装、发动机使用、维护、更换及报废；研究层面的额外纳入应单独披露。 |  |
| sb_type_performance | 产品鉴定 | 对所选机油、汽油或进气滤清器类型采用并声明适用的采购方、法规或标准性能规程。试验负荷仅在报告边界内发生时进入清单。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| filter_manufacture | 内燃机滤清器转化、装配、整理、质量控制及包装 | required | 成品滤清器数据集始终纳入；仅保留适用于声明设计的行，并补充任何缺失的实际原子交换。 | 前景生产 | 1 kg 合格成品滤清器 |

### 过程：内燃机滤清器转化、装配、整理、质量控制及包装（`filter_manufacture`）

#### 输入

##### 产品流

###### 处理后的过滤介质（`resin_treated_filter_paper`）

树脂处理纤维素滤纸跨越工厂边界，并经打褶、固化和切割转化。记录滤纸等级及供货固化状态。

- 选定流：树脂处理纤维素滤纸
- 流属性/单位：质量 / kg
- 数量规则：采集净领用质量减有凭证的退库质量，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### PVC 增塑糊（`pvc_plastisol`）

声明的进气滤清器设计使用增塑糊粘接或密封介质时，将 PVC 增塑糊作为原子化合物投入；未使用时省略本行。

- 选定流：聚氯乙烯增塑糊
- 流属性/单位：质量 / kg
- 数量规则：采集批次领用质量减有凭证的可复用退料，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### PVC 胶粘剂（`pvc_adhesive`）

声明的机油或汽油滤清器设计使用 PVC 胶粘剂粘接滤芯时记录本行；使用其他胶粘剂或不使用胶粘剂时省略本行，并分别记录实际化合物。

- 选定流：聚氯乙烯胶粘剂
- 流属性/单位：质量 / kg
- 数量规则：采集批次领用质量减有凭证的可复用退料，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### 冷轧钢带（`cold_rolled_steel_strip`）

冷轧钢带在制成夹片或其他明确的结构件时跨越边界。记录牌号、涂层状态和厚度。

- 选定流：冷轧钢带
- 流属性/单位：质量 / kg
- 数量规则：采集领用质量减有凭证的可复用退料，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### 钢板网（`expanded_steel_sheet`）

钢板网用作内支撑件或外支撑件时跨越边界。记录合金、涂层状态、厚度和网孔规格。

- 选定流：钢板网
- 流属性/单位：质量 / kg
- 数量规则：采集领用质量减有凭证的可复用退料，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### 冲压钢制滤清器端盖（`stamped_steel_filter_end_cap`）

冲压钢制滤清器端盖作为外购部件跨越工厂边界时记录本行。记录涂层、尺寸，以及端盖为外购还是场内制造。

- 选定流：冲压钢制滤清器端盖
- 流属性/单位：质量 / kg
- 数量规则：采集投入生产的合格部件质量，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

###### 外购电力（`electricity`）

外购电力跨越场址电表边界，为适用的转化、固化、装配、整理及质量控制作业供能。适用时将场内发电另列一行。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：汇总分配后的计量 kWh 并换算为 MJ，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`unido-automotive-filter-plant`

###### 瓦楞销售包装箱（`corrugated_board_boxes`）

用于已放行滤清器销售包装的瓦楞纸箱跨越边界。排除声明的工厂门产品状态以外的第三级运输包装。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：采集纸箱领用量减可复用退回量，并将其质量归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-automotive-filter-plant`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品内燃机滤清器（`reference_product`）

本流为工厂门完成质量放行的成品滤清器，是所有归一化交换的定量参考。

- 选定流：机油滤清器、汽油过滤器及内燃机进气过滤器 `0e3e8dc9-4b71-41a8-9e9f-0a6b2938317c`
- 流属性/单位：质量 / kg
- 数量规则：固定为 1 kg 合格成品净重。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 滤纸边角料（`filter_paper_offcuts`）

记录离开生产系统并进入声明处理路线的树脂处理纤维素滤纸边角料；不得与钢、PVC 或一般废物合并。

- 选定流：树脂处理纤维素滤纸边角料
- 流属性/单位：质量 / kg
- 数量规则：采集分类外运质量并计入有凭证的库存变化，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-automotive-filter-plant`

###### PVC 废物（`pvc_waste`）

在增塑糊或 PVC 胶粘剂产生分类 PVC 化合物废物时记录本行。声明其固化状态及处理去向。

- 选定流：废聚氯乙烯（PVC） `cacd273c-d5c5-4f38-91c2-660d8a86498b`
- 流属性/单位：质量 / kg
- 数量规则：采集分类外运质量并计入有凭证的库存变化，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-automotive-filter-plant`

###### 钢废料（`steel_scrap`）

记录离开生产系统的分类钢制切割、冲压和修边废料；不得用回收废料抵减外购钢投入。

- 选定流：钢废料 `e01acc57-fdaf-4176-89ab-6e0d85de7df4`
- 流属性/单位：质量 / kg
- 数量规则：采集分类外运质量并计入有凭证的库存变化，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-automotive-filter-plant`

###### 纸板包装废物（`cardboard_packaging_waste`）

记录工厂边界内产生的纸板包装废物，并与纳入可销售产品的瓦楞纸箱分开。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 / kg
- 数量规则：采集分类外运质量并计入有凭证的库存变化，归一化至 1 kg 合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-automotive-filter-plant`

##### 基本流

###### 非甲烷挥发性有机化合物直接排入空气（`nmvoc_to_air`）

记录前景场址化合物施用和固化过程中直接释放的非甲烷挥发性有机化合物。采用实测废气质量或有凭证的化合物质量平衡，并排除上游排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：根据实测废气或场址化合物质量平衡计算直接释放量，归一化至 1 kg 合格产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品滤清器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_direct_measurement | 生产线和计量表 | 优先采用产品线直接测量或分表计量；专用于声明滤清器产品的投入和输出直接归属。 |  |
| al_mass_shared_operations | 共用转化及装配作业 | 无法直接测量时，仅在质量是合理驱动因素并有文件说明的情况下，按合格产品质量分配同质共用作业的投入和输出。 |  |
| al_causal_shared_energy | 共用固化、通风和质量控制能源 | 采用设备运行时间乘以额定或实测负荷等因果驱动因素；仅在没有更优因果驱动因素时使用质量，并披露敏感性。 |  |
| al_scrap_no_credit | 可回收废料和包装废物 | 在前景边界报告废物质量，不给予避免负担抵扣；任何回收抵扣或替代均属于下游研究并应单独披露。 |  |
| al_rework | 内部返工 | 返回同一生产系统的材料留在边界内；仅计入新增能源、损耗和最终外运废物，防止重复计算返工质量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_inputs | filter_manufacture | 每一种原子材料、组件及销售包装投入 | 库存领用、采购、批次或称量记录 | 物品标识；等级或规格；期初库存；入库；期末库存；退库；领用质量；批次；产品系列 | 核对仓储和批次记录；件数或面积仅可按有凭证的实测质量因子换算。 | kg | 每批次并每月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 声明的制造场址和产品线 | 汇总归属于声明产品的净消耗质量，再除以合格产出质量。 | 经校准称量记录、ERP 导出、发票、物料清单和库存核对。 |
| cp_electricity | filter_manufacture | 外购电力 | 结算电表、分表或设备能源日志 | 电表标识；期初期末读数；kWh；电压；电网供应商；设备运行时间；分配驱动因素 | 优先采用产品线分表；否则按有凭证的因果驱动因素分配场址电表用量。 | kWh | 电表间隔或每月 | 与产品产出相同期间 | 声明场址及纳入设备 | 汇总归属 kWh，乘 3.6 后除以合格产出质量。 | 电表校准、账单、分表日志和分配工作表。 |
| cp_product_output | filter_manufacture | 合格产品及不合格产出 | 生产和质量放行记录 | 滤清器类型；型号；批次；总产出；不合格质量；返工；放行净质量；包装约定 | 将生产总量与质量放行及称量记录核对。 | kg | 每批次 | 与投入相同期间 | 声明场址和产品线 | 按声明包装约定仅汇总质量放行的产品净重。 | 质量放行、经校准称量记录和生产台账。 |
| cp_waste_outputs | filter_manufacture | 每一种分类废物输出 | 废物称重单、容器日志及库存记录 | 废物标识；污染或固化状态；处理去向；期初库存；产生估算；外运质量；期末库存 | 称量每种分类流并核对临时贮存库存变化。 | kg | 每次外运并每月核对库存 | 与投入相同期间 | 声明场址及纳入作业 | 外运质量 + 期末库存 - 期初库存，再除以合格产出质量。 | 称重单、承包商凭证、容器日志和库存核对。 |
| cp_direct_air_emissions | filter_manufacture | 非甲烷挥发性有机化合物直接排放 | 烟道或工作场所排风试验及化合物质量平衡记录 | 化合物投入；VOC 比例；留存质量；捕集质量；销毁质量；废气流量；浓度；试验持续时间 | 优先采用有代表性的实测废气质量；否则采用有凭证的场址特定化合物质量平衡。 | kg | 代表性试验并与报告期核对 | 与化合物使用及产品产出相同期间 | 声明场址内服务于纳入作业的排放点 | 汇总未捕集的直接释放量并除以合格产出质量；不纳入上游排放。 | 实验室报告、采样方法、流量校准、安全数据和质量平衡工作表。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_material_intensity | 原子材料及包装投入行 | 净消耗质量 = 期初库存 + 入库 - 期末库存 - 退库；强度 = 可归属净消耗质量 / 合格产品质量 | 期初库存；入库；期末库存；退库；归属份额；合格产品质量 | kg 投入/kg 参考产品 | `unido-automotive-filter-plant` |
| calc_electricity | 电力行 | 电力强度 = 可归属计量 kWh × 3.6 / 合格产品质量 | 计量 kWh；因果分配驱动因素；合格产品质量 | MJ 电力/kg 参考产品 |  |
| calc_waste_stock_change | 每个废物行 | 废物产生量 = 外运废物 + 期末废物库存 - 期初废物库存；强度 = 废物产生量 / 合格产品质量 | 外运废物；期初废物库存；期末废物库存；合格产品质量 | kg 废物/kg 参考产品 |  |
| calc_nmvoc_release | 非甲烷挥发性有机化合物直接排放行 | 直接释放量 = 实测废气质量，或化合物投入 × VOC 比例 - 留存 VOC - 捕集 VOC - 销毁 VOC；强度 = 直接释放量 / 合格产品质量 | 废气测量或化合物投入；VOC 比例；留存质量；捕集质量；销毁质量；合格产品质量 | kg 非甲烷挥发性有机化合物/kg 参考产品 |  |
| calc_mass_reconciliation | 前景过程 | 核对全部可归属材料投入与合格产品、外运废物、实测直接质量排放及有凭证的库存变化；调查原因，不得强制关闭无法解释的不平衡。 | 全部质量投入；产品输出；废物输出；直接质量排放；库存变化 | 核对结果及无法解释的质量不平衡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_temporal | 全部前景行 | 使用内部一致的代表期，通常为连续 12 个月或完整生产活动期，并披露停产、异常批次和替代。 | 带日期的生产、计量、采购、废物和质量记录。 |
| dq_technological | 产品和过程 | 匹配声明的滤清器类型、介质等级、结构设计、粘接路线、固化设备和性能规程。 | 产品图纸、物料清单、作业指导书和试验声明。 |
| dq_geographical | 场址和外购投入 | 声明制造地理范围、电力供应区域及材料链接的供应商地理范围。 | 场址元数据、公用事业合同和供应商记录。 |
| dq_completeness | 清单 | 核对所有适用的原子行，并分别补充实际遗漏的材料、辅料、能源载体、废物和直接排放；说明零值或不适用行。 | 签署的完整性检查表及质量/能源核对。 |
| dq_measurement | 定量记录 | 记录仪器、校准、换算、分配驱动因素以及不确定性或数据缺口。 | 校准证书、换算工作表和分配文件。 |
| dq_identity | 含 UUID 的交换 | 保留经审计的 TianGong 正式名称、流类型、分类、属性和单位组；UUID 未解决时保持为空，不得采用代理流。 | 最终化混合检索回执及公开状态码 100 直接读取。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference | 参考产品 | 要求恰有一个 `reference_product` 输出，固定为 1 kg，并采用已确认的 CPC 43915 产品流 UUID 及质量单位组。 | `un-cpc-3-0-structure-2025` |
| val_inventory_accounting | 清单 | 要求每个适用的实际交换均为原子行，且清单总行数等于 UUID 已匹配行数加明确的未解决行数。 |  |
| val_units | 数量 | 要求质量行使用 kg、电力使用 MJ，并核验所有换算及归一化分母。 |  |
| val_conditionals | 设计特定行 | 仅在实际使用或产生时要求 PVC 增塑糊、PVC 胶粘剂、各结构件及相关废物；用实际原子设计特定交换替换或补充。 | `unido-automotive-filter-plant` |
| val_mass_balance | 前景过程 | 要求有文件化的质量核对并调查无法解释的不平衡；不得通过增加未明确废物或排放来强制平衡。 |  |
| val_performance | 产品声明 | 要求声明滤清器类型及适用性能规程，包括与该类型相关的阻力或压差和过滤性能属性。 |  |
| val_ranges | 外部范围 | 除非至少有两个相互独立且经原文验证的来源具有兼容的边界、功能单位和产品状态，否则不得应用外部数值范围；证据不足时保留前景采集及未解决的范围证据需求。 |  |
| val_bilingual | 双语投影 | 要求中英文具有相同的过程 ID、行 ID、UUID、计算和规范规则 ID、受控词元及行顺序。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | CPC 43915 成品内燃机滤清器的产品特定门到门前景生产数据集。 |
| downstream_use | 在生命周期模型中链接代表性上游数据集，以及需要时的下游配送、使用、更换和报废过程。 |
| allowed_use | 在滤清器类型、性能、产品状态、地理、技术、报告期和边界兼容且充分披露时，用于比较性或非比较性 LCA。 |
| excluded_use | 不得在无充分限定时代理仅用于柴油的滤清器、一般过滤设备、散装过滤介质、排气后处理装置、使用阶段性能或从摇篮到坟墓结果。 |
| required_metadata | PCR id；滤清器类型和型号；CPC 代码；介质和等级；额定流量或公称尺寸；性能规程；场址和地理范围；期间；技术；包装约定；UUID 审计状态；分配；数据缺口。 |
| required_quality_disclosure | 一手数据覆盖；测量和校准；材料及质量核对；因果分配；不合格品和返工处理；未解决 UUID；未解决范围证据；偏离。 |
| update_trigger | 滤清器设计、介质或化合物配方、结构件、工艺设备、能源供应、场址、分配基础、性能规程、包装、处理路线或代表期发生变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43915 官方产品标识，以及与相邻 CPC 43914 的区分。 |
| unido-automotive-filter-plant | official_guidance | 联合国工业发展组织中小企业处，第四卷，“Automotive Filter Plant”，File Q47，https://downloads.unido.org/ot/48/20/4820501/vol4.pdf | 经原文验证的转化、装配、固化、质量控制、包装、材料和电力过程候选；未采用数值清单范围。 |
