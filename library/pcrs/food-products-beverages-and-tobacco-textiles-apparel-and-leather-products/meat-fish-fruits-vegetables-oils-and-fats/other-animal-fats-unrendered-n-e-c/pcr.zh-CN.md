---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-unrendered-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未熬制动物脂肪，未另分类

## 1. 范围与适用性

本 PCR 涵盖在声明交接点仍为**未熬制**状态，且不属于更具体动物脂肪类别的动物源脂肪组织或含脂原料。通常路线是在屠宰、胴体处理、分割或类似动物加工步骤之后进行物理回收或分离。由于 UNSD CPC 3.0 明确将粗羊毛脂纳入本类，粗羊毛脂也在范围内；其羊毛洗涤回收路线必须与屠宰来源组织路线分开建模。在声明交接前发生的有限修整、沥液、清洗、非热力物理分离、冷却、冷冻、包装、贮存和发运准备可在适用时纳入。不默认产品为可食用状态，必须明确声明。

仅在通过纳入/排除门后使用这一剩余类别。排除 CPC 21511-21515 的未熬制猪及家禽脂肪、牛脂、水牛脂、绵羊脂和山羊脂；任何形式的已熬制动物脂肪及 21521-21529 已熬制脂肪子类；鱼肝油、其他鱼油、海洋哺乳动物油、其他提取动物油及其分提物；羊毛脂、羊毛脂醇、羊毛脂油精或硬脂；氢化、酯交换、再酯化、反油酸化、精炼、混合或其他已有明确分类的脂肪产品。默认前景边界不包括熬制、脂肪熔炼、产生油或分提物的提取、精炼和下游制造。

官方剩余范围内的示例包括粗羊毛脂，以及熊、马、河马、蟹、软体动物、兔和龟等未另分类动物的未熬制脂肪。这些只是示例，不是共同配方，也不能据此把不同物种或物料状态合并。若物种或来源物料不明、物料可能与 CPC 21511-21515 或已熬制/油类类别重叠，或物理状态不能证明其未熬制，则分类状态为 `manual_review`，不得自动选择本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-unrendered-n-e-c |
| classification_refs | UNSD CPC 3.0：21519，其他未熬制动物脂肪，未另分类 |
| covered_products | 未另分类的未熬制动物脂肪组织或含脂原料；粗羊毛脂；通过纳入门且明确路线与物种的剩余未熬制脂肪 |
| excluded_products | CPC 21511-21515；CPC 21521-21529 已熬制脂肪；鱼类、海洋哺乳动物及其他提取动物油或分提物；羊毛脂及已加工羊毛脂分提物；改性、精炼、混合或其他已有明确分类的脂肪产品 |
| representative_product | 一个已识别物种/分类群及回收路线的、经物理分离的未熬制脂肪组织或含脂原料批次 |
| production_route | 路线 A：屠宰、胴体处理、分割或类似步骤后的物理分离与修整；路线 B：从羊毛洗涤中以非熬制方式回收粗羊毛脂；随后在适用时进行沥液或清洗、冷却或冷冻、包装、贮存和发运交接 |
| market_state | 散装或包装；按声明为常温、冷却或冷冻；未熬制；按声明为食用、饲料、工业或其他预期等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的发运或交付交接点供应其他未熬制动物脂肪（未另分类） |
| How much | 1 kg 合格产品净质量，不含包装和未作为产品出售的游离沥液 |
| How well | 已声明物种/分类群、来源组织或物料、回收路线、未熬制状态、预期等级、物理状态、温度条件及相关水分或夹杂物基准，且不与排除类别重叠 |
| How long or cycle | 声明交接点的一个生产批次；声明纳入前景清单的冷却、冷冻或贮存持续时间 |
| reference_flow_link | 1 kg 下述天工产品流满足功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或分类群；来源组织或来源物料；屠宰来源组织路线或粗羊毛脂路线；确认未发生熬制、脂肪熔炼、油提取或精炼；预期等级/用途；散装或包装状态；常温、冷却或冷冻状态及交接温度；净质量及水分/游离沥液基准；生产地理范围和期间；发运或交付交接点；分类复核结论 |

