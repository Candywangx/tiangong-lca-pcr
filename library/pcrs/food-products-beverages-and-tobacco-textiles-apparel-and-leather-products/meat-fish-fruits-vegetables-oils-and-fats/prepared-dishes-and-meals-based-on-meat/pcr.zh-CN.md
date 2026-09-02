---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-meat
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 肉类预制菜肴和膳食

## 1. 范围与适用性

本 PCR 用于以肉或肉制品为特征性配料的工业化预制菜肴和膳食前景数据包。范围包括冷藏、冷冻或常温状态的即食和即热产品，例如酱卤制品、熟肉菜肴、炖制品、填充或复合肉类膳食及同类配方。

前景边界从肉类、其他食品配料、包装、公用工程和外购服务进入生产企业开始，到合格产品以声明的包装和储存状态在工厂门放行为止。供应商至工厂的运输以及所有外购投入的上游生产仍须通过上游数据集连接。工厂门后的配送、零售、消费者烹调或复热、消费及生命周期末端不属于本工厂门数据集；生命周期模型需要时应另加下游模块。

所选天工产品流 `Sauce braised products` 是 CPC 3.0 代码 21186 下的真实代表产品，不得将其改名或视为该类别所有菜肴的虚构通用流。将本 PCR 用于其他覆盖产品时，应保留本方法学，同时声明实际产品身份及该代表流的代表性局限。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-meat |
| classification_refs | CPC 3.0：21186，肉类预制菜肴和膳食（精确映射语境） |
| covered_products | 以肉或肉制品为特征性配料、供人食用的预制菜肴和膳食，包括酱卤制品、熟肉菜肴、炖制品、复合肉类膳食以及同类即食或即热产品 |
| excluded_products | 生鲜肉和屠宰产品；作为生肉销售的未熟肉制备品；以鱼类、蔬菜、谷物或其他非肉类别为特征的产品；宠物食品；餐饮服务；零售活动；消费者膳食制备 |
| representative_product | 由精确天工产品流 `Sauce braised products`（`61b586fc-1d4a-4abe-981d-19c27f9a33b0`）代表的酱卤制品 |
| production_route | 配料接收和受控储存；预处理与配方；烹煮、卤制或其他经确认的热加工；熟后处理；分装和包装；清洗消毒；废水和固体废物处理；成品储存和工厂门放行 |
| market_state | 声明为冷藏、冷冻或常温；包装或散装；即食或即热；必须注明储存温度和标签保质期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足所声明配方、热处理、食品安全、包装和市场状态要求的可食用肉类预制菜肴或膳食 |
| How much | 工厂门放行时 1 kg 合格产品净质量 |
| How well | 声明产品身份、肉种与肉含量、配方族、热加工、包装形式、即食状态、储存条件及适用的安全或质量规范 |
| How long or cycle | 一批生产输出交付至工厂门；声明标签保质期及所需储存条件，但本工厂门数据集排除下游储存损失和使用 |
| reference_flow_link | 声明市场状态下 1 kg 精确天工代表产品流 `Sauce braised products` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 熟制食品 `61b586fc-1d4a-4abe-981d-19c27f9a33b0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品名称；肉种和肉含量基准；配方或配方族；即食或即热状态；烹煮或卤制路线；冷藏、冷冻或常温状态；净质量基准；包装形式；储存温度；标签保质期；工厂门地理位置；生产期 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任一项即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 工厂门放行的合格预制菜肴或膳食 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录烹煮、冷却及适用时沥液后的净可食产品质量；按声明选择包装前或包装后测量，但排除包装质量。全部前景清单归一化到 1 kg 参考产品。 |
| `ingredient_mass_consistency` | 肉类、其他配料、酱汁、食用工艺水、返工料和配方添加物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将批次配方和领料记录统一换算为 kg，并声明含水、冷冻、浓缩或复原投入采用的接收态或制备态基准。 |
| `packaging_mass_separation` | 进入工厂门系统的初级、次级和三级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料和层级分别报告包装；包装质量不得计入 1 kg 可食参考产品。 |
| `energy_unit_preservation` | 电力、蒸汽、燃料、热水、制冷及其他能源服务 | 适用能源属性 | 原始记录的 kWh 或 MJ | 保留计量表或发票单位，记录所有换算及热值基准；无明确换算因子时不得把能源载体换算为质量。 |
| `water_route_separation` | 配料水、工艺水、清洗水、直接取水和废水 | 质量或体积，并一致换算 | kg 或 m3 | 按用途和来源路线区分用水；质量—体积换算采用实测密度或声明的水密度约定，并保留原始仪表单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 肉类、其他食品配料、包装、公用工程和外购服务已进入生产企业，并声明温度、物态、供应商地理位置及上游数据集身份 |
| starting_condition_role | 工厂门前景起点；上游农业、屠宰、肉加工、配料制造、包装制造、能源供应和进厂运输仍是必须连接的背景要求 |
| product_classification_scope | 肉类预制菜肴和膳食；CPC 3.0 代码 21186 仅为映射语境，不能替代语义产品描述 |
| recursive_input_rule | 外购投入若本身为肉类预制菜肴或膳食，应作为带独立上游数据集的产品投入记录一次，不在本前景数据集内递归重建。同一报告边界内产生并回用的返工料作为内部循环，不重复记为新的外部产品投入。 |
| upstream_dataset_requirement | 对所有跨界肉类与非肉类配料、包装材料、能源载体、供水路线、外购运输服务、制冷剂补充、废物处理路线及废水处理路线连接代表性上游数据集 |
| disclosure | 声明纳入与排除阶段、产品配方族、储存状态、共产品、返工、食品损失、废水、直接排放、包装层级、分配方法、截断、数据缺口，以及配送、零售、使用和末端是否在数据集外 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 工厂门前景系统 | 纳入实际发生的接收与受控储存、预处理与配方、热加工、熟后处理、分份或灌装、包装、清洗消毒、废水与固废处理以及成品储存至工厂门放行。 | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `boundary_upstream_links` | 外购产品和服务 | 所有外购配料、包装、公用工程、制冷剂、运输和处理服务均作为跨界产品流或废物流并连接代表性上游数据集；不得把场址门作为供应链截断点。 | `eu-pef-method-2021` |
| `boundary_waste_and_coproducts` | 参考产品以外的前景输出 | 识别全部共产品、副产品、返工、食品损失、包装废物、废水和直接基本流排放；声明去向，且不得把可销售产品与废物合并。 | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `boundary_cutoff_control` | 排除的过程和流 | 肉类和其他配方配料、包装、工艺能源、水、参考产品、可销售共产品、食品损失、废水及直接排放不得截断。其他排除必须筛查、明确论证，并证明材料流、能量流和环境显著性的累计排除均不超过 3%；披露排除项及局限。 | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | 工厂门后配送、零售、消费者储存与制备、消费及生命周期末端 | 从本工厂门数据集排除并明确声明；研究目标要求从摇篮到坟墓结果时另加下游模块。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving_storage` | 配料接收与受控储存 | required | 始终纳入制备前实际发生的接收、检验、搬运和储存 | 前景接收与储存 | 每 1 kg 参考产品 |
| `preparation_formulation` | 肉类预处理与配方 | required | 始终纳入实际发生的配料计量、解冻、修整、切分、混合、腌制、酱汁制备和内部返工 | 前景预处理 | 每 1 kg 送入热加工的配方料 |
| `thermal_processing` | 烹煮、卤制或等效热加工 | required | 始终纳入定义产品的经确认热处理路线 | 前景转化 | 每 1 kg 热加工产品输出 |
| `post_cook_packaging` | 熟后处理、分装与包装 | required | 纳入实际冷却、暂存、沥液、分份、灌装、封口和包装；未发生操作在数据集元数据中标为不适用 | 前景精加工 | 每 1 kg 合格包装或散装产品 |
| `cleaning_sanitation` | 清洗与消毒 | required | 纳入归属于报告边界的食品接触面及加工区域清洗 | 前景支持过程 | 按实测生产周期或产线分配至每 1 kg 参考产品 |
| `wastewater_waste_handling` | 废水与固体废物处理 | required | 纳入废水、食品损失、不合格品和包装废物的收集、场内预处理、储存与外运 | 前景残余物管理 | 每 1 kg 参考产品 |
| `finished_storage_dispatch` | 成品储存与工厂门发运 | conditional | 工厂门放行前存在冷藏、冷冻、气调、保温或其他储存时纳入 | 前景储存与发运 | 每 1 kg 参考产品及记录的储存时长 |

