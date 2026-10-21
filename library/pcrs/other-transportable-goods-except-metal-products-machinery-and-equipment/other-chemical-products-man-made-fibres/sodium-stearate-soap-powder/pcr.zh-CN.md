---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.sodium-stearate-soap-powder
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 游离脂肪酸中和生产硬脂酸钠皂粉

## 1. 范围与适用性

本方法适用于未配制的植物来源 C18 硬脂酸钠皂粉（CAS 822-16-2），以已识别游离硬脂酸及外购 50% 氢氧化钠水溶液中和，经过实际除水、粉末后处理、质量验收、包装、纳入的仓储及厂内发运。市场上真实的 >=99% 粉末支持该具体供货形态；仍须查明实际含量测定基准、水分、脂肪酸谱及批次验收，不能推定混合油脂配方。[sigma-s3381; us-soap-neutralisation-1983; epa-soap-1974]

排除刻意混配的 C16/C18 脂肪酸皂、油酸钠/棕榈酸钠、钾皂及金属皂、甘油酯皂化、外购皂基后处理、超脂/香精或添加甘油配方、块皂、液体清洁剂、非皂表面活性剂、浸渍基材及其最终制品。原料、配方、路线或物态变化须另作适用性判定，不能按分类标签合并。本边界不声称所列生产者使用本路线。历史专利实例含复合添加剂，其 12% 水分、配方、风量及能源均不是本皂粉的默认值。[us-soap-neutralisation-1983]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.sodium-stearate-soap-powder |
| classification_refs | CPC 3.0:35321; 仅较窄子集；另行映射审查 |
| covered_products | 单一 C18 硬脂酸钠皂粉，声明实际水分和痕量杂质；按声明分析基准含量 >=99% |
| excluded_products | 第 1 节所列排除项；无刻意多皂混配或添加剂配方 |
| representative_product | 植物来源未配制硬脂酸钠粉末，CAS822-16-2，CH3(CH2)16COONa |
| production_route | 游离硬脂酸 + NaOH 溶液；中和；除水及粉末后处理；包装/仓储/发运 |
| market_state | 实际交付验收的粉末，包含残留水分，排除包装皮重；声明实际温度及储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应指定硬脂酸钠皂粉作为清洁/乳化原料；不宣称等清洁性能 |
| How much | 1 kg 实际向外部净交付并验收的皂粉 |
| How well | 单一 C18 硬脂酸钠；声明 >=99% 分析含量基准、水分、游离酸/碱、组成谱、粉末规格及批次验收 |
| How long or cycle | 一个完整报告期间及匹配交付批群；无固定使用寿命 |
| reference_flow_link | product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 肥（香）皂 `90182cb6-09a6-4709-b22a-785e5f1690e2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | C18 CAS/物种及脂肪酸谱; 植物来源; 分析含量方法及干湿基准; 实际水分/游离酸/碱和杂质; 游离酸中和路线及整份 50% 碱液供货; 粉末等级和后处理; 实际净交付门; 批群/期间及退回标识; WIP 和成品库存质量及结转负荷; 场址/地理和供应商背景; 实际包装及仓储/发运条件; 非WIP回路/设备实物存量及每项继承交换向量; 制造/成品/合并门及毛发运退回和水分相态历史; 每件真实包装物五方向保管及干皮重; 真实干燥气体物种状态相态及供方蒸汽水能约定 |

每项必需限定信息须出现在前景元数据、过程说明、参考流备注或等效字段。宽泛皂 UUID 不能证明供应商配方、等级、地区或上游用量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为同一产品/路线/状态批群实际向外部净交付并验收的皂粉质量。排除包装皮重、内部交接、未交付成品及已计过的退回品。按物理批次/份额标识去重；退回后再验收不增加 Q。包含残留水分；干活性分析仅为子账，不另设参考。 |
| inventory_carry | all inventory rows |  |  | 分开制造、成品及合并实物门。成品门：期初加真实新放行、外部退回及独立实测进入成品的真实物料/水分，等于期末加毛实物外发G、真实成品废物、水蒸气及其他实物出口。期初、放行、退回、返工、期末和发运分别核对干C18盐、游离水及其他真实物种。仅抵消一次内部生产/返工交接，不把放行与同批期末成品重复输出。净验收交付Q依calc_delivery，不等于G或放行量。每项原料/WIP及WIP账外水回路、蒸汽/凝结水、冷却液、润滑油、制冷剂及设备充注，均独立保留实物量/状态/位置和每项继承交换向量、原批历史，消除存量重叠。数据使用前逐项补实际补充、回收、泄漏、更换及废弃原子交换。 |
| single_normalisation | all inventory rows | Mass / Energy | kg; MJ | 采集未相除的原始期间分子。实际失败/零产出运行、退回/返工、公用工程、仓储/包装/搬运/发运及处理负荷连同库存结转归入匹配批群。只有 calc_normalise 将所得分子 B_i 除以 Q 一次。卡片数量规则及协议汇总均指同一次报告操作，不连续相除。Q 不为正时不得生成有限每 kg 数据集。 |
| wet_supply | whole wet material supplies | Mass | kg | 各整份湿溶液只采购一次。NaOH 含量及载体水为组分子账。现场配制时以另购组分和真实混合/稀释能源、损失替代制剂采购。同一上游物料不能同时重复采购供货油脂、其中硬脂酸及整份皂基。 |
| unit_conversion | all inventory rows | Mass / Energy / Volume | kg; MJ; m3 | 采用 1000 kg/t 和 3.6 MJ/kWh。液体体积须按记录条件下实测密度换算。速率乘时长成立；已积分体积不得再次乘时间。供汽和凝结水返还质量分别保留在实物账，热服务按各自实测质量与状态焓计算；不得将热量当作水质量，次级流属性系数不是密度。 |
| species_water | physical material and species ledgers | Mass | kg | 完整物理质量及 C/H/O/Na 守恒须与物种反应化学分别检查。确认的硬脂酸中和 C18H36O2 + NaOH -> C18H35NaO2 + H2O 每反应一摩尔形成一摩尔水，不生成甘油。甘油酯 + 3NaOH -> 甘油 + 3皂 本身不形成净水，且不属本路线。游离水、蒸发、凝结及任何结构水须另有证据；不得用同一闭合残差或 COD 同时拟合反应水及未知出口。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定植物来源游离 C18 硬脂酸及外购整份 50% NaOH 溶液，不以油脂或皂基为起点 |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | 仅 CPC35321 中的单一皂粉子集 |
| recursive_input_rule | 抵消内部皂、粉尘、凝结水及返工交接；外购皂基改变适用性，须含上游负荷，不能递归套用最终参考 |
| upstream_dataset_requirement | 匹配整份酸、整份碱液、公用工程及真实包装的来源与加工；供货酸背景须按实际覆盖适用的种植/提油/精炼、油脂裂解、氢化/分馏及酸纯化，不臆造或省略工序 |
| disclosure | 实际场址/地理、期间/批群、交付门、纳入储存温度/时间、包装、发运/装卸、库存负荷、外包工序及处理；不从目录推定供应商路线 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all inventory rows | 纳入实际厂门交付前的接收/储存、熔融、溶液处理、中和、实际除水、粉碎/筛分、风系统、污染控制、清洗、QA、包装、仓储及发运搬运。保留真实返工、失败运行、上游及外部处理连接。 | epa-soap-1974; us-soap-neutralisation-1983 |
| boundary_actual | all inventory rows | 原子卡仅为采集起点，不是固定工厂配方。实际增加的包装组件、清洗剂、公用工程、制冷剂损失、现场燃料、处理药剂、废物或基本物种均须另列原子卡及协议。证明确实不存在时可用 not_applicable；空 UUID 或目录未提到不构成省略依据。 | epa-soap-1974 |
| boundary_sources | all inventory rows | 生产者页面识别真实高纯植物来源粉末，不证明其供应商路线或水分/包装组成。常温运输与 2-8 C 储存不同，须匹配真实条件，实际制冷负荷须保留。页面 ester 标签与羧酸盐式矛盾，不作反应依据。专利实例 I 含甘油及复合添加剂，不移植其配方。 | sigma-s3381; us-soap-neutralisation-1983 |
| boundary_physical | all inventory rows | 独立闭合制造、成品与合并门总质量、C/H/O/Na及真实物种相态账。干燥/通风分别实测N2、O2、Ar、大气来源CO2及气态H2O的总取入/排出，不设固定空气配方，不自动计新生化石CO2或吸收抵扣。外购压缩空气载气为组成子账，不重复环境取入。真实气体反应/吸收、凝结水、液滴和气溶胶须各有实测身份去向。包装保管及外供蒸汽水接收/返还不因分配而减少毛实物交换。 |  |
| boundary_pack | hdpe_body; hdpe_lid | 每件真实独立物品：期初空包装、附着WIP、附着成品及可复用存量，加新外购/供方附着接收、外部退回接收，等于期末空包装、附着WIP、附着成品及可复用存量，加随每次毛实物发运外出、单独对外返还及真实物品废弃。新外购与供方附着接收只计一次，内容物与干皮重独立。内部复用只在保管账内抵消，不减少毛外运物品质量、不增加净皂粉Q或自动产生抵扣。新增每种真实不同材料/物品及其五个外部方向。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| soap_line | 单一 C18 皂粉生产与交付集成过程 | required | 仅限声明中和路线及粉末批群；工段账和库存账保持独立 | foreground | product |

### 过程：硬脂酸钠皂粉生产与交付（`soap_line`）

#### 输入

##### 产品流

###### 硬脂酸原料 (`stearic_acid`)

采购植物来源 C18 硬脂酸（CAS 57-11-4），按整份供货物料记账。要求脂肪酸谱、酸值、水分、残余甘油酯及供应商路线；不得用商业 C16/C18 混酸或油脂替代。熔融及原料搬运负荷纳入。

- 选定流：硬脂酸
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：us-soap-neutralisation-1983; epa-soap-1974

###### 外购碱液 (`caustic_solution`)

外购整份 50% NaOH 水溶液。记录实际含量和整份湿质量；活性 NaOH 与载体水仅为组分子账，不另作采购。原生文献的试剂用途不提供供应商、生产路线、地理或用量。浓度不同时另验身份；现场稀释计入另购水和能源，不再采购所配混合物。

- 选定流：氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：us-soap-neutralisation-1983; epa-soap-1974

###### 去离子补水 (`process_water`)

仅计另行供应的去离子工艺及清洗补水，排除已随碱液采购的水。原生路线限定为离子交换或反渗透，较宽注释还提到蒸馏，因此不得直接用于仅蒸馏供水。原件未规定地理或密度。CPC18000 天然水分类不能描述该处理水身份；保留此元数据债务，同时匹配实际去离子水供应。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-soap-1974

###### 外购电力 (`electricity`)

包括熔融、混合、干燥、粉碎/筛分、送排风、除尘、包装、清洗及可归属仓储/发运电耗。匹配电压、地理及供电期间；未指定场址不能直接采用 CN 低压 UUID。实际需冷藏时保留制冷电耗。

- 选定流：实际接入电压的电网电力
- 流属性/单位：能量 / MJ
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_energy
- 来源：epa-soap-1974

###### 外购间接蒸汽热 (`steam_heat`)

仅按实际外供间接热纳入，由独立实测蒸汽供给质量/状态/焓及真实对外凝结水返还质量/状态/焓计算，不假设供回质量相等。steam_water_supply与condensate_return保留独立实物交换、回路/设备存量及真实损失。约定供方水能边界及上游负荷归属，热服务和载水记录不得将同一蒸汽生产采购两次。自备锅炉改列真实燃料、水及各排放；直接接触蒸汽须有真实质量状态并重审适用性。

- 选定流：工业蒸汽提供的间接热
- 流属性/单位：能量 / MJ
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_energy
- 来源：epa-soap-1974

###### HDPE 包装桶身 (`hdpe_body`)

实际使用时的一件 HDPE 桶身。按包装设计称皮重并核对领用、退回、破损和库存数量；不得从产品净质量或目录规格推定包装。 实际新供给或供方附着接收仅计一次，干皮重与内含物独立；按boundary_pack记录空包装、附着WIP/成品及可复用存量和五个外部方向，复用或分配不减少真实实物发运质量。

- 选定流：HDPE 包装桶身
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### HDPE 包装桶盖 (`hdpe_lid`)

实际使用时的独立 HDPE 桶盖，桶身质量不含桶盖。其他盖材、内衬、封口、标签或外箱须各有原子交换及采集记录。包装形式不同不构成删除实际包装的依据。 实际新供给或供方附着接收仅计一次，干皮重与内含物独立；按boundary_pack记录空包装、附着WIP/成品及可复用存量和五个外部方向，复用或分配不减少真实实物发运质量。

- 选定流：HDPE 包装桶盖
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 外供间接加热蒸汽水供给 (`steam_water_supply`)

真实外供蒸汽按实物H2O质量计，实测干度、压力、温度、焓及供方水能约定；与计算热服务分开，依供方约定仅归属一次上游生产，不在两份记录重复。保留真实回路存量及独立实测返还/损失。

- 选定流：外供间接加热蒸汽水供给
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_stock
- 来源：epa-soap-1974

###### 肥（香）皂 (`fg_return`)

按原物理份额计真实外部退回C18皂粉，实测水分/干盐/状态并保留历史交换向量和原交付更正。再次验收不是新制造。本行为毛保管记录，calc_delivery净额化不能抹去真实质量、返工新增投入或出口。原生产品宽身份允许脂肪酸碱盐但无CAS/形态/等级/地理限制，仍须实际C18粉末资格。

- 选定流：肥（香）皂 `90182cb6-09a6-4709-b22a-785e5f1690e2`
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_output
- 来源：epa-soap-1974

###### 外部退回接收HDPE包装桶身 (`hdpe_body_return_received`)

一件真实完整HDPE包装桶身，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本外部退回接收方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：外部退回接收HDPE包装桶身
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 外部退回接收HDPE包装桶盖 (`hdpe_lid_return_received`)

一件真实完整HDPE包装桶盖，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本外部退回接收方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：外部退回接收HDPE包装桶盖
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

##### 基本流

###### 氮气自环境空气取入 (`nitrogen_in`)

干燥/通风环境取气的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氮气自环境空气取入
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 氧气自环境空气取入 (`oxygen_in`)

干燥/通风环境取气的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氧气自环境空气取入
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 氩气自环境空气取入 (`argon_in`)

干燥/通风环境取气的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氩气自环境空气取入
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 大气来源二氧化碳自环境空气取入 (`atmospheric_co2_in`)

干燥/通风环境取气的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：大气来源二氧化碳自环境空气取入
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 大气水蒸气取入 (`air_moisture_in`)

独立按湿度及真实气体状态/流量测干燥/通风或成品存储取入的实际气态大气水分；外购载气水分属于供货子账。不默认入口零，不由净蒸发反推，也不假定全以蒸气外排；核对实际凝结、吸附、留存及实测气态出口。

- 选定流：大气水蒸气取入
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

#### 输出

##### 产品流

###### 实际净交付硬脂酸钠皂粉 (`product`)

仅此为终端 Product 输出：指定皂粉经过粉末后处理、质量验收、实际包装及纳入的仓储、发运搬运后，向外部实际净交付并验收的数量。原生肥（香）皂仅是碱金属脂肪酸盐的宽身份，无 CAS、等级、形态或地理；本方法及批次证据补足 C18 粉末限定。排除包装皮重；实际残留水分及杂质仍在皂粉净质量内。 固定1 kg是毛发运/退回保管账的净交付参考表示，不是叠加在gross_dispatch之上的额外实物发运。退回成品返工真实新增水、清洗剂、包装和能源，以及每项实测水分/物种/废物出口，均归责任批群；水分增减不等于新制皂。旧批分母与交换向量保留在更正谱系中，增量服务依已声明匹配净交付基准归属，不转给无关当期产出。

- 选定流：肥（香）皂 `90182cb6-09a6-4709-b22a-785e5f1690e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_output
- 来源：sigma-s3381; us-soap-neutralisation-1983