构建前景数据包时，`必需限定信息` 中的每项内容都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流不完整。不同物种、来源物料、等级或回收路线必须作为独立数据集或独立计算分层建模；仅在披露每一分层及聚合权重时才可形成混合聚合数据。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的质量计量，以毛质量扣除皮重、包装和单独移除的游离沥液得到产品净质量。记录质量是在发运还是交付点测定，以及常温、冷却或冷冻状态。 |
| `same_mass_identity` | 参考流所用全部质量换算 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留指定的天工 Mass 属性和 Units of mass UUID。用有记录的换算因子将原始质量单位换算为 kg；不得以体积、脂质含量、干物质或能量基准代替参考流。 |
| `conditioned_mass_basis` | 冷却、冷冻、沥液或清洗后的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用声明交接条件下的质量。若对质量平衡有实质影响，应分别计量并报告已移除沥液、冰或加水、水分变化以及剔除的非脂肪组织。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经识别并接受的动物源脂肪组织或含脂原料，在上游屠宰、胴体处理、分割或类似动物加工判定后进入物理回收/分离；对粗羊毛脂，已识别的含脂原毛或单独计量的洗毛物流进入非熬制油脂回收 |
| starting_condition_role | 路线特定物理回收的前景进入条件；除非能够证明纳入同一计量设施系统，动物生产、屠宰、捕捞/养殖、羊毛生产及先前加工属于链接的上游系统 |
| product_classification_scope | 仅限 CPC 21519 剩余范围，且已排除 CPC 21511-21515、CPC 21521-21529、鱼类或海洋哺乳动物油、其他提取油/分提物及其他已有明确分类的产品 |
| recursive_input_rule | 外购或转入的 CPC 21519 物料作为明确的同类输入并具有自身上游数据集；计算设施回收产量时不得将其计入新回收产出；映射前景过程之间的内部转移不得重复计数 |
| upstream_dataset_requirement | 为来源动物物料及其他外购物料提供兼容上游数据集。在共享屠宰、分割、动物加工或洗毛边界，上游数据集必须披露在合格物料成为独立产出时采用的细分或分配方法及因子 |
| disclosure | 声明物种/分类群、来源物料、路线、纳入操作、熬制/精炼排除、产品等级、物理和温度状态、包装、贮存持续时间、交接点、上游边界、共产品、分配方法与因子，以及任何排除流及其理由 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_gate` | 产品及前景过程边界 | 合格产品直至声明交接点必须保持未熬制。熬制、脂肪熔炼、产生动物油或分提物的提取、精炼和化学改性均排除，并需要使用其他产品类别和过程系统。 | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `boundary_route_start` | 前景起点 | 从经接受来源物料进入物理回收/分离的计量点开始。只纳入在声明前景系统内实际受控的路线特定操作和资源或排放流；应链接上游负担而不得将其抹除。 | `eu-pef-2021` |
| `boundary_conditioning` | 冷却、冷冻、清洗、修整、贮存和包装 | 若这些操作发生在声明交接前，则将其纳入，并记录实际用水、能源、辅料、包装、废物、废水、制冷剂及直接排放。适用的肉类卫生控制只约束屠宰/肉类路线，不定义水产或粗羊毛脂路线的组成或 LCA 数值。 | `codex-cxc-58-2005`; `eu-fdm-bat-2019` |
| `boundary_handover` | 配送边界 | 默认前景边界在合格产品完成称量并于声明发运门点转移时结束。除非声明交付交接点包含外运，否则外运在范围外；若纳入，应单独记录路线、距离、方式、载荷、温控和分配。 | `eu-pef-2021` |
| `boundary_no_silent_cutoff` | 清单完整性 | 识别所有环境相关物料与能量流、共产品、废物、废水和直接排放。任何排除必须明确、说明理由并评价显著性；本候选 PCR 不设类别特定数值截断。 | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `physical_recovery_separation` | 物理回收与分离 | required | 始终纳入；使用一条声明路线，并将不同物种或物料分别分层 | 不经熬制或精炼回收未熬制脂肪组织/含脂原料的前景过程 | 每 kg 来源物料对应的合格中间产品及共产品 kg |
| `conditioning_storage` | 非熬制调质与贮存 | conditional | 交接前发生修整、沥液、清洗、冷却、冷冻或贮存时纳入 | 不进行熬制的前景状态控制 | kg 经调质未熬制产品 |
| `packing_dispatch_handover` | 包装、发运与交接 | required | 始终纳入；仅有证据表明为无包装散装转移时包装投入可为零 | 最终称量、适用时包装、贮存放行和转移保管责任 | 声明交接点的 1 kg 净参考产品 |

### 过程：物理回收与分离（`physical_recovery_separation`）

#### 输入

##### 产品流

###### 已识别动物源来源物料（`source_animal_material`）

记录进入声明物理回收路线的动物源组织、含脂原料、含脂原毛或分流洗毛物流的实测量。物种/分类群、来源物料、上游数据集和接受判定为必需信息。

- 选定流：路线特定动物源来源物料；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入回收批次的实测净质量，扣除皮重及单独计量的内部再循环物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`