### 清单行字段说明

下表是英文过程卡片的等价中文紧凑投影。方向/类型依次为输入或输出以及 `product_flow`、`waste_flow` 或 `elementary_flow`；“模式”依次给出 `value_mode`、`specificity`、`basis_kind` 和 `evidence_kind`。所有数量均按表列基准归一化；实际数据集必须使用采集记录或计算值，不得把临时范围作为默认值。

#### 配料接收与受控储存（`ingredient_receiving_storage`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `received_meat_ingredients` | input / `product_flow` | 与实际肉种、部位、肉制品及物态匹配的场址所选产品流；Mass/kg | 按肉类和批次记录投入覆盖生产的验收质量，另列解冻或修整损失；每 1 kg 参考产品 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_ingredient_bom` | `eu-pef-method-2021`; `codex-cxc-58-2005` | 0.10–1.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `received_other_ingredients` | input / `product_flow` | 与蔬菜、谷物、油脂、调味料、酱料、添加剂等实际非肉配料匹配的产品流；Mass/kg | 按配料及配方角色记录验收领用质量；每 1 kg 参考产品 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_ingredient_bom` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 0–1.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `inbound_transport_services` | input / `product_flow` | 按运输方式选择货运服务流；Transport work/tkm | 未含在交付产品上游数据集时，以交付吨数乘各运输段公里数；每 1 kg 参考产品 | `calculated_value`; `route_specific`; `transport_service`; `calculated_from_collection` | `cp_inbound_transport` | `eu-pef-method-2021` | 无 |
| `storage_direct_water` | input / `elementary_flow` | 匹配水源区室和地理位置的基本水流；Volume/m3 | 仅记录场址直接从环境取用且可归属本过程的实测水量；每 1 kg 参考产品 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_utilities` | `eu-pef-method-2021` | 0–0.020 m3/kg；`qa_guardrail`; `reasoned_estimate` |
| `accepted_ingredients` | output / `product_flow` | 与各验收配料匹配的内部转移流；Mass/kg | 验收接收量减接收和储存损失；内部质量平衡，不重复为外部输出 | `calculated_value`; `product_specific`; `reference_flow`; `calculated_from_collection` | `cp_ingredient_bom` | `eu-pef-method-2021` | 无 |
| `receiving_storage_losses` | output / `waste_flow` | 按材料和处理路线选择食品废物流；Mass/kg | 实测生产领用前拒收、腐败、破损、泄漏或温控失效质量；每 1 kg 参考产品 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 0–0.30 kg/kg；`qa_guardrail`; `reasoned_estimate` |

默认无废物输入；返还包装或可重复使用运输器具跨越场址边界时另列。储存制冷剂泄漏或场内燃烧排放发生时按物质记录。

#### 肉类预处理与配方（`preparation_formulation`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `prepared_recipe_inputs` | input / `product_flow` | 内部验收配料转移流或场址所选产品流；Mass/kg | 按配料、配方和批次记录领料质量，并单列内部返工；每 1 kg 参考产品 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_ingredient_bom` | `eu-pef-method-2021` | 无 |
| `formulation_water` | input / `product_flow` | 饮用水或工艺水产品流；Mass/kg | 按用途实测或按配方记录加入产品、酱汁、盐水、复原、清洗或解冻的水；每 1 kg 参考产品 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_water_records` | `codex-cxc-1-1969-2022` | 0–2.0 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `preparation_electricity` | input / `product_flow` | 匹配地理位置和电压的电力供应流；Energy/kWh | 分表计量解冻、切割、绞制、混合、泵送和配方用电，或用记录充分的产线分配；每 1 kg 参考产品 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_utilities` | `eu-pef-method-2021` | 0–5.0 kWh/kg；`qa_guardrail`; `reasoned_estimate` |
| `prepared_formulation` | output / `product_flow` | 内部已制备配方料转移流；Mass/kg | 配方投入总量减单独实测的制备损失和废水携带固体；每 1 kg 制备配方料输出 | `calculated_value`; `product_specific`; `process_output`; `calculated_from_collection` | `cp_mass_balance` | `eu-pef-method-2021` | 无 |
| `preparation_residues` | output / `waste_flow` | 匹配骨、脂肪、皮、修整物、洒落配料等材料和去向的废物流；Mass/kg | 批次或报告期实测残余质量；满足产品规范且有销售去向者改列产品流 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021`; `codex-cxc-58-2005` | 0–0.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |

默认无废物投入；场外回收食品材料作为配料进入时按产品投入并披露质量与上游建模。仅环境直接取水记为基本流。

#### 烹煮、卤制或等效热加工（`thermal_processing`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `thermal_formulation_input` | input / `product_flow` | 内部已制备配方料转移流；Mass/kg | 实测进入烹煮或卤制设备的批次质量；每 1 kg 热加工产品输出 | `foreground_record`; `product_specific`; `process_output`; `collected_record` | `cp_thermal_batch` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 无 |
| `thermal_energy_input` | input / `product_flow` | 按实际供应分别选择蒸汽、燃料、热水、电力等能源流；Energy/MJ 或 kWh | 实测或设备级分配热加工能源；不得把场内燃料与外购蒸汽合并为不明确总量 | `foreground_record`; `technology_specific`; `process_output`; `collected_record` | `cp_utilities` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 0.1–30 MJ/kg 热加工产品；`qa_guardrail`; `reasoned_estimate` |
| `thermal_direct_water` | input / `elementary_flow` | 匹配水源区室和地理位置的基本水流；Volume/m3 | 仅记录热加工直接环境取水；外购管网水仍为产品投入；每 1 kg 参考产品 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_water_records` | `eu-pef-method-2021` | 0–0.020 m3/kg；`qa_guardrail`; `reasoned_estimate` |
| `thermally_processed_product` | output / `product_flow` | 内部热加工产品转移流；Mass/kg | 实测热加工后且在声明沥液点的合格质量，并关联时间—温度批次证据；每 1 kg 热加工输出 | `foreground_record`; `product_specific`; `process_output`; `collected_record` | `cp_thermal_batch` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 无 |
| `thermal_food_losses` | output / `waste_flow` | 匹配焦损、洒落、不合格产品等材料和处理路线的食品废物流；Mass/kg | 实测热加工拒收或损失质量；出售或作为共产品使用的汤汁、脂肪单列产品流 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 0–0.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `thermal_direct_air_emissions` | output / `elementary_flow` | 按排放物质选择空气基本流；Mass/kg | 场内燃烧时按物质用实测或披露的燃料计算记录；不得重复外购能源上游排放 | `calculated_value`; `site_specific`; `fuel_inventory`; `calculated_from_collection` | `cp_direct_emissions` | `eu-pef-method-2021` | 每种物质 0–10 kg/kg；`qa_guardrail`; `reasoned_estimate`；不是排放因子 |