###### 对外返还凝结水 (`condensate_return`)

真实跨供方边界返还的水，质量/状态/焓和保管独立记录，不当作废水或抵扣。内部凝结水循环抵消，独立闭合供应、设备存量期初末、其他真实水出口与本返还。

- 选定流：对外返还凝结水
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_stock
- 来源：epa-soap-1974

###### 肥（香）皂 (`gross_dispatch`)

真实毛实物外发的指定皂粉，含再交付，逐份额/水分状态实测扣除包装皮重的质量，保留旧发运/退回冲回与原向量。本保管量G不等于Q，唯一净产品参考表示核对后的验收交付，不得在参考之上再叠加gross_dispatch作为第二模型产品输出。原生皂同义词含香皂/卡斯蒂利亚皂，不证明混油配方或本粉末规格。

- 选定流：肥（香）皂 `90182cb6-09a6-4709-b22a-785e5f1690e2`
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_output
- 来源：epa-soap-1974

###### 随毛实物发运外出HDPE包装桶身 (`hdpe_body_out`)

一件真实完整HDPE包装桶身，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本随毛实物发运外出方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：随毛实物发运外出HDPE包装桶身
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 向外返还HDPE包装桶身 (`hdpe_body_return_sent`)

一件真实完整HDPE包装桶身，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本向外返还方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：向外返还HDPE包装桶身
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 随毛实物发运外出HDPE包装桶盖 (`hdpe_lid_out`)

