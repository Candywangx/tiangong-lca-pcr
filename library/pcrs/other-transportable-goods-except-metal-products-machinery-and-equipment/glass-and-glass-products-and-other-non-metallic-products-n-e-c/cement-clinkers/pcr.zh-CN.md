---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.cement-clinkers
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 干法预热预分解硅酸盐水泥熟料

## 1. 范围与适用性

本PCR涵盖灰色硅酸盐水泥熟料，从有记录的矿物供应开始，经预均化、生料制备、悬浮预热、独立预分解、回转窑烧结、篦冷和首次质量放行。采用归因型摇篮至首次放行制造方法，另披露原批群的储存、搬运和发运服务。内容为原始工艺说明的透明技术综合，不宣称是同一SKU、工厂观测或当代订单。开采和运输作为上游清单或明确受控的前景操作，每个操作仅有一个负荷归属方。

除非另行扩展并审查，否则排除湿法、半湿法、半干法、立窑、白熟料漂白或急冷、铝酸钙及其他化学体系的熟料。排除石膏或混合材掺配、水泥终磨、水泥包装、混凝土、安装、使用、水化及碳化服务声明。冷却过程的热熟料破碎纳入；与石膏共同粉磨制水泥排除。外购成品熟料不能替代矿物至熟料制造。不将BREF窑温、能耗、料比、氧化物比例、强度或排放因子用作PCR默认值。

所选Product流原生身份为石灰石和黏土经高温窑烧结的结节状熟料，供后续水泥粉磨，在窑或厂内的生产组合。原生身份未固定强度、配方、粒径区间、供应商或地域，也未声明CAS。其矿物分类与已制造产品身份不一致；须披露该分类瑕疵，不将其当成碳酸盐原料，也不忽视一致的物理描述。该身份不代表供应商、质量或方法已获审批。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.cement-clinkers |
| classification_refs | CPC 3.0 37430；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 指定干法预热预分解和篦冷路线的灰色硅酸盐熟料；不概括全部水泥熟料 |
| excluded_products | 除非另行扩展并审查，否则排除湿法、半湿法、半干法、立窑、白熟料漂白或急冷、铝酸钙及其他化学体系的熟料。排除石膏或混合材掺配、水泥终磨、水泥包装、混凝土、安装、使用、水化及碳化服务声明。冷却过程的热熟料破碎纳入；与石膏共同粉磨制水泥排除。外购成品熟料不能替代矿物至熟料制造。不将BREF窑温、能耗、料比、氧化物比例、强度或排放因子用作PCR默认值。 |
| representative_product | 首次质量放行、符合实际制造商规范的已冷却未水化结节状硅酸盐熟料 |
| production_route | 本PCR涵盖灰色硅酸盐水泥熟料，从有记录的矿物供应开始，经预均化、生料制备、悬浮预热、独立预分解、回转窑烧结、篦冷和首次质量放行。采用归因型摇篮至首次放行制造方法，另披露原批群的储存、搬运和发运服务。内容为原始工艺说明的透明技术综合，不宣称是同一SKU、工厂观测或当代订单。开采和运输作为上游清单或明确受控的前景操作，每个操作仅有一个负荷归属方。 |
| market_state | 首次质量放行的散装熟料；实际后续包装搬运发运服务另关联原批群 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 干法预热预分解硅酸盐水泥熟料 |
| How much | 1 kg新增首次放行合格熟料的干基净质量，不含包装和自由水 |
| How well | 依据真实熟料规范、矿物相和游离氧化钙及相关实验室验收记录；不设默认强度等级、氧化物配方或试验结果 |
| How long or cycle | 一个声明的原生产批群及完整报告时段；原批群实测服务时段另列；不赋予使用寿命 |
| reference_flow_link | `clinker_first_release` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 熟料 `7d259356-1aad-44d2-8ea3-e44c8dbd986a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 灰色硅酸盐熟料体系及实际产品规范; 矿物相和氧化物分析及实际方法和相关试验龄期; 游离氧化钙及无默认限值的验收准则; 未水化结节供货状态及实测自由水分; 干法预热预分解回转窑与篦冷机配置; 矿物供应商与采石运输归属; 每种替代矿物及燃料的整份配方、状态和投加点; 化石、生物与矿物碳及实测水相; 窑与生料磨运行模式及旁路灰和窑灰内返外排路线; 场址地域及完整报告时段; 首次放行批群Q及原料在制品和存量继承负荷向量; 成品原批群服务时段及真实发运退回历史; 散装或真实熟料包装及上游归属方; 原生身份限制与未解决交换; 分配及上游数据集匹配 |

全部必需限定信息须进入数据集元数据、过程说明、参考备注或等效字段，缺失即为数据包不完整。同一原生限制适用于参考输出卡及其完整过程上下文。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `clinker_first_release` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品为1 kg熟料干基净质量；采用cp_release测量批群Q，通过calc_inventory仅归一化一次。制造Q为首次放行量，不是发运或净交付。 |
| `native_units` | all inventory rows | 各原生广延属性 | 逐行声明的kg或MJ | 保留各分子属性单位；gross质量、热能和电力各记账。电量kWh按3.6一次转为原生MJ，不要求能量使用Mass/kg，也不从次级属性反推质量密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 整份矿物燃料水公用工程辅料在披露的供方门进入，携带完整上游开采生产运输；受控采石操作明确且仅纳入一次 |
| starting_condition_role | 摇篮至首次放行制造，加独立原批群服务核算 |
| product_classification_scope | CPC 3.0:37430内较窄的真实硅酸盐熟料路线；分类不证明身份或正向映射 |
| recursive_input_rule | 真实获准用作种料或重工混配的外购熟料须有自身相容上游制造及原身份；内部熟料灰和生料转移保留历史，仅内部抵消一次，绝非另一次采购或Q |
| upstream_dataset_requirement | 逐真实供方配方路线状态地域时期匹配，且上游仅归属一次；原生流身份不证明供方工艺相容 |
| disclosure | 灰色硅酸盐熟料体系及实际产品规范; 矿物相和氧化物分析及实际方法和相关试验龄期; 游离氧化钙及无默认限值的验收准则; 未水化结节供货状态及实测自由水分; 干法预热预分解回转窑与篦冷机配置; 矿物供应商与采石运输归属; 每种替代矿物及燃料的整份配方、状态和投加点; 化石、生物与矿物碳及实测水相; 窑与生料磨运行模式及旁路灰和窑灰内返外排路线; 场址地域及完整报告时段; 首次放行批群Q及原料在制品和存量继承负荷向量; 成品原批群服务时段及真实发运退回历史; 散装或真实熟料包装及上游归属方; 原生身份限制与未解决交换; 分配及上游数据集匹配 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | 制造 | 纳入来源特定的上游开采运输、接收预均化、破碎粉磨干燥均化、燃料制备、煅烧烧结、冷却破碎、污染控制和首次熟料验收。声明外购已制备投入的边界，不重复供应方操作。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `b_quality_gate` | 首次放行及库存历史 | Q是所选批群新增且首次放行的合格熟料干基净质量之和。复验、转库、发运、成品退回和获准重工均不产生另一个Q。期末成品已属于Q，既不得扣除其制造负荷，也不得再作为一项生产输出相加。期初原料、在制品、热生料、窑皮结圈、待验熟料及未分配非在制存量须携带逐交换继承历史，并与已放行成品区分。 | `eu-jrc-clm-2013` |
| `b_all_states` | 全部运行 | 保留失败、不合格、取样熟料以及全部启停、闲置、清理、维修、旋风筒堵塞、CO跳停和零产出时段。记录实际处置、损失和处理，不假定可回收。成品重工必须有制造商或规范许可及重工后试验、验收和处置记录，不假定水硬性材料损伤可逆。Q=0时保留完整负荷账，不生成单位结果。 | `eu-jrc-clm-2013` |
| `b_dust` | 灰及替代投入 | 分别跟踪窑灰与旁路灰的内返、存量、外用和处置。内部灰及回收热空气和热量保留历史，仅在实际合并边界抵消。矿物碳酸盐CO2与每种燃料碳来源分别保留。替代原料和燃料必须有整份配方、法律状态、污染物、投加点和质量证据；供应方废物状态不自动赋予零负荷或抵扣。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `b_atomic` | 每项交换 | 每份供货制剂只按整体采购一次；含量、载水、氧化物或元素组成及低位热值作为子账。实际厂内配制则记录每种外购成分、能耗和损失。为下列未列而实际存在的每项流增设具名卡和协议，包括每种工艺化学品、燃料、排放物种、废水去向和包装组件；认定不存在需证据，未知不等于零。实物、水、气、废物和资产的gross数量不得按经济分配份额缩放。 | `eu-jrc-clm-2013` |
| `b_service` | 放行熟料服务 | 将储存、取样、搬运、条件包装、装载、受控运输和退回保留为真实增量服务，关联原批群c、原Q_c及声明的实测服务时段。成品期初期末身份及原制造负荷仅继承一次，历史负荷与新增服务负荷分开。合并门中内部Q抵消。不得按当期发运量归一化服务、以净交付替换Q，或因退回再计制造；原发运及逆转记录独立于退回湿重追溯。 期末留库成品已经执行的原批群服务仍保留，使用真实实测H_c，不假定未来服务。真实获准的放行后工作须记录新增及移出的材料/零件、新旧状态和每种新增/移出水相；维修滞留成品作为有标识的成品子状态或互斥的维修在制品只记一次。要求实际许可、工作后试验、验收和最终处置，不假定水化损伤可恢复，也不新增制造Q。 | `eu-jrc-clm-2013` |
| `b_thermal` | 条件热系统 | 内部回收冷却机和尾气热，不再计一份外购热。仅对实际交付且计量的热电出口单列，不预设热电联产、锅炉或蒸汽。实际外部蒸汽或热水系统须保留载体质量、温度压力相态、焓、作为Product交换的凝结水或液态返回，以及供方水能归属。不默认使用水密度或焓。 | `eu-jrc-clm-2013` |
| `b_assets` | 实物资产与维修 | 窑壳、冷却机、磨机及每个在装和更换部件的实物存量与当期服务负荷分开。保留新旧耐材、钢件、润滑油和维修水进出以及完整湿态期末存量。X_in与X_out只消除与其他已列流的重叠，不能消除留在存量中的真实流入。根据实测使用和有据服务历史归属内含服务，不设固定寿命或每千克熟料一整窑。 | `eu-jrc-clm-2013` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_prep` | 矿物供应与生料制备 | required | 仅真实操作及适用条件行，不存在须记录依据 | 本PCR涵盖灰色硅酸盐水泥熟料，从有记录的矿物供应开始，经预均化、生料制备、悬浮预热、独立预分解、回转窑烧结、篦冷和首次质量放行。采用归因型摇篮至首次放行制造方法，另披露原批群的储存、搬运和发运服务。内容为原始工艺说明的透明技术综合，不宣称是同一SKU、工厂观测或当代订单。开采和运输作为上游清单或明确受控的前景操作，每个操作仅有一个负荷归属方。 | 每1 kg参考流，保留批群原始总量 |
| `burn_cool` | 燃料制备、煅烧、烧结、冷却和首次放行 | required | 仅真实操作及适用条件行，不存在须记录依据 | 本PCR涵盖灰色硅酸盐水泥熟料，从有记录的矿物供应开始，经预均化、生料制备、悬浮预热、独立预分解、回转窑烧结、篦冷和首次质量放行。采用归因型摇篮至首次放行制造方法，另披露原批群的储存、搬运和发运服务。内容为原始工艺说明的透明技术综合，不宣称是同一SKU、工厂观测或当代订单。开采和运输作为上游清单或明确受控的前景操作，每个操作仅有一个负荷归属方。 | 每1 kg参考流，保留批群原始总量 |
| `fg_service` | 原批群储存搬运和发运服务 | required | 仅真实操作及适用条件行，不存在须记录依据 | 将储存、取样、搬运、条件包装、装载、受控运输和退回保留为真实增量服务，关联原批群c、原Q_c及声明的实测服务时段。成品期初期末身份及原制造负荷仅继承一次，历史负荷与新增服务负荷分开。合并门中内部Q抵消。不得按当期发运量归一化服务、以净交付替换Q，或因退回再计制造；原发运及逆转记录独立于退回湿重追溯。 | 每1 kg参考流，保留批群原始总量 |

