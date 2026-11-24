---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.raw-offal-inedible-including-pigs-bristles-horse-hair-animal-guts-bird-skins-feathers-b-2770d48a
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 不可食用原始牛骨的收集与首次放行

## 1. 范围与适用性

本方法覆盖实际肉类生产中形成的一条可追溯不可食用原始牛骨工业副产物流。前景起点为屠宰或分割后明确的分离／收集交接点，此时原骨尚待本供应阶段的首次放行。纳入接收、隔离分拣、实际发生的必要初清、实际保鲜冷却、称量、首次质量放行、包装、保管搬运及厂门保管责任交接。本稿不教授动物屠宰或处置，不将动物建模为专为产骨而饲养或屠宰。真实饲养、屠宰和分割负荷须保留在上游供方／接口及其明确分配中。

参考对象为明确指定供获准非食用工业用途、按供货湿态计量的一批牛骨；仍为未加工或简单处理，未切成工艺制品形状。排除食用／汤料骨、食用内脏、经热或化学脱脂的骨、骨灰、骨粉或肉骨粉、骨素、明胶或胶原、骨炭、雕刻品、人源材料、稀有／受保护来源默认项，以及其他物种或混合内脏参考产品。只有实际供料目的和去向支持时，供后续加工的原骨才作为Product；真正弃置的骨另列Waste。处置费、零售价或标签不能证明上游零负荷。

UN分类、机构工业证据和企业来源透明综合为通用窄方法，并不宣称对应同一SKU、订单或工厂。核心原始终端区别于供方的加工骨粒及食品级明胶原料。不默认组成、含水率、每头出骨量、回收率、寿命、冷链温时、排放因子或卫生法定限值。实际权限与检疫决定控制合格去向，但不能删除失败、未经许可却确实发生、拒收或零产出作业的负荷。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.raw-offal-inedible-including-pigs-bristles-horse-hair-animal-guts-bird-skins-feathers-b-2770d48a |
| classification_refs | CPC3.0:39110，已接受不可食用原始牛骨子集的较窄映射，见 docs/adr/2026-11-22-accept-cpc-39110-raw-inedible-bovine-bone-at-first-release.md |
| covered_products | 获准非食用工业用途、深加工之前的一条可追溯湿态原始牛骨副产供料流 |
| excluded_products | 食用汤料骨；食用器官；其他物种；混合内脏；脱脂骨；煅烧骨灰；骨粉；肉骨粉；明胶；胶原；骨素；骨炭；成形工艺品；人源材料 |
| representative_product | 首次质量放行的1kg湿态不可食用原始牛骨，后续门口服务单独保留 |
| production_route | 真实肉类生产副产分离接口；收集；分拣；条件性初清冷却；首次放行；实际包装及厂门保管交接 |
| market_state | 非食用原始牛骨；记录残留组织与水；不强加纯度或含水比例 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为获准工业去向供应可追溯不可食用原始牛骨材料 |
| How much | 首次放行的净湿骨料1千克；不含包装 |
| How well | 实际批次规格与有权主体去向验收；无通用卫生或组成阈值 |
| How long or cycle | 指定批次的一次首次放行；记录实际服务期H，不假定寿命 |
| reference_flow_link | released_bone |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 牛的分类单元与来源动物类别; 来源部位与批次谱系; 非食用指定与获准去向; 各交接点真实Product或Waste状态; 未经深加工的未加工或简单处理状态; 整份供货骨上的残留肉脂及骨髓; 游离水与组织水及矿物结构水的区别; 指定门口湿质量及皮重; 首次质量放行Q与原批次Qc; 实际场址地域供方及上游分配; 实际冷却状态及时间历史; 期初期末原料WIP和FG实物库存及继承向量; 实物毛发运退货损失及原交付关联; 每种包装与周转容器平衡; 原生流限制及精确参考单位; 已观察服务期H及未观察后续服务 |