一件真实完整HDPE包装桶盖，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本随毛实物发运外出方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：随毛实物发运外出HDPE包装桶盖
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 向外返还HDPE包装桶盖 (`hdpe_lid_return_sent`)

一件真实完整HDPE包装桶盖，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本向外返还方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：向外返还HDPE包装桶盖
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

##### 废物流

###### 含皂清洗废水 (`wash_water`)

设备清洗及不合格品处理实际外排的湿废水；水、钠、硬脂酸盐及实际污染物须独立计量，不以 COD 替代。连接接收处理及其负荷。边界内回用洗液仅为内部交接，不另作废物外排。

- 选定流：含硬脂酸钠清洗废水
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_outlets
- 来源：epa-soap-1974

###### 最终弃置不合格皂粉 (`discarded_soap`)

称量最终离厂处理的皂残余物，记录水分、化学组成及处理去向。回收粉尘、退回品及返工物仅在真实弃置时成为外排；记录回收能源与损失，不作共产品信用。

- 选定流：最终弃置不合格硬脂酸钠皂粉
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_outlets
- 来源：epa-soap-1974

###### 废弃HDPE包装桶身 (`hdpe_body_waste`)

一件真实完整HDPE包装桶身，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本废弃方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：废弃HDPE包装桶身
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

###### 废弃HDPE包装桶盖 (`hdpe_lid_waste`)