卡片为初始原子清单，并非穷尽物种列表；每过程继承第5节完整边界规则。公共服务燃料空气投入按实测归属实际过程；内部生料、热生料、冷却空气及返灰携带完整历史转移，不重复列成外部卡。条件交换需真实存在证据，实际缺列交换逐一增卡，不用other、未知零值或集合UUID替代。

### 过程：矿物供应与生料制备 (`raw_prep`)

#### 输入

##### 产品流

###### 石灰石 (`limestone`)

整份石灰石矿物供货。原生Product/Mass身份未特指组成、纯度、品级、开采路线和供方；实测碳酸盐矿物相及自由水分，区分供方破碎与现场作业。不得用纯碳酸钙或CAS硬冲突身份替代。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 黏土 (`clay`)

矿区供货的天然细粒含水铝硅酸盐黏土。记录矿物学、碳酸盐和有机物，并分别测量自由水与结构水。本身份不是煅烧黏土、熟料或已制造陶瓷。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：黏土 `226972bf-eeed-4ec4-a22e-f227e582ca18`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 石英 (`quartz`)

仅在实际使用时纳入整份石英校正原料，厂内配料投入。原生同义词含二氧化硅、硅砂和石英砂；品级、粒径及供方仍须核对。不得替换为方石英、无定形二氧化硅、处理复合料或自然资源开采流。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：石英 `ddee14c5-2a28-4224-9b84-68dc5956972f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 铁矿石 (`iron_ore`)

实际存在时纳入整份铁矿石校正供货，为机械开采运输的消费混合。原生美国钢铁业统计仅作背景，不指定供方地域或水泥配方。匹配实际矿物含量及供方边界，不是纯Fe2O3、生铁、氧化铁皮或废渣。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：铁矿石 `961fd7b3-4d9f-41bc-b703-44cdc4151a4f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 煤粉煤灰 (`fly_ash`)

仅在实际作为窑矿物原料时纳入独立供货粉煤灰，不作为成品水泥掺合料；明确进厂Product或Waste状态、预处理及上游分配。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：煤粉煤灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 粒化高炉矿渣 (`slag`)

仅在烧成前作实际矿物替代时纳入；核对形态状态及上游历史，熟料放行后掺配矿渣属于水泥制造，排除。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：粒化高炉矿渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 交流电 (`raw_prep_electricity`)

独立计量本过程电力，包括风机、输送、控制、除尘及真实闲置启停需求。原生Product为中国1–35 kV电网平均用户侧消费组合，仅适用于相容的中国中压供电，并须核对地区时段供方；其他电源另增卡。原生参考属性为以MJ计的净热值，实测kWh按3.6 MJ/kWh转换一次，不转为燃料质量或重复现场发电。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 自来水 (`raw_water`)

实际生料磨调质或抑尘自来水投入；原料自由水已包含在整份矿物供货中，不再在此采购。 原生Product/Mass自来水身份不保证品级、地域或处理工艺，须核对真实供水并仅计一次上游供水服务。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：燃料制备、煅烧、烧结、冷却和首次放行 (`burn_cool`)

#### 输入

##### 产品流

###### 交流电 (`burn_cool_electricity`)

独立计量本过程电力，包括风机、输送、控制、除尘及真实闲置启停需求。原生Product为中国1–35 kV电网平均用户侧消费组合，仅适用于相容的中国中压供电，并须核对地区时段供方；其他电源另增卡。原生参考属性为以MJ计的净热值，实测kWh按3.6 MJ/kWh转换一次，不转为燃料质量或重复现场发电。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 硬煤 (`hard_coal`)

记录厂内干燥粉磨前整份实际外购硬煤；窑、分解炉和干燥器用量分别记录，并测水分、灰分、低位热值及化石碳。若外购已制备煤粉则明确移动供方边界，不再同时采购原煤和煤粉。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：硬煤
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 石油焦 (`petcoke`)

仅在实际使用时单独制备和计量，采用其自身灰分、硫、碳和低位热值。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：石油焦
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 柴油 (`diesel`)

仅在实际启窑或移动设备用油时纳入，拆分使用地点及实测性质，包含失败启停。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：柴油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 天然气 (`gas`)

仅在实际管道燃料存在时纳入；保留累计体积或真实速率序列、基准温压及压缩性、实测组成与该气体密度低位热值。不得替换为纯甲烷或水密度。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 自来水 (`spray_water`)

仅在实际安装时记录尾气调质、旁路和冷却补充自来水；区分喷雾蒸发、冷却液存量、排污和对外返回。干法熟料不意味着零用水，也不强制白熟料急冷。 原生Product/Mass自来水身份不保证品级、地域或处理工艺，须核对真实供水并仅计一次上游供水服务。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 镁质尖晶石耐火砖 (`refractory`)

