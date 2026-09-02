---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-of-meat-or-meat-offal-inedible-greaves
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 哺乳动物副产物制肉骨粉

## 1. 范围与适用性

本 PCR 仅覆盖一条路线：已声明的哺乳动物屠宰及肉类加工副产物经尺寸减小、方法 1 压力灭菌、使用外购蒸汽和电网电力的连续干法炼制、排脂与螺旋压榨、研磨、筛分，并在炼制厂门以散装不可食用肉骨粉（MBM）交付。前景系统从合格动物副产物跨过炼制厂接收边界开始，至放行的 MBM 和单独销售的炼制脂肪离开厂内储存设施为止。上游动物生产、屠宰、外购蒸汽与电力生产、进出厂运输、MBM 使用和生命终止不属于本前景系统，须通过明确链接的上下游数据集表示。

本 PCR 不对完整 CPC 21190 类别求平均。以下产品或路线不在范围内：未声明骨组分的肉粉、禽副产物粉、羽毛粉、血粉、鱼粉、食用粉、作为最终产品销售的油渣、湿法炼制、批次干法炼制、制粒、零售包装产品，以及使用厂内燃料燃烧制蒸汽的路线。动物风险类别、法规处理方法、能源供应、产品形态或共产品配置不同的数据集，须建立另一条路线特定的前景说明，不得宣称符合本路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-of-meat-or-meat-offal-inedible-greaves |
| classification_refs | CPC 3.0: 21190 — 不可食用肉或肉内脏的粉、粗粉及团粒；油渣 |
| covered_products | 按已声明连续干法炼制路线生产、作为固体蛋白质—矿物共产品的散装哺乳动物肉骨粉 |
| excluded_products | 未声明骨组分的肉粉；禽、羽毛、血、鱼或食用粉；作为最终产品的油渣；团粒；湿法或批次炼制粉；来源路线未声明的混合产品 |
| representative_product | Meat and bone meal (MBM), production mix at rendering plant, GLO |
| production_route | 哺乳动物副产物；尺寸减小至 ≤50 mm；方法 1 压力灭菌；连续间接蒸汽干法炼制；排脂与螺旋压榨；研磨筛分；散装储存；外购蒸汽和电网电力 |
| market_state | 炼制厂门交付的干燥、筛分、散装不可食用粉 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由已声明路线生产并放行的散装哺乳动物肉骨粉 |
| How much | 厂门处 1 kg 原态 MBM |
| How well | 已放行批次，声明动物物种组合、动物副产物类别、处理方法、水分、粗蛋白、粗脂肪、灰分、粒径规格和法定用途限制 |
| How long or cycle | 已声明报告期内的一个代表性生产周期，归一化为 1 kg 放行 MBM |
| reference_flow_link | 过程 `meal_finishing_storage` 的输出行 `meat_and_bone_meal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 肉骨粉（MBM） `c9d74b2c-9179-4330-a54e-f63cc2c86f95` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 哺乳动物物种组合；动物副产物法规类别；方法 1 关键控制点状态；连续干法炼制技术；地理；报告期；外购蒸汽来源；电力组合；水分；粗蛋白；粗脂肪；灰分；粒径规格；散装状态；炼制脂肪共产品状态；分配方法；法定用途限制 |

所有必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效前景数据包字段中声明。限定信息不完整时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 放行 MBM | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流记录为 1 kg 原态放行 MBM；不得静默换算为干物质。 |
| `dry_matter_disclosure` | MBM、原料动物副产物、压榨饼、炼制脂肪和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和 kg 干物质 | 计算干物质平衡或分配因子时，记录湿质量和实测水分。 |
| `energy_carrier_separation` | 外购电力和蒸汽 | Energy | 电力用 kWh；蒸汽用 MJ 或 kg | 电力与外购蒸汽分别计量。不得使用合并的能源或公用工程流；保留供应商单位并记录每次换算。 |
| `water_stream_separation` | 工艺水、冷凝液和排放废水 | Mass 或 volume | kg 或 m3 | 供应工艺水、回收冷凝液和排放废水须保持为不同物流；体积转质量须声明密度假设。 |
| `reporting_period_normalisation` | 所有前景交换 | 交换对应属性 | 每 kg MBM 的交换对应单位 | 在同一生产周期和报告期汇总合格记录，扣除有凭据的内部循环一次，再除以放行 MBM 质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在炼制厂接收点称量合格的哺乳动物屠宰及肉类加工副产物，并声明物种组合、法规类别、来源设施、接收时间、水分采样计划和拒收记录 |
| starting_condition_role | 进入路线的前景原料；上游畜牧生产和屠宰负荷保留在链接的供应商数据集中 |
| product_classification_scope | CPC 3.0 21190 中仅由哺乳动物 MBM 表示的路线特定子集 |
| recursive_input_rule | 外购 MBM 或用于混合的同类粉须记录为上游产品输入，不得在本前景内递归生成；内部返工仅净扣一次并披露 |
| upstream_dataset_requirement | 链接动物副产物、外购蒸汽、电力、工艺水、次氯酸钠及其他外购投入的供应数据集；地理、技术和报告期应尽可能匹配 |
| disclosure | 声明截断、拒收载荷、加工前储存时间、方法 1 控制记录、内部循环、外购蒸汽来源、水处理、排放控制技术、共产品数量与价格、分配方法和缺失测量 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | 前景数据集 | 仅纳入已声明哺乳动物 MBM 路线；不得把油渣、肉粉、禽粉、湿法炼制、批次炼制、制粒或厂内蒸汽生产平均到本数据集中。 | `unsd-cpc30-21190`; `epa-ap42-953`; `woodgate-2023-rendering` |
| `boundary_gate_to_gate` | 前景与链接背景 | 采集从接收合格原料至厂内储存处放行散装 MBM 和炼制脂肪的所有交换；范围外上下游阶段仅通过明确链接数据集表示。 | `ec-pef-2021` |
| `boundary_method1_controls` | 尺寸减小与压力灭菌 | 声明方法 1 时，保留每日尺寸减小检查以及不间断时间、中心温度和绝对压力记录；路线目标为 ≤50 mm、>133 °C、≥20 min、≥3 bar absolute，并以现行司法辖区规则为准。 | `eu-reg-142-2011-method1` |
| `boundary_pollution_control` | 炼制废气与水控制 | 纳入捕集的蒸煮与压榨蒸气、冷凝液、洗涤器投入、废水、污泥和残余排放；不得隐藏在合并的公用工程、废物或排放占位符中。 | `epa-ap42-953` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_size_reduction` | 原料接收与尺寸减小 | `required` | Always | 前景验收、称量和 ≤50 mm 制备 | kg 合格原料动物副产物 |
| `sterilisation_dry_rendering` | 方法 1 灭菌与连续干法炼制 | `required` | Always | 使用外购蒸汽的前景卫生处理、脱水与细胞破碎 | kg 灭菌炼制物料 |
| `fat_separation_pressing` | 排脂与螺旋压榨 | `required` | Always | 炼制脂肪与蛋白质—矿物固体的前景分离 | kg 压榨饼和 kg 炼制脂肪 |
| `meal_finishing_storage` | 研磨、筛分与散装储存 | `required` | Always | 筛分 MBM 的前景生产与放行 | 1 kg 放行 MBM |
| `odor_wastewater_control` | 异味与废水控制 | `required` | Always | 捕集蒸气、冷凝液和清洗水的前景处理 | 每 kg 放行 MBM 的 kg 处理物流 |