一件真实完整HDPE包装桶盖，按实测干皮重逐物品执行boundary_pack全式，内含物独立。本废弃方向按真实实物保管计，保留附着WIP/成品和可复用存量、谱系、去向及继承交换向量；复用、退回净额化或分配不减少毛外运实物。其他真实树脂/物品须独立原子卡。

- 选定流：废弃HDPE包装桶盖
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：epa-soap-1974

##### 基本流

###### 工艺水蒸气排放 (`water_vapour`)

实测控制后真正越过外部空气边界的普通气态H2O总量，包含未凝结载气水分及真实工艺/成品蒸发。独立测入口湿度、相变、留存水分及存量变化。新增工艺水净蒸发仅为该总出口内的来源子账，不另计输出。不默认全部入口水均排成蒸气，液态凝结水、液滴及含水气溶胶须有各自真实原子去向。反应生成水按已反应物种独立计算，不自动等于排出的水蒸气；不以一个残差拟合未知相态/物种。仅采用普通气态H2O，CAS7732-18-5，排入普通未特指外部空气，唯一质量参考属性、系数1，无地域/技术限制或其他属性。登记同义词中的冰、结合水及同位素水不授权这些形态，已知其他区室须另验身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_outlets
- 来源：epa-soap-1974

###### 未捕集硬脂酸钠粉尘 (`soap_dust`)