实际存在时记录真实衬砖品级；新旧在装备用、拆除、磨损进入熟料或灰及废砖分别保留。整砖供货不再按MgO和尖晶石分析量重复采购。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：镁质尖晶石耐火砖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 铸钢熟料冷却机篦板 (`grate_plate`)

记录真实新旧更换篦板实物存量和磨损、服务历史及维修作业。不为每千克计一整台冷却机或任意寿命因子。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：铸钢熟料冷却机篦板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 矿物润滑油 (`lubricant`)

整份实际供货润滑油配方，实测新旧存量、在装液、泄漏及废油；外购配方不另采购基础油及添加剂。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：矿物润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚酯除尘滤袋 (`filter_bag`)

仅在实际为聚酯滤袋时纳入整份供货结构，不代表所有除尘技术。其他实际滤材另增卡；附着灰与滤袋本体质量分开。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 氨水 (`ammonia_solution`)

仅在实际安装SNCR时纳入试剂，整份溶液只采购一次，浓度及载水为子账，分别求解蒸发、反应氮及氨逃逸。不因存在NOx就预设氨水系统。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：氨水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 水蒸汽 (`steam_in`)

仅在真实外部蒸汽存在时纳入；记录载体kg及独立焓MJ、真实压力温度相态、供方约定和实测返回。不预设锅炉或重复采购热。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：水蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 废物流

###### 废轮胎破碎燃料 (`tyre_fuel`)

条件纳入一整份交付的轮胎燃料，包括橡胶钢丝纺织组分，组成和水分为子账；保留真实废物状态、允许投加点及熟料质量证据。只接收一次；入熟料的灰分不是另一次原生矿物采购，生物碳须实测而非假定。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废轮胎破碎燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 基本流

###### 大气分子氧 (`o2_in`)

根据实测gross空气体积、组成、湿度及独立状态特定气体换算求解本物种。区分贯通与反应消耗；不得在子物种之外再加空气总量或使用瓶装工业气体Product身份。 CAS 7782-44-7，原生Elementary为空气可再生元素资源。仅用于实测大气分子O2，液氧瓶装气同义词不代表外购氧气供货。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 大气氩 (`ar_in`)

根据实测gross空气体积、组成、湿度及独立状态特定气体换算求解本物种。区分贯通与反应消耗；不得在子物种之外再加空气总量或使用瓶装工业气体Product身份。 CAS 7440-37-1，原生Elementary为空气可再生元素资源，以Mass计量；仅大气元素Ar。原生(41Ar)别名存在歧义，不授权放射性氩-41或活度交换。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 大气二氧化碳 (`air_co2_in`)

根据实测gross空气体积、组成、湿度及独立状态特定气体换算求解本物种。区分贯通与反应消耗；不得在子物种之外再加空气总量或使用瓶装工业气体Product身份。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：大气二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 大气水蒸气 (`humidity_in`)

根据实测gross空气体积、组成、湿度及独立状态特定气体换算求解本物种。区分贯通与反应消耗；不得在子物种之外再加空气总量或使用瓶装工业气体Product身份。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：大气水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 二氮 (`n2_in`)

大气N2资源投入，CAS 7727-37-9，来自空气的可再生元素资源；不是液氮、外购氮气或空气排放行。采集入口gross组分质量，进入物种账，不再采购空气总量。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

#### 输出

##### 产品流

###### 熟料 (`clinker_first_release`)