#### 熟后处理、分装与包装（`post_cook_packaging`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `post_cook_product_input` | input / `product_flow` | 内部热加工产品转移流；Mass/kg | 实测进入冷却、沥液、暂存、分份、灌装或包装的产品质量；每 1 kg 参考产品 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_post_cook_packaging` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 无 |
| `packaging_materials` | input / `product_flow` | 按材料和层级选择包装材料流；Mass/kg | 产品包装 BoM 或称重消耗减未使用退回；初级、次级和三级包装分列 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_packaging_bom` | `eu-pef-method-2021` | 全部层级 0–0.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `post_cook_electricity` | input / `product_flow` | 匹配地理位置和电压的电力流；Energy/kWh | 分表或按产线记录分配冷却、制冷、泵、分装、灌装、封口、编码和包装用电 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_utilities` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 0–5.0 kWh/kg；`qa_guardrail`; `reasoned_estimate` |
| `post_cook_refrigerant_emissions` | input / `elementary_flow` | 按制冷剂物质选择空气基本流；Mass/kg | 维修记录质量平衡，补充量扣除有记录的回收量；每 1 kg 参考产品 | `calculated_value`; `site_specific`; `reference_flow`; `calculated_from_collection` | `cp_refrigerant_records` | `eu-pef-method-2021` | 0–0.10 kg 制冷剂/kg；`qa_guardrail`; `reasoned_estimate` |
| `reference_product_output` | output / `product_flow` | Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0`；Mass `93a60a56-a3c8-11da-a746-0800200b9a66`/kg | 声明市场状态下 1 kg 净可食参考产品；不得改写为通用类别流 | `fixed_value`; `not_applicable`; `reference_flow`; `identity_reference` | 无 | 无 | 固定 1 kg |
| `packaging_and_post_cook_waste` | output / `waste_flow` | 按材料和处理路线选择边角料、破损包装、封口测试不合格品、成品不合格品和沥出固体废物流；Mass/kg | 实测熟后处理和包装废物质量 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021` | 0–0.50 kg/kg；`qa_guardrail`; `reasoned_estimate` |