数据包须在参考流备注、过程说明或等效字段逐一声明这些限定。正式族名仅提供原骨身份容器；本稿仅适用牛骨这一具体流，不能按族名选择其他副产物。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measurement_reference | reference product | Mass | kg | Q为批次首次放行的整份湿骨净质量，由校准称量的毛重减皮重取得。不得用动物数、骨件数、次级密度或假定组成推算kg。 |
| measurement_once | all inventory rows | Actual native extensive property | declared original unit | 保留未归一化原始量；归属之前先换算单位，仅对真实速率积分。各卡引用唯一report_once的N/Qc结果。H仅为观察期，绝非第二除数。 |
| measurement_wet | raw_bone | Mass | kg | 整份湿物料只记一主账。残肉、脂肪、骨髓、蛋白、矿物、组织水和游离水均为不叠加的组成子账。以独立测量约束元素与相态；矿物羟基／结构水不是游离洗水。 |
| measurement_energy | all inventory rows | Energy | MJ | 计量实际电力，kWh按3.6一次换算MJ。电表计量使用技术属性Energy；共享MJ/kWh单位支持不能证明供方属性。所选固定版本电力原件独立声明净热值，仅对该已核验供应身份保留；其他供方须独立核验。外供热须一份能量主账与实测载体质量、状态、焓及回流桥接，不虚构锅炉或燃料。 |
| measurement_species | all inventory rows | Mass | kg | 逐一独立确定真实分子物种及接收介质。COD、TOC、TN、氨氮及臭气单位是指标，不是分子排放质量。不得用一个质量残差拟合两个未知，也不得假设全部生物碳现场排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实屠宰分割后，在明确收集接口待首次供料放行的已分离原始牛骨 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 39110不可食用原始牛骨子集，不宣称整叶覆盖 |
| recursive_input_rule | 同类接收保留供方、原状态和继承向量。已经放行的原骨不得因接收／复验重标为新产量；纯搬运服务使用原Qc。 |
| upstream_dataset_requirement | 将真实动物饲养、活畜运输、屠宰、肉类分割分离及其分配追溯到本交接点的一份兼容上游供方。仅补入未包含工序；供方缺失须披露，不默认为零。 |
| disclosure | 湿基；法律／用途指定；分离与放行事件；原料WIP和FG继承向量；原批次Qc；实物V与归属A；实际观察期H |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | all processes | 采用真实收集至厂门路线。初清可去除松散污染，但不得隐藏热炼制、化学脱脂、水解、脱矿、干燥成骨粒、磨粉或切形成品。若实际发生这类转化，须保留真实负荷并另行判定变化后的终端；其不符合原骨。 | un-cpc3-2025; un-cpc3-2026; mla-bone-disposition; ilcd-allocation-2010 |
| boundary_origin | raw_bone | 要求可追溯牛源批次及有记录的非食用去向。保留分离点真实活畜／肉系统负荷与分配。零价格、废物字样、处理费或回收状态不能设零供方或生成避免生产信用。真实弃置Waste不能替代原料Product输入输出UUID。 | ec-animal-by-products; ilcd-allocation-2010 |
| boundary_q | released_bone | Q仅汇总整批首次质量放行的真实新增净湿质量。合格期末FG已包含在Q内，不能再加作生产。接收、包装、仓储、发运、退货及复验不生成Q。本期制造Qc=Q；后续服务使用各原批次Qc。Qc=0时保留真实负荷、库存和历史，不出单位结果。 | ilcd-allocation-2010 |
| boundary_stocks | all inventory rows | 原料、WIP、拒收库存、设备充装及FG的期初期末实物量，与继承的逐交换环境向量分开。F是真实新增负荷；X只抵消经证实的OTHER同侧重复事件。新增清洗水、维修、更换、泄漏及返工是F，绝非X。每份实物量及向量只转移一次，不把库存kg当作环境负荷。 | ilcd-allocation-2010 |
| boundary_fg | fg_service | 按原放行批次保留期初期末FG、实物毛发运及真实外部退货。真实退货在保管交接账中只冲回一次原交付，仍保留历史制造负荷。新清洗、重包装、冷却及返工对原Qc增加真实F。合并制备与FG边界时仅抵消成对内部放行转移及向量。披露H以外尚未观察的后续服务。 | ilcd-allocation-2010 |
| boundary_gross | all inventory rows | 实物总量V与环境归属A为两个独立通道。所有真实废物、排放、维修更换及载体回流按真实来源批次保留V/Qc；经济或服务份额不得缩减其质量。来源分区不得重叠且须合计为观察总量V。整份湿混合物与组分只能选一账或作不叠加桥接，并对应一份实际供方。 | ilcd-allocation-2010 |
| boundary_pack | fg_service | 对每种PE内衬袋及HDPE箱，按互不重叠的空包装、附着WIP/FG及周转库存账户计算：期初+外购+首次非购买外部接收+真实退回接收=期末+毛发运+其他外部流出+废物。首次接收包括随骨来料、另行借入或无偿调入，不论供方清单是否覆盖。真实退回须同一件关联本站先前外发；无关联接收保持首次接收。内部复用相消。记录所有权、既往服务及供方覆盖，实际采购、运输和服务负担各一次；供方数据缺失明确待查。 | ilcd-allocation-2010 |
| boundary_actual | all processes | 纳入所有真实失败／零产出作业、启停、待机冷却、试验、清洗、返工、检查及拒收／未许可作业。质量或检疫门仅控制可售产出与去向。在声称完整前，每项实际新增外购制剂、部件、燃料、载热体、制冷剂、废物及气体物种都须有独立原子卡与采集事件。 | ilcd-allocation-2010 |
| boundary_water | all processes | 独立闭合湿物料、实物总质量及相关C/N/P/Ca/S平衡；分别记录游离、组织结合、相变和矿物结构水，不假定反应。水表通常提供积分体积，除非明确为速率表；密度须对该物质实际状态独立测量。制冷凝水不是锅炉凝水。真实外部载热体Product回流须保留实际质量、焓、状态及供方水能约定。 | ilcd-allocation-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bone_preparation | 收集分拣及原骨首次放行 | required | 真实分离交接至首次放行 | foreground_manufacturing | Q kg |
| fg_service | 放行后包装保管与交接 | conditional | H内真实放行后服务，保留原批次 | foreground_service | original Qc kg |

以下每卡的数量规则只引用report_once一次结果。原始V与环境A分别保留；采集不预除分母。条件项须依据真实发生／不发生证据判断，未测不等于零。所有额外实际流须增列原子卡；FG重复物种行仅记录放行后的不重叠事件。

### 过程：收集分拣及原骨首次放行（`bone_preparation`）

#### 输入

##### 产品流

###### 接收的已分离原始牛骨（`raw_bone`）

称量包含残肉脂骨髓的整份供货湿骨，记录来源屠宰分割接口及继承的逐交换向量。接收本身不是新生产。接收批次须区别于已放行FG；披露全部原料／WIP损失与拒收。 原生Product族明确含未加工／简单处理的骨，为厂内未指定处理；未固定CAS、等级、物种或地域。此处只选一批真实牛骨，不是猪鬃、毛、内脏、羽毛和象牙的组合。正式族名不扩张本方法。数据包本卡上下文须保留来源、部位、非食用指定、残留组织水、实际处理及供方；弃置Waste不是本Product。

- 选定流：不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_bone`
- 来源：`un-cpc3-2025`; `ec-animal-by-products`; `ilcd-allocation-2010`

###### 真实冷藏入厂公路服务（`inbound_transport`）

条件项：仅当该服务跨选定上游交接点且尚未包含在骨供方中时计入。同场分离不虚构卡车运输。 原生冷藏公路服务描述收集点／屠宰场至厂门运输及全球行业平均接口。其示例200km／0.2t-km属于专家估计，绝非现场默认。精确参考是质量*距离，单位kg*km；t-km乘1000换算。记录实际载荷、路线、里程、温控服务及供方与空驶责任，不在前景重复供方燃料／制冷剂负荷。

- 选定流：冷藏货运公路运输服务 `23859e16-623e-4ece-8994-d9af546ba56c`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 来源：`ilcd-allocation-2010`

###### 收集分拣与首次冷却电力（`preparation_electricity`）

按工序分别计量收集设备、分拣、称量、实际制冷、通风及电加热清洗，再与总表核对。保留启停、待机、拒收批次及Q0用电。 原生身份为中国电网平均消费组合、低于1kV且送至用户的交流电；仅实际符合的供电使用此UUID。不是纯水电、电厂发电或变压服务。不同电压、地域或供方需兼容身份，核实前明确缺口，仍记录真实用电。参考属性为能量／MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值（电力能量属性） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`ilcd-allocation-2010`

###### 原骨初清用水（`initial_cleaning_water`）

仅在实际发生且仍为简单处理时纳入条件性初冲洗；记录新鲜进水、内部循环水、附着水及独立废水。实际热脱脂／提取会改变终端，不属于本方法。 原生Product为厂内／送至用户的经处理饮用市政自来水，Mass/kg，未固定地域。次级0.001m3/kg属性不是场址独立实测密度。使用实际质量或独立状态特定密度换算体积；原水、循环水或未经处理的水不能绑定此项。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`ilcd-allocation-2010`

###### 设备与收集区清洗水（`hygiene_water`）

记录真实容器、分拣台、地面和收集设备清洗水，含失败作业及收尾清洗。真实新增洗水不能当重复扣减，内部复用水不能当新增外购。 原生Product为厂内／送至用户的经处理饮用市政自来水，Mass/kg，未固定地域。次级0.001m3/kg属性不是场址独立实测密度。使用实际质量或独立状态特定密度换算体积；原水、循环水或未经处理的水不能绑定此项。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`ilcd-allocation-2010`

###### 外购50%烧碱清洗溶液（`caustic_solution`）

条件性设备／地面卫生投入，不是骨脱矿或水解配方。整份外购溶液只称量计入一次；厂内稀释记录真实加水、混合电力与损失。 原生厂内工业50%氢氧化钠溶液按整份溶液Mass/kg，不是活性NaOH质量。原生文献仅支撑身份。仅用于真实外购50%溶液；载水及含量记非叠加子账，只另加真实稀释水。其他制剂需独立身份。

- 选定流：氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulations`
- 来源：`ilcd-allocation-2010`