所选Product流原生身份为石灰石和黏土经高温窑烧结的结节状熟料，供后续水泥粉磨，在窑或厂内的生产组合。原生身份未固定强度、配方、粒径区间、供应商或地域，也未声明CAS。其矿物分类与已制造产品身份不一致；须披露该分类瑕疵，不将其当成碳酸盐原料，也不忽视一致的物理描述。该身份不代表供应商、质量或方法已获审批。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：熟料 `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 液态凝结水返回 (`condensate_return`)

仅纳入供方约定下真实对外返回的凝结水载体，实测温度相态焓及独立质量。属于Product返回，不默认成废水或蒸汽抵扣。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：液态凝结水返回
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 废物流

###### 外排水泥窑灰 (`ckd_export`)

仅外部排弃部分；实测湿干质量、碳酸盐和已煅烧相及处理去向。内返和保留窑灰存量单独记账，不重复外排。销售不自动移除负荷。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：外排水泥窑灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 外排含氯窑旁路灰 (`bypass_dust`)

仅在旁路实际外排时纳入；与窑灰、粉煤灰和烟囱颗粒区分，分别保留内返、存量、外用处置及携带水；不设固定旁路率。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：外排含氯窑旁路灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 报废硅酸盐熟料 (`failed_clinker`)

实际离开制造的报废、不合格及样品材料，不是新增合格熟料。失败批负荷和处理保留归属，任何重处理须有许可及后验依据。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：报废硅酸盐熟料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废镁质尖晶石耐火砖 (`spent_refractory`)

实际拆除废耐材；独立称量附着窑料及水并各计一次；进入熟料或灰的磨损不再作为本项外送。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废镁质尖晶石耐火砖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废铸钢篦板 (`steel_scrap`)

实际磨损或报废篦板对外废料，保留水分污染子账及制造维修负荷。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废铸钢篦板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废矿物润滑油 (`spent_oil`)

实际整份废油包含所带污染物及水；独立相与处理拆分，不因回收扣除制造负荷。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废矿物润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废聚酯除尘滤袋 (`spent_filter`)

实际废弃滤袋本体，附带灰水独立核算，不重复采购或外排。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 窑系统含水清理废液 (`kiln_wastewater`)

仅对真实外送处理的整份含水废液纳入。分别保留液体质量、溶解悬浮物种及水；COD或总金属不能充当具体化合物质量。其他实际去向另行增卡。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：窑系统含水清理废液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 基本流

###### 二氧化碳（化石源） (`co2_mineral`)

仅地质碳酸盐分解CO2，CAS 124-38-9，采用原生非长期、未细分空气介质的Elementary身份，代表真实空气排放。独立核对矿物碳、灰和存量碳酸盐及未完全分解，不默认CaO比例或将烧失量全部当CO2。本卡排除燃料CO2及贯通环境CO2。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。  原生化石源标签在此作为非生物/地质碳的清单映射约定，不表示碳酸盐碳来自燃料。保留真实矿物碳归属及独立地质来源子账；使用前记录所选LCI/LCIA约定，若该约定另分地质CO2则选择其他相容身份。ILCD第7.4.3.6.4节说明化石源标签并非仅限燃料燃烧，但未提供碳酸盐因子或明确的普适地质来源映射。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 二氧化碳（化石源） (`co2_fuel`)

仅化石燃料和有机进料CO2，CAS 124-38-9，为无长期限定的未细分空气Elementary排放。保留每种燃料碳及低位热值基础，以及CO、CH4和未燃碳子账；化石贡献只汇总一次，不重复烟囱总量、矿物碳或环境贯通。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 水蒸气 (`water_vapour`)

CAS 7732-18-5，原生为未细分空气Elementary排放，不是同名淡水、海水、土壤、长期或平流层记录。根据独立证据分别核算蒸发自由水和载水、矿物脱水、燃烧反应水与入口湿度；保留剩余液相和结构水。不得用一个残差同时拟合水与CO2。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 二氮 (`n2_out`)

CAS 7727-37-9，为未细分空气Elementary排放，分别核对gross N2外出和化学转化氮及实测投入。不得把总氮或NOx称为N2，不同时计烟气总量及组分。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 二氧化硫 (`so2`)

CAS 7446-09-5，为无长期限定的未细分空气Elementary排放。采用真实SO2物种监测，总硫或SOx不能证明SO2质量。熟料灰中留存硫及其他硫物种分别保留。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的分子氧 (`o2_out`)

未反应分子O2，不是需氧量或氧化物含氧子账。 CAS 7782-44-7，原生Elementary为无长期限定的未细分空气排放；仅真实分子O2，不是氧化物含氧或需氧量。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的氩 (`ar_out`)

真实贯通Ar，与N2分开，不默认固定大气组成。 CAS 7440-37-1，原生Elementary为无长期限定的未细分空气排放，仅Mass。含歧义的(41Ar)别名不授权放射性氩-41，只用于真实贯通大气Ar。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 贯通大气二氧化碳 (`ambient_co2_out`)

仅独立求解入口环境CO2的空气返回，单独平衡，不冒称新增矿物或燃料CO2。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：贯通大气二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的生物源二氧化碳 (`co2_bio`)

仅实际燃料进料有据且测得生物碳转化时纳入，不自动假定碳中和或避免排放抵扣。 CAS 124-38-9，原生Elementary为未细分空气排放，不是室内、长期、延迟修正或化石身份。原生干冰离子别名不授权固体或离子交换，须有真实分子气态和生物来源依据。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的一氧化碳 (`co`)

真实分子CO，区分燃料未完全燃烧及原料有机碳，不绑定外购气体Product记录。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：向空气排出的一氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的一氧化氮 (`no`)

仅独立测得物种的分子NO，以NO2当量表示的NOx不是NO质量。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的二氧化氮 (`no2`)

仅独立物种证据支持的分子NO2；NOx按NO2当量为指标，一氧化二氮属于不同CAS。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的一氧化二氮 (`n2o`)

仅真实N2O存在时纳入；排除延迟排放修正、室内空气及外购气体身份。 CAS 10024-97-2，原生Elementary为未细分空气排放，无长期或延迟修正限定。压缩冷冻同义词不代表外购气体Product；N2O不是NO、NO2或NOx。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的化石甲烷 (`methane`)

仅真实燃料损失或未完全燃烧的化石CH4存在时纳入；总有机碳或VOC不是CH4。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的氨 (`nh3`)

仅实际处理系统逃逸或其他有据来源的分子NH3存在时纳入，不代表总氮。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的氯化氢 (`hcl`)

仅控制后实际HCl气体存在时纳入；矿物灰中的氯离子是另一相，不是同一分子交换。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 向空气排出的氟化氢 (`hf`)

仅物种证据支持的真实HF气体存在时纳入，不等于总氟。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。 原生为普通分子、非长期未细分空气排放身份；核对真实化学物种、来源及接收空气介质。离子/同位素或其他物种的噪声别名不允许替代为HNO、N2O4、炭黑、石墨、汇总NOx/VOC或溶液，不提供数量或排放因子。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 空气排放的硅酸盐熟料矿物颗粒 (`clinker_pm`)

仅实际夹带熟料物质且有实测粒径、采集方法和矿物身份时纳入。不重叠粒径段另增卡，PM总量与其子集不得相加，也不得改名纯SiO2。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：空气排放的硅酸盐熟料矿物颗粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_species 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

### 过程：原批群储存搬运和发运服务 (`fg_service`)

#### 输入

##### 产品流

###### 交流电 (`fg_service_electricity`)

独立计量本过程电力，包括风机、输送、控制、除尘及真实闲置启停需求。原生Product为中国1–35 kV电网平均用户侧消费组合，仅适用于相容的中国中压供电，并须核对地区时段供方；其他电源另增卡。原生参考属性为以MJ计的净热值，实测kWh按3.6 MJ/kWh转换一次，不转为燃料质量或重复现场发电。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_energy 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 自来水 (`service_water`)

实际清理维修自来水关联原成品服务批群；保留进入湿态期末存量的新增水和独立外出水相。 原生Product/Mass自来水身份不保证品级、地域或处理工艺，须核对真实供水并仅计一次上游供水服务。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚丙烯编织熟料袋 (`pp_sack`)

本卡仅为采购实物P，包含单独识别的付费捆绑供货包装。首次非采购外部流入I与外部退回接收ER分别列卡，不在本卡合计，也不另计供方采购。仅实际熟料包装存在时纳入，不预设水泥包装。首次非采购外部流入仍是真实实物接收且仅有一个上游归属方；新增供应与外部退回接收分开。遵循完整六gross项包装平衡，包含空包、附着在制品和成品及周转存量、独立维修材料和水、真实皮重及全部gross移动。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚乙烯缠绕膜 (`pe_film`)

本卡仅为采购实物P，包含单独识别的付费捆绑供货包装。首次非采购外部流入I与外部退回接收ER分别列卡，不在本卡合计，也不另计供方采购。仅实际熟料包装存在时纳入，不预设水泥包装。首次非采购外部流入仍是真实实物接收且仅有一个上游归属方；新增供应与外部退回接收分开。遵循完整六gross项包装平衡，包含空包、附着在制品和成品及周转存量、独立维修材料和水、真实皮重及全部gross移动。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 木质运输托盘 (`wood_pallet`)

本卡仅为采购实物P，包含单独识别的付费捆绑供货包装。首次非采购外部流入I与外部退回接收ER分别列卡，不在本卡合计，也不另计供方采购。仅实际熟料包装存在时纳入，不预设水泥包装。首次非采购外部流入仍是真实实物接收且仅有一个上游归属方；新增供应与外部退回接收分开。遵循完整六gross项包装平衡，包含空包、附着在制品和成品及周转存量、独立维修材料和水、真实皮重及全部gross移动。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 熟料 (`returned_clinker`)

原发运后真实gross退回R，仅限仍为同一未水化结节熟料身份时采用。追溯原批群、原发运逆转及一次原制造继承，退回湿重独立测量，不据此定义原交付重量或新Q。保留全部新增水、损失及真实获准重工试验处置；变性水化废品须另用自身具体材料身份，不用本UUID。所选Product流原生身份为石灰石和黏土经高温窑烧结的结节状熟料，供后续水泥粉磨，在窑或厂内的生产组合。原生身份未固定强度、配方、粒径区间、供应商或地域，也未声明CAS。其矿物分类与已制造产品身份不一致；须披露该分类瑕疵，不将其当成碳酸盐原料，也不忽视一致的物理描述。该身份不代表供应商、质量或方法已获审批。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：熟料 `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_release 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚丙烯编织熟料袋 I (`pp_sack_included_ingress`)

仅真实首次非采购外部实物流入I，无论随供方进入或以其他方式接收，均与付费采购P（含付费捆绑供货）及外部退回ER互斥；整湿内容一次、一个上游所有者，不新增采购。原先外送的同一包装件退回归ER，不归I。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚丙烯编织熟料袋 ER (`pp_sack_external_return_received`)

仅原先外送的同一包装件实际外部退回接收ER，追溯原发运/所有者及实测湿状态；不是内复用、新采购或负发运。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚乙烯缠绕膜 I (`pe_film_included_ingress`)

仅真实首次非采购外部实物流入I，无论随供方进入或以其他方式接收，均与付费采购P（含付费捆绑供货）及外部退回ER互斥；整湿内容一次、一个上游所有者，不新增采购。原先外送的同一包装件退回归ER，不归I。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚乙烯缠绕膜 ER (`pe_film_external_return_received`)

仅原先外送的同一包装件实际外部退回接收ER，追溯原发运/所有者及实测湿状态；不是内复用、新采购或负发运。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 木质运输托盘 I (`wood_pallet_included_ingress`)

仅真实首次非采购外部实物流入I，无论随供方进入或以其他方式接收，均与付费采购P（含付费捆绑供货）及外部退回ER互斥；整湿内容一次、一个上游所有者，不新增采购。原先外送的同一包装件退回归ER，不归I。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 木质运输托盘 ER (`wood_pallet_external_return_received`)

仅原先外送的同一包装件实际外部退回接收ER，追溯原发运/所有者及实测湿状态；不是内复用、新采购或负发运。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 实际包装维修木料 (`pack_repair_wood`)

仅实际包装维修另供的替换木料/木板，不是整托盘或假定配方。记录木种、处理、干物质、游离/吸附水、保管归属及唯一所有者；实际其他紧固件/胶逐项另列。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：实际包装维修木料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 自来水 (`pack_repair_water`)

仅包装清洗/维修真实供入自来水，记录真实状态与供方，不假定熟料水化；已含于service_water总表时仅留互斥用途来源子账，不另叠交换/采购。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 废物流

###### 退回的水化损伤硅酸盐熟料 (`hydrated_clinker_return`)

仅在真实退回水化损伤材料存在时纳入，保留整份湿重、原批群发运继承负荷、相态水分变化、损失及处理。不是合格熟料或新Q，也不假定重新粉磨可恢复；任何重工须有真实制造商规范许可及后验收。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：退回的水化损伤硅酸盐熟料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_release 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 基本流

###### 进入包装的环境水蒸气 (`pack_humidity_in`)

原H_c内普通储存/搬运或实际作业中环境空气普通H2O蒸气进入包装的独立实测量，记录真实相态/状态和库存变化；不要求维修事件，不假湿度或密度。不是外购水或整湿件已含水。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：进入包装的环境水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

#### 输出

##### 产品流

###### 聚丙烯编织熟料袋 (`pp_sack_out`)

