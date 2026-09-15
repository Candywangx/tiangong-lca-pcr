---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-copper-of-a-thickness-exceeding-0-15-mm
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 厚度超过0.15毫米的铜板、片及带

## 1. 范围与适用性

本 PCR 适用于成品厚度超过0.15毫米的铜及铜合金板、片及带的门到门制造。声明的起始条件是已运抵、适于平轧的铸造板坯。前景边界包括板坯准备与预热、适用时的热轧与表面铣削、适用时的冷轧、中间或最终退火、适用时的酸洗与漂洗、干燥、矫平、纵切或横切、内部物料循环，以及直接服务于这些作业的场内处理。

本 PCR 不包括厚度不超过0.15毫米的铜箔，铜线、盘条、棒材、型材、管材及管件，非铜层改变产品识别的涂覆或层压产品，上游采矿、选矿、冶炼、精炼及场外板坯铸造，以及下游零部件制造、包装、配送、使用和生命末期。数据集必须声明铜牌号或合金牌号，板、片或带形态，厚度、宽度、状态、表面质量，轧制与退火路线、酸洗路线、适用时的再生含量主张、地域、技术和报告期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-copper-of-a-thickness-exceeding-0-15-mm |
| classification_refs | CPC 3.0：41514（精确分类语境） |
| covered_products | 成品厚度大于0.15毫米、由已声明铸造板坯起始条件制造的无涂层铜或铜合金板、片及带 |
| excluded_products | 厚度不超过0.15毫米的铜箔；线、盘条、棒材、型材、管材及管件；识别显著不同的涂覆或层压产品；上游精炼铜与板坯生产；下游加工零部件 |
| representative_product | 厚度超过0.15毫米、以已声明状态和表面质量交付至制造场址门口的紫铜板带 |
| production_route | 板坯预热与热轧，随后根据适用情况进行铣削、冷轧、退火、酸洗/漂洗/干燥、矫平、纵切或横切 |
| market_state | 制成可销售的板、片或带；在制造场址门口不含包装；已声明合金、状态、尺寸、表面状态和边部状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 成品厚度大于0.15毫米的可销售铜或铜合金板、片或带 |
| How much | 净重1,000 kg的可销售产品 |
| How well | 符合已声明的合金/牌号、厚度、宽度、状态、表面质量、平直度和边部状态 |
| How long or cycle | 足以代表正常运行的一个生产批次及报告期；不赋予使用期限功能 |
| reference_flow_link | 离开前景制造边界的合格最终产品实测净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 紫铜板带 `73ddbcd1-2f64-4406-93cd-0e9ba320cc1e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铜牌号或合金牌号；板、片或带形态；成品厚度大于0.15毫米；宽度和长度或卷状形态；状态；表面质量；边部状态；轧制路线；退火气氛；酸洗路线；再生含量核算方法；生产地域；技术；报告期 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。Tiangong 参考产品仅为代表性产品；其 UUID 不能取代实际合金、尺寸、状态和表面质量的必需声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有固体含铜输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的秤确定净干质量；将所有清单结果归一化至1,000 kg合格最终产品，并排除包装质量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电量及换算依据；源记录采用kWh时，按1 kWh = 3.6 MJ换算并同时保留两个数值。 |
| `gas_volume` | 外购气态天然气和保护气氛气体 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明的基准温度和压力报告计量体积；计算所需的供应商能量含量或组成应另行保留。 |
| `water_and_solution_mass` | 工艺用水、酸、碱、轧制油及液体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录；以体积换算质量时，记录密度、浓度、温度、来源和计算过程。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_cast_slab` | foreground_start | 前景系统从适于平轧、已运抵的铜或铜合金铸造板坯开始；采矿、精炼和场外板坯生产采用上游数据集表示。 | `eu-jrc-nfm-bref-2017` |
| `sb_include_fabrication_operations` | foreground_operations | 纳入将已运抵板坯转化为合格板、片或带所需的全部场内作业，包括适用的预热、轧制、铣削、退火、酸洗、漂洗、干燥、矫平、纵切、横切、内部循环及直接服务的处理。 | `eu-jrc-nfm-bref-2017` |
| `sb_route_specific_exchanges` | conditional_operations | 仅当已声明设备和表面处理路线使用或产生某种气体、化学品、水或废物时，才纳入该项原子交换；不得以汇总公用工程或废物类别替代。 | `eu-jrc-nfm-bref-2017` |
| `sb_exclude_downstream_stages` | downstream_scope | 排除包装、配送、零部件加工、使用和生命末期；若研究明确扩展系统，则这些阶段必须单独报告。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铜或铜合金铸造板坯已运抵平板产品制造场址，且已声明牌号/合金、质量、尺寸、供应商、地域和上游数据集 |
| starting_condition_role | 门到门平轧与精整的上游产品输入和物理起点 |
| product_classification_scope | 成品厚度大于0.15毫米的铜及铜合金板、片及带；CPC 3.0代码41514是分类语境，而非规范 PCR 识别 |
| recursive_input_rule | 若输入已是本产品类别内的板、片或带，则以单独上游产品输入记录其测量质量并绑定自身数据集，同时从铸造板坯行中排除该上游数量；不得对其递归套用本前景制造清单。 |
| upstream_dataset_requirement | 对已声明板坯、外购能源、气体、水和化学品采用供应商特定或具有代表性的上游数据集；披露地域、技术、再生含量核算方法和数据年代。 |
| disclosure | 声明起始产品牌号/合金和尺寸，是否发生热轧、冷轧、退火、酸洗及场内处理，全部内部循环、外运废铜处理、分配选择和任何边界扩展。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `flat_copper_product_fabrication` | 铜平板产品轧制、退火与精整 | required | 始终纳入；仅在已声明生产路线使用或产生时记录各项路线特定交换 | 将已运抵铸造板坯前景转化为合格板、片或带 | 净重1,000 kg可销售产品 |