- 数量范围：暂定路线特定来源物料—产品筛查范围；不是物种或类别默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1000
  - 单位：kg 来源物料/kg 合格产品
  - 基准：用于标记可能缺失的共产品、剔除物、沥液或产率记录；取得经复核的路线及物种特定批次证据后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 过程用水（`recovery_water`）

记录用于清洗、洗毛、分离、分配至该批次的卫生操作或其他产品接触与过程用途、并跨越前景边界的水。不得推定屠宰、水产和羊毛脂路线具有共同用水要求。

- 选定流：Process water；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：供应至该批次的计量或分配用水；仅在操作有证据为干式且卫生用水位于计量过程分配之外时可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource_use`
- 来源：`eu-fdm-bat-2019`

- 数量范围：暂定用水筛查范围；不是类别默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 水/kg 合格产品
  - 基准：宽泛的路线特定筛查；当计量批次或设施数据为声明操作形成经复核范围时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力与外购能源（`recovery_energy`）

记录物理分离、泵送、修整设备、洗毛回收以及分配卫生操作所用电力、热力、燃料、压缩空气或外购公用工程服务。

- 选定流：路线特定电力和外购能源载体；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：能源载体特定属性与单位；换算前保留原始仪表单位
- 数量规则：计量用量或有记录的设备时间分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource_use`
- 来源：`eu-fdm-bat-2019`

- 数量范围：暂定外购能源筛查范围；不是类别默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 合格产品
  - 基准：仅适用于非熬制回收的宽泛综合能源筛查；用经复核的技术和路线特定计量替换，且不得用其为热力熬制辩护
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗与分离辅料（`recovery_auxiliaries`）

记录跨越过程边界的洗涤剂、分离助剂或其他辅料。其使用不得把产品改变为已熬制、精炼、化学改性或其他排除脂肪。

- 选定流：路线特定辅料；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：按批次分配的供应商和投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource_use`

##### 废物流

不规定类别通用的废物输入。内部返工物料必须标识为内部转移，不得计为新的来源物料。

##### 基本流

不规定类别通用的基本流输入。场址特定的自然资源在跨越前景边界时必须记录。

#### 输出

##### 产品流

###### 合格未熬制脂肪中间产品（`unrendered_fat_intermediate`）

记录可选调质和最终交接前通过类别门的实测产出。产出必须保留其路线/物种分层。

- 选定流：Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格产出净质量；按批次计算，不合并排除或含糊物料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_co_product_waste`
- 来源：`unsd-cpc-3-0-2025`

###### 其他可售共产品（`recovery_co_products`）

记录共享过程边界的肉、皮、骨、其他组织、羊毛、回收非脂物料或其他可售产出。不得隐藏共产品以使合格脂肪看似无负担。

- 选定流：共产品特定天工流；UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg，或另一有依据的共产品参考属性
- 数量规则：按共产品和批次实测可售产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个共享回收或上游生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_co_product_waste`

##### 废物流

###### 剔除组织、固体及非产品残余物（`recovery_rejects`）

记录因分类、质量、卫生或物理分离控制而剔除的物料及其去向。不得把已熬制或油状产出重新标作剔除物以继续使用本 PCR。

- 选定流：路线特定废物或残余物；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：按类型和处理去向实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个回收批次及每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_co_product_waste`

- 数量范围：暂定剔除比例筛查；不是物种或路线默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 剔除物/kg 实测来源物料
  - 基准：物理质量分数筛查；用经复核批次证据替换，区间外数值应作为边界或单位错误调查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水及分离水相物流（`recovery_wastewater`）