治理后实际有组织及无组织粉末损失，由排气流量、物种特定颗粒采样与实际时长确定。捕集回用粉尘不是排放。其他实测排放须另列物种和介质行。

- 选定流：排入空气的硬脂酸钠颗粒物
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_outlets
- 来源：epa-soap-1974

###### 氮气至外部空气 (`nitrogen_out`)

干燥/通风外部大气出口的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氮气至外部空气
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 氧气至外部空气 (`oxygen_out`)

干燥/通风外部大气出口的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氧气至外部空气
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 氩气至外部空气 (`argon_out`)

干燥/通风外部大气出口的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：氩气至外部空气
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

###### 大气来源二氧化碳至外部空气 (`atmospheric_co2_out`)

干燥/通风外部大气出口的真实单一载气物种，质量由累计气体测量及实际温压/组成/来源独立确定，不设固定干空气比例，不推定零反应/吸收。外购载气归产品组成子账，不重复资源取入；大气CO2穿流不当作新生化石排放或抵扣。

- 选定流：大气来源二氧化碳至外部空气
- 流属性/单位：质量 / kg
- 数量规则：B_i / Q；完整原始分子经换算及库存/批群归属之后，在第 8 节报告操作中仅相除一次
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_air
- 来源：epa-soap-1974

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | all inventory rows | 本游离酸路线不生成反应甘油，仅皂粉为参考。不得增加假想甘油输出、替代信用、皂基信用或避免废物处理收益。上游油脂裂解甘油属于供货酸背景，并披露其分配。 | epa-soap-1974; us-soap-neutralisation-1983 |
| allocation_actual | all inventory rows | 先确定研究情境：这些条款仅在确需归因分配时适用，工业路线资料不授权后果替代。优先实际可分作业细分或有证据虚拟细分，直接归属专属物料、失败、清洗、包装及服务交换。逐项仍共享交换独立确定决定性物理原因及实测驱动，按实际状态/时间/几何等核验，质量或产量件数不构成普遍因果。仅确无决定性物理归属的真实剩余，采用同一过程出口/入口、真实状态及同期共功能相对市场价值，必要时扣后续运输/调理/包装费用；采数量、价格/币种/日期、分配总量守恒和敏感性。因果/价值证据未知则具体数据集不完整，不任意固定键。内部退回/返工/粉尘不为共产品或抵扣，真实外部回收遵循适用回收条款。 | jrc-ilcd-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