### 过程：铜平板产品轧制、退火与精整（`flat_copper_product_fabrication`）

#### 输入

##### 产品流

###### 铜铸造板坯原料（`cast_copper_slab_input`）

记录进入预热或轧制的已运抵铸造板坯。本行是一项固体含铜原料交换；牌号/合金和尺寸是必需限定信息。

- 选定流：铜铸造板坯
- 流属性/单位：Mass / kg
- 数量规则：计量生产批次接收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-nfm-bref-2017`

###### 外购电力（`electricity_input`）

记录为传动装置、轧机、炉、泵、通风、处理及精整而跨越场址边界的电力，并保留场址分表分摊依据。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至产品批次的外购电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 气态天然气（`natural_gas_input`）

仅当预热、退火、干燥、保护气生成或其他直接服务前景的设备消耗外购气态天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已声明基准条件计量的前景天然气体积；仅有书面未使用证据时才允许为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 退火用气态氮（`gaseous_nitrogen_input`）

当已声明退火路线单独使用氮气或在保护气混合物中使用氮气时，记录外购气态元素氮。本行不得用于运抵场址的液氮。

- 选定流：气态氮
- 流属性/单位：Volume / m3
- 数量规则：按已声明基准条件计量的外购气态氮；路线不使用外购氮气时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 退火用气态氢（`gaseous_hydrogen_input`）

当已声明的还原气氛退火路线使用外购气态元素氢时记录。场内制氢及其前体投入应在另行披露的过程中保留。

- 选定流：气态氢
- 流属性/单位：Volume / m3
- 数量规则：按已声明基准条件计量的外购气态氢；路线不使用外购氢气时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冷轧油补充量（`cold_rolling_oil_input`）

记录加入轧制油回路的冷轧油质量。总投入中排除内部循环油，并在支撑记录中保留配方和含水率。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass / kg
- 数量规则：发放至生产批次的外购或外部供应冷轧油补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`process_water_input`）

记录轧辊冷却、适用的酸洗与漂洗、刷洗及直接服务的处理所供应的净工艺用水，并扣除有记录的闭路循环量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的工艺补充水净计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 酸洗用硫酸（`sulfuric_acid_input`）

当已声明表面处理路线采用硫酸酸洗槽时，记录硫酸补充量。记录交付酸液质量和浓度，不得将循环槽液作为新投入。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：发放至前景酸洗路线的外购硫酸溶液质量及浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 中和用氢氧化钠（`sodium_hydroxide_input`）

仅当直接服务于前景生产线的场内处理消耗氢氧化钠以中和酸洗液或漂洗流时记录，并保留交付浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：发放至直接服务处理设施的外购氢氧化钠溶液质量及浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

没有废物流进入已声明前景过程。任何外部接收的二次材料均属于上游板坯生产数据集，不得并入铸造板坯投入。

##### 基本流

本 PCR 不规定基本流输入。若场址直接取用水或其他自然资源，应将每项实测基本流输入作为独立的场址特定交换添加。

#### 输出

##### 产品流

###### 合格铜板、片或带（`final_product_output`）

仅记录符合已声明厚度、合金/牌号、状态、尺寸、表面和边部规范的净重可销售产品。

- 选定流：紫铜板带 `73ddbcd1-2f64-4406-93cd-0e9ba320cc1e`
- 流属性/单位：Mass / kg
- 数量规则：合格产品实测净质量；归一化结果恰为1,000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：净重1,000 kg可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 铜切边料与边角料（`copper_offcuts_output`）

记录离开过程、送往内部或外部回收的分流金属铜或铜合金切边料与边角料。保留合金、污染、去向及是否已从总交换量中排除内部循环的信息。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的分流铜切边料与边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 废冷轧油（`spent_cold_rolling_oil_output`）

记录从轧制油回路移出并送往处理或回收的废冷轧油。不得与废切削油、溶剂或含水酸洗废物合并。

- 选定流：废冷轧油
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的内部回收与返回量后，从回路移出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 含铜废硫酸酸洗液（`spent_sulfuric_acid_output`）

当含溶解铜的废硫酸溶液离开酸洗槽、送往场内或场外回收或处理时记录。不得与漂洗水、污泥或其他酸合并。

- 选定流：含铜废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，并保留酸浓度和溶解铜含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide_output`）