###### 外购次氯酸钠消毒溶液（`hypochlorite_solution`）

仅实际使用时纳入的条件性卫生投入。完整供方制剂及溶液质量记一次；有效氯含量为不叠加子账，不是第二投入或通用浓度。绑定供方身份前须确立完整溶液质量基准；活性物质对象不能代表整份制剂。

- 选定流：次氯酸钠水性消毒溶液
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulations`
- 来源：`ilcd-allocation-2010`

###### 真实制冷氨补充（`ammonia_makeup`）

仅适用于真实氨制冷系统。期初充装+外部补充+回收接收，应与期末充装+回收外送+实际泄漏+废弃核对。内部循环不是消耗。实际服务分配与充装／损失总量分开。 原生氨NH3，CAS7664-41-7，包含制冷用途，Mass/kg，未固定路线、等级或地域。仅用于实际无水氨充装／补充，不是氨水、氨氮、盐类或整个制冷服务。记录实际纯度状态及供方；本条件卡不规定必须采用该制冷剂。

- 选定流：氨 `9874382d-672c-4601-a3ce-9a4ae21e663b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：`ilcd-allocation-2010`

###### 不锈钢分拣台更换（`sorting_table_replacement`）

条件性真实更换制品，记录实测质量、合金组成、装配供方及安装退役日期。钢材不是完整分拣台。保留真实更换实物V及寿命／服务负荷账，不假定寿命或固定质量；其他真实设备／部件逐一列出。

- 选定流：已制造不锈钢分拣台
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance`
- 来源：`ilcd-allocation-2010`

###### 搬运设备矿物润滑油（`lubricating_oil`）

条件性整份外购油制剂，不是基础油叠加重复添加剂。记录实际油品类型与质量，废油和泄漏另列。全合成PAO油不得替代真实矿物油制剂。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance`
- 来源：`ilcd-allocation-2010`

##### 基本流

###### 真实大气氧摄取（`oxygen_uptake`）

仅在实际生物变化有化学证据时纳入净O2摄取，不能使用整个循环通风量。不得由COD推定摄取，或用一个残差平衡两个未知气体／水项。惰性载气不计净物料，除非实测并明确桥接。 原生氧CAS7782-44-7为来自空气的Elementary资源，Mass/kg。本绑定仅为真实从空气摄取的分子O2；原生液氧、溶解试剂及双氧离子别名不扩张该介质物种。既不是外购氧Product，也不是排至空气的氧，不假定摄取速率。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`ilcd-allocation-2010`

#### 输出

##### 产品流

###### 首次放行原始牛骨（`released_bone`）

唯一参考输出：真实新增首次整体放行湿骨Q，包含合格期末FG。记录放行事件、规格、获准非食用去向及实际湿净质量。拒收或过去已放行物不得重标进Q；后续保管／服务移动沿用原批次。 原生Product族明确含未加工／简单处理的骨，为厂内未指定处理；未固定CAS、等级、物种或地域。此处只选一批真实牛骨，不是猪鬃、毛、内脏、羽毛和象牙的组合。正式族名不扩张本方法。数据包本卡上下文须保留来源、部位、非食用指定、残留组织水、实际处理及供方；弃置Waste不是本Product。

- 选定流：不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`un-cpc3-2025`; `ec-animal-by-products`; `ilcd-allocation-2010`

##### 废物流

###### 弃置牛骨（`rejected_bone`）

实测送往获准处理的拒收／腐败骨整份湿流，含残留组织；不替换Product或给信用。弃置骨须使用整份湿态Mass参考，化学元素含量属性不能替代该实物基准。

- 选定流：弃置原始牛骨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ilcd-allocation-2010`

###### 分离的不可食牛肉残留物（`flesh_residue`）

条件性初分拣独立收集的真实组织，记录湿质量，附脂与水作为不叠加组成。不是整份骨中已含残留组织，也不是废水总流中已含悬浮组分。若没有独立流，只在实际母流保留其质量。

- 选定流：不可食牛肉残留物
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ilcd-allocation-2010`

###### 捕集的原骨细屑（`bone_fines`）

仅指收集搬运中实际捕集的松散细屑，不是制造骨粉。按明确状态称量湿料，不重复计入废水或拒收骨。真实磨粉不属于本原始路线。

- 选定流：原始牛骨细屑
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ilcd-allocation-2010`

###### 收集清洗有机废水（`organic_wastewater`）

一份真实湿废水总流连接一份有记录的供方。保留实测流量、独立密度、溶解悬浮物及独立COD/TOC/TN指标。不向整份废水质量再次叠加组分水、悬肉或污染物分子质量。如实际场内处理，须有完整独立原子清单及真实物种，不能隐藏为零。

- 选定流：牛骨收集清洗废水
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`ilcd-allocation-2010`

###### 排至收集系统的制冷凝水（`refrigeration_condensate`）

条件性单独排出的真实凝水／化霜水；独立识别空气水分、产品水分及加水来源。若在所选边界之前并入organic_wastewater，则只作该流不叠加子账，不再记第二份废物总流。不是蒸发工艺凝水或蒸汽回流水。

- 选定流：制冷冷凝废水
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`ilcd-allocation-2010`

###### 弃置氨制冷剂（`spent_ammonia`）

条件性送往获准处理的真实弃置制冷剂。区分回收Product返还、真实分子泄漏及剩余充装；不能选择氨氮或其他胺类废物。每种外部Product回流须独立真实身份及总质量。

- 选定流：废无水氨制冷剂
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：`ilcd-allocation-2010`

###### 退役不锈钢分拣台（`retired_table`）

条件性完整退役制品；保留总质量、实际合金部件及去向。等级或退役路线不一致时不得静默使用316／430外供废钢身份。拆解后独立部件须有不重叠实测分区。

- 选定流：废不锈钢分拣台
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance`
- 来源：`ilcd-allocation-2010`

###### 废矿物润滑油（`spent_oil`）