记录清洗、卫生、洗毛或物理分离产生的废水和水相残余物流，包括去向及可得的实测特征。

- 选定流：路线特定 Wastewater；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：质量或体积并记录密度换算 / kg 或 m3
- 数量规则：按批次或报告期计量排放量，或有记录的水平衡计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_wastewater`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 回收过程直接排放（`recovery_direct_releases`）

记录跨越环境边界的场址特定实测大气、水体或土壤排放，适用时包括制冷剂或燃烧排放。没有引用方法及声明活动数据时不得加入通用排放因子。

- 选定流：基本流特定天工流；UUID 未解析，必须在具体数据集中选择
- 流属性/单位：流特定属性与单位
- 数量规则：实测排放量，或使用有引用因子从采集活动数据计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_wastewater`
- 来源：`eu-fdm-bat-2019`

### 过程：非熬制调质与贮存（`conditioning_storage`）

#### 输入

##### 产品流

###### 未熬制脂肪中间产品（`conditioning_product_input`）

记录从物理回收转入的内部物流，或具有独立上游数据集的外购同类输入。产品必须保持未熬制状态。

- 选定流：Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入调质步骤的实测净质量，并标识为内部或外购
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调质批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_storage`

###### 调质电力与公用工程（`conditioning_energy`）

按实际持续时间和温度条件记录制冷、冷冻、泵送、通风及贮存能源。

- 选定流：路线特定电力和能源载体；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：能源载体特定属性与单位
- 数量规则：计量用量或有记录的设备负荷与运行时间计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经调质产品及声明贮存持续时间
- 基准类型：贮存持续时间（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_storage`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019`

- 数量范围：暂定调质能源筛查；不是物种或类别默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 经调质产品
  - 基准：覆盖声明冷却、冷冻及贮存持续时间的宽泛筛查；用按温度和时间分层的经复核计量替换
  - 基准类型：贮存持续时间（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定类别通用的废物输入。

##### 基本流

不规定类别通用的基本流输入。

#### 输出

##### 产品流

###### 经调质未熬制脂肪（`conditioned_unrendered_fat`）

记录修整、沥液、清洗、冷却、冷冻或贮存后的产品净质量，并保留声明的物种/物料分层和未熬制状态。

- 选定流：Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明温度及水分/游离沥液基准下的实测调质产出净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调质批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_storage`

##### 废物流

###### 调质剔除物和沥液（`conditioning_rejects_drainage`）

按去向记录移除组织、沥液、融化损失、清洗残余、受损产品及其他调质损失。

- 选定流：路线特定废物或沥液；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：按类型实测或由质量平衡计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调质批次及每 1 kg 最终合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_storage`

##### 基本流

###### 制冷剂与直接公用工程排放（`conditioning_direct_releases`）

记录场址控制调质设备发生的制冷剂损失及直接排放。

- 选定流：基本流特定天工流；UUID 未解析，必须在具体数据集中选择
- 流属性/单位：流特定属性与单位
- 数量规则：按报告期分配至批次的维护记录、实测损失或库存平衡计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经调质产品及声明贮存持续时间
- 基准类型：贮存持续时间（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_storage`

### 过程：包装、发运与交接（`packing_dispatch_handover`）

#### 输入

##### 产品流

###### 未包装或经调质的合格产品（`dispatch_product_input`）

记录转入最终称量与发运的内部合格产品。外购同类物料必须保留独立上游数据集，且不得计为新回收产出。

- 选定流：Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入发运准备的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个发运批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_dispatch`

###### 一级、二级和运输包装（`packaging_materials`）

记录交接前实际供应的每种包装材料。仅在有证据表明为无包装散装转移时可记录零值。

- 选定流：材料特定包装流；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：购入或领用包装质量扣除退回未用包装，并按包装单元或实测批次质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_dispatch`

- 数量范围：暂定包装质量筛查；不是包装规范或类别默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 包装/kg 产品净质量
  - 基准：覆盖散装至小包装的宽泛筛查；用声明包装形式的经复核物料清单和批次证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 发运能源与公用工程（`dispatch_energy`）

记录保管责任转移前最终称量、包装、冷库暂存和装载用能。