可重复使用运输包装按实际产品系统处理和使用次数建模。除按物质记录的制冷剂泄漏及其他实测直接排放外，不预设其他基本流输出。

#### 清洗与消毒（`cleaning_sanitation`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `cleaning_water` | input / `product_flow` | 饮用水或工艺水产品流；Mass/kg | 实测设备、器具、食品接触面、地面和 CIP 清洗水，或按消毒周期记录分配 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_cleaning_records` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 0–0.030 m3/kg；`qa_guardrail`; `reasoned_estimate` |
| `cleaning_agents` | input / `product_flow` | 按产品选择洗涤剂、碱、酸、消毒剂等清洗剂流；Mass/kg | 采购或投配记录分配至覆盖的消毒周期，必要时记录有效成分浓度 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_cleaning_records` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 0–0.10 kg/kg；`qa_guardrail`; `reasoned_estimate` |
| `cleaning_energy` | input / `product_flow` | 场址所选能源载体流；Energy/kWh 或 MJ | 实测热水制备、泵、CIP 和消毒设备用能，或按周期和公用工程记录分配 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_cleaning_records` | `codex-cxc-1-1969-2022` | 0–10 MJ/kg；`qa_guardrail`; `reasoned_estimate` |
| `cleaning_wastewater` | output / `waste_flow` | 匹配组成和处理路线的废水流；Mass/kg 或 Volume/m3 | 实测排放或水量平衡计算，保留原单位和换算基准，并声明场内预处理、市政处理或其他去向 | `calculated_value`; `site_specific`; `reference_flow`; `calculated_from_collection` | `cp_water_records` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 0–0.030 m3/kg；`qa_guardrail`; `reasoned_estimate` |
| `cleaning_waterborne_releases` | output / `elementary_flow` | 按物质和受纳区室选择水环境基本流；Mass/kg | 仅对场内处理后直接排环境的废水，以浓度乘匹配排放体积并调整采样基准；外送处理不得重复排放 | `calculated_value`; `site_specific`; `reference_flow`; `calculated_from_collection` | `cp_wastewater_quality` | `eu-pef-method-2021` | 每种物质 0–1.0 kg/kg；`qa_guardrail`; `reasoned_estimate`；不是排放因子 |

直接取用的清洗水作为基本流输入，不得与外购水重复。清洗是分配至覆盖生产的支持过程，不设产品输出。