条件性称量从搬运设备实际排出的油。要求来自本搬运作业的真实废矿物油，并记录污染组成及处理去向。若实际泄漏则另列真实物种与介质；不能把全部耗油虚构为排放。 原生废润滑油为产生点Waste，Mass/kg，覆盖使用污染后的石油基或合成油，处理未指定。本行仅选搬运设备真实废矿物油；保留完整含污染废物质量及实际处理供方，不假定回收、燃烧、固定含量或信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance`
- 来源：`ilcd-allocation-2010`

##### 基本流

###### 氨制冷剂泄漏（`ammonia_leak`）

条件项，按真实接收空气介质和释放时点测量。仅真实NH3 CAS7664-41-7泄漏；充装平衡损失与同一泄漏仪表不能相加。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的氨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：`ilcd-allocation-2010`

###### 生物分解氨排放（`ammonia_decomposition`）

条件项，按真实接收空气介质和释放时点测量。仅分解产生的真实NH3 CAS7664-41-7，区别于制冷剂来源。总氨氮或盐不是NH3质量。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的氨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`ilcd-allocation-2010`

###### 硫化氢排放（`hydrogen_sulfide`）

条件项，按真实接收空气介质和释放时点测量。仅真实H2S CAS7783-06-4，不是总硫、硫醇或臭气单位。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的硫化氢
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`ilcd-allocation-2010`

###### 生物源甲烷排放（`biogenic_methane`）

条件项，按真实接收空气介质和释放时点测量。仅实际CH4 CAS74-82-8且有生物碳来源证据；不是总有机碳、沼气体积或全部碳损失。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的生物源甲烷
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`ilcd-allocation-2010`

###### 生物源二氧化碳排放（`biogenic_co2`）

条件项，按真实接收空气介质和释放时点测量。仅有生物来源的真实气态CO2 CAS124-38-9。不把骨内保留碳或碳酸盐矿物碳自动转为生物源排放。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的生物源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`ilcd-allocation-2010`

###### 离开边界的水蒸气（`water_evaporation`）

条件项，按真实接收空气介质和释放时点测量。独立核对进出口湿度与水分后真实H2O CAS7732-18-5净蒸发；不是外购蒸汽、液水或结构羟基。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`ilcd-allocation-2010`

### 过程：放行后包装保管与交接（`fg_service`）

#### 输入

##### 产品流

###### 内部首次放行骨转移（`released_bone_transfer`）

成对接收released_bone内部数量及继承向量一次。合并门口时相消，不是第二采购／供方或另一Q。期初FG保留历史Qc及负荷。 原生Product族明确含未加工／简单处理的骨，为厂内未指定处理；未固定CAS、等级、物种或地域。此处只选一批真实牛骨，不是猪鬃、毛、内脏、羽毛和象牙的组合。正式族名不扩张本方法。数据包本卡上下文须保留来源、部位、非食用指定、残留组织水、实际处理及供方；弃置Waste不是本Product。

- 选定流：不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg`
- 来源：`ilcd-allocation-2010`

###### 真实退回原骨产品（`returned_bone`）

仅在仍为本原始Product且对预定非食用路线合法适用时计入真实外部退货。关联原交付冲回、湿质量变化、原Qc及全部历史负荷；拒收废物退回应使用真实Waste身份。复验不生成Q。 原生Product族明确含未加工／简单处理的骨，为厂内未指定处理；未固定CAS、等级、物种或地域。此处只选一批真实牛骨，不是猪鬃、毛、内脏、羽毛和象牙的组合。正式族名不扩张本方法。数据包本卡上下文须保留来源、部位、非食用指定、残留组织水、实际处理及供方；弃置Waste不是本Product。

- 选定流：不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg`
- 来源：`ilcd-allocation-2010`

###### 放行后冷却搬运电力（`fg_electricity`）

H内真实服务用电，独立计量或按因果归属原批次，含待机冷却、退货、重包装和检查失败。不得将全部FG作业混入仅制造分母，也不得把期末FG再加进Q。 原生身份为中国电网平均消费组合、低于1kV且送至用户的交流电；仅实际符合的供电使用此UUID。不是纯水电、电厂发电或变压服务。不同电压、地域或供方需兼容身份，核实前明确缺口，仍记录真实用电。参考属性为能量／MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值（电力能量属性） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_energy`
- 来源：`ilcd-allocation-2010`

###### 放行后包装与场地清洗水（`fg_water`）

放行后保管服务及周转箱真实新增洗水；归属原批次Qc并保留完整实物V，不能作为内部复用或重复制造而删去。 原生Product为厂内／送至用户的经处理饮用市政自来水，Mass/kg，未固定地域。次级0.001m3/kg属性不是场址独立实测密度。使用实际质量或独立状态特定密度换算体积；原水、循环水或未经处理的水不能绑定此项。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_water`
- 来源：`ilcd-allocation-2010`

###### 外购PE内衬袋（`liner_purchase`）

条件性真实外购内衬件。核对空／附着库存、实物毛发运与废物，不计入净骨Q。 原生PE袋，CAS9002-88-4，Mass/kg；对象是一种供货内衬袋。记录聚合物等级、添加物、尺寸和实测皮重。不覆盖复合膜、纸或未拆包装集合；件数换算须实测同批单件质量。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`



###### 先前发运PE袋真实退回（`liner_return_received`）

仅为同件可关联本站较早外发的真实退回。保留毛kg、继承历史及实际新增返程运输服务，不重复制造。无关联接收用liner_first_receipt。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`


###### PE内衬袋首次非购买接收（`liner_first_receipt`）

实际随骨来料、另行借入或无偿调入PE袋，记录实物质量、所有权、既往服务、供方覆盖及实际未覆盖制造、运输和服务各一次；供方缺失待查。不新增骨料放行，不冒充未经证明的退回。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 外购HDPE周转箱（`crate_purchase`）

条件性新制造容器；资本／服务分配与实际外购实物质量分开。内部复用不是采购；不默认周转次数或寿命。 原生塑料周转箱为一件供货制品，Mass/kg，未固定聚合物、等级、路线或地域。CPC袋类归属为孤立分类瑕疵；basename及单位一致指向箱，而非树脂或袋。此处限定为有记录的真实HDPE周转箱；保留完整制造制品供方、实测质量、服务历史和维修。

- 选定流：塑料周转箱 `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`


###### HDPE箱首次非购买接收（`crate_first_receipt`）

实际随骨来料、另行借入或无偿调入HDPE箱，不是已证明的同件退回。不论供方覆盖是否已知，均记录毛kg、所有权、既往服务及供方覆盖；实际未覆盖制造、运输和服务各计一次。

- 选定流：塑料周转箱 `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 从外部返还的周转箱（`crate_return_received`）

仅限同一件先前从本站外发的箱；无关联接收使用crate_first_receipt。条件性真实外部返还，按制品身份及质量计量并保留继承历史。不再次获取制造负荷，内部复用不能计为此外部输入。 原生塑料周转箱为一件供货制品，Mass/kg，未固定聚合物、等级、路线或地域。CPC袋类归属为孤立分类瑕疵；basename及单位一致指向箱，而非树脂或袋。此处限定为有记录的真实HDPE周转箱；保留完整制造制品供方、实测质量、服务历史和维修。