- 选定流：路线特定电力和能源载体；天工 UUID 未解析，必须在具体数据集中选择
- 流属性/单位：能源载体特定属性与单位
- 数量规则：计量用量或有记录的设备时间分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_dispatch`
- 来源：`eu-fdm-bat-2019`

##### 废物流

不规定类别通用的废物输入。

##### 基本流

不规定类别通用的基本流输入。

#### 输出

##### 产品流

###### 声明交接点的参考产品（`reference_product_output`）

记录所有纳入前景操作完成后、声明发运或交付条件下恰好 1 kg 的合格产品净质量。

- 选定流：Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除皮重和包装后恰好 1 kg 产品净质量；全部前景清单归一化到该产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）

##### 废物流

###### 包装废物与发运剔除物（`dispatch_waste`）

按处理去向记录损坏、未用或废弃包装及最终检验剔除产品。

- 选定流：废物特定天工流；UUID 未解析，必须在具体数据集中选择
- 流属性/单位：Mass / kg
- 数量规则：按类型和发运批次实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_dispatch`

##### 基本流

不假定类别通用基本流产出。当场址特定装载或冷藏排放跨越环境边界时予以记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享屠宰、胴体处理、分割、回收、洗毛、调质和公用工程过程 | 首先通过单独计量或其他方式细分可直接归属于合格脂肪、其他产品、共产品和废物的操作以避免分配。内部转移不是共产品。 | `eu-pef-2021` |
| `allocation_physical_second` | 无法细分的多功能过程 | 只有在可证明且可量化的物理关系能够代表共享投入与产出如何提供共产品功能时，才使用该关系。记录关系、测量值、期间和因子；质量本身并不自动构成相关关系。 | `eu-pef-2021` |
| `allocation_other_relationship_last` | 无可辩护细分或物理关系的多功能过程 | 使用另一种有依据的关系，通常是在共产品成为独立产出点采用经济分配，并使用同期、路线特定、物种特定、等级特定和市场特定的数量与价格。说明为何前两级方法不可行，并在分配对结果有实质影响时开展敏感性分析。 | `eu-pef-2021` |
| `allocation_no_cross_species_default` | 未另分类来源物料及共产品 | 不得对动物物种、组织状态、粗羊毛脂、水生无脊椎动物物料或其他回收路线使用统一分配因子。PEF 针对牛、猪、绵羊和山羊的屠宰默认因子在本剩余类别范围外，不得作为默认值引入。 | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `allocation_upstream_transfer` | 外购或转移来源物料及同类输入 | 不自动采用零负担或废物定性。保留供应商/上游的负担处理、共产品状态和转移点分配，并与前景方法核对以避免遗漏或重复计算。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `physical_recovery_separation` | 来源身份与入料质量 | 收货、供应商、分类、秤量和批次记录 | lot_id; supplier; species_or_taxon; source_tissue_or_material; route; intended_grade; rendered_or_extracted_indicator; acceptance_decision; gross_mass; tare_mass; net_mass; scale_id; timestamp | 收货时核验文件身份和物理状态；经校准称量；保留剩余类别接受复核 | kg 及声明描述信息 | 每批 | 代表期内全部批次 | 每个纳入场址和供应商路线 | 保持物种/物料/路线分层；仅以披露权重汇总已接受净质量 | 供应商记录；使用时的照片或规格；分类复核；校准证书；收货日志 |
| `cp_resource_use` | `physical_recovery_separation` | 水、能源与辅料 | 仪表、发票、投加日志和设备记录 | meter_start; meter_end; fuel_or_energy_type; water_use; auxiliary_name; auxiliary_mass; equipment_time; allocation_driver; lot_id; reporting_period | 优先使用分表计量；否则以有记录的因果驱动分配报告期用量，并与发票核对 | kg; m3; kWh; MJ; 载体特定单位 | 每批或每个仪表区间 | 包含季节/吞吐变化的代表性运行期 | 每个前景场址 | 按资源和分层汇总；归一化到已接受净参考产出；报告分配份额 | 仪表校准；发票；库存核对；设备日志；分配工作表 |
| `cp_output_co_product_waste` | `physical_recovery_separation` | 产品、共产品、剔除物及废物质量 | 秤量、产率、发运和废物记录 | lot_id; output_type; species_or_taxon; material_state; gross_mass; tare_mass; net_mass; destination; saleable_status; handover_point | 经校准称量每类产出；保留路线和分类分层 | kg 及声明描述信息 | 每批 | 代表期内全部批次 | 每个前景场址 | 归一化前核对投入、产品、共产品、沥液、废水、库存变化及废物 | 校准证书；批次产率表；废物转移单；发运记录；库存核对 |
| `cp_emissions_wastewater` | `physical_recovery_separation` | 废水与直接排放 | 流量计、采样、维护、燃料及排放记录 | stream_id; flow; pH; temperature; pollutant_or_release; concentration_or_mass; sampling_time; method; refrigerant_addition; fuel_use; destination | 在声明位置监测相关物流；仅根据记录的流量/活动和有记录因子计算负荷 | m3; kg; 浓度及流量特定单位 | 每次排放、采样、事件或报告期 | 识别异常事件的代表期 | 每个前景场址及相关排放点 | 按物流汇总实测负荷；以披露的因果驱动分配共享报告期负荷 | 实验室报告；仪表校准；维护日志；因子引用；排放记录 |
| `cp_conditioning_storage` | `conditioning_storage` | 产品条件、持续时间、能源、损失及直接排放 | 秤量、温度、时间、仪表、库存及维护记录 | lot_id; input_mass; output_mass; temperature_profile; start_time; end_time; storage_volume_or_mass; energy_use; refrigerant_addition; drainage; reject_mass | 经校准称量和温度记录；分表计量或有记录的负荷—时间计算；制冷剂库存平衡 | kg; °C; hour 或 day; kWh; 制冷剂特定单位 | 每批，温度连续或定期记录 | 纳入的完整调质/贮存持续时间 | 每个纳入冷库、冷冻库或调质线 | 按批次归一化产品和损失；以有记录的质量—时间、体积—时间或实测负荷驱动分配共享能源 | 秤和温度校准；仪表数据；库存核对；维护记录 |
| `cp_packing_dispatch` | `packing_dispatch_handover` | 包装、最终质量、发运公用工程、废物及保管责任转移 | 物料清单、领退记录、秤量、仪表和发运单据 | lot_id; package_format; material; issued_mass; returned_mass; packed_units; gross_mass; tare_mass; net_product_mass; dispatch_energy; reject_mass; handover_location; handover_time; temperature | 核对包装领用和退回；经校准最终称量；记录保管责任转移和温度条件 | kg; 件数; kWh; °C; 时间戳 | 每个发运批次 | 代表期内全部发运 | 每个包装和发运场址 | 按材料和产品净质量计算包装；以披露驱动归一化场址公用工程与废物 | 包装物料清单；采购/库存记录；校准；发运单；仪表记录 |
| `cp_allocation_evidence` | `physical_recovery_separation` | 共享过程分配 | 分表、物理驱动、数量及价格记录 | shared_process; co_product; direct_metered_use; physical_driver; co_product_quantity; price_basis; price_period; currency; allocation_factor; hierarchy_step; justification | 先检验细分，再检验相关物理关系，最后检验其他有依据关系；保留因子计算和敏感性输入 | 驱动特定单位; kg; 每声明单位货币 | 每个分配期，以及路线或市场变化时 | 与前景清单同期间或有依据的代表期 | 每个共享设施及路线/物种分层 | 在一个一致多功能边界内计算因子；已分配负担的因子合计为一 | 计量证据；生产台账；发票或市场记录；签署分配工作表；敏感性检验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 最终产品质量 | 产品净质量 = 实测毛质量 - 皮重 - 包装质量 - 单独移除的游离沥液；以交接点合格净质量归一化清单 | gross_mass; tare_mass; packaging_mass; free_drainage_mass; classification acceptance | kg 合格产品及归一化因子 | `eu-pef-2021` |
| `calc_lot_mass_balance` | 每个回收与调质批次 | 将实测来源投入及添加物与合格产品、共产品、废物、废水或沥液、直接质量排放及库存变化核对。对无法解释的差额开展调查，不得强制闭合 | 全部实测质量投入和产出；库存变化；水分/游离沥液说明 | 披露的质量平衡差额和完整性发现 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_shared_resource_use` | 共享水、能源、辅料和发运记录 | 归一化用量 = 记录总量 × 有记录的前景分配份额 ÷ 合格产品净质量；份额必须使用因果仪表或活动驱动，并按路线/物种分层 | 仪表或发票总量；分配驱动；分配份额；产品净质量 | 每 kg 参考产品的资源用量 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_co_product_allocation` | 多功能上游或前景过程 | 按顺序应用层级：细分；相关物理关系；再使用另一有依据关系。记录因子并验证同一共享负担池内分配份额合计为一 | 直接测量；驱动数据；数量；价格；期间；负担池 | 按共产品分配的投入、产出和排放 | `eu-pef-2021` |
| `calc_reasoned_estimate_replacement` | 暂定 QA 范围 | 推理估算范围只用作筛查标记，绝不代替前景数量。取得经复核批次、计量、物料清单、路线、贮存或分配证据，或物种/物料/技术/边界变化时替换该范围 | 暂定范围；新前景证据；变更触发条件 | 带复核记录的保留、修订或删除 QA 范围 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_classification` | 每个产品和来源物料分层 | 证明剩余类别资格、物种/分类群、来源物料、未熬制状态、路线、等级及与排除项不重叠。含糊情形在使用前必须人工分类复核。 | 收货和供应商记录；物理状态证据；CPC 复核 |
| `dq_measurement` | 质量、资源、温度、时间及排放记录 | 在适用时使用经校准或验证的仪器；保留原始单位、换算、仪表覆盖、采样方法和分配驱动。 | 校准和验证记录；原始仪表/采样文件；换算工作表 |
| `dq_temporal_geographic_technology` | 代表性数据集 | 声明地理范围、场址、技术、吞吐量、季节性、生产期间和贮存概况。说明缺口以及为何该期间能代表声明产品分层。 | 生产日历；设施说明；覆盖统计；PEF DQR 披露 |
| `dq_completeness` | 前景清单 | 纳入相关物料、能源、共产品、废物、废水、包装、制冷剂及直接排放流，或明确说明排除理由；报告质量平衡差额及遗漏流评估。 | 过程流程图；适用时 BAT 式清单；质量平衡；排除登记 |
| `dq_allocation` | 共享过程 | 保留层级步骤、边界、因子、期间、物种/路线分层和证据；不得移植其他动物类别或组织状态的因子。 | 分配工作表；仪表/驱动/价格证据；敏感性结果 |
| `dq_hygiene_condition` | 食用屠宰/肉类来源路线 | 保留适用的过程控制、宰后接受、时间—温度、包裹/包装、冷藏和保管责任记录。CXC 58 仅作为背景，不建立产品组成或 LCA 数量。 | 适用设施控制记录；温度日志；检验/接受和发运文件 |
| `dq_source_limits` | 外部证据使用 | 保留每个来源的声明用途与限制。不得把 Codex 组成表、BAT 适用阈值/绩效水平或 PEF 物种特定默认值转换为 CPC 21519 类别通用数值。 | 来源使用复核及数据集方法说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_gate` | 产品身份 | 只有当物种/分类群、来源物料、路线和未熬制状态证明属于 CPC 21519 剩余范围时才通过。物种未知或可能与 CPC 21511-21515、已熬制脂肪、动物油/分提物或另一明确类别重叠时，产生人工复核发现且不得自动选择 PCR。 | `unsd-cpc-3-0-2025` |
| `validate_reference_uuid` | 参考流身份 | 要求产品流 `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 及 1 kg 净参考数量。 |  |
| `validate_unrendered_process` | 过程路线 | 若交接前发生熬制、脂肪熔炼、油/分提物提取、精炼或化学改性，或以本参考流表示已熬制/油类产出，则校验失败。 | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validate_strata` | 物种、来源物料及路线聚合 | 要求不同物种/物料/路线使用独立清单分层，或披露权重及分层特定计算。对屠宰来源组织、粗羊毛脂或其他动物来源使用单一无区分默认值不符合要求。 | `unsd-cpc-3-0-2025` |
| `validate_boundary_handover` | 纳入操作 | 要求声明前景起点、纳入的修整/清洗/调质/贮存/包装、发运或交付交接以及外运处理。熬制/精炼必须保持排除。 | `eu-pef-2021` |
| `validate_inventory_completeness` | 过程清单 | 对来源物料、产品、共产品、水、能源、辅料、剔除物、废水/沥液、包装、制冷剂/直接排放及库存变化，要求实测记录或明确不适用处理；每项排除均须说明理由。 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validate_mass_balance` | 回收、调质及发运批次 | 要求原始测量值和披露的质量平衡差额。不得强制把无法解释差额归零，也不得以推理估算范围作为记录数量。 | `eu-fdm-bat-2019` |
| `validate_allocation` | 多功能负担 | 要求证据证明先检验细分，再检验相关物理关系，最后才使用其他有依据关系；因子必须为路线和期间特定，并在共享负担池内核对。 | `eu-pef-2021` |
| `validate_estimate_replacement` | 推理估算范围 | 确认每个 `reasoned_estimate` 均标记为暂定、仅作 QA 筛查、没有虚构来源且陈述替换触发条件。前景值仍为必需。 |  |
| `validate_source_limitations` | 外部来源使用 | 拒绝把 CXS 211 组成值作为未熬制脂肪配方或 LCA 数值，把 CXC 58 用于适用屠宰/肉类卫生背景之外，或把 FDM BAT 阈值/绩效值作为通用要求。 | `codex-cxs-211-1999`; `codex-cxc-58-2005`; `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明物种/物料/回收路线分层的前景产品系统数据集，经复核后适合作为 secondary_dataset 和/或 background_dataset 发布 |
| downstream_use | 需要在指定发运或交付条件下 1 kg 其他未熬制动物脂肪（未另分类）的 LCA process 和 lifecyclemodel 投影 |
| allowed_use | 与声明的物种/分类群、物料、路线、等级、地理、技术、期间、温度状态、交接、上游边界处理和分配方法相匹配的研究 |
| excluded_use | 已熬制/精炼/改性脂肪或油；CPC 21511-21515；已熬制脂肪 21521-21529；鱼类或海洋哺乳动物油；未经分层的未知或混合来源身份；未经复核在物种、羊毛脂与组织路线或交接状态之间替代 |
| required_metadata | PCR id/版本；产品和三个参考 UUID；物种/分类群；来源组织/物料；路线；剩余类别复核；预期等级/用途；物理和温度状态；水分/游离沥液及净质量基准；地理；期间；技术；纳入操作；包装；贮存持续时间；交接；上游数据集；共产品；分配；数据源 |
| required_quality_disclosure | 原始数据覆盖；校准；时间/地理/技术代表性；质量平衡差额；水/能源/排放覆盖；排除项；分配因子和敏感性；推理估算的使用和替换状态；来源限制；在具体数据集中选择的未解析流 UUID |
| update_trigger | 新 CPC 或官方范围指南；修正的天工身份；经复核路线/物种证据；回收、调质、包装或交接技术变化；新前景范围；共产品市场/分配变化；来源修订；有证据表明产品属于更具体类别 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，CPC Ver. 3.0 Explanatory Notes，子类 21519，2025-06-30 更新。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（2026-08-11 获取） | 权威剩余类别纳入/排除门。仅定义分类范围，不提供过程配方、分配因子或 LCA 数量。 |
| `codex-cxc-58-2005` | standard | Codex Alimentarius，Code of Hygienic Practice for Meat，CXC 58-2005。https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（2026-08-11 获取） | 为适用屠宰/肉类路线提供过程控制、宰后接受、时间—温度控制、及时包裹/包装和冷藏背景。不用于水生无脊椎动物或粗羊毛脂路线，也不提供类别通用 LCA 数值。 |
| `codex-cxs-211-1999` | standard | Codex Alimentarius，Standard for Named Animal Fats，CXS 211-1999，2024 修订。https://openknowledge.fao.org/handle/20.500.14283/ce0093en（2026-08-11 获取） | 仅作边界对照：其命名脂肪以供人食用状态提供，并包括猪油、熬制猪脂、初榨汁和牛羊脂等已熬制产品。不作为未熬制脂肪组成规范、配方或 LCA 数量来源。 |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（2026-08-11 获取） | 功能单位/参考流结构；系统边界与清单完整性；数据质量披露；多功能性层级。不为本未另分类 PCR 采用 PEF 针对牛、猪、绵羊和山羊的物种特定屠宰/农场默认值。 |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳制品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（2026-08-11 获取） | 在相关时用于过程流、水/能源/原料、废水/废气清单和监测完整性。不推广法律适用性、产能阈值、排放水平或绩效值；该决定指出屠宰场/动物副产物活动可能由其他 BAT 结论覆盖。 |