### 过程：原料接收与尺寸减小（`receiving_size_reduction`）

#### 输入

##### 产品流

###### 合格哺乳动物副产物（`raw_mammalian_animal_byproducts`）

合格的内脏、骨、组织及其他已声明哺乳动物副产物在此跨越厂界，并构成进入 MBM 路线的全部物料。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Mammalian slaughter and meat-processing animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 称量每一批合格载荷，并扣除单独称量的接收拒收物
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 经校准的接收秤记录；过程角色由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: 暂定原料筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.2
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: accepted raw animal by-products per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 接收与尺寸减小用电网电力（`receiving_electricity`）

电力驱动接收输送机、泵、金属去除、破碎机和局部通风，并与蒸汽分别记录。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: 采用专用分表，或按设备时间和负载分配至合格原料
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 工厂电表和设备运行时间记录
- Sources: `epa-ap42-953`
- Range: 暂定接收用电筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: receiving and size-reduction electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 尺寸减小后的动物副产物（`size_reduced_animal_byproducts`）

达到声明粒径的合格物料转入灭菌过程，并不成为市场产品。

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Size-reduced mammalian animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 以合格输入扣除实测拒收物和有凭据的接收损失计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 接收质量平衡和方法 1 尺寸控制记录
- Sources: `eu-reg-142-2011-method1`

##### 废物流

###### 接收拒收物（`receiving_rejects`）

炼制前去除的异物与拒收动物物料作为单独称量的废物流离开，并记录去向和处理方式。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Receiving rejects from animal-by-product preparation
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 按拒收类别在外运或处理前称量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: 废物联单与拒收日志
- Sources: `epa-ap42-953`