本卡仅为随货完整实物毛发运S，含后来退回的发运；对外空包返还EO另列卡，不包含在本卡。不得计入产品净Q、再采购或自动共产品，内部复用仅在内部抵消。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚乙烯缠绕膜 (`pe_film_out`)

本卡仅为随货完整实物毛发运S，含后来退回的发运；对外空包返还EO另列卡，不包含在本卡。不得计入产品净Q、再采购或自动共产品，内部复用仅在内部抵消。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 木质运输托盘 (`wood_pallet_out`)

本卡仅为随货完整实物毛发运S，含后来退回的发运；对外空包返还EO另列卡，不包含在本卡。不得计入产品净Q、再采购或自动共产品，内部复用仅在内部抵消。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 熟料 (`released_clinker_dispatch`)

已首次放行、未水化结节状灰色硅酸盐熟料的真实gross发运G，关联原批群Q_c及实测服务时段。本项为服务门实物出口，不是新增制造或额外参考Q。分别记录干物质、真实自由水分、gross交付及原发运逆转标识；合并时首次放行内部转移抵消一次。所选Product流原生身份为石灰石和黏土经高温窑烧结的结节状熟料，供后续水泥粉磨，在窑或厂内的生产组合。原生身份未固定强度、配方、粒径区间、供应商或地域，也未声明CAS。其矿物分类与已制造产品身份不一致；须披露该分类瑕疵，不将其当成碳酸盐原料，也不忽视一致的物理描述。该身份不代表供应商、质量或方法已获审批。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：熟料 `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_release 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚丙烯编织熟料袋 EO (`pp_sack_external_return_out`)

仅实际包装对外返还EO，区别S、Waste和内复用；保留实测毛湿量及原Q_c/H_c，不另采购/信用。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 聚乙烯缠绕膜 EO (`pe_film_external_return_out`)

仅实际包装对外返还EO，区别S、Waste和内复用；保留实测毛湿量及原Q_c/H_c，不另采购/信用。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 木质运输托盘 EO (`wood_pallet_external_return_out`)

仅实际包装对外返还EO，区别S、Waste和内复用；保留实测毛湿量及原Q_c/H_c，不另采购/信用。仅实际熟料包装，不因成品水泥袋或散装熟料推定存在；内含料水一次，须真实相容构造和供方。

- 选定流：木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 废物流

###### 废聚丙烯编织熟料袋 (`pp_sack_waste`)

实际废弃的该单种包装材料，附带水料独立跟踪，保留处理及一次负荷归属。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废聚丙烯编织熟料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废聚乙烯缠绕膜 (`pe_film_waste`)

实际废弃的该单种包装材料，附带水料独立跟踪，保留处理及一次负荷归属。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 废木质运输托盘 (`wood_pallet_waste`)

实际废弃的该单种包装材料，附带水料独立跟踪，保留处理及一次负荷归属。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：废木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 已放行后废弃的硅酸盐熟料 (`fg_loss`)

真实放行后破损、取样及损失归属原批群服务，不逆转Q或删除原制造。保留变化水态、获准重工试验及最终去向。 数量仅采用第8节calc_inventory的同一次批群归一化，原始记录和gross实物数量保持未归一化。

- 选定流：已放行后废弃的硅酸盐熟料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_raw 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 拆除包装维修木料 (`pack_removed_wood`)

仅包装维修真实拆除旧木料/部件，独立测干物质/水/污染及去向；不重复整托盘W出口，不自动负荷外转/信用。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：拆除包装维修木料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### 实际包装清洗废水 (`pack_repair_wastewater`)

实际独立收集的包装清洗/维修废水，测整湿质量、载水及溶解/悬浮物，记录处理与保管归属；不是直接环境淡水或COD分子，也非留存水或蒸气。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：实际包装清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### 基本流

###### 水蒸气 (`pack_water_vapour`)

仅原H_c内普通储存/搬运解吸或蒸发及真实清洗/维修/干燥向实际未指定空气排放的普通分子气态H2O CAS7732-18-5，无需维修事件。区分入空气湿度、滞留液态/结合水及废水；不代重水/同位素/冰/醚或液态。原生Mass/kg，不假蒸发比例。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的数量引用第8节同一次批群计算；cp_pack 保留原始记录；所有gross实物账独立保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack
- 来源：`eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_scope` | 归因清单 | 仅在ILCD需分配的归因场景使用该层级。先归属专属过程和可唯一追溯交换，再依据可靠工艺证据进行物理或虚拟细分。不强制进行无必要的分配。 | `ec-jrc-ilcd-2010` |
| `a_causality` | 剩余多功能交换 | 对每项剩余交换识别其与实际共功能间的决定性物理因果关系。质量、能量或其他物理比例仅在决定该交换时适用，不能因相关性而使用方便的全厂统一物理比例。保留驱动因素、测量、受影响流及敏感性。 | `ec-jrc-ilcd-2010` |
| `a_residual` | 真实未归属剩余 | 只有在专属归属、细分及因果方法用尽后，真实共同剩余才可采用实际共功能在相同共同过程门、真实状态下有据的同期市场价值。记录数量、价格基础、合同、时期、水分质量、门、剩余流集及理由，缺失价值保持未解决。不得将专属后处理或下游运输价格混入该比例；不得任意在物理与经济规则间选择或编造份额。 | `ec-jrc-ilcd-2010` |
| `a_waste` | 灰废物及外售 | 普通制造废物、不合格或破损熟料、样品及其处理，即使外送或出售也保留其造成的制造负荷。仅真实独立的其他共功能或批群及正当的一次性负荷转移决定，才可转移交换向量；完整gross实物流始终保留。收入、废物状态或外部回收本身均不消除制造负荷或赋予避免生产抵扣。 | `ec-jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 制造门

制造门将期初原料、在制品和未分配存量、独立完整湿态在装和备用实物资产存量及每项真实外部gross湿态物料空气投入，与期末同类存量、独立完整湿态在装和备用实物资产存量、首次放行实物熟料、未放行损失废物及各真实气液固出口核对。首次放行实物熟料为Q加独立实测自由水，不能为Q再加期末成品。热生料、窑皮结圈和灰存量保留真实状态；热MJ和电力不是实物kg。

### 成品与合并门

成品服务门：期初湿态成品加真实首次放行转入、gross退回实物和其他真实服务材料水流入，等于期末湿态成品加gross发运、对外退回、真实损失废物及各真实水气出口。退回湿重不必等于原交付重量。合并实物门中首次放行等成对内部转移仅抵消一次，保留成品及在装备用资产期初期末湿态存量和所有对外gross项。Ca、Si、Al、Fe、C、H、O、S、Cl及其他实测相关元素独立于总质量进行平衡，不得用一个残差求解两个未知物种或相态。

### 负荷向量

对每个原批群c及交换i，继承B_open_ic并加真实新增归属负荷；只扣除原料、在制品及未分配非在制存量中的B_close_ic，以及对其他功能批群有独立正当依据的转移。已放行期末成品绝不计入制造B_close。逐交换保留继承数量、原生单位、上游数据集、水分组成状态、前序处理及分配历史。普通废物处理和所有失败保留于制造。资产实物存量另记，仅有据的当期资产服务进入负荷分子。服务A_ic仅含真实增量服务及未完成服务继承，不再复制已制造成品。交换索引i还保留原来源过程、载体、路径及介质，继承的上游供方负荷不能改称直接窑排放，也不能在已归属该负荷的供方模型之外再加一次。

### 包装六gross项

对每种实际包装j：P_open_j + P_new_j + P_external_return_received_j = P_close_j + P_gross_shipped_j + P_external_return_out_j + P_waste_j，独立维修材料和维修水进出须明确另加。P_open和P_close各包含空包装、附着在制品、附着成品及周转存量；P_new包含供应商已含包装流入，上游负荷仅归属一次。六项移动类别为采购P（含付费捆绑供货）、首次非采购外部流入I、外退接收ER、随gross发运外出S、对外返回EO及废弃W；期初与期末均为存量，P_new汇总互斥的P和I接收。内部复用抵消，X_in和X_out只消除其他流项重叠，不得因真实流入留在湿态期末存量而取消该流入，实物各项不得按经济份额缩放。

### 独立换算及反应证据

先将原始数量和速率转为该交换原生广延属性，再进行真实分配。真实速率只对时间积分一次，累计气液体积不再乘时间。密度及气体状态压缩性须为该物质独立测量。保留化石、生物和地质碳来源；分别记录自由水、载水、矿物结构脱水、反应水、留存液相、水蒸气及实测水化变化。氧化物分析、烧失量、COD、总碳、VOC、NOx和总金属是指标，不是唯一分子物种。采用真实反应相态证据和完整气体组分平衡，不默认将未知混合物按化学计量转换。