- 选定流：塑料周转箱 `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 放行后真实制冷氨补充（`fg_ammonia_makeup`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。仅适用于真实氨制冷系统。期初充装+外部补充+回收接收，应与期末充装+回收外送+实际泄漏+废弃核对。内部循环不是消耗。实际服务分配与充装／损失总量分开。 原生氨NH3，CAS7664-41-7，包含制冷用途，Mass/kg，未固定路线、等级或地域。仅用于实际无水氨充装／补充，不是氨水、氨氮、盐类或整个制冷服务。记录实际纯度状态及供方；本条件卡不规定必须采用该制冷剂。

- 选定流：氨 `9874382d-672c-4601-a3ce-9a4ae21e663b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_refrigerant`
- 来源：`ilcd-allocation-2010`

##### 基本流

###### 放行后真实大气氧摄取（`fg_oxygen_uptake`）

H内真实不重叠放行后摄取使用原批次Qc。仅在实际生物变化有化学证据时纳入净O2摄取，不能使用整个循环通风量。不得由COD推定摄取，或用一个残差平衡两个未知气体／水项。惰性载气不计净物料，除非实测并明确桥接。 原生氧CAS7782-44-7为来自空气的Elementary资源，Mass/kg。本绑定仅为真实从空气摄取的分子O2；原生液氧、溶解试剂及双氧离子别名不扩张该介质物种。既不是外购氧Product，也不是排至空气的氧，不假定摄取速率。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_species`
- 来源：`ilcd-allocation-2010`


#### 输出

##### 产品流

###### 实际发运原始牛骨（`dispatched_bone`）

按原批次、去向、实测湿质量及状态记录厂门实物毛交接。不是参考生产行，不重新定义Q。水分变化、拒收及真实退货分别核对；披露的服务期包含到本交接点的实际仓储搬运。 原生Product族明确含未加工／简单处理的骨，为厂内未指定处理；未固定CAS、等级、物种或地域。此处只选一批真实牛骨，不是猪鬃、毛、内脏、羽毛和象牙的组合。正式族名不扩张本方法。数据包本卡上下文须保留来源、部位、非食用指定、残留组织水、实际处理及供方；弃置Waste不是本Product。

- 选定流：不可食用的生内脏（包括猪鬃、马鬃、动物内脏、鸟皮、羽毛、骨头和象牙） `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg`
- 来源：`un-cpc3-2025`; `ilcd-allocation-2010`

###### 随毛发运外出的PE内衬袋（`liner_dispatched`）

实际附着包装随实物毛发运外出，含重新发运。这是同一采购制品的保管转移，不是共产品信用或产品Q。 原生PE袋，CAS9002-88-4，Mass/kg；对象是一种供货内衬袋。记录聚合物等级、添加物、尺寸和实测皮重。不覆盖复合膜、纸或未拆包装集合；件数换算须实测同批单件质量。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`


###### PE袋返还外部所有者（`liner_external_return`）

实际单独归还外部所有者，不含已计入随骨发运的包装。保留毛kg及实际返程运输服务各一次，不设抵扣。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 随毛发运外出的HDPE周转箱（`crate_dispatched`）

追踪真实容器毛外出及返还责任，不按运输次数重复采购。容器库存、剩余服务负荷及骨载荷分开。 原生塑料周转箱为一件供货制品，Mass/kg，未固定聚合物、等级、路线或地域。CPC袋类归属为孤立分类瑕疵；basename及单位一致指向箱，而非树脂或袋。此处限定为有记录的真实HDPE周转箱；保留完整制造制品供方、实测质量、服务历史和维修。

- 选定流：塑料周转箱 `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 向外部所有者返还空周转箱（`crate_external_return`）

条件性跨边界真实空箱返还；区别于随骨发运的箱及内部复用。保留总质量与历史，不给信用。 原生塑料周转箱为一件供货制品，Mass/kg，未固定聚合物、等级、路线或地域。CPC袋类归属为孤立分类瑕疵；basename及单位一致指向箱，而非树脂或袋。此处限定为有记录的真实HDPE周转箱；保留完整制造制品供方、实测质量、服务历史和维修。

- 选定流：塑料周转箱 `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

##### 废物流

###### 弃置PE内衬袋（`liner_waste`）

条件性独立实测弃置袋基材。附着有机污染保留在一份废物总母流或不重叠实测分区中，不能将整份废袋与聚合物组分重复相加。 本门产生PE废物的身份保持未决；机械回收厂已清洗废物与本门刚产生状态不匹配。仅在实际弃置时用于实测PE制品基材；污染量在不叠加的废物总量桥接中分列。回收描述不等于自动回收供方或信用。不得同时叠加聚合物废料和含污染物整份包装废物流。

- 选定流：废聚乙烯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 弃置HDPE周转箱（`crate_waste`）

条件性实测退役HDPE箱基材；不是出售的可用箱或混合塑料。使用仅聚合物分区前先分离实际金属配件；退役总量仍须完整。 本门产生PE废物的身份保持未决；机械回收厂已清洗废物与本门刚产生状态不匹配。仅在实际弃置时用于实测PE制品基材；污染量在不叠加的废物总量桥接中分列。回收描述不等于自动回收供方或信用。不得同时叠加聚合物废料和含污染物整份包装废物流。

- 选定流：废聚乙烯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`ilcd-allocation-2010`

###### 放行后腐败牛骨（`fg_spoiled_bone`）

对原Qc记录真实弃置湿骨及继承向量和新增服务负荷。腐败不追溯生成新首次放行批次，也不取消实际制造。

- 选定流：腐败原始牛骨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg`
- 来源：`ilcd-allocation-2010`

###### 放行后周转箱清洗废水（`fg_wastewater`）

按批次记录放行后周转箱／场地清洗的真实湿废水；使用一份总流／供方及非叠加污染物子账。不重复制造废水，也不再叠加本废水质量中已含洗水。

- 选定流：HDPE牛骨周转箱清洗废水
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_wastewater`
- 来源：`ilcd-allocation-2010`

###### 放行后弃置氨制冷剂（`fg_spent_ammonia`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件性送往获准处理的真实弃置制冷剂。区分回收Product返还、真实分子泄漏及剩余充装；不能选择氨氮或其他胺类废物。每种外部Product回流须独立真实身份及总质量。

- 选定流：废无水氨制冷剂
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_refrigerant`
- 来源：`ilcd-allocation-2010`

##### 基本流

###### 放行后氨制冷剂泄漏（`fg_ammonia_leak`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。仅真实NH3 CAS7664-41-7泄漏；充装平衡损失与同一泄漏仪表不能相加。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的氨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_refrigerant`
- 来源：`ilcd-allocation-2010`

