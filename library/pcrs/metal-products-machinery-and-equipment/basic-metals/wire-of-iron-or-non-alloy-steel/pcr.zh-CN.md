---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-iron-or-non-alloy-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或非合金钢丝

## 1. 范围与适用性

本 PCR 适用于以进厂热轧盘条为原料，经预处理、冷拔以及实际采用的热处理或精整工序生产的未包装铁或非合金钢丝。未涂镀钢丝、镀锌钢丝、涂镀其他已声明贱金属的钢丝，以及符合所声明产品身份的其他钢丝均可纳入；前景数据包必须明确具体工艺路线和产品状态。正式 HS 细目仅用于解释 CPC 产品身份所含状态，不用于建立平行的 PCR 身份。

前景边界始于盘条进入钢丝制造场址，止于合格成品钢丝在该场址出厂放行且尚未使用线盘、托盘、包覆等包装之时。运输、使用、制成下游制品及报废阶段均在边界外。盘条及其他所有外购投入品的生产属于上游，必须使用限定信息相符的背景数据。不锈钢丝、合金钢丝、绝缘电线、绞股线、钢丝绳、焊接网、围栏、钉、弹簧及其他钢丝制品不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0 41263，精确产品类别语境；HS 2012 品目 7217，产品状态解释语境 |
| covered_products | 经所声明拉丝和精整路线生产的未包装铁或非合金钢丝，包括未涂镀、镀锌、涂镀其他已声明贱金属以及 HS 品目 7217 中的其他状态 |
| excluded_products | 不锈钢丝；其他合金钢丝；绝缘电线；绞股线和钢丝绳；刺钢丝、网和围栏；钉、弹簧、焊条及其他制品；包装 |
| representative_product | 已声明牌号、公称直径、力学状态和涂层状态的可销售铁或非合金钢丝 |
| production_route | 进厂热轧盘条；机械除鳞或酸洗；干式或湿式拉丝；条件性热处理；已声明精整和条件性金属涂层 |
| market_state | 完成干燥、可销售且在包装前位于制造场址门口的钢丝，并已声明涂层状态和表面状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足采购方所声明尺寸、牌号、力学性能和表面要求的铁或非合金钢成品丝 |
| How much | 1,000 kg 合格未包装钢丝的净质量 |
| How well | 前景数据包声明公称直径及公差、钢牌号或化学成分、力学状态、热处理路线、表面精整，以及适用时的涂层材料和涂层质量 |
| How long or cycle | 制造场址门口放行的一个生产批次；不声明使用寿命功能 |
| reference_flow_link | 参考流是 `wire_drawing_and_finishing` 放行的 `reference_product_wire` 净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`；与 CPC 41263 精确匹配，牌号、涂层状态、地理范围、技术和制造场址门口边界由前景限定信息声明 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造场址地理范围；报告期；铁或非合金钢牌号或化学成分；盘条来源和状态；公称直径及公差；力学或抗拉状态；干式或湿式拉丝；热处理路线或无热处理；涂层材料和涂层质量或未涂镀；表面精整；技术；未包装场址门口边界 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量计量的输入输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用完成所有已声明精整且包装前经核验的净质量。排除线盘、载具和包装质量。所有清单数量均归一化至 1,000 kg 合格参考产品。 |
| `electricity_energy` | 电力输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数和账单原单位。kWh 乘以 3.6 转换为 MJ，并保留原始读数、换算过程和电表覆盖范围。 |
| `natural_gas_volume` | 气态天然气输入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明参考温度和压力记录计量气量，并保留供应地理范围、交付边界、净热值和仪表覆盖范围。未换算前不得把不同参考条件下的体积视为等同。 |
| `coating_mass` | 金属涂层输入和成品涂层钢丝 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种涂层物质作为一个原子输入记录，并在报告期内核对采购、退回、回收、废弃和保留在钢丝上的涂层质量。 |
| `route_separation` | 所有测量数量 | 对应行的流属性 | 对应行的单位 | 分开记录酸洗、机械除鳞、干式拉丝、湿式拉丝、热处理和涂层。各路线分别归一化后，方可按产量加权汇总。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入钢丝制造场址的热轧铁或非合金钢盘条，并已识别其牌号、尺寸、表面状态、供应地理范围和上游数据集 |
| starting_condition_role | 外购产品输入和前景起始条件 |
| product_classification_scope | CPC 3.0 41263 范围内的铁或非合金钢丝，包括已声明的未涂镀或贱金属涂层状态；排除合金钢、不锈钢、绝缘、绞股及制成品 |
| recursive_input_rule | 外购且已属于同一产品类别的钢丝应作为单独的限定产品输入记录，配套自身上游数据集，不得改称盘条或默默并入场址收得率 |
| upstream_dataset_requirement | 对盘条及各外购物料或能源使用地理、技术和时间代表性相符的摇篮到供应商门口数据集；披露替代项及产品状态不匹配情况 |
| disclosure | 声明起始盘条牌号和状态、预处理和拉丝路线、热处理、涂层路线、前景场址及期间、能源交付限定、废物去向、排除的包装和运输，以及共享工序分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_wire_rod_start` | foreground_boundary | 边界始于进厂盘条，并纳入其预处理、干式或湿式拉丝、适用的热处理、精整、场址废物和直接排放，止于未包装成品丝放行。 | `ec-jrc-fmp-bref-2022` |
| `sb_upstream_inputs` | upstream_requirements | 盘条、酸、水、润滑剂、涂层化学品、电力和燃料使用限定信息相符的上游数据集；不得在前景过程中重复计入其上游生产。 | `worldsteel-lci-methodology-2017` |
| `sb_product_state` | route_applicability | 仅纳入所声明参考产品实际采用的处理和涂层工序；未披露时，不得以镀锌、热处理或未涂镀路线替代其他状态。 | `unsd-hs-2012-7217`, `ec-jrc-fmp-bref-2022` |
| `sb_packaging_transport` | excluded_processes | 本前景边界排除线盘、托盘、包覆、出厂运输、下游制造、使用和报废；任何研究边界扩展均应另行披露。 | `worldsteel-lci-methodology-2017` |
| `sb_atomic_completeness` | foreground_inventory | 对场址边界实际跨越的每种物料、能源、废物和基本流，均以一个具体原子行补充记录，即使其不在下列最低行集中。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wire_rod_pretreatment` | 盘条预处理 | required | 必须采用一种已声明预处理路线；酸类专用行仅适用于实际所用酸，氧化皮行仅适用于机械除鳞或单独回收氧化皮 | 通过机械除鳞或酸洗及漂洗使进厂盘条满足拉丝条件 | 外部输入和废物均归一化至 1,000 kg 合格成品钢丝 |
| `wire_drawing_and_finishing` | 拉丝和精整 | required | 拉丝为必需；润滑剂、热处理和镀锌行仅在采用相应准确工序及物质时适用 | 使盘条通过模具减小截面，并在产品放行前执行已声明热处理、精整和涂层 | 外部输入、输出及直接排放均归一化至 1,000 kg 合格成品钢丝 |

### 过程：盘条预处理（`wire_rod_pretreatment`）

#### 输入

##### 产品流

###### 进厂热轧盘条（`wire_rod_input`）

记录进入场址前景边界的限定盘条。牌号、直径、表面状态、供应方及上游数据集应与成品钢丝批次保持关联。

- 选定流：热轧铁或非合金钢盘条
- 流属性/单位：Mass / kg
- 数量规则：投入生产的实测进厂质量，仅按有记录的期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用盐酸（`hydrochloric_acid_input`）

仅当盐酸用于所声明酸洗路线且跨越边界时记录。保留供货浓度，并区分补加量和完全在前景内循环的酸液。

- 选定流：盐酸
- 流属性/单位：Mass / kg
- 数量规则：采购或调入溶液质量乘以有文件依据的盐酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：盐酸酸洗批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用硫酸（`sulfuric_acid_input`）

仅当硫酸用于所声明酸洗路线且跨越边界时记录。保留供货浓度，并区分补加量和完全在前景内循环的酸液。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：采购或调入溶液质量乘以有文件依据的硫酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：硫酸酸洗批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗和漂洗水（`pickling_rinse_water_input`）

记录用于酸槽补水和酸洗后漂洗的新鲜工艺水。完全在前景边界内循环的水不计入外部输入总量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于预处理的新鲜工艺用水计量质量；若按体积计量，则使用有文件依据的同期密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：酸洗批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy_meters`
- 来源：`ec-jrc-fmp-bref-2022`