##### 基本流

###### 未捕集接收 VOC 向空气排放（`receiving_voc_air`）

当烟囱、厂界、许可或工程记录识别出释放时，量化原料接收与短期暂存的逸散挥发性有机物。

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: 报告期实测或计算排放质量；仅有封闭和捕集证据时方可记录为零
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 设施监测、许可计算或源测试；排放相关性由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`

### 过程：方法 1 灭菌与连续干法炼制（`sterilisation_dry_rendering`）

#### 输入

##### 产品流

###### 进入灭菌的尺寸减小动物副产物（`size_reduced_feed`）

接收过程制备的物料进入压力灭菌和连续干法炼制线。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Size-reduced mammalian animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 等于 `size_reduced_animal_byproducts` 转移输出，并按有凭据的持料量调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 过程间物料转移记录
- Sources: `epa-ap42-953`; `eu-reg-142-2011-method1`

###### 外购饱和蒸汽（`purchased_steam`）

外购蒸汽用于方法 1 压力灭菌和连续脱水的间接供热；上游蒸汽生产不属于本前景，须明确链接。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Saturated steam, purchased
- Tiangong UUID: not resolved
- Flow property / unit: Energy / MJ; supplier mass / kg may also be retained
- Amount rule: 计量交付蒸汽，或以经校准的冷凝水回流量和有凭据的损失计算，且不得与电力合并
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 蒸汽表、发票和冷凝水记录；路线角色由 `epa-ap42-953` 和 `woodgate-2023-rendering` 支持
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`; `eu-reg-142-2011-method1`
- Range: 暂定外购蒸汽筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.2
  - Upper: 15
  - Unit: MJ/kg released MBM
  - Basis: purchased steam energy per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 灭菌与炼制用电网电力（`rendering_electricity`）

电力驱动灭菌器控制、连续蒸煮器驱动、泵、蒸气处理和仪表。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: 采用本过程专用电表或设备级运行时间计算
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 工厂电表和运行时间记录
- Sources: `epa-ap42-953`
- Range: 暂定炼制用电筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg released MBM
  - Basis: sterilisation and rendering electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

本过程无废物流输入。

##### 基本流

本过程无基本流输入。

#### 输出

##### 产品流

###### 灭菌炼制物料（`sterilised_rendered_material`）

含有已释放脂肪和蛋白质—矿物固体的脱水熟化物料转入排脂和压榨。

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sterilised rendered animal material
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 测量转移质量，或用进料、冷凝液、捕集蒸气和实测损失闭合蒸煮器质量平衡
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 蒸煮器出料和质量平衡记录
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`

##### 废物流

###### 蒸煮器冷凝液（`cooker_condensate`）

脱水中冷凝的水作为单独废水输入转入控制过程，不与供应水合并。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering cooker condensate
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 计量冷凝液体积，并用实测或有凭据的密度换算
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: 冷凝液流量计和储罐记录
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: 暂定蒸煮器冷凝液筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: condensate transferred to treatment per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 捕集蒸煮器废气（`captured_cooker_offgas`）

封闭收集的蒸煮器蒸气和不凝气以单独废气流转入已声明异味控制系统。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering cooker off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: 由流量与浓度测量或许可计算记录标准化气量和污染物负荷
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 风管流量、源测试和控制装置记录
- Sources: `epa-ap42-953`

##### 基本流

###### 未捕集蒸煮器 VOC 向空气排放（`cooker_voc_air`）

绕过蒸煮器捕集的 VOC 作为直接基本流排放报告，不与捕集废气相抵。

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: 由实测流量、浓度、捕集效率和运行时间计算排放污染物质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 源测试或许可计算；蒸煮器 VOC 相关性由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`

### 过程：排脂与螺旋压榨（`fat_separation_pressing`）

#### 输入

##### 产品流

###### 进入压榨的灭菌炼制物料（`rendered_material_to_press`）

灭菌炼制物料进入排脂和螺旋压榨，以物理分离液态脂肪和固体。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sterilised rendered animal material
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 等于蒸煮器转移输出，并按有凭据的持料量调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 过程间物料转移记录
- Sources: `epa-ap42-953`

###### 排脂与压榨用电网电力（`pressing_electricity`）

电力驱动排脂器、螺旋压榨机、脂肪泵和分离控制。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: 采用专用电表或运行时间—负载计算
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 工厂电表和设备运行时间记录
- Sources: `epa-ap42-953`
- Range: 暂定压榨用电筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: draining and pressing electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

本过程无废物流输入。

##### 基本流

本过程无基本流输入。

#### 输出

##### 产品流