###### 放行后生物分解氨排放（`fg_ammonia_decomposition`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。仅分解产生的真实NH3 CAS7664-41-7，区别于制冷剂来源。总氨氮或盐不是NH3质量。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的氨
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_species`
- 来源：`ilcd-allocation-2010`

###### 放行后硫化氢排放（`fg_hydrogen_sulfide`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。仅真实H2S CAS7783-06-4，不是总硫、硫醇或臭气单位。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的硫化氢
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_species`
- 来源：`ilcd-allocation-2010`

###### 放行后生物源甲烷排放（`fg_biogenic_methane`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。仅实际CH4 CAS74-82-8且有生物碳来源证据；不是总有机碳、沼气体积或全部碳损失。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的生物源甲烷
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_species`
- 来源：`ilcd-allocation-2010`

###### 放行后生物源二氧化碳排放（`fg_biogenic_co2`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。仅有生物来源的真实气态CO2 CAS124-38-9。不把骨内保留碳或碳酸盐矿物碳自动转为生物源排放。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的生物源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_species`
- 来源：`ilcd-allocation-2010`

###### 放行后离开边界的水蒸气（`fg_water_evaporation`）

仅H内归属原批次Qc的真实放行后事件，与制备事件账不重叠。条件项，按真实接收空气介质和释放时点测量。独立核对进出口湿度与水分后真实H2O CAS7732-18-5净蒸发；不是外购蒸汽、液水或结构羟基。 保留分子总量V及来源分区，不由候选流推定发生。绑定身份前须无歧义匹配分子物种、CAS、相态、来源及接收介质；宽泛同义词不确立化学等价。

- 选定流：排至空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：N / Qc；仅采用同一次计算结果。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_water`
- 来源：`ilcd-allocation-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | 仅在需分配的归因场景使用本层级。工业来源描述不确立LCA分配或默认经济比例。分配上游负荷之前先说明真实动物／肉／骨功能及其共同接口。 | ilcd-allocation-2010 |
| allocation_subdivide | all inventory rows | 首先依据真实分表／作业记录及物理或虚拟细分，直接归属专属收集、物种特定分拣、冷却与清洗。保留完整共同过程清单，明确剩余及Q0作业，不只选择成功班次。 | ilcd-allocation-2010 |
| allocation_causality | all inventory rows | 对每一剩余交换识别并证明其与各共功能之间的决定性物理因果。冷却热负荷与时长可能共同决定一种服务，清洗事件／污载可能决定另一种。质量、时间、蛋白、能量或动物数并非因可取得就自动有因果性。不同交换无需使用同一标准。 | ilcd-allocation-2010 |
| allocation_residual | all inventory rows | 只有真正未解决的共同过程负荷才进入市场价值分配。使用同一共同过程门、实际状态下各真实共功能的同期价值，记录数量、价格、期间、收费服务处理及敏感性。不得把原骨价格与不同门口的下游肉／明胶价格混合。基准缺失或不适用时明确保留未解决分配，不编比例或设零。 | ilcd-allocation-2010 |
| allocation_no_credit | all processes | 内部原骨转移、返还包装和循环水仅在对应实物接口相消，不生成额外生产、替代产品、避免处置信用或第二供方。废物处理按真实处理供方及质量连接一次；骨内保留碳不是自动负排放。 | ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