###### 预处理电力（`pretreatment_electricity`）

记录输送至预处理设备的交流电。数据包必须声明供应方、地理范围、电压、发电或供电技术及交付边界。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：预处理分表电量；若共用电表，则按运行时间和额定负荷进行有文件依据的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_meters`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 去除的氧化铁皮（`iron_oxide_scale_output`）

盘条去除的氧化铁皮离开场址送往回收或处理时，记录其干基或脱水质量。声明水分和污染基准。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：称量外运质量，并换算至已声明干基或外运状态基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：产生单独回收氧化皮的批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废盐酸酸洗液（`spent_hydrochloric_pickling_liquor_output`）

废盐酸酸洗液转移出前景边界时予以记录。保留酸和溶解金属浓度、含水量及去向。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：称量外运液体质量，或按体积和密度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：盐酸酸洗批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废硫酸酸洗液（`spent_sulfuric_pickling_liquor_output`）

废硫酸酸洗液转移出前景边界时予以记录。保留酸和溶解金属浓度、含水量及去向。

- 选定流：废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：称量外运液体质量，或按体积和密度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：硫酸酸洗批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

### 过程：拉丝和精整（`wire_drawing_and_finishing`）

#### 输入

##### 产品流

###### 拉丝和精整电力（`drawing_electricity`）

记录输送至拉丝、冷却循环、搬运及精整设备的交流电。数据包必须声明供应方、地理范围、电压、技术及交付边界。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：拉丝和精整分表电量，或从共用电表进行有文件依据的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_meters`
- 来源：