###### 压榨蛋白质—矿物固体（`pressed_solids`）

含有蛋白质、骨矿物和残余脂肪的压榨固体转入研磨和筛分。

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered solid fraction, greaves, press cake
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 称量压榨饼，或由压榨输入、炼制脂肪、细料和实测损失计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 压榨饼秤和压榨质量平衡
- Sources: `epa-ap42-953`

###### 炼制哺乳动物脂肪共产品（`rendered_fat`）

单独销售的炼制脂肪作为共产品离开压榨线，其数量和厂门价值均为分配必需数据。

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered mammalian fat
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 分离后、储存损失前计量或称量可销售脂肪
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 罐位、流量计和发运记录；共产品角色由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: 暂定炼制脂肪产率筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kg/kg released MBM
  - Basis: saleable rendered fat per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 压榨细料与分离污泥（`press_fines_sludge`）

未内部循环的蛋白细料和不可销售分离污泥作为单独称量废物流离开。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering press fines and separation sludge
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 称量外运物料；单独记录内部循环并仅扣除一次
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: 废物联单、储罐记录和循环台账
- Sources: `epa-ap42-953`

###### 捕集压榨废气（`captured_press_offgas`）

封闭收集的压榨蒸气作为单独废气流转入异味控制过程。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering press off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: 由源测试或许可计算记录标准化流量和污染物负荷
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 风管流量和浓度记录
- Sources: `epa-ap42-953`

##### 基本流

###### 未捕集压榨 VOC 向空气排放（`press_voc_air`）

绕过压榨捕集的 VOC 作为直接空气排放单独量化。

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: 由实测流量、浓度、捕集效率和运行时间计算排放污染物质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 源测试或许可计算；压榨 VOC 相关性由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`

### 过程：研磨、筛分与散装储存（`meal_finishing_storage`）

#### 输入

##### 产品流

###### 进入后处理的压榨固体（`pressed_solids_to_finishing`）

压榨蛋白质—矿物固体进入研磨和筛分，不与其他粉类路线混合。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered solid fraction, greaves, press cake
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 等于转移的 `pressed_solids`，并按有凭据的持料量调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: 过程间转移与储存记录
- Sources: `epa-ap42-953`

###### 研磨与筛分用电网电力（`finishing_electricity`）

电力驱动研磨、筛分、除尘、输送和散装储存操作。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: 采用专用电表或设备级运行时间计算
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 工厂电表和运行时间记录
- Sources: `epa-ap42-953`
- Range: 暂定后处理用电筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: finishing and storage electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

本过程无废物流输入。

##### 基本流

本过程无基本流输入。

#### 输出

##### 产品流

###### 放行肉骨粉（`meat_and_bone_meal`）

筛分并放行的散装 MBM 是参考产品，须与不合格粉和其他粉类路线保持分离。

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Meat and bone meal (MBM) `c9d74b2c-9179-4330-a54e-f63cc2c86f95`
- Tiangong UUID: `c9d74b2c-9179-4330-a54e-f63cc2c86f95`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 扣除全部拒收和内部循环物料后，恰为 1 kg 放行原态 MBM
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_release`
- Source / estimate basis: 放行批次秤、实验室证书和已核验 Tiangong 流身份
- Sources: `unsd-cpc30-21190`; `woodgate-2023-rendering`

##### 废物流

###### 不合格粉（`offspec_meal`）

未达到声明放行规格且未内部返工的粉作为单独废物流离开，并记录处理方式。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Off-specification meat and bone meal
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 称量拒收批次；返工须单独记录并仅净扣一次
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: 质量放行日志、返工台账和废物联单
- Sources: `eu-reg-142-2011-method1`

##### 基本流

###### 研磨筛分颗粒物向空气排放（`grinding_pm_air`）

已声明除尘装置后的残余颗粒物作为直接基本流排放报告。

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Particulate matter, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: 由实测排气流量、颗粒物浓度、控制效率和运行时间计算排放质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 源测试或许可计算；研磨 PM 相关性由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`

### 过程：异味与废水控制（`odor_wastewater_control`）

#### 输入

##### 产品流

###### 湿式洗涤与清洗用工艺水（`control_process_water`）

所选多级湿式洗涤器和工艺区清洗路线的供应水与冷凝液、废水分别计量。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Process water
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg or volume / m3
- Amount rule: 洗涤器补水和清洗用水分别计量，仅在本过程总量中求和
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: 水分表和清洗日志
- Sources: `epa-ap42-953`
- Range: 暂定工艺水筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: supplied control and cleaning water per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 异味洗涤用次氯酸钠（`sodium_hypochlorite`）

所选湿式洗涤器使用的次氯酸钠按交付溶液质量和有效浓度记录。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sodium hypochlorite solution
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg solution and kg active substance
- Amount rule: 汇总采购与加药表记录，并按期初期末库存调整；声明有效浓度
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_control_chemicals`
- Source / estimate basis: 化学品发票、罐存和加药日志；洗涤剂角色由 `epa-ap42-953` 支持
- Sources: `epa-ap42-953`

