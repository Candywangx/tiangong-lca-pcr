---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-ignition-or-starting-equipment-of-a-kind-used-for-internal-combustion-engine-dccedb01
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 内燃机用电点火或起动设备；与内燃机配套使用的发电机及断流器；自行车或机动车辆用电气照明或信号设备（白炽灯或放电灯除外）、风窗刮水器、除霜器及除雾器

## 1. 范围与适用性

本 PCR 适用于下列成品的从工厂门到工厂门制造：内燃机用电点火或起动设备；与内燃机配套使用的发电机及断流器；以及自行车或机动车辆用电气照明或信号设备、风窗刮水器、除霜器和除雾器。边界覆盖申报制造场址内的成形、注塑、绕组制造、适用时的表面处理、装配、测试和包装。

本 PCR 不包括白炽灯和放电灯、作为单独产品供应的点火线束、通用连接器或引线、内燃机、动力蓄电池、整车或整车装配、出厂后的配送、使用、维护和报废阶段。采购的材料和部件以制造场址门口为进入点，并分别链接上游数据集；本前景模块不构成从摇篮到坟墓的结果。

由于本类别包含功能不同的成品，每个数据包必须申报一个代表性产品族，不得平均合并起动机、发电机、照明设备、信号设备、刮水器、除霜器和除雾器，除非披露按产量加权的产品组合及全部实质性材料差异。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-ignition-or-starting-equipment-of-a-kind-used-for-internal-combustion-engine-dccedb01 |
| classification_refs | CPC 3.0：46910（精确分类语境；本 PCR 不主张已存在获接受的映射边） |
| covered_products | 成品火花点火设备和起动设备；与发动机配套的发电机和断流器；自行车或机动车辆用电气照明或信号设备（白炽灯或放电灯除外）；风窗刮水器；除霜器；除雾器 |
| excluded_products | 白炽灯；放电灯；单独供应的点火线束；通用带连接器引线；内燃机；蓄电池；整车；维修和更换服务 |
| representative_product | 一个已申报且满足相应电气、机械、光学、刮水、除霜或除雾性能要求的成品设备族及型号 |
| production_route | 产品特定的金属成形、聚合物注塑、绕组制造、水基清洗或表面处理、装配、功能测试和包装组合 |
| market_state | 制造场址工厂门口的可销售成品，产品净质量不含运输包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造场址工厂门口提供本产品类别内已申报的一种成品 |
| How much | 1 kg 可销售成品净质量，不含运输包装质量 |
| How well | 符合所申报型号适用的电气、机械、光学、刮水、除霜或除雾性能规范，并通过例行最终检验 |
| How long or cycle | 一个报告期内的生产输出；不包含车辆使用寿命性能 |
| reference_flow_link | 过程 `integrated_equipment_manufacturing` 的参考产品输出行 `out_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于内燃机的电点火或起动设备，用于与内燃机配用的发电机及断电器，脚踏车或机动车辆用电力照明设备或信号设备（白炽灯或放电灯除外）、风挡刮水器、去霜器和去雾器 `46a4d7e0-db60-4f6d-a637-28140132c05d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 申报的设备族及型号；点火、起动、发电、断流、照明、信号、刮水、除霜或除雾功能；车辆或自行车应用；适用的额定电压、功率、转矩、光输出、刮水性能或热性能；产品净质量；生产路线；材料组成或物料清单；再生材料含量声明；场址和国家；报告期；包装配置；合格判定规范；分配方法 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有过程交换归一化至 1 kg 合格成品。瓦楞纸箱质量不计入参考产品质量，但必须作为单独输入纳入清单。 |
| `mass_balance_basis` | 材料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 领料、发料、产出和废物应采用经校准的计量，并保持干基/湿基及毛重/净重一致；若水分或涂层基准具有实质影响，必须申报。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始记录，并严格按 1 kWh = 3.6 MJ 换算；不得把电力作为质量流。 |
| `gas_reference_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 申报计量温度、压力以及体积为标准体积还是实际体积；无成分和密度文件时不得换算成质量。 |
| `sludge_basis` | 含金属表面处理污泥 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告湿污泥质量和实测干物质分数，禁止混用湿基和干基数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的原材料、成形部件、化学品、公用工程和包装进入申报制造场址门口，并披露供应商身份和上游数据集链接。 |
| starting_condition_role | 一体化设备制造从工厂门到工厂门前景起点 |
| product_classification_scope | CPC 46910 语义边界内一个已申报成品设备族；仅在披露产量权重和型号组成时允许产品组合平均。 |
| recursive_input_rule | 若采购输入本身属于本 PCR 产品类别，应作为独立产品输入并链接其供应商数据集；除非场址实际执行其制造操作，否则不得在同一过程内递归制造。 |
| upstream_dataset_requirement | 每项采购材料、部件、公用工程和包装输入均链接具有地理及技术代表性的上游数据集。供应商数据集未包括入厂运输时，应单独建模运输。 |
| disclosure | 申报场址、报告期、设备族、型号组合、生产路线、外包操作、表面处理化学体系、测试制度、包装、分配、截断以及全部上游数据集边界。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | 前景制造模块 | 纳入在厂内为交付工厂门口参考产品所必需的成形、注塑、绕组制造、清洗或表面处理、装配、功能测试、返工、出厂转移前废物处理及包装。 | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |
| `boundary_conditional_surface_treatment` | 水基清洗或电解/化学表面处理 | 仅当申报路线实际执行该操作时，纳入水、电力、热用燃料、槽液化学品、带出损失、废水处理残渣和直接排放；否则记录为不存在或外包。 | `ec-jrc-stm-bref-2006` |
| `boundary_no_silent_cutoff` | 清单完整性 | 不得仅因材料、能源、废物或基本流数量小而省略。任何截断均须量化、结合研究目标论证，并报告对完整性的估计影响。 | `eu-pef-recommendation-2021` |
| `boundary_exclusions` | 下游生命周期阶段 | 本前景模块不含出厂后配送、安装、车辆使用、更换、维护和报废；研究目标需要时，下游使用者必须补充这些阶段。 | `unece-alca-proposal-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_equipment_manufacturing` | 一体化部件成形、表面处理、装配、测试和包装 | `required` | — | 从工厂门到工厂门前景制造；路线特定操作和流行仅在申报产品实际执行时适用 | 工厂门口 1 kg 合格成品，净质量不含运输包装 |

### 过程：一体化部件成形、表面处理、装配、测试和包装（`integrated_equipment_manufacturing`）

#### 输入

##### 产品流

###### 冷轧非合金钢板（`in_cold_rolled_steel_sheet`）

仅当申报物料清单包含用于外壳、支架、叠片或其他成形件的钢板时记录。经审核的候选项未能同时证实精确的冷轧非合金钢板身份和一致的中英文名称，因此本行 UUID 保持未解决。

- 选定流：冷轧非合金钢板
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减退回的未使用库存质量，并按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 初级铝合金板材（`in_primary_aluminium_alloy_sheet`）

仅当初级铝合金板材作为外壳、支架或散热件的板材进入申报路线时记录。前景记录必须保留合金牌号、状态、厚度和再生材料含量声明。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减退回的未使用库存质量，并按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 绝缘绕组线（`in_magnet_wire`）

当申报的起动机、发电机、刮水器电机、执行器或其他设备含场内制造的绕组时，记录采购的电磁线，并申报导体材料、漆包体系和线规。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减退回线盘及未使用电线质量，并按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 聚酰胺 6 注塑粒料（`in_pa6_granulate`）

仅当申报路线在场内用 PA6 注塑外壳、连接器、风扇、齿轮或其他部件时记录。保留牌号、增强材料、添加剂、再生材料含量和水分调节基准。

- 选定流：聚酰胺6（PA6）粒料 `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- 流属性/单位：Mass / kg
- 数量规则：实测投入注塑的干粒料质量减退料质量，并按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 外购电力（`in_electricity`）