协议仅采集未归一化原始记录并汇总原始总量；aggregation_rule单元格标明最终基准，仅引用在原始单位换算和真实分配之后的calc_inventory，不在采集或汇总时执行除法。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | burn_cool | 首次放行批群 | foreground_record | 实际过程; 批群; 首次验收记录; 湿态净质量; 皮重; 自由水分; 干基Q; 试验; 原料在制品及存量期初期末; 历史向量; 失败; 样品; 重工许可; 后验试验; 处置; gross发运退回; 原发运逆转标识; 真实实测H_c; 留库成品已执行服务; 维修成品子状态与互斥维修在制品; 真实新增/移出材料零件及新旧状态; 新增/移出自由水结构水反应水; 许可; 工作后验收或拒收及去向 ; 实际作业授权/状态与发生分开；未批准/未授权/失败/拒收作业；实际流和负荷捕获；制造商/规范许可；后检验；验收/处置 | 使用校准秤和称重给料机、核对存量调查、产品特定水分相态试验及首次放行许可。每批群只追溯一次，服务采集原批群Q，退回湿态变化另记。  首次放行制造Q包含期末成品，全部失败负荷保留。已执行服务追溯原Q_c和H_c，独立称量维修输入、移出及所有受影响湿态存量，不假定受损熟料可恢复。 负荷库存公式不赋予仅属保管移动的毛实物卡分子；该实物视图依calc_inventory使用完整实测V。每个实际制造或首放后作业，无论已授权、未批准、未授权、失败或拒收，均保留真实材料/水/能源、排放、废物、保管归属及负荷。制造商/规范许可和作业后检测只决定授权及身份/质量继续合格，不得抹除实际流或负荷。保留原Q_c/H_c和真实验收/处置，不假定水化/受损熟料恢复。未来未执行作业保持未知，仅未使用未分配库存可结转。 | kg | 逐批、计量间隔及存量边界 | 完整批群及全部失败零产出时段；原服务时段另列 | 声明窑线及适用的raw_prep、burn_cool和fg_service、真实供方门及原批群。process_id标识归口窑系统，raw_fields另行保留实际过程。 | 每参考流 | 校准、原始记录、组成相态试验、完整核对及上游归属 |
| `cp_raw` | burn_cool | 原子材料及存量 | foreground_record | 实际过程; row_id; 供方; 整份配方; 原始数量单位; 湿干状态; 组成; 原料在制品非在制品成品资产期初期末; 新旧状态; 水相; 继承向量; 真实进出; 处理; 归属; 分配; 独立X重叠依据; gross收货与已校正净耗用标识及既往存量校正; 每个继承交换向量; 真实新旧维修增补及移出材料零件; 独立水相与维修在制品保管 | 逐具名实物和对外废物分别称重，核对发票、配方、存量调查、维修记录及真实去向。保留供应商已含包装和水分子账，不重复上游采购。  区分资产实物采购与归属服务，保留各存量数量及继承交换历史。已测净耗用不重复做存量校正，普通废弃或售出材料不自动扣除其制造负荷。 | kg | 逐批、计量间隔及存量边界 | 完整批群及全部失败零产出时段；原服务时段另列 | 声明窑线及适用的raw_prep、burn_cool和fg_service、真实供方门及原批群。process_id标识归口窑系统，raw_fields另行保留实际过程。 | 每参考流 | 校准、原始记录、组成相态试验、完整核对及上游归属 |
| `cp_energy` | burn_cool | 电力及每种燃料 | foreground_record | 实际过程; row_id; 过程模式; 计量间隔; 原始kWh; 燃料原始质量体积速率; 状态; 密度; 低位热值; 化石生物碳; 灰分; 水分; 运行闲置零产出时数; 供方; gross载体质量; 焓; 进出口; 原始单位; 上游归属 ; 热载体供入/返还毛V；独立kg/状态/焓及热MJ；原Q_c；单一供方约定与返还归属 | 保留校准分时表读数及每种燃料称重体积记录，逐供货分析。载体质量与热能分开；外购电、现场发电及回收热仅有一次上游归属，不重复燃料或供方负荷。 仅作保管移动的毛量例外亦涵盖每个实际外部热载体供入及产品凝结水/热水返还，包括steam_in与condensate_return：A_ic为真实原生单位/状态下完整实测毛腿V，不是B_open+U-B_close、继承负荷之和、净消耗或经济/服务份额。载体kg、相态/T/P/焓基准与真实热MJ独立，仍只用本原Q_c商一次。另列应归供应/运行/处理/服务向量只有一个实际供方所有者；返还或质量/热两维度本身不另建采购、供方或自动信用。内循环仅在匹配内部接口抵消。 | kWh; MJ; kg; m3 | 逐批、计量间隔及存量边界 | 完整批群及全部失败零产出时段；原服务时段另列 | 声明窑线及适用的raw_prep、burn_cool和fg_service、真实供方门及原批群。process_id标识归口窑系统，raw_fields另行保留实际过程。 | 每参考流 | 校准、原始记录、组成相态试验、完整核对及上游归属 |
| `cp_species` | burn_cool | 真实气体及水相物种 | foreground_record | 实际过程; 物种; 有效CAS; 进出; 入口烟囱逸散介质; 原始浓度及基础; 干湿气流量; 累计或速率标识; 时段; 氧校正; 温压; 湿度; 物种分析; 检出限; 矿物燃料碳; 灰尘存量相态; 空气组分总量; 反应依据 | 使用校准监测及独立物料相态分析；保留旁路、生料磨开停及冷却机等全部运行状态与气路。NOx、VOC和COD指标独立保留，直至获得真实分子身份质量，不得用一个质量残差求两个未知。 | kg; original concentration; m3; time | 逐批、计量间隔及存量边界 | 完整批群及全部失败零产出时段；原服务时段另列 | 声明窑线及适用的raw_prep、burn_cool和fg_service、真实供方门及原批群。process_id标识归口窑系统，raw_fields另行保留实际过程。 | 每参考流 | 校准、原始记录、组成相态试验、完整核对及上游归属 |
| `cp_pack` | fg_service | 每种真实包装材料 | foreground_record | 实际过程; 材料j; 空包附着在制品成品周转期初期末; 新增接收; 供方已含接收归属; 外退接收; gross发运; 对外返回; 废弃; 维修材料水进出; X重叠; 实测皮重; 原批群及服务时段; 分开的P_purchase_j与I_supplier_j; 未由其他流项表示的维修材料及水X_in_j/X_out_j; 同方向精确重叠依据; 独立完整湿态存量 ; 精确P/I/ER/S/EO/W卡及方向；整件/组件边界；匹配内部转移；每池W来源与实际收集总量；普通吸湿释湿；真实新增/拆除木料与各水相；总表/出口重叠；原Q_c/H_c | 逐真实包装类型称重，核对全部六gross项及湿态存量，保留退回发运维修记录。供方已含包装仍保留实物流入及一次上游归属，内部复用不是新增采购。  采购P（含付费捆绑供货）与首次非采购外部流入I互斥，每份完整湿态包装仅有一次上游归属。六移动项为P/I/ER/S/EO/W，不包含期初期末存量。X仅与其他流项已表示的同种材料或水消除重叠，绝不与存量抵消；留库真实流入和完整湿态期末存量同时保留。 普通储存/搬运吸湿与解吸/蒸发无需维修事件。X仅去重同侧另一实际FLOW项已含量，不针对库存、反向流或仅因原子卡存在；真实留库入流与完整期末湿库存两者均保留。整份制品内置内衬/缝线/胶/印刷及水仅一次并作组成子账；现场实际另供组件须独立原子收货及供方归属。采用不重叠组件贡献或核对整件：空组装件皮重等于实测整采购贡献加真实新增物料/滞留水减实际移除/损失，不含熟料。不得整组装皮重与同一组件叠加；整件模式匹配内部交接ID，用核对整件替代组件库存/出货并抵消匹配转移。真实混合收集出口只用一个核实原子废物交换；每池独立实测W来源为非叠加原始来源减库子账，和核对总出口。总量或不重叠分量二选一，处理/供方仅一次；实际独立出口仍分别列卡。所有包装及维修卡均以实际存在为条件，散装熟料不虚构包装或维修。 | kg | 逐批、计量间隔及存量边界 | 完整批群及全部失败零产出时段；原服务时段另列 | 声明窑线及适用的raw_prep、burn_cool和fg_service、真实供方门及原批群。process_id标识归口窑系统，raw_fields另行保留实际过程。 | 每参考流 | 校准、原始记录、组成相态试验、完整核对及上游归属 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory` | all inventory rows | x_ic = A_ic / Q_c。此为唯一归一化：A_ic是完成原始单位速率换算、专属归属、真实分配及继承向量核对后的逐交换原生单位归属负荷分子；Q_c为原批群新增首次放行熟料干基净kg。参考行为恰好1 kg。制造与增量服务分列A向量并使用相同原批群Q_c；Q_c=0时保留A，不出单位结果。卡片和汇总仅引用本计算，不再除一次。 对仅记录实物保管移动的行（成品gross发运/退回、包装各项、资产移动及外送废物），A_ic改指独立实测且未分配、已换算至该行原生广延单位的gross移动量；所得x_ic是每原Q_c的实物移动量，不是归属负荷向量。绝对gross实物账为首要记录，与制造/服务负荷分开；实物出口及成品历史不形成新Q、新采购或负荷抵扣。 仅作保管移动的毛量例外亦涵盖每个实际外部热载体供入及产品凝结水/热水返还，包括steam_in与condensate_return：A_ic为真实原生单位/状态下完整实测毛腿V，不是B_open+U-B_close、继承负荷之和、净消耗或经济/服务份额。载体kg、相态/T/P/焓基准与真实热MJ独立，仍只用本原Q_c商一次。另列应归供应/运行/处理/服务向量只有一个实际供方所有者；返还或质量/热两维度本身不另建采购、供方或自动信用。内循环仅在匹配内部接口抵消。 | A_ic; Q_c; cp_release; cp_raw; cp_energy; cp_species; cp_pack | x_ic | `ec-jrc-ilcd-2010`; `eu-jrc-clm-2013` |
| `calc_units` | all inventory rows | 吨按1000 kg/t转kg；电量MJ = 原始kWh × 3.6。气液数量按有据的实测状态方法换算。燃料低位热值MJ为同一供货载体的能量子账，不是第二次采购。对真实蒸汽/热水载体，实测kg乘以kJ/kg比焓得到kJ，仅除以1000一次转为MJ。供入与返回质量独立实测，各腿采用实际状态及一致焓基准；在同一边界和时段基准下核对真实损失及存量变化。质量乘焓差的快捷式仅适用于匹配且质量相等的供回腿，不编造效率或返回抵扣。不得反推单件质量、密度、配方或排放因子。 | cp_energy; cp_species; original_units | converted_native_numerators | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_vectors` | all inventory rows | 对每个原批群c及交换i，继承B_open_ic并加真实新增归属负荷；只扣除原料、在制品及未分配非在制存量中的B_close_ic，以及对其他功能批群有独立正当依据的转移。已放行期末成品绝不计入制造B_close。逐交换保留继承数量、原生单位、上游数据集、水分组成状态、前序处理及分配历史。普通废物处理和所有失败保留于制造。资产实物存量另记，仅有据的当期资产服务进入负荷分子。服务A_ic仅含真实增量服务及未完成服务继承，不再复制已制造成品。交换索引i还保留原来源过程、载体、路径及介质，继承的上游供方负荷不能改称直接窑排放，也不能在已归属该负荷的供方模型之外再加一次。 逐输入标明基准：gross收货/采购按适用的逐交换期初期末存量核对；已校正净耗用不得再做同一次存量校正。实物数量与每个继承交换向量分别核对。向其他功能或批群转移须有真实资格、分配及交接依据且只计一次；普通制造废物、破损、样品、外送或销售不自动转出造成和处理这些物料的负荷。即使成品仍留库，原批群在实测H_c内已经执行的服务仍按原Q_c保留；仅真实未消耗且未归属的存量/未完成工作可结转，不能只因服务附着于期末成品而扣除已完成服务。 负荷库存公式不赋予仅属保管移动的毛实物卡分子；该实物视图依calc_inventory使用完整实测V。每个实际制造或首放后作业，无论已授权、未批准、未授权、失败或拒收，均保留真实材料/水/能源、排放、废物、保管归属及负荷。制造商/规范许可和作业后检测只决定授权及身份/质量继续合格，不得抹除实际流或负荷。保留原Q_c/H_c和真实验收/处置，不假定水化/受损熟料恢复。未来未执行作业保持未知，仅未使用未分配库存可结转。 | cp_release; cp_raw; cp_energy; cp_species; cp_pack; B_open_ic; B_close_ic; new_burden_ic; justified_transfers_ic | A_ic | `ec-jrc-ilcd-2010` |
| `calc_physical_manufacture` | all inventory rows | 制造门将期初原料、在制品和未分配存量、独立完整湿态在装和备用实物资产存量及每项真实外部gross湿态物料空气投入，与期末同类存量、独立完整湿态在装和备用实物资产存量、首次放行实物熟料、未放行损失废物及各真实气液固出口核对。首次放行实物熟料为Q加独立实测自由水，不能为Q再加期末成品。热生料、窑皮结圈和灰存量保留真实状态；热MJ和电力不是实物kg。 | cp_release; cp_raw; cp_energy; cp_species; opening_physical_stocks; true_external_gross_inputs; closing_physical_stocks; first_release_wet_clinker; actual_waste; actual_gas_liquid_solid_exits | manufacturing_mass_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_physical_fg` | all inventory rows | 成品服务门：期初湿态成品加真实首次放行转入、gross退回实物和其他真实服务材料水流入，等于期末湿态成品加gross发运、对外退回、真实损失废物及各真实水气出口。退回湿重不必等于原交付重量。合并实物门中首次放行等成对内部转移仅抵消一次，保留成品及在装备用资产期初期末湿态存量和所有对外gross项。Ca、Si、Al、Fe、C、H、O、S、Cl及其他实测相关元素独立于总质量进行平衡，不得用一个残差求解两个未知物种或相态。 逐项记录真实维修/搬运新增和移出的新旧材料、零件及自由水/结构水/反应水，分别测量，不用单一湿重残差推定。维修滞留成品仅属于有标识的成品子状态或互斥维修在制品，不同时属于两者。真实流入即使留库仍保留在输入侧，完整湿态期末材料同时保留在存量侧。真实许可、工作后试验、验收或拒收处置决定其结果身份，不假定恢复或形成新Q。 | cp_release; cp_raw; cp_species; opening_FG_and_assets; first_release_transfer; gross_returns; real_service_inputs; closing_FG_and_assets; gross_dispatch; external_returns; real_loss_waste; actual_water_gas_exits | FG_and_consolidated_mass_element_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_packaging` | all inventory rows | 对每种真实包装j：P_open_j + P_purchase_j + I_supplier_j + P_external_return_received_j + X_in_j = P_close_j + P_gross_shipped_j + P_external_return_out_j + P_waste_j + X_out_j。六个gross移动项为分开的采购P（含付费捆绑供货）、首次非采购外部流入I、外退接收ER、gross发运S、对外返回EO及废弃W；期初期末存量不是移动项。每侧存量包含空包装、附着在制品、附着成品及周转状态。P和I各包含完整真实湿态包装且上游仅归属一次，内部复用不是采购。X_in/X_out只纳入其他同方向流项尚未表示的真实维修材料及水增减；保留重叠依据，绝不与存量消除重叠。真实流入即使留库仍与完整湿态期末存量同时保留。独立核对维修新旧零件、木材/材料及自由水、吸收水和释放水，不按经济份额缩放实物数量。 普通储存/搬运吸湿与解吸/蒸发无需维修事件。X仅去重同侧另一实际FLOW项已含量，不针对库存、反向流或仅因原子卡存在；真实留库入流与完整期末湿库存两者均保留。整份制品内置内衬/缝线/胶/印刷及水仅一次并作组成子账；现场实际另供组件须独立原子收货及供方归属。采用不重叠组件贡献或核对整件：空组装件皮重等于实测整采购贡献加真实新增物料/滞留水减实际移除/损失，不含熟料。不得整组装皮重与同一组件叠加；整件模式匹配内部交接ID，用核对整件替代组件库存/出货并抵消匹配转移。真实混合收集出口只用一个核实原子废物交换；每池独立实测W来源为非叠加原始来源减库子账，和核对总出口。总量或不重叠分量二选一，处理/供方仅一次；实际独立出口仍分别列卡。所有包装及维修卡均以实际存在为条件，散装熟料不虚构包装或维修。 | cp_pack; P_open_j; P_purchase_j; I_supplier_j; P_external_return_received_j; P_close_j; P_gross_shipped_j; P_external_return_out_j; P_waste_j; X_in_j; X_out_j; repair_material_in_out; repair_water_in_out; X_overlap_evidence | packaging_gross_mass_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_species_phases` | all inventory rows | 先将原始数量和速率转为该交换原生广延属性，再进行真实分配。真实速率只对时间积分一次，累计气液体积不再乘时间。密度及气体状态压缩性须为该物质独立测量。保留化石、生物和地质碳来源；分别记录自由水、载水、矿物结构脱水、反应水、留存液相、水蒸气及实测水化变化。氧化物分析、烧失量、COD、总碳、VOC、NOx和总金属是指标，不是唯一分子物种。采用真实反应相态证据和完整气体组分平衡，不默认将未知混合物按化学计量转换。 | cp_species; cp_raw; cp_energy; actual_concentration; actual_volume_or_rate; measured_state; independent_composition; independent_phase_evidence | independent_species_phase_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | 核对整份配方、原生Product/Waste/Elementary类型、CAS形态介质路线地域及全部属性；每卡及上下文保留采用限制。辅助身份缺口明确保留，不用宽泛集合填补。 | 原生直读及实测供方规范匹配 |
| `dq_balance` | all physical gates | 制造门将期初原料、在制品和未分配存量、独立完整湿态在装和备用实物资产存量及每项真实外部gross湿态物料空气投入，与期末同类存量、独立完整湿态在装和备用实物资产存量、首次放行实物熟料、未放行损失废物及各真实气液固出口核对。首次放行实物熟料为Q加独立实测自由水，不能为Q再加期末成品。热生料、窑皮结圈和灰存量保留真实状态；热MJ和电力不是实物kg。 | 独立存量质量元素相态测量、不确定性及未解释残差 |
| `dq_complete` | all operating states | 保留失败、不合格、取样熟料以及全部启停、闲置、清理、维修、旋风筒堵塞、CO跳停和零产出时段。记录实际处置、损失和处理，不假定可回收。成品重工必须有制造商或规范许可及重工后试验、验收和处置记录，不假定水硬性材料损伤可逆。Q=0时保留完整负荷账，不生成单位结果。 | 完整事件计量存量试验历史，不静默排除 |
| `dq_source` | method and site data | 技术来源仅支持定性工艺范围；数量、规范限值及条件来自真实前景或另有正当依据的来源。检出限、时空代表性、数值缺口、不确定性及分配敏感性明确披露。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`; `ec-jrc-ilcd-2010` |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | 参考及输出 | 核心参考身份冲突或未确认时拒绝。两语须有一项同UUID、1 kg及完整限定的首次放行熟料行，不能用已绑定水泥或方解石身份冒熟料。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_units` | all inventory rows | 要求原生单位换算、一次真实归属、完整批群向量及恰好一次calc_inventory归一化；Q=0不出单位结果。能量不得强制Mass/kg，未知数量不等于已测成功。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_physical` | all physical gates | 成品服务门：期初湿态成品加真实首次放行转入、gross退回实物和其他真实服务材料水流入，等于期末湿态成品加gross发运、对外退回、真实损失废物及各真实水气出口。退回湿重不必等于原交付重量。合并实物门中首次放行等成对内部转移仅抵消一次，保留成品及在装备用资产期初期末湿态存量和所有对外gross项。Ca、Si、Al、Fe、C、H、O、S、Cl及其他实测相关元素独立于总质量进行平衡，不得用一个残差求解两个未知物种或相态。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_species` | gas/water/materials | 先将原始数量和速率转为该交换原生广延属性，再进行真实分配。真实速率只对时间积分一次，累计气液体积不再乘时间。密度及气体状态压缩性须为该物质独立测量。保留化石、生物和地质碳来源；分别记录自由水、载水、矿物结构脱水、反应水、留存液相、水蒸气及实测水化变化。氧化物分析、烧失量、COD、总碳、VOC、NOx和总金属是指标，不是唯一分子物种。采用真实反应相态证据和完整气体组分平衡，不默认将未知混合物按化学计量转换。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_stocks` | manufacture and FG services | 将储存、取样、搬运、条件包装、装载、受控运输和退回保留为真实增量服务，关联原批群c、原Q_c及声明的实测服务时段。成品期初期末身份及原制造负荷仅继承一次，历史负荷与新增服务负荷分开。合并门中内部Q抵消。不得按当期发运量归一化服务、以净交付替换Q，或因退回再计制造；原发运及逆转记录独立于退回湿重追溯。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_pack_assets` | packaging and physical assets | 要求全部六gross包装项、供方已含流入和上游归属、维修材料水及完整湿态存量；X仅消除重叠。新旧资产实物存量与当期服务负荷分开，不设固定寿命或编造单机质量。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_allocation` | multifunctional processes | 拒绝任意物理经济选择、编造份额、自动因废物销售扣负荷或抵扣。核对专属及虚拟细分、逐交换决定性物理因果，以及仅对真实共同门有据剩余的市场价值。 | `ec-jrc-ilcd-2010` |
| `v_scope` | route/product gate | 拒绝将外购熟料包装当制造、把石膏终磨并入熟料门、无依据路线、遗漏真实交换、隐去失败清理时段或未知当零。工程检查不等于科学、翻译、映射或发布审批。 | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为水泥粉磨及合格下游LCA的声明熟料投入；首次放行制造和另披露的原批群服务 |
| allowed_use | 仅指定灰色干法预分解硅酸盐熟料路线状态场址时期及已核对原生限制 |
| excluded_use | 除非另行扩展并审查，否则排除湿法、半湿法、半干法、立窑、白熟料漂白或急冷、铝酸钙及其他化学体系的熟料。排除石膏或混合材掺配、水泥终磨、水泥包装、混凝土、安装、使用、水化及碳化服务声明。冷却过程的热熟料破碎纳入；与石膏共同粉磨制水泥排除。外购成品熟料不能替代矿物至熟料制造。不将BREF窑温、能耗、料比、氧化物比例、强度或排放因子用作PCR默认值。 |
| required_metadata | 灰色硅酸盐熟料体系及实际产品规范; 矿物相和氧化物分析及实际方法和相关试验龄期; 游离氧化钙及无默认限值的验收准则; 未水化结节供货状态及实测自由水分; 干法预热预分解回转窑与篦冷机配置; 矿物供应商与采石运输归属; 每种替代矿物及燃料的整份配方、状态和投加点; 化石、生物与矿物碳及实测水相; 窑与生料磨运行模式及旁路灰和窑灰内返外排路线; 场址地域及完整报告时段; 首次放行批群Q及原料在制品和存量继承负荷向量; 成品原批群服务时段及真实发运退回历史; 散装或真实熟料包装及上游归属方; 原生身份限制与未解决交换; 分配及上游数据集匹配 分开实物毛量与负荷/供方视图；整件/组件不重叠及实际出口与来源W备忘；普通吸湿释湿和所有实际未批准/失败作业；原Q_c/H_c与每份热供应唯一供方。 |
| required_quality_disclosure | 真实来源数量覆盖、辅助UUID供方缺口、原子物种相态不确定性、平衡、继承向量、失败、分配、服务时段及排除项；不得从工程验证推称科学已审 |
| update_trigger | 矿物燃料供应、相态品级、窑冷却控制系统、真实辅助交换、上游边界、产品门、Q方法、分配或服务时段变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-jrc-clm-2013` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Cement, Lime and Magnesium Oxide, EUR 26129 EN (2013), DOI 10.2788/12850, §§1.2.1–1.2.6, printed pp.9–39; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CLM_Published_def_0.pdf | 工业路线及邻近排除项；矿物和燃料制备、预分解窑、冷却、灰循环、调质水及储存。仅作技术综合，不提供数值默认值或LCA分配依据。 |
| `us-epa-ap42-cement-2025` | official_guidance | US EPA, AP-42 §11.6 Portland Cement Manufacturing, February 2025, §11.6.1, Fig.11.6-1 and neighbouring wet/semi-dry/finish-grinding descriptions, pp.11.6-1–11.6-9; https://www.epa.gov/system/files/documents/2025-02/c11s06_final_2-2025_0.pdf | 独立工艺说明及熟料与水泥终端区分；自由水和结合水、煅烧、燃料及旁路路径。不采用排放因子表或历史配方。 |
| `ec-jrc-ilcd-2010` | handbook | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅用于归因分配层级：细分和虚拟细分、逐交换的决定性物理因果关系、实际共同过程门的剩余市场价值；保留适用条件与限制。 |