所有协议仅收集原始未除的量、状态与记录。aggregation_rule中的“per reference flow”只是最终report_once结果的目标基准标签，不是在采集端做除法；卡片、协议与计算只共享同一次归一化。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw | bone_preparation | 每项原子事件及继承向量 | foreground_record | 事件ID; 行ID; 工序; 批次; 供方; 来源与去向; 原始单位; 原始量或速率; 区间; 期初期末库存; 继承交换向量; 真实F; 证实的OTHER重复X; Qc | 不预除分母，核对凭证、秤、仪表和保管账；保留缺测与不确定标记。 | original unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_bone | bone_preparation | 整份湿原骨及上游关联 | foreground_record | 牛分类单元; 来源部位; 批次; 屠宰分割接口; 非食用指定; 检疫去向决定; 毛皮重kg; 组织组成; 水相态; 供方边界; 继承向量 | 使用校准毛皮重秤及批次单据；按明确采样法独立测组成与水，不套手册名义比例。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_release | bone_preparation | 首次整体质量放行 | foreground_record | 放行事件ID; 原批次; 批次谱系; 净湿kg; 秤校准; 皮重; 非食用验收; 拒收; 期末FG; 排除历史放行; Q; Qc | 将校准湿称量与首次放行证据关联；跨历史已放行批次及合格期末FG检查唯一性。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_transport | bone_preparation | 真实入厂冷藏公路服务 | foreground_record | 路线; 供方; 载荷kg; 真实里程km; 冷藏服务; 空驶责任; 供方覆盖; 重复上游路段 | 采用真实货运及发运记录；归一化前一次计算原始kg*km，不把原生示例里程作为默认值。 | kg*km | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_energy | bone_preparation | 设备冷却卫生及FG电力 | foreground_record | 表ID; 电压; 地域; 供方组合; 表起止值; kWh或MJ; 工序; 首次放行或FG服务; 待机与失败; 因果服务驱动量; 观察H | 尽可能使用分表，与完整场址总量及真实作业核对；区别电力与外供热及其载体。 | original energy unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_water | bone_preparation | 新鲜洗水及每种水相 | foreground_record | 表起止值; 积分体积或真实速率; 区间; 独立密度状态; 新鲜进入; 内部复用; 液体出口; 附着水; 湿度; 蒸发; 凝水; 结构水; 不确定性 | 独立测量进出口总量及水状态。仅真实速率积分；累计体积不乘时间。保留来源分区，不任意用反应水填残差。 | original mass or volume unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_formulations | bone_preparation | 完整外购清洗制剂 | foreground_record | 供方制剂; SDS或规格; 整份溶液质量; 含量; 活性物质; 载水; 真实稀释水; 混合电力; 溢漏; 库存; 浓度兼容性 | 完整外购制剂称量计入一次；含量、活性和载体作不叠加子账；分别测量真实厂内配制投入与损失。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_refrigerant | bone_preparation | 氨充装补充回收与损失 | foreground_record | 设备制冷剂身份; 期初期末充装; 真实补充; 回收接收; 回收外送; 废物; 分子泄漏; 泄漏测试; 服务批次; 相态纯度 | 将充装平衡与维修及泄漏记录核对。不能把同一泄漏在平衡与检测器中重复相加；来源批次分开且不缩减损失总量。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_maintenance | bone_preparation | 真实设备更换与油品 | foreground_record | 制品ID; 实测质量; 合金或油配方; 供方制造; 安装退役; 真实维修; 更换部件; 废物总量; 历史服务; 分配证据 | 采用真实采购维修记录；整件设备需制造供方，不只是材料质量。保留实物更换退役及新增F。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_waste | bone_preparation | 每种拒收固体流 | foreground_record | 来源事件; 原批次; 湿总质量; 骨或组织或细屑身份; 残余水; 不重叠来源分区; 保管; 去向; 处理供方; 退货区别 | 称量每项真实独立收集流并与物料库存核对。保留整份湿流或实测不叠加组分，绝不能二者叠加为总量。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_wastewater | bone_preparation | 每出口一份实物废水流 | foreground_record | 出口ID; 实测湿总量; 独立密度; 采样时间; 溶解固体; 悬浮固体; COD; TOC; TN; 物种特定分析; 真实供方; 内部来源分区 | 核对真实废水总量与采样；质量指标不是分子质量。只计一份处理接口，若实际场内处理则另保留其过程。 | original mass or volume unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_species | bone_preparation | 真实化学物种及接收介质 | foreground_record | 物种; CAS; 物相; 碳来源; 来源工序; 接收介质; 排口; 浓度基准; 真实气体速率或积分体积; 温度; 压力; 湿度; 区间; 独立摄取; 不确定性 | 采用物种特定测量及实际干湿参考状态换算；速率只积分一次，累计体积直接使用。保留总量净量标签及独立总质量／元素闭合，不由聚合指标编排放。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg | fg_service | 按原批次的FG保管服务与退货 | foreground_record | 原Qc; 首次放行关联; 期初期末FG kg; 继承逐交换向量; 实物毛发运; 退货; 原交付冲回; 腐败; 水分变化; 复验; 真实服务F; H | 按批次时间核对保管责任。服务与负荷向量区别于实物库存；仅成对内部放行转移可相消。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_pack | fg_service | 每种包装件及外部返还 | foreground_record | 制品及聚合物; 实测皮重; 空包装期初期末; 附着WIP FG期初期末; 周转期初期末; 外购; 首次非购买外部接收; 所有权及供方覆盖; 同件本站先前外发关联的真实退回; 毛发运包装; 对外返还; 废物; 内部复用; 继承服务负荷 | 计件并独立称量每种真实制品批次。核对完整boundary_pack等式，不假定单件质量或按净发运简化包装。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_raw | fg_service | 仅放行后：每项原子事件及继承向量 | foreground_record | 事件ID; 行ID; 工序; 批次; 供方; 来源与去向; 原始单位; 原始量或速率; 区间; 期初期末库存; 继承交换向量; 真实F; 证实的OTHER重复X; Qc | H内不重叠放行后事件保留原Qc。不预除分母，核对凭证、秤、仪表和保管账；保留缺测与不确定标记。 | original unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_energy | fg_service | 仅放行后：设备冷却卫生及FG电力 | foreground_record | 表ID; 电压; 地域; 供方组合; 表起止值; kWh或MJ; 工序; 首次放行或FG服务; 待机与失败; 因果服务驱动量; 观察H | H内不重叠放行后事件保留原Qc。尽可能使用分表，与完整场址总量及真实作业核对；区别电力与外供热及其载体。 | original energy unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_water | fg_service | 仅放行后：新鲜洗水及每种水相 | foreground_record | 表起止值; 积分体积或真实速率; 区间; 独立密度状态; 新鲜进入; 内部复用; 液体出口; 附着水; 湿度; 蒸发; 凝水; 结构水; 不确定性 | H内不重叠放行后事件保留原Qc。独立测量进出口总量及水状态。仅真实速率积分；累计体积不乘时间。保留来源分区，不任意用反应水填残差。 | original mass or volume unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_refrigerant | fg_service | 仅放行后：氨充装补充回收与损失 | foreground_record | 设备制冷剂身份; 期初期末充装; 真实补充; 回收接收; 回收外送; 废物; 分子泄漏; 泄漏测试; 服务批次; 相态纯度 | H内不重叠放行后事件保留原Qc。将充装平衡与维修及泄漏记录核对。不能把同一泄漏在平衡与检测器中重复相加；来源批次分开且不缩减损失总量。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_wastewater | fg_service | 仅放行后：每出口一份实物废水流 | foreground_record | 出口ID; 实测湿总量; 独立密度; 采样时间; 溶解固体; 悬浮固体; COD; TOC; TN; 物种特定分析; 真实供方; 内部来源分区 | H内不重叠放行后事件保留原Qc。核对真实废水总量与采样；质量指标不是分子质量。只计一份处理接口，若实际场内处理则另保留其过程。 | original mass or volume unit | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |
| cp_fg_species | fg_service | 仅放行后：真实化学物种及接收介质 | foreground_record | 物种; CAS; 物相; 碳来源; 来源工序; 接收介质; 排口; 浓度基准; 真实气体速率或积分体积; 温度; 压力; 湿度; 区间; 独立摄取; 不确定性 | H内不重叠放行后事件保留原Qc。采用物种特定测量及实际干湿参考状态换算；速率只积分一次，累计体积直接使用。保留总量净量标签及独立总质量／元素闭合，不由聚合指标编排放。 | kg | 每事件与期末 | 完整H及期初期末继承历史 | 实际场址及供方接口 | per reference flow | 校准；原始记录；保管谱系；缺测不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_cohort | released_bone | 排除重复放行后汇总实测真实新增首次放行湿净kg形成Q，原批次Qc=Q；合格期末FG只含一次，不能二次添加。历史已放行退货或接收保留原Qc。 | cp_release; cp_bone; cp_fg | Q; Qc | ilcd-allocation-2010 |
| raw_numerator | all inventory rows | 原始单位换算及真实速率积分各一次。独立核对实物V与继承向量；按第7节确定环境归属A。N依标签与来源选择V或A通道；实物废物、排放、维修更换及回流始终保留完整V。加入真实F，仅抵消证实的OTHER同侧X。 | cp_raw; cp_bone; cp_energy; cp_water; cp_formulations; cp_transport; cp_refrigerant; cp_maintenance; cp_waste; cp_wastewater; cp_species; cp_fg; cp_pack; cp_fg_raw; cp_fg_energy; cp_fg_water; cp_fg_refrigerant; cp_fg_wastewater; cp_fg_species | N | ilcd-allocation-2010 |
| report_once | all inventory rows | Qc>0时逐行／批次／通道执行一次r=N/Qc。新增制备Qc=Q；放行后服务保留原Qc。实物通道使用总量V；环境通道使用带继承向量的归属A。Qc=0时保留全部真实作业库存而不出单位结果。仅released_bone的N为真实新增首次放行实物kg的Qc，结果恰为1千克。卡片与采集聚合标签引用此结果，不再除一次，绝不除H。 | N; Qc; cp_raw; cp_release; cp_fg; cp_fg_raw | r | ilcd-allocation-2010 |
| physical_closure | all inventory rows | 制备、FG及合并门各自闭合：期初+真实外部投入+内部接收=期末+真实外部流出+内部转移。只在合并账中抵消成对内部转移。独立闭合相关元素与水相；残差保持不确定，不编反应水或气体。 | cp_bone; cp_water; cp_waste; cp_wastewater; cp_species; cp_fg; cp_pack; cp_fg_water; cp_fg_wastewater; cp_fg_species | physical_balance | ilcd-allocation-2010 |
| package_closure | all inventory rows | 按每种制品及原批次执行boundary_pack。内部复用仅为成对转移，保留包装毛发运、真实外返及废物。服务负荷关联真实原Qc，不能缩减实测制品kg。 | cp_pack; cp_fg | package_balance | ilcd-allocation-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 匹配完整原生身份，含所有名称、注释、同义词、CAS、路线、等级、地域、介质、类型及全部属性。歧义或不兼容候选不绑定，具体交换仍保留。 | 身份直读证据；精确支撑链；真实供方规格 |
| dq_origin | raw_bone | 保留实际牛源、非食用去向、分离状态及上游供方分配；动物合格证明本身不确立非食用用途。 | 批次来源保管证据；检疫／去向记录；供方边界 |
| dq_complete | all processes | 保留失败、待机、试验、启停、清洗、返工、Q0及全部原料WIP和FG实物与继承库存。缺测及未观察后续服务可见；UUID空白不是交换零值。 | 完整事件记录；库存平衡；缺测台账 |
| dq_measurement | all inventory rows | 记录校准、样本代表性、真实单位状态换算及不确定性；无固定骨组成、密度、收率、温度、寿命或排放因子。 | 秤表校准证书；测试方法；原始读数 |
| dq_sources | all processes | UN用于分类、MLA用于澳大利亚骨料市场区别、Akiolis用于收集及食品原料反证、ILCD用于分配。条件性清单及闭合要求是本PCR的方法综合，不是行业实测默认值。综合证据不等于同一工厂或当前法定合规。 | 逐来源范围日期评估；原始上下文 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_bone | 恰有一项关联首次放行Product输出定义1千克湿参考；核心UUID、属性、单位、牛源非食用范围及双语一致。真实弃置Waste不能替代。 | un-cpc3-2025; ec-animal-by-products |
| validate_boundary | all processes | 接受方法前核实原始终端及实际交接；保留上游动物／肉负荷并排除深度转化。许可失败影响合格去向／Q，不影响保留真实负荷。 | ilcd-allocation-2010 |
| validate_accounting | all inventory rows | 检查Q唯一性、原Qc、Q0、未归一化采集、单次N/Qc、完整原料WIP和FG继承及三个实物门。不得按分配缩减废物排放总量、再次除H或把真实F当X扣除。 | ilcd-allocation-2010 |
| validate_atomic | all inventory rows | 每项实际交换含初表未列新投入，均须具体原子身份、原生单位及关联协议来源上下文。不能将实际投入、排放或残留藏入other、zero或集合卡；替代表述须有不叠加桥接。 | ilcd-allocation-2010 |
| validate_pack_species | all inventory rows | 逐项核实包装等式及实际分子物种介质，独立于湿总质量和元素平衡。不得把COD/TN/TOC直接变成分子或用一个残差拟合两个未知。 | ilcd-allocation-2010 |
| validate_missing | all processes | 供方／辅助身份缺失及未来场址数量作为普通数据要求披露。真正未证核心终端或未解决方法关系仍为实质阻断；工程检查不批准科学、翻译、映射或发布。 | ilcd-allocation-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 为兼容获准非食用工业过程提供转化前原骨供应 |
| allowed_use | 仅限记录的牛源原始状态、湿质量、供方接口、首次放行批次及服务期 |
| excluded_use | 整叶39110覆盖；食用汤料骨；热炼或化学转化产品；自动零负荷废物；固定组成或避免信用；检疫许可 |
| required_metadata | 全部参考限定、每项原子原生限制、供方边界、来源协议计算关联、Q/Qc/H、实物V及归属A、原料WIP和FG继承向量 |
| required_quality_disclosure | 真实测量覆盖、不确定性、普通UUID／供方缺口、未解决实质阻断、证据综合及未观察后续服务 |
| update_trigger | 物种来源去向变化；深加工变化；核心身份或供方变化；放行库存边界变化；新增实际交换或实测方法证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division. CPC Ver.3.0 Explanatory Notes, 30 June 2025, pp.33–36,64,69–72,88–91,198–199. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39110含未加工或简单处理的骨；区分食用内脏、生皮、熬制油脂和粉料。本方法范围更窄，即使整个分类包含粉料，本方法也排除粉料。 |
| ec-animal-by-products | official_guidance | Regulation (EC) 1069/2009, Articles 8–10, especially 10(a). https://eur-lex.europa.eu/eli/reg/2009/1069/oj/eng | 风险分类及非人类食用用途，包括原本适食但商业上转向其他用途的部位。类别及屠宰资格不证明具体骨批、非食去向或本地许可；不向其他场址移植欧盟要求。 |
| akiolis-category3 | literature | Akiolis. Collection from the meat industry. https://www.akiolis.com/en/sourcing/collection-meat-industry | 企业一级资料描述肉类行业骨及副产物收集；明胶用骨明确为食品原料，因此商业骨料可得性不能证明本非食品路线。不推定场址数量或供方资格。 |
| ilcd-allocation-2010 | handbook | European Commission JRC. ILCD Handbook, General guide for LCA—Detailed guidance, first edition March2010, section7.9.3, printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需分配的归因场景：虚拟细分、逐交换的决定性物理因果，再对真正剩余按实际共同门及状态的市场价值处理。不引入固定比例、任意选法、避免生产信用或回收公式。 |
| mla-bone-disposition | literature | Coleby Process Consulting for Meat & Livestock Australia. Beef Bone Disposition, Australia 2024, V.RMH.2402, PDF pages 2–3 (printed 2–3). https://www.mla.com.au/globalassets/mla-corporate/research-and-development/documents/v.rmh.2402-mla-beef-bone-disposition-memo-0125.pdf | 区分屠宰线及剔骨间骨料，以及下游炼制、脱脂骨粒、骨髓市场。支持工业原骨接口，不证明实际批次、非食资格或场址收率。全国估算及胴体质量不能作为前景实测，转化过程仍排除。 |
| un-cpc3-2026 | official_guidance | UNSD. CPC Ver.3.0 explanatory notes, 23 October 2026 workbook, CPC3!A1861:D1861. https://unstats.un.org/unsd/econstats/classifications/cpc | 印证冻结2025版本的原骨包含及邻界排除，不改变冻结分类库存，不批准本较窄方法。 |