记录前景边界内成形、注塑、绕组制造、清洗、表面处理、装配、测试、返工、场内废物处理和包装所消耗的计量电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至申报产品族的计量电量，并按 `electricity_conversion` 从 kWh 换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`ec-jrc-stm-bref-2006`

###### 气态天然气（`in_natural_gas`）

仅在场内燃烧天然气用于槽液加热、干燥、可分配至生产的空间供暖或其他已申报制造用热时记录。不得把上游燃烧排放作为场址直接排放重复计入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已申报参考条件下计量并归属于生产的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas`
- 来源：`ec-jrc-stm-bref-2006`

###### 工艺用水（`in_process_water`）

场内水基清洗、漂洗、表面处理、冷却补水或其他制造操作使用工艺用水时记录。卫生用水不纳入，除非研究目标明确要求且披露分配方法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量工艺水质量，或用有文件依据的密度将体积换算为质量，再扣除单独计量的内部循环水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`ec-jrc-stm-bref-2006`

###### 水基清洗或处理用氢氧化钠（`in_sodium_hydroxide`）

仅当采购的氢氧化钠被加入场内清洗、蚀刻、处理或废水处理槽时记录。报告溶液质量和 NaOH 活性浓度，以计算活性物质质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：采购溶液质量乘经核实的活性 NaOH 质量分数，并按合格产品产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_chemicals`
- 来源：`ec-jrc-stm-bref-2006`