#### 废水与固体废物处理（`wastewater_waste_handling`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `waste_treatment_utilities` | input / `product_flow` | 场址所选公用工程或处理化学品流；适用属性/原始单位 | 实测或采购记录中归属场内废物或废水处理且未在其他过程记录的电力、燃料、水和化学品 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021` | 无 |
| `collected_residuals` | input / `waste_flow` | 与各废物流匹配的内部残余物转移；Mass/kg 或 Volume/m3 | 按去向汇总前序过程食品损失、包装废物、污泥和废水，不重复其外部跨界 | `calculated_value`; `site_specific`; `reference_flow`; `calculated_from_collection` | `cp_waste_records` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 无 |
| `recovered_products` | output / `product_flow` | 匹配回收脂肪、汤汁、肉碎或材料的产品流；Mass/kg | 仅在满足生产者声明产品规范且有记录去向时按实测外运质量列产品，否则列废物 | `foreground_record`; `product_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021` | 无 |
| `residuals_to_treatment` | output / `waste_flow` | 匹配处理路线的废物或废水流；Mass/kg 或 Volume/m3 | 按路线记录场址边界实测外运或排放量、目的地及已做场内预处理 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_waste_records` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 各流分别 0–30 kg 或 L/kg；`qa_guardrail`; `reasoned_estimate`；不同单位不得相加 |

除已分配到用水过程的环境直接取水外，不预设基本流输入。场内处理直接排放按物质和区室记录；已归属于外部处理数据集的排放不得重复。

#### 成品储存与工厂门发运（`finished_storage_dispatch`）

| row_id | 方向/类型 | 选定流与计量 | 数量规则和基准 | 模式 | 采集协议 | 来源 | 临时 QA 范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `stored_finished_product` | input / `product_flow` | 代表流 Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0`，或成品数据集的实际覆盖产品流；Mass `93a60a56-a3c8-11da-a746-0800200b9a66`/kg | 记录与发运记录关联的质量—时间库存；每 1 kg 参考产品及记录储存时长 | `foreground_record`; `product_specific`; `storage_duration`; `collected_record` | `cp_finished_storage` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 无 |
| `finished_storage_electricity` | input / `product_flow` | 匹配地理位置和电压的电力流；Energy/kWh | 以质量—时间占用或其他记录充分的因果驱动分配制冷、冷冻、通风、气调、照明和搬运用电 | `calculated_value`; `site_specific`; `storage_duration`; `calculated_from_collection` | `cp_finished_storage` | `eu-pef-method-2021`; `codex-cxc-1-1969-2022` | 0–5.0 kWh/kg；`qa_guardrail`; `reasoned_estimate` |
| `factory_gate_release` | output / `product_flow` | Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0`；Mass `93a60a56-a3c8-11da-a746-0800200b9a66`/kg | 工厂门放行 1 kg 净可食参考产品；内部放行标记不在聚合数据集中形成第二个产品输出 | `fixed_value`; `not_applicable`; `reference_flow`; `identity_reference` | 无 | 无 | 固定 1 kg |
| `finished_storage_losses` | output / `waste_flow` | 匹配处理路线的食品废物流；Mass/kg | 实测工厂门放行前过期、破损、泄漏、温控失效或其他拒收成品质量 | `foreground_record`; `site_specific`; `reference_flow`; `collected_record` | `cp_finished_storage` | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` | 0–0.20 kg/kg；`qa_guardrail`; `reasoned_estimate` |