###### 硬脂酸钙干式拉丝润滑剂（`calcium_stearate_input`）

仅对使用该干式拉丝润滑剂的批次记录硬脂酸钙。不得用笼统润滑剂类别替代该采购物质。

- 选定流：硬脂酸钙
- 流属性/单位：Mass / kg
- 数量规则：采购质量加期初库存，减期末库存和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用干式拉丝批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：

###### 矿物油湿式拉丝润滑剂（`mineral_oil_drawing_lubricant_input`）

仅对使用该湿式拉丝介质的批次记录矿物油拉丝润滑剂。分别保留商品配方、油含量和水稀释量。

- 选定流：矿物油钢丝拉拔润滑剂
- 流属性/单位：Mass / kg
- 数量规则：采购原液加期初库存，减期末库存和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用湿式拉丝批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：

###### 热处理用天然气（`natural_gas_input`）

仅在采用燃气退火、派登脱处理或其他已声明热处理工序时记录气态天然气。保留供应地理范围、炉型技术和参考体积条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在所述参考条件下归属于已声明热处理批次的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：燃气热处理批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_fuel_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 热处理电力（`heat_treatment_electricity`）

仅在采用电加热处理时记录交流电，并与拉丝电力分开。声明供应方、地理范围、电压、技术和交付边界。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：电炉分表电量，或从共用电表进行有文件依据的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：电热处理批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_meters`
- 来源：`ec-jrc-fmp-bref-2022`

###### 连续镀锌用锌（`zinc_input`）

仅对镀锌参考产品记录锌。核对锌加料、退回、回收、进入锌灰的损失以及保留在可销售钢丝上的质量。

- 选定流：金属锌
- 流属性/单位：Mass / kg
- 数量规则：锌加料量加期初库存，减期末库存、有记录退回量和内部回收锌
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格未包装镀锌成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`, `unsd-hs-2012-7217`

###### 镀锌助镀剂用氯化铵（`ammonium_chloride_input`）

仅当氯化铵是所声明钢丝连续镀锌助镀剂中单独供入的组分时记录。

- 选定流：氯化铵 `0d0e3c27-1f93-4dc1-80d0-392a3226cd4f`
- 流属性/单位：Mass / kg
- 数量规则：供入助镀盐质量乘以有文件依据的氯化铵质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：使用该助镀组分时每 1,000 kg 合格未包装镀锌成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 镀锌助镀剂用氯化锌（`zinc_chloride_input`）

仅当氯化锌是所声明钢丝连续镀锌助镀剂中单独供入的组分时记录。

- 选定流：氯化锌 `e5d10a05-c796-4974-9871-fad1bfb5ddb8`
- 流属性/单位：Mass / kg
- 数量规则：供入助镀盐质量乘以有文件依据的氯化锌质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：使用该助镀组分时每 1,000 kg 合格未包装镀锌成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品钢丝（`reference_product_wire`）