###### 污染控制用电网电力（`control_electricity`）

电力驱动捕集风机、泵、湿式洗涤、废水输送和处理控制。

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: 采用控制设备专用电表或运行时间—负载计算
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: 工厂电表和设备运行时间记录
- Sources: `epa-ap42-953`

##### 废物流

###### 进入废水控制的蒸煮器冷凝液（`cooker_condensate_to_control`）

炼制过程的全部冷凝液输出进入废水控制，并在原始记录中与供应工艺水保持分离。

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering cooker condensate
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 等于转移的 `cooker_condensate`，并按有凭据的储量变化调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: 过程间流量和罐位记录
- Sources: `epa-ap42-953`

###### 进入异味控制的捕集蒸煮器废气（`cooker_offgas_to_control`）

捕集的蒸煮器废气作为单独入口流进入所选多级湿式洗涤器。

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering cooker off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: 等于转移的 `captured_cooker_offgas`，并按有凭据的风管损失调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 控制装置入口流量和浓度记录
- Sources: `epa-ap42-953`

###### 进入异味控制的捕集压榨废气（`press_offgas_to_control`）

捕集的螺旋压榨废气作为自身入口流进入湿式洗涤器，不在源记录中与蒸煮器废气合并。

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering press off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: 等于转移的 `captured_press_offgas`，并按有凭据的风管损失调整
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 控制装置入口流量和浓度记录
- Sources: `epa-ap42-953`

##### 基本流

本过程无基本流输入。

#### 输出

##### 产品流

本过程无产品流输出。

##### 废物流

###### 处理后废水排放（`treated_wastewater`）

离开前景处理的最终废水与冷凝液、供应水分别记录，并声明去向和实测水质。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Treated rendering wastewater
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg or volume / m3
- Amount rule: 计量排放体积，并保留受管参数的浓度与负荷记录
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: 出水流量计、实验室结果和排放记录
- Sources: `epa-ap42-953`
- Range: 暂定废水排放筛选估计
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 15
  - Unit: kg/kg released MBM
  - Basis: treated wastewater discharged per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 废水处理与洗涤器污泥（`control_sludge`）

废水和湿式洗涤控制产生的分离污泥以固体或浆状废物离开，并记录含水率和去向。

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering wastewater and scrubber sludge
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg as received and kg dry matter
- Amount rule: 称量外运污泥并测量或记录水分
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: 废物联单、污泥罐记录和水分结果
- Sources: `epa-ap42-953`

##### 基本流

###### 控制后残余 VOC 向空气排放（`controlled_voc_air`）