成品储存制冷剂泄漏按物质及维修记录计算，不得与熟后处理重复。除此之外不预设类别特有基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用产线、公用工程、储存、清洗和处理过程 | 优先通过分表、批次追踪或过程细分隔离可直接归属本产品的投入、输出和排放。系统扩展仅在附加功能和报告目的明确时使用。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | 无法细分的共用负荷 | 采用有记录的因果物理驱动，例如设备时间、能耗、质量—时间储存占用、清洗周期、废水负荷或产品质量，并证明其反映共用过程与输出的关系。 | `eu-pef-method-2021` |
| `allocation_other_relationship_last` | 无可辩护物理关系的多功能过程 | 仅在记录细分、系统扩展和相关物理关系均不可行后，采用包括经济分配在内的其他关系。经济分配需记录价格、期间、市场及敏感性。 | `eu-pef-method-2021` |
| `allocation_rework_internal_loop` | 返回同一覆盖产品系统的返工料 | 作为内部质量循环，仅计算新增加工负荷和损失；不得产生外部共产品抵扣或重复返工投入。 | `eu-pef-method-2021` |
| `allocation_product_waste_status` | 脂肪、汤汁、修整物、不合格品、包装残余物和废水 | 只有满足声明产品规范且有记录的有益去向时才列共产品，否则按废物及其处理路线建模；质量平衡、清单和元数据中的身份与分配决定必须一致。 | `eu-pef-method-2021`; `codex-cxc-58-2005` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_bom` | `ingredient_receiving_storage`; `preparation_formulation` | 肉类和其他配料的接收、验收、领用与内部转移 | 采购、收货、仓库领料、配方、批次和称量记录 | ingredient_id; supplier; lot; species_or_material; physical_state; received_mass; accepted_mass; issued_mass; rework_mass; basis; batch_id | 按配料和配方核对经校准秤与 ERP 或批次记录 | kg | 每次收货和每批 | 覆盖声明季节与产品组合的代表期 | 每个纳入场址和产线 | 按配料汇总验收与领用质量，排除无关产品，按合格参考产品质量归一化 | 秤校准、批次追溯、配方版本、验收记录和质量核对 |
| `cp_inbound_transport` | `ingredient_receiving_storage` | 供应商至场址运输 | 交货单、路线、承运商、车型和距离记录 | material_id; delivered_mass_t; origin; destination; mode; distance_km; load_factor_if_used; upstream_dataset_scope | 优先采集实际路线，否则记录路线模型和距离来源 | tkm | 每条路线或代表路线类别 | 与配料接收同期 | 所有跨越场址门的材料组 | 按方式汇总 mass_t × distance_km，并检查交付产品数据集重复 | 交货单、路线证据和范围核查 |
| `cp_water_records` | `preparation_formulation`; `thermal_processing`; `cleaning_sanitation` | 配料、工艺、清洗、取用和排放水 | 仪表、配方、清洗周期、取水和排放记录 | meter_id; source_route; use_route; opening; closing; unit; batch_or_period; discharge_route | 优先专表；共用表按有记录驱动核对 | kg 或 m3 | 每批、每清洗周期或仪表区间 | 代表报告期 | 每个场址和水路线 | 仅按声明密度换算，保留原单位，核对水投入、入产品、蒸发和废水 | 仪表校准、发票、取水许可、配方记录和水量平衡 |
| `cp_utilities` | `ingredient_receiving_storage`; `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `finished_storage_dispatch` | 电力、燃料、蒸汽、热、制冷和公用工程 | 仪表、发票、燃料领用、设备运行和生产记录 | carrier; meter_id; opening; closing; unit; heating_value_basis; runtime; batch_id; line_id; product_mass | 优先分表，否则用有记录的因果驱动分配 | kWh、MJ 或载体单位 | 仪表区间和生产批次 | 覆盖生产与储存变化的代表期 | 每个场址和共用系统 | 按载体汇总，扣除无关用途，分配共用量并按合格产品归一化 | 仪表校准、发票、燃料证书、分配驱动和核对 |
| `cp_thermal_batch` | `thermal_processing` | 热加工投入、输出和时间—温度证据 | 批次单、设备日志、秤、温度记录仪和偏差记录 | batch_id; input_mass; output_mass; start_time; end_time; target_temperature; achieved_temperature; holding_time; reject_mass | 从经确认的批次与监控系统采集 | kg；°C；min | 每批 | 整个报告期 | 每条热加工路线 | 质量与时间—温度关联同一批次，只聚合合格且路线等同批次 | 秤和传感器校准、确认资料、偏差处置和批次放行 |
| `cp_post_cook_packaging` | `post_cook_packaging` | 熟后转移、冷却、分装、灌装和不合格品 | 产线秤、冷却日志、灌装计数、批次和不合格记录 | batch_id; incoming_mass; drained_mass; packed_mass; bulk_mass; reject_mass; cooling_time; cooling_temperature | 每批采集并核对产品转移 | kg；°C；min | 每批 | 整个报告期 | 每条产线 | 汇总合格输出，分别报告沥液、不合格品和内部转移 | 秤校准、产线核对、冷却日志和放行记录 |
| `cp_packaging_bom` | `post_cook_packaging` | 初级、次级和三级包装 | 包装规格、领用、退回、废料和生产记录 | packaging_id; material; level; unit_mass; units_issued; unused_returns; scrap_mass; reuse_count | 使用产品特定包装 BoM 并与库存领用核对 | kg | 每个包装规格和生产期 | 与产品输出同期 | 每个包装配置 | 净包装消耗=领用−未使用退回；废料另报并按净可食产品质量归一化 | 供应商规格、单件质量核查、库存核对和包装版本 |
| `cp_cleaning_records` | `cleaning_sanitation` | 清洗水、化学品、能源和清洗周期 | SSOP 或清洗计划、投配、仪表、运行和化学品领用记录 | cycle_id; area_or_equipment; water; chemical_product; concentration; dose; contact_time; energy; linked_campaign | 逐周期采集，以有记录的生产周期或产线基准关联共用周期 | kg；m3；kWh；MJ | 每周期 | 整个报告期 | 边界内食品接触面和加工区域 | 按周期汇总，排除无关区域，按因果关系分配并归一化 | 书面程序、投配核验、仪表证据、浓度检查和完成记录 |
| `cp_waste_records` | `ingredient_receiving_storage`; `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `wastewater_waste_handling` | 食品损失、不合格品、包装废物、污泥、回收产品和外运残余物 | 垃圾箱秤、转移联单、发票、转移单和处理记录 | stream_id; material; product_or_waste_status; mass; volume; destination; treatment_route; hazardous_status; batch_or_period | 尽可能分类称量并核对内部转移与场址边界外运 | kg 或 m3 | 每次外运和报告区间 | 与产品输出同期 | 每个场址和残余物路线 | 按流和去向汇总，避免内部转移重复，按参考产品质量归一化 | 秤校准、联单、承包商记录和共产品规范证据 |
| `cp_mass_balance` | `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `wastewater_waste_handling` | 批次及报告期质量核对 | 配料、产品、返工、废物、废水固体和库存变化记录 | input_mass; output_mass; rework_in; rework_out; waste_mass; saleable_coproduct_mass; inventory_change; moisture_or_evaporation_basis | 可行时逐批并在报告期层面核对每条路线 | kg | 每批及每报告期 | 整个报告期 | 每个过程和场址 | 投入+期初库存=产品+共产品+废物+期末库存+可解释蒸发/水分变化+残差 | 签署核对、残差解释和一致干湿基准 |
| `cp_direct_emissions` | `thermal_processing`; `wastewater_waste_handling` | 场内能源或处理的直接空气排放 | 燃料、烟道实测、许可报告和计算表 | fuel_type; fuel_amount; heating_value; substance; measured_concentration; gas_flow; factor; factor_source; control_efficiency | 优先场址实测，否则对采集燃料数据使用披露因子 | kg substance | 实测事件及报告期 | 与燃料和产品输出同期 | 边界内所有直接源 | 每种物质分别计算并防止与上游能源数据集重复 | 校准、实验室或许可报告、因子来源和计算审计轨迹 |
| `cp_refrigerant_records` | `post_cook_packaging`; `finished_storage_dispatch` | 制冷剂补充、回收和泄漏 | 设备台账和维修记录 | equipment_id; refrigerant; opening_charge; additions; recovered_mass; closing_charge; service_date; process_assignment | 用维修记录质量平衡并一致分配设备 | kg | 每次维修及报告期 | 整个报告期 | 边界内全部制冷和储存设备 | 泄漏=期初+补充−回收−期末；解决数据错误后下限为零；共用系统按制冷或质量—时间驱动分配 | 技师记录、制冷剂身份、设备台账和核对 |
| `cp_wastewater_quality` | `cleaning_sanitation`; `wastewater_waste_handling` | 直接水环境排放 | 排放仪表、混合样、实验室结果和处理日志 | sample_id; substance; concentration; discharge_volume; sampling_period; detection_limit; treatment_state; receiving_compartment | 将代表浓度与匹配排放体积和采样期配对 | kg substance；mg/L；m3 | 许可或监测频次 | 与废水排放同期 | 每个直接环境排口 | 排放质量=浓度×体积并换算单位，披露未检出处理 | 认可实验室结果、采样方法、仪表校准和许可记录 |
| `cp_finished_storage` | `finished_storage_dispatch` | 成品质量—时间占用、能源、不合格和放行 | 仓库库存、温度、电力、发运和不合格记录 | product_id; market_state; mass; entry_time; release_time; storage_zone; temperature; electricity; reject_mass | 采集质量—时间库存并匹配储区公用工程和发运 | kg；kg·day；kWh；°C | 连续或每日库存及每次发运 | 整个报告期 | 每个纳入成品储区 | 按质量—时间或其他因果驱动分配储存公用工程，按放行质量归一化 | 库存核对、温度日志、仪表记录和发运证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化量=可归属行数量/工厂门放行合格产品净质量 | 可归属量；合格产品净质量 | 每 1 kg 参考产品的数量 | `eu-pef-method-2021` |
| `calc_batch_mass_balance` | 预处理、热加工、熟后处理和残余物管理 | 核对投入与期初库存对产品、共产品、废物、期末库存及可解释蒸发或水分变化；调查并披露残差，不强制调零 | `cp_ingredient_bom`; `cp_mass_balance`; `cp_waste_records`; `cp_water_records` | 过程和报告期质量平衡及解释残差 | `eu-pef-method-2021` |
| `calc_shared_utility_allocation` | 共用能源、水、储存、清洗和处理系统 | 先直接分表或细分；否则采用有记录的因果物理驱动；只有具备论证和敏感性时采用其他关系 | 共用总量；覆盖及总驱动量 | 各产品可归属公用工程量 | `eu-pef-method-2021` |
| `calc_inbound_transport` | 未嵌入上游的供应商至场址运输 | 运输功=交付质量（t）×路线距离（km），按方式和运输段求和 | `cp_inbound_transport` 字段 | 每 1 kg 参考产品的 tkm | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | 制冷和储存设备 | 制冷剂损失=期初充注+补充−回收−期末充注；负值须作为数据质量错误解决后再归一化 | `cp_refrigerant_records` 字段 | 每种物质 kg 泄漏/kg 参考产品 | `eu-pef-method-2021` |
| `calc_direct_emission` | 场内燃烧和处理排放 | 每种物质排放质量=实测质量，或采集活动数据×披露因子，并仅按有记录的控制效率调整；临时 QA 范围不得作为因子 | `cp_direct_emissions` 字段 | 每种物质 kg 直接排放/kg 参考产品 | `eu-pef-method-2021` |
| `calc_waterborne_release` | 直接废水排放 | 排放质量=代表浓度×匹配排放体积并明确换算单位；声明未检出处理与处理状态 | `cp_wastewater_quality` 字段 | 每种物质 kg 排放/kg 参考产品 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品、配料、包装、废物和源数据 | 保留配方、批号、供应商、场址、报告期、流身份和单位基准，使每个聚合值可追溯。 | 批次谱系、采购领用记录、规格及数据提取审计轨迹 |
| `dq_temporal_coverage` | 前景活动数据 | 使用覆盖声明季节、配方、路线和运行变化的一个代表报告期；说明停产、生产周期、缺失区间及外推。 | 覆盖表、生产日历、仪表完整性和缺口日志 |
| `dq_representativeness` | 前景和上游数据集 | 评价技术、地理和时间代表性及精度；解释肉种、配料技术、电力地理、包装、运输、处理和市场状态的代理与错配。 | 代表性评价和代理论证 |
| `dq_completeness_consistency` | 完整清单 | 证明配料、包装、公用工程、产品、共产品、废物、废水和直接排放的完整性与方法一致性；湿/干、毛/净、可食/包装质量基准一致。 | 质量、水、能源和废物核对；有记录的截断筛查 |
| `dq_measurement_control` | 秤、仪表、温度传感器、实验室数据和计算值 | 保留校准或核验状态、分辨率、采样基准、换算因子和计算表；不得以 PCR 临时筛查范围替代前景值。 | 校准证书、实验室报告、公式和评审记录 |
| `dq_method_disclosure` | 分配、截断、数据缺口和下游排除 | 记录所用分配层级、每项排除、累计截断证据、数据缺口、代理数据集及工厂门属性。 | 方法说明、必要时敏感性、局限清单和评审证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须恰为 1 kg 净可食产品，使用 `Sauce braised products` UUID `61b586fc-1d4a-4abe-981d-19c27f9a33b0`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；拒绝含包装质量的参考量。 |  |
| `validate_representative_flow_scope` | 产品身份 | 必须声明 `Sauce braised products` 是真实 CPC 21186 代表产品流，而不是所有肉类菜肴的通用名称；其他覆盖产品必须给出实际名称和代表性局限。 |  |
| `validate_required_qualifiers` | 功能单位和参考产品 | 必须具备全部限定信息，包括肉种和肉含量、配方族、即食状态、工艺路线、市场状态、包装、储温、保质期、地理位置和生产期。 | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_process_coverage` | 前景过程图 | 必须纳入所有适用的接收、预处理、热加工、熟后、包装、清洗、残余物管理和成品储存；省略须论证并按截断规则评估。 | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_mass_balance` | 产品路线和报告期 | 必须核对配料、产品、共产品、返工、废物、废水固体、库存变化、蒸发和水分变化；报告并解决未解释残差，不得调整参考产品强制平衡。 | `eu-pef-method-2021` |
| `validate_no_double_counting` | 上游与前景建模 | 拒绝重复的上游负荷、内部转移交换、处理排放或返工；外购能源含上游供应，只有场内直接排放作为前景基本流输出。 | `eu-pef-method-2021` |
| `validate_allocation_hierarchy` | 共用和多功能过程 | 先要求细分或系统扩展评估，再采用相关物理关系，最后才是在有论证时采用其他关系；驱动量及分配总量必须与共用总量核对。 | `eu-pef-method-2021` |
| `validate_cutoff_and_completeness` | 排除和清单完整性 | 拒绝截断已指定重要流；其他排除须有筛查、材料/能量/环境显著性累计 3% 检查和局限披露。 | `eu-pef-method-2021` |
| `validate_food_process_records` | 热加工、冷却、储存、水和清洗 | 必须有适用于路线的时间—温度、水源、清洗周期和废物去向记录，足以支持清单与声明产品状态。 | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 临时范围仅作 QA 筛查；数据集实际数量必须来自前景记录或计算，任何把临时边界用作默认排放因子或最终量的做法均须报错。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明肉类预制菜肴或膳食的工厂门前景生产数据集 |
| downstream_use | 对产品、技术、地理位置、市场状态、包装和时间期相匹配的生命周期模型，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 建模所声明肉类预制菜肴或膳食至工厂门放行的生产；比较或聚合使用前须核查参考流、配方、肉种、加工路线、包装、储存、分配和数据质量兼容性 |
| excluded_use | 未限定地通用代表全部 CPC 21186 产品；代表生肉、屠宰、作为生肉销售的制备品、鱼类或蔬菜膳食、餐饮、零售、消费者烹调、消费或未加模块的生命周期末端；把临时范围作为最终清单因子 |
| required_metadata | PCR id 与版本状态；实际产品名；代表流关系；CPC 映射语境；肉种与肉含量；配方族；预处理和热加工路线；即食状态；冷藏/冷冻/常温状态；包装；净质量；场址与地理；生产期；储温与保质期；纳入和排除阶段；分配；截断；上游数据集清单 |
| required_quality_disclosure | 前景期间与覆盖；质量、水、能源和废物核对；仪表和秤状态；配料与包装 BoM 特异性；技术、地理和时间代表性；精度；代理；数据缺口；分配驱动；排除；直接排放计算方法；每个临时范围的状态 |
| update_trigger | 配方或肉含量、肉种、热加工路线、包装、市场状态、储存要求、场址或地理、能源或水系统、废物或废水处理、分配方法、参考流身份、来源方法发生实质变化，或前景数据超过生产者接受的代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng/pdf（检索日期 2026-08-11） | 功能单位维度；供应链系统边界；企业特定 BoM 与制造数据；共产品、副产品和废物披露；分配层级；截断控制；完整性和数据质量要求 |
| `codex-cxc-1-1969-2022` | `standard` | FAO and WHO, General Principles of Food Hygiene, CXC 1-1969, revised 2022, Rome 2023, DOI 10.4060/cc6125en, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B1-1969%2FCXC_001e.pdf（检索日期 2026-08-11） | 食品加工范围；时间—温度记录；安全用水；清洗消毒周期；排水、废水和废物过程纳入；产品状态声明的质量证据 |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius Commission, Code of Hygienic Practice for Meat, CXC 58-2005, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf（检索日期 2026-08-11） | 肉制备和加工肉产品身份；温控处理；冷却、冷藏、包装、清洗、废水和废物过程拆分；产品与废物身份依据 |