记录完成所有已声明拉丝、热处理、精整和涂层操作且包装前放行的可销售铁或非合金钢丝净质量。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：合格未包装成品钢丝经核验的净放行质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_material_records`
- 来源：`unsd-cpc-3-0-2025`, `unsd-hs-2012-7217`

##### 废物流

###### 铁或非合金钢拉丝废料（`steel_scrap_output`）

记录以前景边界废料形式离开的切头、断丝和不合格铁或非合金钢。不得从该质量中扣减外部回收信用。

- 选定流：废钢丝 `89e89b90-d82e-4631-b2ab-cd3c5986ca0e`
- 流属性/单位：Mass / kg
- 数量规则：称量外运废钢质量，并按有记录的废钢期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废硬脂酸钙拉丝润滑剂（`spent_calcium_stearate_lubricant_output`）

废硬脂酸钙润滑剂离开边界送往处理或回收时，单独记录，不与金属废料或其他润滑剂合并。

- 选定流：废硬脂酸钙钢丝拉拔润滑剂
- 流属性/单位：Mass / kg
- 数量规则：按已声明污染和含水基准称量外运废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用干式拉丝批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废矿物油拉丝润滑剂（`spent_mineral_oil_lubricant_output`）

废矿物油拉丝润滑剂离开边界送往处理或回收时记录，并披露含水量和金属污染。

- 选定流：废矿物油钢丝拉拔润滑剂
- 流属性/单位：Mass / kg
- 数量规则：按已声明污染和含水量基准称量外运废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用湿式拉丝批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 钢丝镀锌锌灰（`zinc_ash_output`）

镀锌槽清除的锌灰离开边界时记录，并披露锌含量、水分及回收去向。

- 选定流：钢丝连续镀锌锌灰
- 流属性/单位：Mass / kg
- 数量规则：按已声明成分基准称量外运锌灰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格未包装镀锌成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 排放到空气的化石源二氧化碳（`fossil_co2_air`）

记录前景天然气燃烧用于热处理时排放的化石源二氧化碳。优先采用源特定测量；否则依据采集燃料活动数据以及有文件依据的碳和氧化因子透明计算。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：前景烟道实测质量，或依据采集天然气活动数据和有文件依据因子计算的化石源二氧化碳质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：燃气热处理批次每 1,000 kg 合格未包装成品钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_fuel_and_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_operations | 在可行情况下，优先对预处理、拉丝、热处理、涂层及无关生产线单独计量或细分，以避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | shared_inputs_and_outputs | 无法细分时，采用有文件依据的因果物理驱动因素分配共享流，例如路线特定运行时间、计量负荷、槽体处理量或加工质量；成品质量不能代表驱动因素时不得采用。 | `eu-pef-method-2021` |
| `allocation_other_relationship` | residual_multifunctionality | 仅在说明细分、系统扩展和相关物理关系均不可行后，方可采用其他关系；披露其依据并检验对结果的影响。 | `eu-pef-method-2021` |
| `allocation_scrap` | steel_scrap_and_recovered_material | 废钢、废酸洗液、废润滑剂和锌灰在前景边界处报告，不在本前景清单中计入避免产品信用。下游回收或替代模型必须单独声明，避免同一收益重复计入。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_and_material_records` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | 盘条、产品、酸、润滑剂、锌和助镀盐 | 经校准秤、采购及领料记录、库存记录、证书和生产放行记录 | 批次号；物料身份；牌号或浓度；期初库存；收货；退回；期末库存；产品放行质量；涂层状态 | 在报告期内核对每种原子物料并关联适用生产批次 | kg 及有文件依据的质量分数 | 每次收货、领料、库存结算和产品放行 | 覆盖所声明完整报告期及全部纳入批次 | 前景钢丝制造场址 | 按物质计算耗用质量，各路线按合格放行质量归一化后，再对相容批次按产量加权 | 秤校准；供应商证书；库存核对；批次可追溯性 |
| `cp_water_and_energy_meters` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | 新鲜工艺水和电力 | 公用工程仪表、分表和账单 | 仪表编号；起止读数；单位；过程范围；水体积换算质量时的密度；电压；供应方；地理范围；技术；停机时间；分配驱动因素 | 优先读取专用仪表；否则核对全场仪表并记录因果分配 | 水使用 kg 和 m3；电力使用 kWh 和 MJ | 每个账单或抄表周期 | 覆盖所声明完整报告期 | 前景场址及已识别共享服务 | 扣除有记录的非过程用量，仅使用有文件依据的密度将水体积换算为质量，换算电力单位，仅分配无法直接测量的共享用量，并按合格路线产出归一化 | 仪表校准或账单核对；密度记录；分配工作表；交付限定信息 |
| `cp_waste_records` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | 氧化皮、废酸液、废钢、废润滑剂和锌灰 | 秤、槽体积和密度、废物联单及库存记录 | 废物身份；质量或体积；密度；成分；水分；期初和期末库存；去向；回收或处理代码 | 外运时分别测量每种废物流并保留成分基准 | kg，适用时为 m3 和 kg/m3 | 每次外运和库存结算 | 覆盖所声明完整报告期 | 前景场址 | 仅用同期密度进行体积质量换算；核对库存并按适用路线产出归一化 | 秤校准；需要时实验室分析；签署联单；去向证明 |
| `cp_heat_treatment_fuel_and_emissions` | `wire_drawing_and_finishing` | 天然气和化石源二氧化碳 | 燃气表、供应商声明、炉次日志、烟道测量和批准因子记录 | 仪表读数；参考温度和压力；净热值；炉号和批次号；实测二氧化碳或因子身份；碳含量；氧化因子 | 将燃料关联至热处理批次，优先采用直接排放测量；否则保留计算的全部输入 | m3、MJ 和 kg | 每个计量周期和热处理作业周期 | 覆盖燃气热处理批次所声明完整报告期 | 场址内前景炉 | 将气量换算至已声明参考条件，计算或汇总化石源二氧化碳，并按合格热处理产出归一化 | 仪表校准；供应商燃气声明；烟道记录或批准因子来源；计算工作表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期内该行数量 / 合格未包装成品钢丝质量 × 1,000 | 路线特定的行数量；合格未包装成品钢丝质量 | 每 1,000 kg 参考产品的行数量 | `worldsteel-lci-methodology-2017` |
| `calc_material_content` | 酸、配制润滑剂和助镀剂组分 | 纯物质质量 = 供入混合物质量 × 有文件依据的质量分数；除非边界明确分开，不得对同一投入同时报告混合物和组分 | 供入质量；供应商质量分数 | kg 原子物质投入 |  |
| `calc_electricity_conversion` | 电力行 | MJ = kWh × 3.6 | 原始 kWh 电表读数 | MJ 电力 |  |
| `calc_shared_meter` | 共用水、电或燃料仪表 | 分配流 = 核对后的共用仪表流量 × 有文件依据的因果驱动份额 | 共用仪表总量；排除用量；路线驱动数据 | 路线特定前景流 | `eu-pef-method-2021` |
| `calc_fossil_co2` | `fossil_co2_air` | 采用实测化石源二氧化碳；如无实测，则根据参考条件燃料活动量、净热值、有文件依据的化石碳因子和氧化因子计算，不引入 PCR 默认因子 | 天然气记录；净热值；因子来源；氧化因子 | kg 化石源二氧化碳 |  |
| `calc_mass_reconciliation` | 含铁物料和涂层质量平衡 | 在一致库存、水分和成分基准上核对盘条、可销售钢丝、废钢、保留涂层、可回收返回物和单独测量废物；调查并披露残差，不得强制平衡 | 各路线质量和库存记录 | 有文件依据的质量平衡残差及修正后的归一化清单 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和盘条 | 保留批次关联的牌号或化学成分、公称直径、力学状态、表面状态、涂层身份和上游盘条来源。 | 产品规格、检验放行和供应商证书 |
| `dq_route_traceability` | 所有行 | 将每条记录标记为机械或酸洗预处理、干式或湿式拉丝、热处理路线和涂层状态；不得在独立归一化前平均不同路线。 | 生产指令、路线日志和汇总工作表 |
| `dq_temporal_completeness` | 报告期 | 覆盖所声明完整期间及全部纳入的合格和不合格批次；说明停机、异常作业周期和缺失区间。 | 生产台账、仪表连续性检查和异常日志 |
| `dq_measurement_support` | 质量、体积和能源 | 保留校准或账单核对、原始单位、换算、参考条件及共用仪表分配证据。 | 校准记录、账单、仪表导出和计算工作表 |
| `dq_upstream_representativeness` | 外购投入 | 盘条、化学品、电力和燃料应匹配地理、技术、产品状态和交付边界；披露全部代理数据。 | 供应商数据、背景数据集元数据和代理理由 |
| `dq_waste_destination` | 废物输出 | 保留成分基准、回收或处理去向，以及是否在前景清单外建立任何下游信用模型。 | 废物联单、分析和下游模型披露 |
| `dq_source_traceability` | 计算行 | 保留原始字段、因子身份、版本、公式和便于审查的计算；不得用无来源默认值替代前景测量。 | 计算工作簿和因子来源 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | reference_flow | 任一必需限定信息缺失，或将合金钢丝、不锈钢丝、绝缘线、绞股线或钢丝制品作为本参考产品时，校验失败。 | `unsd-cpc-3-0-2025`, `unsd-hs-2012-7217` |
| `vr_reference_mass` | reference_flow | 确认完成已声明精整后的合格未包装钢丝净质量恰为 1,000 kg；参考质量中含线盘、载具或包装时拒绝。 | `worldsteel-lci-methodology-2017` |
| `vr_route_consistency` | process_inventory | 确认每个条件性酸、润滑剂、热处理、助镀剂和涂层行仅用于适用批次，并且每项实际跨越边界的交换均以原子行表示。 | `ec-jrc-fmp-bref-2022` |
| `vr_uuid_qualifiers` | uuid_bearing_rows | 确认工艺用水保留水源、水质、地理范围、密度换算和交付边界；天然气保留供应及参考体积条件；氯化铵和氯化锌保留品级和供应限定；氧化铁皮和废钢丝保留成分及去向；化石源二氧化碳保持为排放到未指定空气环境舱的基本流；场址电力交付限定未经复核前不得分配电力 UUID。 |  |
| `vr_mass_balance` | material_balance | 在一致库存、水分和成分基准上核对含铁物料和涂层质量；标记无法解释的残差，不得改变测量值以强制平衡。 |  |
| `vr_energy_units` | energy_inputs | 确认保留能源原始读数、kWh 至 MJ 换算、天然气参考条件，并将拉丝与条件性热处理能耗分开。 |  |
| `vr_allocation` | shared_operations | 确认优先考虑了细分，且每项剩余共享流均采用有文件依据的因果分配驱动因素；采用其他关系时应披露敏感性。 | `eu-pef-method-2021` |
| `vr_no_false_range` | quantitative_evidence | 除非至少有两个相互独立、已核验原文且边界相容的来源支持综合，否则拒绝任何外部经验范围；证据不足时保留前景采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址和路线特定的前景结果，经审查后可发布为 `secondary_dataset` 或有限定信息的 `background_dataset` |
| downstream_use | 用于铁或非合金钢丝下游产品和生命周期模型的摇篮到钢丝制造场址门口建模 |
| allowed_use | 产品状态、牌号、直径、热处理、涂层、场址地理范围、技术、期间、能源交付和系统边界相符或经透明调整时使用 |
| excluded_use | 不得直接代表合金或不锈钢丝、绝缘或绞股产品、钢丝制品、包装交付、使用或报废；功能和边界不等价且未经过严格审查时，不得用于比较性论断 |
| required_metadata | PCR 身份及版本状态；前景场址及期间；产品牌号、直径、力学状态和涂层；盘条来源；工艺路线；电力和燃气交付限定；分配；废物去向；未解决 UUID；来源及计算溯源 |
| required_quality_disclosure | 完整性和路线覆盖；仪表和秤支持；库存及质量平衡残差；上游代理；条件性工序；缺失记录；不确定性；排除的包装和运输；下游回收处理 |
| update_trigger | 牌号或直径组合、盘条来源、预处理、拉丝技术、热处理、涂层路线、能源供应、场址、分配、报告期或物料废物去向发生重大变化时更新 |