记录前景燃烧或使用含碳原料制备保护气直接排放的化石源二氧化碳。排除外购电力、燃料、气体、化学品和板坯数据集中隐含的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据前景化石燃料计量消耗量和实测或供应商验证的含碳量计算，并披露氧化假设
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净重可销售板、片或带输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_co2_calculation`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_foreground_operations | 在实施分配前，优先按产品批次、轧制线、炉和处理单元进行过程细分与直接计量。 |  |
| `allocation_internal_recycling` | internal_copper_and_oil_loops | 从边界总交换量中排除内部循环的铜、轧制油、酸和水；仅记录补充投入与离开前景边界的物料，并披露循环损失。 | `eu-jrc-nfm-bref-2017` |
| `allocation_multiple_products` | multiple_saleable_products | 同一批次产生多种可销售板、片或带且无法直接细分时，除非有成文因果关系支持其他依据，否则按合格产品净质量分配共享负荷；披露产品、质量和敏感性。 |  |
| `allocation_exported_scrap` | exported_copper_scrap | 以实测质量将外运铜切边料和边角料记录为废物输出，不在本门到门前景数据集中计入避免负荷收益；任何下游回收分配或替代均属于使用本数据集的生命周期模型且必须披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `flat_copper_product_fabrication` | 板坯投入和合格产品输出 | 称重记录与生产订单 | 时间戳；批次；合金/牌号；尺寸；毛重；皮重；净重；产品处置 | 经校准的进出场或过程秤，与生产订单核对 | kg | 每批或每卷 | 代表性批次且至少覆盖已声明报告期 | 所有范围内生产线和产品 | 汇总验收板坯和合格产品质量，再归一化至1,000 kg产品 | 校准证书；皮重检查；订单核对；不合格品记录 |
| `cp_energy_records` | `flat_copper_product_fabrication` | 外购电力 | 结算电表、分表和发票 | 电表编号；起止读数；kWh；生产线；设备；运行小时；分摊键 | 核对场址发票与生产线及主要设备分表 | kWh和MJ | 连续或每班读数，按月汇总 | 完整报告期，含代表性生产和停机 | 所有直接服务的轧制、炉、泵、通风、处理和精整设备 | 扣除范围外负荷，并用成文因果动因分配剩余共享负荷 | 电表校准；发票核对；分表覆盖说明 |
| `cp_gas_records` | `flat_copper_product_fabrication` | 天然气、气态氮和气态氢 | 流量计与供应商记录 | 气体识别；仪表编号；体积；温度；压力；能量含量或纯度；设备；批次 | 核对经校准生产线仪表与供应商发票及储罐/管道平衡 | 按已声明基准条件计的m3 | 连续或每批次 | 完整报告期 | 所有范围内炉、干燥器和保护气氛系统 | 各气体分别汇总，并按合格产品质量归一化 | 校准；供应商证书；基准条件换算；泄漏与平衡检查 |
| `cp_consumable_records` | `flat_copper_product_fabrication` | 冷轧油、硫酸和氢氧化钠 | 库存领用、采购和槽液管理记录 | 化学品识别；配方；浓度；领用质量；退回质量；槽位；生产线；批次 | 核对库房领用和槽位变化与生产线记录；排除有记录的循环量 | 按交付状态计的kg溶液或产品 | 每次领用和换槽 | 完整报告期 | 所有范围内轧制、酸洗和直接服务的处理系统 | 按物质计算外部净补充量，并按合格产品质量归一化 | 供应商规格；浓度分析；槽体校准；库存核对 |
| `cp_water_records` | `flat_copper_product_fabrication` | 净工艺用水 | 水表与水平衡记录 | 来源；仪表编号；体积或质量；换算时的密度；使用区域；循环体积；排放 | 经校准仪表及按使用区域编制的水平衡 | kg，并保留源体积 | 连续或每日 | 完整报告期 | 轧辊冷却、表面处理、漂洗、刷洗和直接服务的处理 | 外部补充量减范围外用水；除场址平衡要求外，不因水随废物离开而扣减 | 仪表校准；水平衡闭合；密度及换算记录 |
| `cp_output_records` | `flat_copper_product_fabrication` | 废铜、废轧制油和废酸洗液 | 磅单、废物联单和转移分析 | 识别；质量；合金或组成；酸浓度；溶解铜；油/水含量；去向；回收路线 | 对每个容器或转移量称重，并与接收方资料核对 | kg | 每次转移 | 完整报告期 | 所有范围内产生点和储存点 | 各废物分别汇总并排除有记录的内部返回量 | 秤校准；联单；实验室分析；接收方与回收证据 |
| `cp_direct_co2_calculation` | `flat_copper_product_fabrication` | 直接化石源二氧化碳 | 燃料计量、供应商组成和计算记录 | 燃料体积或质量；含碳量；基准条件；氧化假设；设备；期间 | 根据采集的直接前景燃烧或制气所用燃料碳计算化石源二氧化碳 | kg CO2 | 每月及报告期总量 | 完整报告期 | 所有范围内直接化石燃烧和场内含碳保护气生成 | 分源汇总计算排放，并按合格产品质量归一化 | 计量证据；供应商证书或实测含碳量；公式版本；复核记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每一清单行 | 归一化量 = 批次交换量 × 1,000 / 批次合格最终产品净质量 | 批次交换量；合格产品净质量 | 每1,000 kg参考产品的数量 |  |
| `calc_volume_to_mass` | 仅测量体积的水和交付液体溶液 | 质量 = 实测体积 × 记录温度下的密度；浓度保留为交付状态基准 | 体积；密度；温度；浓度 | kg溶液或水 |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide_output` | 按成文碳平衡和氧化假设，将进入直接前景设备的实测化石燃料碳换算为二氧化碳；不计上游供应链排放 | 燃料量；含碳量；氧化假设；分子量换算 | kg直接化石源CO2 |  |
| `calc_copper_mass_balance` | 含铜输入和输出 | 核对铸造板坯含铜质量与合格产品、外运废铜、实测处理残余物及库存变化；调查无法解释的不平衡 | 板坯质量；产品质量；废铜质量；实测残余物；在制品变化 | 批次含铜质量平衡闭合度 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和铸造板坯 | 声明牌号/合金、形态、厚度、尺寸、状态、表面、边部状态及产品处置；分开记录不合格品和铜箔输出。 | 生产订单；检验证书；材质证明；尺寸检测记录 |
| `dq_temporal_coverage` | 所有前景交换 | 覆盖包含常规启机、稳定生产、产品切换、维护和停机的代表性生产期，或披露并说明每项排除。 | 报告日历；生产线记录；维护和停机记录 |
| `dq_metering` | 能源、气体、水和质量记录 | 使用经校准仪表或经核对的供应商记录；仅对计量缺口估算并报告其占比。 | 校准证书；发票；核对与缺口记录 |
| `dq_completeness` | 过程清单 | 分别核算本 PCR 中每项适用的原子交换，并披露任何已确认不适用行；不得用汇总的公用工程、化学品、废物或大气排放替代。 | 完成的清单检查表；不适用证据；质量与能量核对 |
| `dq_route_disclosure` | 系统边界 | 声明热/冷轧、炉燃料、退火气氛、酸洗化学品、水循环、油/酸回收、废铜去向及直接服务的处理。 | 工艺流程图；设备清单；操作规程；废物路线资料 |
| `dq_uncertainty` | 计算值和分配值 | 保留原始值、公式、分配键、不确定性或数据缺口说明，以及可由复核者重现的计算工作簿或等效记录。 | 计算文件；版本历史；独立检查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | 若产品净厚度不大于0.15毫米，或缺少牌号/合金、产品形态、尺寸、状态、表面质量、边部状态、地域、技术或报告期，则校验失败。 | `un-cpc-3-0-2025` |
| `val_inventory_atomicity` | process_inventory | 若一项清单行合并多种公用工程、气体、化学品、废物或排放，或选定流是集合/未来选择指令而非一项具体交换，则校验失败。 |  |
| `val_mass_normalization` | inventory_amounts | 将每项数量重新计算至净重1,000 kg合格产品，并核验单位换算、包装排除以及不合格品与废铜的分别处理。 |  |
| `val_route_completeness` | conditional_exchanges | 对每项气体、酸、碱和废物行，要求提供实测量或有记录的路线特定不适用证据；依据工艺和采购记录核验已声明设备。 | `eu-jrc-nfm-bref-2017` |
| `val_copper_balance` | copper_bearing_flows | 要求提供涵盖板坯投入、合格产品、废铜、残余物和库存变化的含铜质量平衡；调查并披露无法解释的不平衡。 |  |
| `val_direct_co2` | direct_emissions | 按化石燃料计量碳核验直接化石源二氧化碳，并排除外购电力、燃料、气体、化学品和板坯数据集的上游排放。 |  |
| `val_uuid_and_locale` | tiangong_identity | 要求state-100 Tiangong UUID与流类型、属性和单位组一致，并要求中文版本使用Tiangong正式中文baseName；经审计未解决的行保持UUID为空。 |  |
| `val_source_and_range_status` | evidence | 对照原文核验每项引用来源；将清单审查元数据中所有缺少的外部范围视为未解决证据需求，绝不根据单一案例或未核验元数据推断范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 铜及铜合金板、片或带制造的门到门前景数据集 |
| downstream_use | `secondary_dataset`；经独立审查并解决产品特定上游链接与重要证据缺口后可作为`background_dataset` |
| allowed_use | 需要符合已声明板坯起始条件和产品限定信息的铜平板产品制造阶段的产品碳足迹与生命周期评价模型 |
| excluded_use | 铜采矿、冶炼、精炼或板坯生产数据集；厚度不超过0.15毫米的铜箔；线、盘条、管材或加工零部件生产；未披露的摇篮到大门主张；未进行敏感性审查而跨合金、状态或表面路线进行通用替代 |
| required_metadata | 规范 PCR id；产品 UUID；牌号/合金；产品形态；厚度；尺寸；状态；表面和边部状态；板坯数据集；轧制/退火/酸洗路线；地域；技术；报告期；分配；数据源；未解决识别与范围状态 |
| required_quality_disclosure | 初级数据占比；仪表和秤覆盖率；时间代表性；缺失数据估算；质量平衡闭合度；分配敏感性；内部循环处理；上游数据集选择；未解决 Tiangong 识别与范围证据需求 |
| update_trigger | 合金或产品形态、0.15毫米厚度边界一侧、轧制或炉技术、退火气氛、酸洗化学品、回收路线、场址地域、分配方法、上游板坯数据集发生变化，或实测能源、水、收率、废物或直接排放发生重要变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | 联合国统计司，CPC 3.0版结构，2025年6月30日，[正式 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv)，检索日期2026-09-04 | 通过原文核验CPC 41514产品识别，以及本产品与铜箔之间的0.15毫米厚度边界 |
| `eu-jrc-nfm-bref-2017` | official_guidance | 欧盟委员会联合研究中心，*有色金属工业最佳可行技术（BAT）参考文件*，JRC107041，2017，[正式 PDF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf)，检索日期2026-09-04 | 通过原文核验铸造板坯/板锭起始材料，热轧与冷轧、退火、酸洗、漂洗、干燥和精整，以及轧制油、保护气、水、酸、碱、废铜和回收/处理角色 |