湿式洗涤器后剩余 VOC 作为直接排放报告，不与未捕集蒸煮器或压榨 VOC 合并。

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: 由实测标准化流量、浓度和运行时间计算出口污染物质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: 控制装置出口测试和运行记录
- Sources: `epa-ap42-953`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有多输出前景过程 | 首先细分仪表和记录，使接收、灭菌/炼制、压榨、后处理和控制交换在技术可行时直接归属。可为单一过程或输出测量的交换不得分配。 | `ec-pef-2021` |
| `allocation_shared_rendering` | MBM 和炼制脂肪 | 对无法细分或扩展的真正共享炼制交换，先检验并记录相关物理关系。若无物理关系能表示粉与脂肪的不同功能，则按同一报告期各共产品的正厂门年净收入分配；披露两种输出的价格、质量和因子。 | `ec-pef-2021` |
| `allocation_waste_and_rework` | 拒收物、细料、污泥、不合格粉和内部返工 | 将处理负荷归给产生相应废物的过程；没有明确扩展系统研究不得给避免负荷信用。内部返工仅净扣一次，并保留总量和净量记录。 | `ec-pef-2021` |
| `allocation_sensitivity` | 发布的次级或背景数据集 | 当共享负荷实质影响 MBM 结果时，在所选收入分配结果之外报告未分配联合过程清单和质量分配敏感性结果。 | `ec-pef-2021`; `woodgate-2023-rendering` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receiving_size_reduction`; `sterilisation_dry_rendering`; `fat_separation_pressing`; `meal_finishing_storage` | 原料、中间物流、MBM 和炼制脂肪 | 秤、流量计、储罐和库存记录 | timestamp; lot; stream; gross; tare; net mass; moisture; opening stock; closing stock; recycle | 经校准的秤/仪表和库存变化核对 | kg; kg dry matter | 每载荷/批次；每日核对 | 由数据生产者声明并说明理由的完整代表性报告期 | 服务已声明路线的全部设备和储存设施 | 按物流汇总合格质量，调整库存变化，内部循环仅扣一次，再按放行 MBM 归一化 | 校准、批次追溯、库存核对和签字质量平衡复核 |
| `cp_energy` | 所有过程 | 电力和外购蒸汽 | 仪表、发票、冷凝水和运行时间记录 | meter id; opening; closing; unit; steam pressure; steam temperature; condensate return; equipment power; runtime | 优先专用仪表；共享表仅用有凭据的分配 | kWh; MJ; kg steam | 连续/每日读表；月度发票 | 与质量记录相同期间 | 全部路线设备；披露共享服务 | 用有凭据因子换算，保持载能体分离，扣除输出，按放行 MBM 归一化 | 仪表校准、发票核对和换算工作表 |
| `cp_water_wastewater` | `sterilisation_dry_rendering`; `odor_wastewater_control` | 供应水、冷凝液和废水 | 流量计、储罐和实验室记录 | stream; volume; mass; density; COD; BOD; total suspended solids; nitrogen; phosphorus; discharge destination | 分流计量和代表性实验室采样 | kg; m3; kg pollutant | 连续/每日水量；按许可或生产周期频次采样 | 与生产相同期间 | 全部路线进水、内部转移和排放点 | 物流分开，以浓度 × 体积计算污染负荷，按放行 MBM 归一化 | 仪表校准、样品交接、方法和检出限记录 |
| `cp_air_emissions` | 所有过程 | VOC、颗粒物和控制废气 | 源测试、连续/周期监测、风管流量、许可和运行时间记录 | source id; pollutant; concentration; standardised flow; temperature; moisture; capture efficiency; control efficiency; operating hours | 优先直接源测试；否则采用有凭据的法规计算 | kg pollutant; Nm3 gas | 每次测试和运行期计算 | 覆盖报告期代表性运行状态 | 每个已声明源和控制装置进出口 | 浓度 × 标准化流量 × 时间，仅以同状态实测捕集/控制效率调整，按放行 MBM 归一化 | 测试报告、校准、运行日志和不确定性说明 |
| `cp_waste` | 所有过程 | 拒收物、细料、不合格粉和污泥 | 废物联单、秤、储罐和处理记录 | date; waste class; gross; tare; net mass; moisture; destination; treatment; internal recycle | 每批外运称量或经校准罐位扣减 | kg as received; kg dry matter | 每批外运；月度核对 | 与生产相同期间 | 全部路线废物点 | 按原子废物流和去向汇总，内部循环仅扣一次，按放行 MBM 归一化 | 签字联单、接收方、处理代码和水分证据 |
| `cp_control_chemicals` | `odor_wastewater_control` | 次氯酸钠 | 发票、储罐库存和加药记录 | product; active concentration; opening stock; purchases; closing stock; dosing meter | 库存平衡与加药表核对 | kg solution; kg active substance | 批次/月度 | 与生产相同期间 | 全部路线洗涤器 | 期初 + 采购 − 期末，同时报告溶液和有效物质量，按放行 MBM 归一化 | 供应商规格、发票和加药校准 |
| `cp_method1_ccp` | `receiving_size_reduction`; `sterilisation_dry_rendering` | 粒径、时间、中心温度和绝对压力 | 每日尺寸检查和灭菌批次/连续控制记录 | timestamp; line; maximum particle size; core temperature; residence time; absolute pressure; alarm; deviation; disposition | 经验证仪表的不间断电子记录和每日破碎机检查 | mm; °C; min; bar absolute | 灭菌连续；尺寸减小每日 | 所有被表示生产周期 | 完整已声明路线 | 标识任何低于声明最小值的区间；受影响输出隔离至处置有凭据 | 校准、验证、报警历史、偏差调查和放行批准 |
| `cp_product_release` | `meal_finishing_storage` | 放行 MBM 质量和参考质量 | 批次秤与实验室证书 | lot; species mix; category; moisture; crude protein; crude fat; ash; particle size; release decision; legal use restriction | 数据生产者声明的代表性采样和实验室方法 | kg; mass %; mm | 每放行批次 | 报告期全部放行批次 | 服务路线的全部 MBM 料仓 | 按批次质量加权实验室结果并报告分布；参考量保持原态质量 | 采样计划、方法、实验室 QA/QC 和授权放行 |
| `cp_allocation` | `fat_separation_pressing`; shared services | MBM/脂肪分配 | 发运、发票、成本和生产记录 | product; saleable mass; net revenue; price period; currency; shared exchange; allocation factor | 将年度质量和正净收入与审计记录核对 | kg; currency; fraction | 月度，年度汇总 | 与清单相同期间 | 已声明工厂与路线 | 先细分；否则以同期输出数据计算所选和敏感性因子 | 审计核对、价格来源、公式和因子合计检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | 每个前景交换 | 每 kg MBM 交换 = 报告期交换 ÷ 报告期放行原态 MBM 质量 | 原子交换记录；放行 MBM 质量 | exchange/kg MBM | `ec-pef-2021` |
| `calc_mass_balance` | 每个过程及完整前景 | 闭合度 =（总质量输入 − 总质量输出 − 有凭据的库存增加）÷ 总质量输入；调查物流特定原因，不得强制闭合 | 湿质量；水分；库存变化；循环 | 湿态和干物质闭合 | `epa-ap42-953`; `woodgate-2023-rendering` |
| `calc_pollutant_load` | 空气和水污染物 | 负荷 = 浓度 × 标准化气体流量或废水体积 × 运行时间；仅以同状态实测捕集/控制效率调整 | 浓度；流量；时间；效率 | kg pollutant | `epa-ap42-953` |
| `calc_revenue_allocation` | 不可分共享负荷 | 因子_i = 同期 MBM 和炼制脂肪正净收入_i ÷ 正净收入合计；因子合计须为 1 | 两共产品可销售质量；净价格/收入 | 共享负荷分配因子 | `ec-pef-2021` |
| `calc_dry_matter` | 含水物料流 | 干质量 = 湿质量 ×（1 − 水分质量分数），采用同期代表性水分 | 湿质量；水分 | kg dry matter | `woodgate-2023-rendering` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | 数据集和参考流 | 证明产品为哺乳动物 MBM，声明物种/类别和精确路线，并排除 CPC 21190 其他形态。 | 供应商声明、流程图、放行规格和 Tiangong 参考身份 |
| `dq_temporal` | 所有前景数据 | 使用共同代表性报告期，说明期间长度的理由，并披露停产、异常事件和替代。 | 仪表覆盖报告和生产日历 |
| `dq_completeness` | 原子流清单 | 核对每一流卡，或用证据记录该卡为零；合并公用工程、能源、水、废物或排放不合格。 | 完整性矩阵和来源台账 |
| `dq_ccp` | 方法 1 路线 | 保留完整尺寸、时间、温度和压力证据，以及每项偏差的处置。 | 经验证电子记录、每日检查和偏差日志 |
| `dq_mass_energy` | 物料、电力和蒸汽 | 仪表与发票、库存变化和生产核对；披露共享表分配和换算因子。 | 校准、发票、核对和不确定性说明 |
| `dq_air_water` | 排放和废水 | 保留源测试与实验室方法、检出限、标准状态、采样代表性和负荷计算。 | 测试报告、样品交接、计算和许可 |
| `dq_allocation` | 共享炼制负荷 | 保留同期未分配清单、所选因子、价格/收入和质量敏感性。 | `cp_allocation` 工作表和审计记录 |
| `dq_estimates` | 每个 `reasoned_estimate` 范围 | 暂定范围仅作筛选；由前景记录替代，发布关键允许范围须有经评审证据。 | 范围登记和评审处置 |
| `dq_uuid` | Tiangong 链接行 | 仅使用直接核验且无版本的 UUID；未解析清单 UUID 保持明确未解析。 | PCR 内容外 UUID 核验记录和 manifest 评审元数据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_route` | 身份与过程图 | 若数据集混入非哺乳动物粉、作为最终产品的油渣、肉粉、湿法/批次炼制、制粒或厂内蒸汽生产，则失败。 | `unsd-cpc30-21190`; `epa-ap42-953` |
| `validate_reference` | 参考产品 | 要求恰为 1 kg 原态放行 MBM，链接 `c9d74b2c-9179-4330-a54e-f63cc2c86f95` 和 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，并声明全部必需限定信息。 | `woodgate-2023-rendering` |
| `validate_method1` | 尺寸减小与灭菌 | 要求完整路线证据：≤50 mm、>133 °C、不间断 ≥20 min、≥3 bar absolute，并记录偏差处置；同时核对现行司法辖区规则。 | `eu-reg-142-2011-method1` |
| `validate_atomic_flows` | 过程清单 | 每张原子流卡须保留非空说明、方向、流类型、必需性、数量规则、单位、来源/估算依据和已核验或未解析的 Tiangong UUID 状态。 | `epa-ap42-953`; `ec-pef-2021` |
| `validate_mass_balance` | 每个过程和完整前景 | 报告湿态和干物质闭合；超出数据集特定且经评审的接受准则时调查，不得改变参考输出强制闭合。 | `epa-ap42-953`; `woodgate-2023-rendering` |
| `validate_energy_water` | 电力、蒸汽和水物流 | 电力与蒸汽合并，或原始记录中供应水、冷凝液和废水合并时失败。 | `ec-pef-2021` |
| `validate_emissions_waste` | 空气、废水和固体废物 | 要求 VOC、颗粒物、冷凝液、废水、拒收物、细料、不合格粉和污泥的原子源/去向记录；适用时有凭据地记录为零。 | `epa-ap42-953` |
| `validate_allocation` | MBM 和炼制脂肪 | 要求细分证据、同期共产品质量和正净收入、因子合计为 1、未分配清单和质量敏感性；无解释的零负荷或避免负荷处理失败。 | `ec-pef-2021` |
| `validate_provisional_ranges` | 推理估算 | 将每个暂定范围标识为可替换；无经评审证据时禁止作为发布关键允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可发布为 `secondary_dataset` 或 `background_dataset` 的路线特定前景数据包 |
| downstream_use | 用于产品、法定用途和路线均与已声明限定信息匹配的产品系统的厂门 MBM 供应 |
| allowed_use | 具有明确上游动物副产物、蒸汽、电力和处理链接的归因 LCA、供应链筛选和前景模型构建 |
| excluded_use | 完整 CPC 21190 平均；肉粉、油渣、禽/鱼/血/羽毛粉；其他法规类别或技术；未经关键评审的公开比较声明；法律合规判定 |
| required_metadata | canonical PCR id；参考 UUID/属性；地点；技术；报告期；物种组合；动物副产物类别；方法 1 记录；产品组成；能源供应商；水与排放控制；共产品输出；分配因子；截断；不确定性；数据所有者和评审状态 |
| required_quality_disclosure | 测量覆盖；校准；质量/干物质闭合；能源和水核对；排放与废水方法；缺失数据；推理估算；分配敏感性；未解析 UUID；偏差和纠正措施 |
| update_trigger | 原料组合、法规类别、卫生处理方法、蒸煮器/压榨技术、能源供应、控制系统、产品规格、分配关系、地理发生实质变化，或数据超过项目评审间隔 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc30-21190` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0, Explanatory Notes*, code 21190, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-20）。 | 官方分类标题，并确认规范 CPC 类别宽于本 MBM 路线 |
| `epa-ap42-953` | `official_guidance` | U.S. Environmental Protection Agency, *AP-42 Section 9.5.3: Meat Rendering Plants*, September 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-3_0.pdf（检索于 2026-08-20）。 | 连续干法炼制过程分解；原料处理；排脂、压榨、研磨筛分；VOC/PM 来源；湿式洗涤控制 |
| `eu-reg-142-2011-method1` | `standard` | European Commission, Commission Regulation (EU) No 142/2011, consolidated text of 23 June 2020, Annex IV, Chapter III, Method 1. https://eur-lex.europa.eu/eli/reg/2011/142/2020-06-23/eng（检索于 2026-08-20）。 | 路线特定粒径、时间、温度、压力和记录控制；使用者须核对现行法律 |
| `ec-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-20）。 | 功能单位框架、前景/背景边界、数据质量、清单完整性和多功能层级 |
| `woodgate-2023-rendering` | `literature` | Woodgate, S. L. (2023), “Meat industry by-products: a bio-refinery approach to the production of safe, value added products for sustainable agriculture applications,” *Frontiers in Animal Science* 4:1259200. https://doi.org/10.3389/fanim.2023.1259200（开放全文核验于 2026-08-20）。 | 同行评审全文佐证尺寸减小、间接高压蒸汽加热、水蒸发、脂肪分离、灭菌及 MBM/炼制脂肪共生产；未从该文采用定量清单因子 |

总调度已用三组肉骨粉路线检索式和一组论文精确标题检索完成 OpenAlex 发现，共筛查 38 条结果记录。路线检索结果多数涉及水产饲料、废物资源化、水泥替代燃料或其他无关过程，均被拒绝。精确标题检索确认了 `woodgate-2023-rendering`；该文只因 Frontiers 原文已独立核验、可定性支持炼制过程而保留。任何摘要、元数据记录或搜索摘要都未用于支撑规则或定量值。