## 11. 数据源

| 来源编号 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Structure》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-03） | CPC 41263 正式身份及其与合金钢丝的区分 |
| `unsd-hs-2012-7217` | `official_guidance` | 联合国统计司，《HS 2012，品目 7217：Wire of iron or non-alloy steel》，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/7217（检索于 2026-09-03） | 解释未涂镀、镀锌、涂镀其他贱金属及其他钢丝状态的范围 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《Ferrous Metals Processing Industry》，2022 年 12 月采纳，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索于 2026-09-03） | 下游钢丝边界和过程分解：盘条预处理、干式或湿式拉丝、热处理、精整及钢丝连续镀锌 |
| `worldsteel-lci-methodology-2017` | `method_factor` | 世界钢铁协会，《Life Cycle Inventory Methodology Report》，2017 年，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索于 2026-09-03） | 工厂门口质量声明单位、研究边界披露、上游数据质量及透明回收处理 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会，《Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods》，2021 年 12 月 15 日，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-09-03） | 分配层级：细分或系统扩展、物理关系，以及最后采用其他有理由的关系 |
| `china-mof-2026-tariff-list` | `official_guidance` | 中华人民共和国财政部，《国别清单及税目税率表》，2026 年，https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf（检索于 2026-09-03） | 未涂镀、镀锌、镀铜、涂镀其他贱金属及其他铁或非合金钢丝的专业中文术语 |