各协议明确的负责人仅采集原始记录，不执行相除。协议汇总及卡片公式指同一个下游 calc_normalise 操作。采集覆盖完整报告期、零产出/失败运行及 WIP/成品库存完整结转；不存在须有证据，不能假定零。

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | soap_line | product; fg_return; gross_dispatch | acceptance_record | lot_id; portion_id; grade; CAS; route; origin; fatty_acid_profile; assay; assay_basis; moisture; free_acid; free_alkali; net_mass; package_tare; dispatch; acceptance; returns; opening_finished; closing_finished; carried_burdens; returned_carried_burdens; prior_report_corrections  dry_salt; water; actual_FG_new_inputs; FG_evaporation; condensation; adsorption; FG_waste_and_other_exits; original_Q_and_vector; | 负责人：QA 负责人及发运/库存会计。核对校准皂粉净称重、批次 CoA、验收、外发及退回关联。保留原始质量及结转负荷向量，不执行 A/Q。按物理谱系判别此前计过部分及替换部分。  独立称毛保管G/退回及真实相态/组成变化，逐项记录真实新增成品/返工投入出口与增量服务及更正历史。 | kg; %; lot ID | 每次外发/退回；期末核对 | 完整实际交付期及来源生产期 | 同皂粉/路线/状态及实际场址 | 每 1 kg 参考流 | 校准、验收及退回单据、CoA、库存及负荷账 |
| cp_material | soap_line | stearic_acid; caustic_solution; process_water | purchase_and_batch_record | material_id; supplier; route; origin; wet_mass; assay; water_fraction; density; temperature; pressure; receipts; issues; returns; opening; closing; WIP_mass; WIP_composition; carried_burdens; failed_run; rework | 负责人：生产物料衡算工程师。采集各次运行包括失败运行的真实整份供货接收/领用及校准投料。保留活性/载体子账、可追溯 WIP 及结转负荷；仅闭合原始库存，不归一化。 | kg; m3; kg/m3; % | 每次接收/批次；库存端点 | 完整实际生产及交付批群历史 | 酸/碱处理、反应、清洗及 WIP | 每 1 kg 参考流 | 发票、校准秤/表、含量分析、供应商来源、WIP 谱系及负荷记录 |
| cp_energy | soap_line | electricity; steam_heat | meter_and_service_record | meter_start; meter_end; kWh; steam_mass; inlet_enthalpy; condensate_enthalpy; run_duration; integrated_volume; storage_time; temperature; allocation_driver; failed_run; carried_burdens | 负责人：公用工程工程师。保留未相除的分工段/运行读数及可归属的仓储、制冷、包装、搬运、发运和处理服务池，包括失败运行及库存结转服务。记录真实供电电压/地理及蒸汽条件。 | kWh; MJ; kg; kJ/kg; h | 计量间隔及每批/项服务 | 完整实际期间及相关库存服务历史 | 全部纳入工段及共享设施 | 每 1 kg 参考流 | 仪表校准、账单、焓条件及因果归属记录 |
| cp_pack | soap_line | hdpe_body; hdpe_lid; all packaging directions | package_and_dispatch_record | component_id; resin; tare; issued_count; returned_count; damaged_count; opening; closing; packed_lot; delivered_portion; rework; carried_burdens  empty/attachedWIP/attachedFG/reusable opening_closing; new_receipt; external_return_received; gross_outward; external_return_sent; article_waste; contents; inherited_exchange_vectors; | 负责人：包装及仓储经理。逐个组件称量，保留与交付份额匹配的原始领用/库存/退回/破损记录，包括重新包装、搬运及期末成品包装结转负荷。采集时不计算每 kg 值。  各物品及五种真实外部方向分别执行boundary_pack，毛实物发运独立于复用/分配。 | kg; count | 各包装设计/批次及发运 | 完整实际期间及包装库存历史 | 实际包装、仓储及发运区域 | 每 1 kg 参考流 | 皮重测试、物料清单、库存领退及发运关联 |
| cp_outlets | soap_line | wash_water; discarded_soap; water_vapour; soap_dust | measurement_and_treatment_record | wet_mass; composition; water; sodium; stearate; exhaust_flow; humidity_in; humidity_out; particulate_concentration; duration; condensate; capture; rework; receiving_treatment; failed_run; carried_burdens | 负责人：环境工程师。保留独立、未相除的出口测量及处理记录，包括失败运行、清洗及返工。保留单位与测量边界；蒸气/粉尘须独立于反应水计算和总质量残差测定。 | kg; m3; kg/m3; h | 每次事件；有代表性监测间隔 | 完整实际期间及库存关联损失 | 干燥/排风、清洗、残余物及处理边界 | 每 1 kg 参考流 | 采样/校准、湿度流量条件、废物转移及处理证据 |
| cp_balance | soap_line | all inventory rows | species_and_inventory_balance | reacted_stearic_moles; reacted_NaOH_moles; residual_species; water_in; water_out; WIP_open; WIP_close; finished_open; finished_close; transfers; loss; burden_vectors  nonWIP_equipment_location; opening_closing_charge; actual_makeup_recovery_leak_disposal; per_exchange_open_current_close_vectors; manufacturing_FG_combined_gates; | 负责人：工艺化学师及库存会计。根据独立原料/产品分析及转化测试确定已反应物种；保留分段/全厂原始物理、C/H/O/Na 及水账，含库存变化及结转。不得从一个残差同时求反应水及未知出口。  各真实WIP账外存量独立守恒实物及每项交换向量，与原料/WIP不重叠；内部抵消前纳入全部真实成品质量/物种流转。 | kg; mol; % | 每批及完整期末 | 整个批群及期初库存来源 | 反应、除水、WIP 及成品库 | 每 1 kg 参考流 | 含量分析、反应测试、原始衡算、交接单及结转负荷核对 |
| cp_air | soap_line | 每项真实载气物种 | gas_measurement | species; origin; integrated_volume_or_rate; interval; P; T; humidity; composition; actual uptake; compartment; FG_or_manufacturing | 负责人：环境工程师。各总物种取入/出口和相态独立实测，不套固定空气混合物；外购载气子账不重复资源取入，calc_normalise前保留未除原始记录。 | 原始单位 | 逐区间/事件 | 完整期间及批群历史 | 真实气体及成品边界 | 每 1 kg 参考流 | 仪表校准；物种/湿度分析；相态记录 |
| cp_stock | soap_line | steam_water_supply; condensate_return; 每项真实非WIP充注 | physical_and_exchange_vector_ledger | material; location; opening; supply; return; state; enthalpy; actual loss; closing; original_vector; each_current_increment; supplier_water_energy_convention | 负责人：公用工程及库存工程师。各真实质量及相态状态分别实测，每项继承交换向量结转，存量/返还/损失核对且不重叠。供回质量分别计量，同一蒸汽上游生产在热与水记录间只归属一次；calc_normalise前保留原始记录。 | kg; state; kJ/kg | 逐流转及存量端点 | 完整期间及继承历史 | 真实供方及设备位置 | 每 1 kg 参考流 | 校准；供方约定；实物存量与负荷向量证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 每个外部整份供货原始交换仅保留一次，核对接收/领用/退回及未反应物料期初末。吨换 kg；kWh 乘 3.6 换 MJ；液体积分体积乘实测条件密度换质量。热量按净交付焓。速率可乘时长，积分体积不再乘时间。子账不是重复交换。 | cp_material; cp_energy; cp_pack; cp_outlets | raw_exchange_vectors | epa-soap-1974 |
| calc_delivery | product | Q = 声明批群经关联退回调整后、唯一对外净交付验收的皂粉质量；同一已计物理份额再次交付不得重复。退回须冲销该物理份额原有交付确认，后续再交付仅恢复一次，不生成新产量。记录跨期更正，原交付与替换交付及其历史负荷均不得重复。保留期初 + 放行 + 物理退回 + 真实新增成品物料/水分 = 毛发运 + 期末 + 全部真实成品废物/蒸气/其他出口，区分新生产量及交付量。退回谱系未解决或 Q 非正时禁止报告。   独立保留毛G、外部退回质量及水分/干盐/状态变化；成品简式必须补真实新增物料/水分和实际蒸气/废物/其他出口，不把放行加退回强行当作湿质量不变。保留受影响历史报告原Q和分子作明确更正；再交付仅按真实验收的重新调理份额/状态恢复一次，不盲目恢复旧质量，也不生成新制造。 | cp_output; cp_balance | Q |  |
| calc_carry | all inventory rows | 各负荷向量 B_i 取完整实际期间原始负荷，加期初 WIP/成品结转负荷及尚未计入期初库存的外部退回品结转负荷，并关联前期报告更正，减期末 WIP/未交付成品结转负荷及另有依据的其他产品份额。保留的失败/零产出及不可回收损失负荷归入责任批群；包括真实返工、清洗、处理、仓储、包装、搬运及发运。物理库存账与负荷账分开；工段/仓库交接抵消，期初库存带原有负荷而非零负荷。退回品保留其历史，不重造生产。   同一逐交换期初/当期/期末核对扩展至各声明位置的WIP账外回路和设备充注；剩余存量每项真实变化均带继承向量，不只计采购支出。真实成品/返工新增投入、出口和增量服务归因果匹配净交付批群，不将旧批负荷或分母用于无关当期产出。净交付参考与毛保管卡是同一产品流转的不同核算视图，不能相加成重复产品外排。 | raw_exchange_vectors; cp_balance; cp_output; cp_energy; cp_pack; cp_outlets | B_i |  |
| calc_chemistry | all inventory rows | 由已识别且已反应的 C18 酸/NaOH 及残余分析独立确定反应进度 xi：n(生成 H2O) = xi；本路线 n(生成甘油) = 0。质量换算采用有依据摩尔质量。区分溶液带入水、残留游离水、蒸发、凝结水及有证据结构水。含 WIP/库存核对 C/H/O/Na 和完整质量。不能从未知水出口或闭合残差倒推 xi；甘油酯路线须另用方法。 | cp_balance; cp_material; cp_output; cp_outlets | independent_species_and_water_balance | us-soap-neutralisation-1983; epa-soap-1974 |
| calc_normalise | all inventory rows | 每个非参考交换在 calc_raw 和 calc_carry 后仅报告一次 B_i / Q；Q 来自 calc_delivery，不是生产放行量或干活性质量。产品输出为 1 kg。清单表达式及协议汇总描述同一报告，不是连续相除。保留全部未归一化账及换算/归属来源。 | B_i; Q; cp_output; cp_material; cp_energy; cp_pack; cp_outlets; cp_balance | normalised_inventory |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 确认实际 C18 谱、植物来源、含量基准、粉末状态及路线；仅产品名/CAS 或非水滴定不能确定完整组成。UUID 仅支持其原生身份限制；背景兼容性另判。 | 供应商 CoA/SDS、脂肪酸分析、场址路线及背景文件 |
| dq_complete | all inventory rows | 原始完整期间、失败运行、退回/返工份额、物理 WIP/成品库存及全部结转负荷向量须核对。定量使用前披露采样不确定性并解决缺失数据。 | 原始账、交接谱系、校准仪表及独立衡算 |
| dq_sources | all inventory rows | 历史 EPA/专利描述是路线证据，不是现代清单或科学批准。生产者页面不提供批次水分、包装、制造路线或气候清单。匹配实际储运条件、供应商、地点和时间。 | 一手原件、完整来源限制及实采活动记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | 要求product为唯一终端净交付参考，reference_flow_link为product，采用皂UUID、Mass/kg和1 kg；gross_dispatch是其毛保管账，不另作新增净产品输出；核验 C18 粉末限定及实际净交付门。中间皂或内部退回不能借同 UUID 成为另一参考。 |  |
| validate_accounts | all inventory rows | 要求 Q 为正、原始记录与批群匹配、WIP/成品负荷完整结转、退回去重、无重复采购且仅一次归一化。分别核验生产放行与交付，无期末库存重复输出，无仓储/包装/发运/返工负荷遗漏。   独立闭合制造、成品及合并实物/物种门、非WIP实物与继承交换存量、全部包装方向及蒸汽载水供回；毛产品保管须核对至唯一净参考，不相加成重复产品外排。核验各相态出口、原退回更正及每项真实返工新输入和损失。 |  |
| validate_chemistry | all inventory rows | 要求独立完整质量/元素及物种/水证据。拒绝通用反应水假设、甘油参考/信用、COD 或残差拟合未知出口，以及积分体积再次乘时间。核对活性、水及整份供货子账一致。 | us-soap-neutralisation-1983; epa-soap-1974 |
| validate_boundaries | all inventory rows | 核对真实原子公用工程/包装/处理/排放完整性、原生属性/单位及地理限制、供应商和来源适用性。辅助空 UUID 保持为已披露身份工作，不删除真实流。两种语言及投影均保留来源限制和库存负荷。 |  |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 此指定硬脂酸钠粉末的原料供应 |
| allowed_use | 经数据质量审查后，用于匹配组成/含量、粉末状态、路线、供应及净交付边界 |
| excluded_use | 混合皂、甘油酯路线、液体/块状/配制清洁剂、基材制品及等使用清洁比较 |
| required_metadata | 全部参考限定信息、原始期间/批群、工段/供应商连接、库存及退回谱系、分配及精确背景版本 |
| required_quality_disclosure | 实际组成/水分/含量基准、完整结转负荷、上游覆盖、损失、不确定性、待核辅助项及来源限制 |
| update_trigger | 酸谱/来源、路线、配方、粉末等级、包装、公用工程、储存、供应商或交付边界变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-soap-1974 | official_guidance | US EPA, EPA-440/1-74-018-a, April 1974, printed pp.24-29, especially p.26 and Figure 4; https://www.epa.gov/sites/default/files/2016-08/documents/soap-detergent-mfg_dd_1974.pdf | 历史美国游离脂肪酸中和与甘油酯/油脂裂解路线区分；接收/储存、循环及废水边界。不提供现代用量、排放、零废水默认值或供应商配方。 |
| us-soap-neutralisation-1983 | literature | Story and Myers / Armour-Dial, US4397760A, 1983-08-09, columns 5-10, especially equation in column 7 and powder finishing in column 8; https://patents.google.com/patent/US4397760A/en | 一手专利的反应及混合/除水描述，明确酸 + NaOH -> 皂 + 水。不移植近似水百分数、实例配方、风量或能源。实例 I 的复合添加剂/甘油不属于本未配制皂粉；不声称生产者使用此设备或由其达到本等级。 |
| sigma-s3381 | literature | Sigma-Aldrich / Merck, S3381 Sodium stearate producer page, dated reading 2026-10-16; https://www.sigmaaldrich.com/US/en/product/sigma/s3381 | 生产者一手身份：CAS822-16-2、C18 羧酸盐、>=99% 植物来源粉末；常温运输不同于 2-8C 储存。未提供实际批次水分/包装及制造路线。ester 元数据标签与显示的羧酸盐结构矛盾，不作反应依据。保留证据为网页工具呈现的一手页面，不是已下载出版者 PDF 或批次 CoA。 |
| jrc-ilcd-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 2010年3月第一版完整7.9.2–7.9.3节，印刷255–272/PDF275–292；保留适用归因情境、细分/虚拟细分、逐交换决定性物理因果、真实剩余同门实际状态市场价值及回收限制，不提供固定分配因子。 |