###### 瓦楞纸箱（`in_corrugated_board_boxes`）

记录随申报产品离开制造场址的瓦楞纸箱。可重复使用运输包装仅按有文件证明的重复使用次数分摊其消耗份额。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品发运所消耗的实测纸箱质量，包括可重复使用纸箱的分摊损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

不规定默认废物输入。若场址使用废物来源材料，应新增原子行记录该具体废物，并披露其法律状态和上游处理边界。

##### 基本流

本前景过程不规定基本流输入。与采购产品相关的资源开采属于其链接的上游数据集。

#### 输出

##### 产品流

###### 合格参考产品（`out_reference_product`）

仅记录通过申报的例行检验并获准销售的成品。送返工的不合格产出保留在过程边界内。

- 选定流：用于内燃机的电点火或起动设备，用于与内燃机配用的发电机及断电器，脚踏车或机动车辆用电力照明设备或信号设备（白炽灯或放电灯除外）、风挡刮水器、去霜器和去雾器 `46a4d7e0-db60-4f6d-a637-28140132c05d`
- 流属性/单位：Mass / kg
- 数量规则：归一化后恰为 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-recommendation-2021`

##### 废物流

###### 钢板边角料和不合格钢制件（`out_steel_scrap`）

记录作为废物从前景场址转移的、分类收集的黑色金属边角料和不合格钢制件。若该输出已终止废物属性并作为共产品销售，应一致地重新分类，并应用第 7 节分配规则。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：称量的场外转移废钢质量减经核实在同一生产系统内循环的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 含金属表面处理废水污泥（`out_metal_bearing_surface_treatment_sludge`）

记录场内处理水基清洗、电镀、阳极氧化或化学表面处理废水后外运的脱水污泥。经审核的候选项未能证实精确的工业含金属污泥，因此本行 UUID 保持未解决。

- 选定流：含金属表面处理废水污泥
- 流属性/单位：Mass / kg
- 数量规则：称量离场湿污泥，并记录干物质分数、处理路线和危险废物分类
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

###### 场内天然气燃烧直接排放的化石源二氧化碳（`out_carbon_dioxide_fossil`）

仅记录在前景边界内由场内燃烧直接排放的化石源二氧化碳。排除上游电力或燃料数据集已包含的二氧化碳，以防重复计算。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据计量天然气消耗量、经核实的气体含碳量、氧化率和碳到二氧化碳的分子质量比计算；具代表性且质量有保证时可采用烟气实测值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线、公用工程和处理系统 | 技术可行时优先直接划分或计量申报设备族。无法直接划分时，才可采用生产时间、设备能耗、槽液装载量或其他因果性物理驱动量。 | `eu-pef-recommendation-2021` |
| `allocation_product_mix` | 多个成品族 | 采用能反映资源使用的、具有文件依据的物理关系分配共用负荷。当型号间功率、周期、处理面积或测试需求存在实质差异时，不得仅按生产质量分配，除非证明其等效。 | `eu-pef-recommendation-2021` |
| `allocation_scrap_status` | 废钢及其他回收输出 | 确定并披露输出在工厂门口属于废物还是共产品。本工厂门到工厂门清单内不得计入避免生产收益。若为共产品且无法划分，采用有文件依据的物理关系；仅在无合理物理关系时采用经济分配，并报告敏感性检验。 | `eu-pef-recommendation-2021` |
| `allocation_rework` | 内部返工和循环 | 内部返工产品和内部循环过程材料保留在前景边界内；其额外材料和能源归属于合格产出，内部循环不得计为外部产品流或废物流。 | `eu-pef-recommendation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `integrated_equipment_manufacturing` | 钢板、铝合金板材、电磁线和 PA6 输入 | 批准的物料清单、仓库领退料和秤量记录 | product_model; lot_id; material_identity; supplier; grade_or_specification; issued_mass; returned_mass; moisture_or_coating_basis; conforming_output_mass | 按产品批次将受控 BOM 数量与称量或发票领料、退料记录核对 | kg | 每生产批次；每月汇总 | 至少连续 12 个有代表性的月份；季节性或批次生产则覆盖完整生产周期 | 归属于申报场址和产品族的全部生产线及外包步骤 | 各原子材料净领用质量之和除以合格产品净质量 | BOM 版本、供应商规范、校准秤证书、库存核对 |
| `cp_electricity` | `integrated_equipment_manufacturing` | 外购电力 | 结算电表和分表日志 | meter_id; opening_kWh; closing_kWh; production_line; downtime; product_model; conforming_output_mass | 读取经校准电表；扣除有文件证明的非生产负荷；对剩余共用负荷作因果分配 | kWh，换算为 MJ | 连续或每班；每月汇总 | 与产品产出相同，通常至少 12 个有代表性的月份 | 申报场址内全部前景操作 | 归属净 kWh × 3.6 后除以合格产品净质量 | 电表校准、账单核对、分配工作表 |
| `cp_natural_gas` | `integrated_equipment_manufacturing` | 场内天然气 | 天然气表和燃料发票 | meter_id; volume; temperature; pressure; standard_or_actual_basis; gas_composition; heating_use; product_model; output_mass | 将生产分表气量与发票和申报参考条件核对 | m3 | 每日或每批；每月汇总 | 与产品产出相同 | 前景边界内场内燃烧 | 在统一申报参考条件下汇总归属体积，再除以合格产品净质量 | 仪表校准、发票核对、气质证明 |
| `cp_process_water` | `integrated_equipment_manufacturing` | 工艺用水 | 水分表、储罐和循环回路记录 | source; input_volume; density; recycled_volume; discharge_volume; operation; product_model; output_mass | 分别计量新水和循环水；仅凭有文件依据的密度换算质量 | kg | 每班或每批；每月汇总 | 与产品产出相同 | 仅制造用水；卫生用水另行披露 | 新鲜工艺水质量除以合格产品净质量；不得重复扣除随外运废物带出的水 | 仪表校准、水平衡、循环回路日志 |
| `cp_surface_treatment_chemicals` | `integrated_equipment_manufacturing` | 氢氧化钠 | 采购、库存、槽液补加和浓度记录 | solution_mass; active_mass_fraction; bath_id; operation; opening_stock; closing_stock; spill_or_loss; product_model; output_mass | 将采购和库存变化与槽液添加量核对；用证书或分析核实浓度 | kg 活性 NaOH | 每次槽液添加；每月汇总 | 与经处理产品产出相同 | 场内水基清洗、处理和废水处理 | 归属于申报产品的溶液质量 × 活性分数之和，再除以合格产品净质量 | 供应商证书、槽液分析、库存核对 |
| `cp_packaging` | `integrated_equipment_manufacturing` | 瓦楞纸箱 | 包装规范、领用和发运记录 | box_type; unit_mass; quantity_issued; quantity_returned; reuse_cycles; shipped_product_mass | 称量各纸箱类型并将领用量与发运量核对；按核实的循环次数分摊可重复使用纸箱损耗 | kg | 每次发运；每月汇总 | 与产品产出相同 | 随产品离开申报场址的包装 | 消耗或分摊纸箱质量除以发运合格产品净质量 | 包装规范、秤量记录、发运核对 |
| `cp_finished_output` | `integrated_equipment_manufacturing` | 合格参考产品 | 最终检验、放行和校准秤记录 | product_model; serial_or_lot; gross_mass; packaging_mass; net_product_mass; test_result; rejected_mass; rework_mass | 称量扣除运输包装后的放行产品，并与最终检验放行记录核对 | kg | 每批或每次发运；每月汇总 | 与所有输入和输出相同 | 场址内申报产品族的全部合格产品 | 汇总合格产品净质量；所有交换归一化至 1 kg | 校准记录、放行记录、发运核对 |
| `cp_waste_outputs` | `integrated_equipment_manufacturing` | 废钢和含金属污泥 | 废物磅单、转移联单、实验室和去向记录 | waste_identity; container_tare; gross_mass; net_mass; dry_solids_fraction; hazardous_status; destination; internal_recycle_mass; product_model | 称量各分类废物；扣除皮重和经核实的内部循环；对污泥干物质作代表性取样 | kg | 每次转移；每月汇总 | 与产品产出相同 | 前景边界内产生并转移出场址的全部废物 | 按原子废物汇总场外净转移质量，再除以合格产品净质量 | 校准磅单、法定联单、实验室结果、回收商接收凭证 |
| `cp_direct_emissions` | `integrated_equipment_manufacturing` | 直接化石源二氧化碳 | 燃料计量、气质和烟气测试记录 | gas_volume; reference_conditions; carbon_content; oxidation_factor; measured_CO2; operating_hours; product_model; output_mass | 根据计量燃料和经核实成分计算碳平衡，或采用有代表性且质量有保证的烟气实测 | kg CO2 | 每月计算；燃料或燃烧器发生实质变化后重新计算 | 与燃料和产品产出相同 | 仅场内燃烧 | 仅归属前景燃烧；计算值与实测值同时存在时进行核对；再除以合格产品净质量 | 气质证明、仪表记录、计算表、烟气测试报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 全部清单行 | 归一化交换量 = 同期归属于申报产品族的交换量 / 同期合格产品净质量 | 归属交换量；合格产品净质量 | 每 1 kg 参考产品的交换量 | `eu-pef-recommendation-2021` |
| `calc_electricity_mj` | `in_electricity` | 电力 MJ = 计量 kWh × 3.6 | 计量 kWh | 电力 MJ | — |
| `calc_active_naoh` | `in_sodium_hydroxide` | 活性 NaOH 质量 = 溶液质量 × 经核实的活性质量分数 | 溶液质量；活性质量分数 | kg 活性 NaOH | — |
| `calc_direct_fossil_co2` | `out_carbon_dioxide_fossil` | 化石源 CO2 质量 = 计量燃料量 × 经核实的燃料含碳量 × 氧化率 × 44/12；明确调整单位，并在可用时与代表性烟气实测比较 | 燃料量；含碳量；氧化率；可用的 CO2 实测值 | kg 直接化石源 CO2 | — |
| `calc_mass_reconciliation` | 产品、材料和废物质量 | 将采购材料净质量与合格产品、场外废物、内部循环库存变化和实测过程损失核对；调查差异，不得强制闭合无法解释的失衡 | 材料净领用量；产品产出；废物转移；库存变化；实测损失 | 材料特定质量平衡差异 | `ec-jrc-stm-bref-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及全部含 UUID 的流行 | 将申报产品或交换与所列 UUID 身份、流类型、属性、单位组和正式中英文基础名称匹配；产品特定牌号和状态作为前景限定信息保留。 | 公开状态码 100 直读身份，以及供应商或产品规范 |
| `dq_temporal` | 全部前景交换 | 采用统一且有代表性的报告期，通常至少连续 12 个月；较短生产周期须说明理由，并披露停产、启动和异常生产。 | 带日期的仪表、采购、生产、测试和废物记录 |
| `dq_technology` | 产品路线 | 记录哪些成形、注塑、绕组、表面处理、装配和测试操作在场内执行、外包或不存在。 | 过程流程图、作业指导书、外包记录 |
| `dq_completeness` | 物料清单和公用工程 | 将每项 BOM 材料和单独计量的公用工程与产品族核对；默认清单未涵盖的材料必须新增原子行，不得合并成笼统行。 | BOM 与采购核对、仪表平衡、完整性检查表 |
| `dq_surface_treatment` | 水基或电解处理路线 | 保留槽液身份、活性浓度、水平衡、处理残渣身份、干物质基准及直接排放监测；无该路线的产品不得应用这些流行。 | 槽液日志、实验室报告、水平衡、废物联单、许可证监测 |
| `dq_uncertainty` | 共用分配和计算值 | 量化重大共用负荷分配、燃料成分、污泥含水率和产品组合变化的影响；记录数据缺口，不得用未经核实的代理 UUID 替代。 | 敏感性计算、不确定性记录、未解决事项清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 UUID 是公开状态码 100 的 CPC 46910 产品身份，参考属性为 Mass、单位为 kg，且全部必需限定信息齐全。 | `un-cpc-3-0-structure-2025` |
| `validate_boundary_period` | 前景清单 | 确认输入、合格产出、废物转移和直接排放使用同一场址和报告期，并确认外包及下游操作未被静默混入本工厂门到工厂门模块。 | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |
| `validate_atomic_bom` | 材料清单 | 将申报产品 BOM 与各原子清单行核对。拒绝笼统行、重复流和无限定信息的替代；未解决 UUID 必须保持显式。 | `unece-alca-proposal-2025` |
| `validate_conditional_routes` | 表面处理、天然气使用、绕组和注塑 | 要求提供各条件性流行在申报路线中实际存在的证据；否则记录为不适用，不得赋予看似实测的零值。 | `ec-jrc-stm-bref-2006` |
| `validate_mass_balance` | 质量输入和输出 | 计入合格产品、废物、内部循环、库存变化和实测损失后，调查无法解释的材料特定失衡；不得通过修改实测交换量强制闭合。 | `ec-jrc-stm-bref-2006` |
| `validate_energy_emissions` | 天然气和直接化石源 CO2 | 确认天然气参考条件、含碳量、氧化率和单位换算；确认上游电力和燃料排放未作为前景直接排放重复计算。 | `eu-pef-recommendation-2021` |
| `validate_allocation` | 共用过程和回收输出 | 确认已优先尝试划分，因果驱动量有文件依据，回收输出状态一致，且任何经济分配均披露敏感性。 | `eu-pef-recommendation-2021` |
| `validate_completeness_disclosure` | 数据集发布 | 确认在用于比较前披露数据源、截断、数据缺口、UUID 缺口、范围证据需求、型号组合、路线、包装、分配和不确定性。 | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经审查和发布后可作为 `background_dataset` |
| downstream_use | 已申报汽车或自行车电气设备族的工厂门到工厂门前景制造模块；链接上游材料和公用工程数据集，并在需要时链接配送、车辆使用、维护和报废模块 |
| allowed_use | 当申报的产品族、路线、场址、期间和分配与研究匹配时，用于产品足迹建模、供应链数据交换、热点分析和产品特定情景建模 |
| excluded_use | 对起动机、发电机、照明设备、信号设备、刮水器、除霜器或除雾器进行无限定比较；未补充其他阶段即作全生命周期声明；作为通用车辆数据集；代理被排除的灯或线束 |
| required_metadata | PCR id 和版本；产品 UUID；设备族及型号；性能规范；净质量；BOM 和材料状态；生产路线；场址及地理位置；报告期；电力结构及天然气参考条件；表面处理路线；包装；分配；上游数据集链接 |
| required_quality_disclosure | 一手数据占比；时间、地理和技术代表性；仪表和秤校准；BOM 完整性；产品组合权重；截断；分配敏感性；污泥含水率；直接排放计算；未解决 UUID 和范围证据需求 |
| update_trigger | 产品设计、BOM、再生材料含量、生产路线、场址、电力供应、燃料成分、表面处理化学体系、测试制度、包装、分配基准、上游数据集或报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 核验 CPC 46910 原文身份和明确排除项 |
| `ec-jrc-stm-bref-2006` | `official_guidance` | 欧洲委员会，《金属和塑料表面处理最佳可行技术参考文件》，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-04） | 条件性表面处理过程分解；水、电力、燃料、化学品、废物和排放采集要求 |
| `eu-pef-recommendation-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-04） | 功能单位、参考流、边界披露、分配层级、完整性、数据质量和校验 |
| `unece-alca-proposal-2025` | `official_guidance` | 联合国欧洲经济委员会污染与能源工作组，ECE/TRANS/WP.29/GRPE/2025/17，关于汽车生命周期评价第 5 号共同决议的提案，https://documents.un.org/doc/undoc/gen/g25/123/24/pdf/g2512324.pdf（检索于 2026-09-05） | 汽车材料生产和零部件生产边界，以及系统边界、数据、假设和限制的透明报告；作为工作提案使用，不作为有约束力法规 |
