---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.brewing-or-distilling-dregs-and-waste
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 作为单一饲料原料的整份麦芽大麦湿啤酒糟

## 1. 范围与适用性

本方法覆盖一种较窄湿态单一饲料原料：麦芽大麦啤酒酿造中，经真实lauter-tun或mash-filter麦汁固液分离形成、富含壳和纤维的整份湿糟，收集并仅在实际存在时机械压榨/筛分，随后首次放行为具名牛饲料原料用途。起点是已分离原湿糟，不是仅待包装的外购成品饲料。真实上游麦芽、逐种声明谷物辅料、粉碎、糖化和麦汁/湿糟共同分离仍须提供完整物理及继承负荷接口。来源综合行业酿造指南、真实散装湿饲料供货和设备原件；不声称这些来源描述同一SKU、工厂、配方或订单。逐批采集实际谷物/辅料物种及比例、可溶物携带、压榨状态和饲用合格证据，不编大麦百分比。Lauter和mash-filter是实际路线选择，不强制同时存在，不据此另造canonical身份。

排除整粒大麦或麦芽、制麦根芽、普通干法制粉麸皮（39120）、淀粉厂残渣（39130）、葡萄酒酒脚/酒石（39170）、制糖残余物（39141/39149）、啤酒和无醇啤酒、作为参考产品的糖化麦汁、啤酒酵母及混酵母品、热/冷trub、酒花渣、蒸馏DDG/DDGS、整份stillage、工业乙醇残余物、复合饲料、干燥/造粒糟、化学保存或青贮/发酵供货及营养等效主张。真实发生的超范围作业仍须披露物理事件及负荷；资格失败不能删去其投入/排放。Q为首次合格净湿质量放行，包含已合格期末FG一次；后续仓储、散装装车及实际包装保留原批服务。不给默认含水、组成、得率、麦汁糟比、密度、价格、能耗、保质期、替代物或避免负荷。分类中的waste父类不决定零负荷或法律状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.brewing-or-distilling-dregs-and-waste |
| classification_refs | CPC 3.0:39160 酿造或蒸馏糟粕及废料，麦芽大麦鲜湿啤酒糟范围以正式分类裁定为准 |
| covered_products | 整份湿态、未混合、未保存处理的麦芽大麦酿造湿糟；声明实际谷物辅料和压榨状态；一个具名饲料原料接收用途 |
| excluded_products | 整粒谷物/麦芽；制麦根芽；麸皮；淀粉残渣；制糖残余物；葡萄酒酒脚/酒石；麦汁；啤酒；酵母/trub/酒花混合物；蒸馏糟/stillage；复合饲料；干燥/造粒/青贮/保存处理品 |
| representative_product | 首次饲用品质放行的麦芽大麦酿造湿糟 |
| production_route | 真实麦汁分离固体交接；收集；条件性机械压榨/除杂；取样及首次放行；原批仓储/散装供货 |
| market_state | 按放行湿态提供的单一饲料原料；净质量和干物质独立量测；不混酵母或其他残余物；包装另账 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向具名牛饲料接收用途提供一份合格整份湿酿造糟单一原料 |
| How much | 首次合格放行、实测同含水/压榨状态的1 kg净湿物料 |
| How well | 真实接收饲用规格、实测干物质/含水、组成追溯、异物及品质检测；无营养替代率 |
| How long or cycle | 一个可追溯首次放行批群，记录实际约定保存/供货条件，保留Qc/H；无默认保质期 |
| reference_flow_link | released_wet_grain |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 整份麦芽大麦湿啤酒糟 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 酿造厂与批次; 麦芽大麦来源及逐种谷物辅料物种/比例; 实际lauter-tun或mash-filter路线; 交接门及上游Qc/负荷向量; 未混合富壳纤维整份湿糟身份; 残留可溶提取物及实际压榨状态; 湿质量及独立干物质/含水方法; 首次饲用品质放行登记Q; 异物及真实饲用品质规格/检验; 具名牛饲料原料接收方/用途; 真实Product/Waste法律状态及处理所有者; 实际保存时间温度卫生和供货条件; 无干燥造粒青贮化学保存及酵母/trub/酒花添加; 场址与观察期H; 期初/末原料WIP及FG和原批Qc; 真实提供方/电压/燃料/载体状态; 逐种包装保管及实测单位桥接; 选定身份后核实的流限制 |

全部限定须在数据集元数据、产品/参考说明或等效可消费上下文声明。参考产品为流UUID未决的语义候选；不得以泛化副产品身份代替对真实终端的核实。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以同一状态首次合格净湿产品1 kg为参考，不含包装称量。Q汇总唯一首次放行，含已合格期末FG一次，排除期初既放行FG、重复放行和发运；不以干质量或营养量替Q。 |
| wet_dry_bridge | all wet grain and liquor rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同一批/时间/状态独立量测湿质量与含水/干物质。水、干物质、蛋白、纤维检测是非叠加组分视图，不是额外采购或排放流。不默认水、提取物、蛋白或密度；一个残差不能解两个未知。 |
| raw_basis | all inventory rows | Native measured property | native unit | 保留未除基准的raw分子。在第8节normalize_once之前先做原始单位/速率转换和真实分配/继承向量；卡片/汇总仅引用同一次结果。Q0保留全部负荷，不出单位结果。原批服务用原Qc；H仅观察期。 |
| energy_carriers | support | Native energy and carrier mass | MJ; kg | 电量kWh到MJ用3.6。供热需实际供回载体质量、焓、状态和供方水能约定。已积分气液体积不再乘时间，只有真实速率才积分。密度须物质/状态独立实测，次级系数不证明密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际分离后、收集/条件压榨及首次饲用品质放行前的富壳纤维麦芽大麦湿酿造糟；必须完整交接上游共同过程物理/负荷 |
| starting_condition_role | upstream_intermediate |
| product_classification_scope | CPC39160中的窄湿酿造糟案例；相邻制粉/淀粉/蒸馏/麦芽/啤酒/酵母/复合饲料身份不同 |
| recursive_input_rule | 同类购入或退回湿糟保留真实供方批阶段、物理状态、前Qc和继承向量一次；递归不虚造父麦芽采购或重置放行 |
| upstream_dataset_requirement | 真实麦芽/逐种辅料供给及共同粉碎/糖化/麦汁分离，完整水/固体/麦汁闭合、损失/库存、供方方法/门及相容归糟环境向量 |
| disclosure | 全部限定；真实工艺设备路线；上游分配及Beer PEF限制；真实Q/Qc/H；gross实物与继承负荷分账；真实处理所有者和包装；普通缺口及真hold |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_upstream | raw_wet_grain | 真实供方的麦芽/辅料供给、粉碎、糖化及麦汁/湿糟共同分离接口与继承负荷须承接一次。声明每个真实投入/输出、水/干物质、损失/库存、分配门及供方原Qc。不重购父谷物，不复造啤酒线。关键上游负荷缺失是数据集hold，不是免费残余物。 | kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| b_operations | all processes | 纳入真实收集、机械压榨、筛分、输送、储存、称量、取样、清理、维修、公用工程、失败/启停/空转/Q0/返工及未授权作业。窄资格不能删真实操作或流；实际干燥、保存处理或混配必须披露，并在解决前不能使用本窄参考身份。 | kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; vettertec-brewery |
| b_internal | liquid and grain transfers | 仅实测两端匹配的内流可相消，上游负荷仍一次保留。回麦汁/液体不同时算新水及废水。压榨液和回收麦汁按独立质量/水/干物质/可溶物分列；真实对外Product、Waste移交及环境出口各有所有者/门。 | ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation |
| b_release | released_wet_grain; fg_service | 首次品质放行Q包含本期首次合格期末FG一次。放行后仓储/装车/包装按原Qc保留，含历史期初FG、真实客户退回及原交付冲回、真实增量返工F和继承向量。合并物理门中内部Q相消，不能再把期末FG加为产量。 | kw-brewers-grains-2026; ilcd-2010-allocation |
| b_atomic | all inventory rows | 每个实际交换原子化；未列真实投入、整份供货制剂、逐种燃料/化学品/包装/维修件/废物和真实环境物种须逐项新增。条件性不存在须操作证据，不能默认零。废水和粉尘是物理混合物，不是虚构分子；COD/TOC/总N/NOx仅非叠加指标，除非实测真实物种分拆。 | ba-solid-2024; ilcd-2010-allocation |
| b_native | UUID-bearing rows | 核完整原生身份、路线、形态、组成、已有CAS、地域、供应组合、介质、Product/Waste类型及精确参考属性/单位链。湿糟语义候选须满足全部参考限定；泛化副产品名称不能确立身份。真实提供方/负荷适配与flow身份分别核查。 | kw-brewers-grains-2026; ilcd-2010-allocation |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| grain_recovery | 收集及条件压榨/除杂 | required | 真实分离湿糟交接及回收路线 | foreground | 每 1 kg 参考流 |
| release | 取样及首次饲用品质放行 | required | 同批真实接收用途及规格 | foreground | 每 1 kg 参考流 |
| fg_service | 原批仓储及散装供货 | required | 全部真实服务含期初FG及退回历史 | foreground | 每 1 kg 参考流 |
| support | 原子公用工程清理维修及排放 | conditional | 逐真实阶段操作且保留失败和Q0 | foreground | 每 1 kg 参考流 |
| packaging | 逐防护包装件保管 | conditional | 每个真实防护膜/箱；散装糟不强制包装 | foreground | 每 1 kg 参考流 |

每张条件卡须真实存在/不存在证据，不默认零。未列实际交换逐一补入。实物gross数量与继承环境负荷为独立非叠加视图。采集保留未除基准raw事件，全部卡仅引用第8节normalize_once一次结果。

### 过程：收集及条件压榨/除杂（`grain_recovery`）

#### 输入

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`raw_wet_grain`）

实际lauter-tun或mash-filter固体出口、回收操作前接收的整份湿啤酒糟。独立称量；水和附着可溶提取物保留在这一整份物料主账。必须一次承接真实酿造方的麦芽大麦及逐种谷物辅料供给、粉碎、糖化水、麦汁分离、麦汁/固体/损失/库存的总量记录、上游原Qc及归属糟的继承环境负荷向量。前景不再购买父麦芽，不复造已表达的啤酒线；之后啤酒专属发酵、冷却、灌装不得无差别归糟。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_upstream`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation; brewers-europe-beer-pefcr-2025

###### 返回返工的麦芽大麦湿啤酒糟（`rework_wet_grain`）

仅记录同一整份湿糟真实配对的返工流入，两端称量。保留前阶段Qc和继承负荷向量；外部退回的既放行批保留原放行及原交付冲回。复验和循环不生成新Q。阶段特定UUID缺口不能用不相容混饲料替代。

- 选定流：返回返工的麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`grain_to_release`）

实际收集及必要机械压榨、除杂后转入取样和首次饲用品质放行的整份湿糟。独立称量和检测，不能由输入减不明残差推算。与grain_for_release严格配对；本终端不含干燥、混酵母、化学保存或青贮。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：kw-brewers-grains-2026; ponndorf-wet-conveyors; vettertec-brewery

###### 回收的未发酵麦芽大麦麦汁（`recovered_wort`）

仅限实际分离并被酿造方作为麦汁接收的液体。独立量测体积或湿质量、提取物/溶解固体、悬浮固体及状态。声明产品接收和接收方或配对内回流；内部回流仅与主线对应接收相消。它不是新水，不得同时算废水；无默认回收量或信用。

- 选定流：回收的未发酵麦芽大麦麦汁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liquid`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

##### 废物流

###### 弃置湿糟压榨液（`press_liquor`）

仅实际送处理且非作为麦汁接收的压榨液。独立量测整份液体，水、溶解和悬浮物是子账。记录处理所有者和门；回主线则用配对内流，真实分流必须独立计量。

- 选定流：弃置湿糟压榨液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 从湿啤酒糟分出的石块杂质（`stone_reject`）

实际除杂时独立称量的石块组分；附着糟和水按一整份物流计量。不把金属、腐败物或粉尘藏入本卡。

- 选定流：从湿啤酒糟分出的石块杂质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 从湿啤酒糟分出的铁质金属杂质（`ferrous_reject`）

仅记录实际筛网或磁选移出的实测铁质异物，保留处理去向。它是移除污染物，不是购买维修部件，也非自动可售共产品。

- 选定流：从湿啤酒糟分出的铁质金属杂质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 送处置的麦芽大麦湿糟洒漏物（`grain_spill`）

量测收集/输送、失败启动、泄漏、清理或未授权作业中实际损失的整份湿糟。保留继承负荷和真实处理；回收内返另行配对。

- 选定流：送处置的麦芽大麦湿糟洒漏物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

##### 基本流

### 过程：取样及首次饲用品质放行（`release`）

#### 输入

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`grain_for_release`）

与grain_to_release配对的整份湿糟，是内部移交，不是第二次外购。保留实测组成、实际压榨状态和继承向量，不是第二个功能输出。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：kw-brewers-grains-2026; ponndorf-wet-conveyors

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`released_wet_grain`）

唯一参考输出为同一实测状态、首次通过合格放行、提供给具名牛饲料单一原料用途的净湿质量，不含包装。逐批放行须有实际干物质/含水、配方和辅料追溯、异物、饲用品质检测及约定卫生保存/供货条件。Q包括本期首次合格的期末FG一次；销售、装车、期初既放行FG、重复检验、返工重发均不造Q。取样和失败作为真实输出留在Q外。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_release`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 待返工麦芽大麦湿啤酒糟（`rework_transfer`）

仅实际待处理物返回grain_recovery，与rework_wet_grain的质量和继承向量配对并内部相消；保留检验失败及返工真实新增材料、能耗。本转移不是合格Q。

- 选定流：待返工麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

##### 废物流

###### 不合格麦芽大麦湿啤酒糟（`release_reject`）

整份失败或腐败湿糟含启停、试验批，按实测状态称量，保留原负荷及真实所有者/去向。不合格批不入Q；若实际送返工，用配对返工流，不在此重复计同一质量。

- 选定流：不合格麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：kw-brewers-grains-2026; ba-solid-2024

###### 消耗的湿啤酒糟检验样品（`lab_sample`）

实际破坏性检验样作为独立湿态出口并记录去向；退回样需真实配对回流。取样不能从物理闭合中消失，也不生成合格产品。

- 选定流：消耗的湿啤酒糟检验样品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：kw-brewers-grains-2026; ba-solid-2024

##### 基本流

### 过程：原批仓储及散装供货（`fg_service`）

#### 输入

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`released_custody_in`）

首次放行Q的内部接收和另记的历史期初FG属保管，不是新购入。每批保留原放行Qc及逐交换负荷向量，不暗示新造湿糟。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

###### 客户退回的麦芽大麦湿啤酒糟（`customer_return`）

仅真实对外退回、仍符合饲用要求的同状态Product湿糟。独立称量检测，保留原交付冲回、放行Qc和负荷历史。腐败或法律为Waste的退回另用spoiled_return。本条件阶段身份保持UUID未绑定，不称为新产量。

- 选定流：客户退回的麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

##### 废物流

###### 客户退回的腐败麦芽大麦湿啤酒糟（`spoiled_return`）

实际腐败退回在本真实接收门按Waste接收，记录原交付冲回和历史负荷一次、湿质量及独立干物质、真实处理所有者和后续去向。不是饲用合格Product，不是新Q，不与customer_return重复计同一质量。

- 选定流：客户退回的腐败麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

##### 基本流

#### 输出

##### 产品流

###### 整份麦芽大麦湿啤酒糟（`gross_dispatch`）

实物向外毛发运的湿糟，包括同一饲用合格状态的重发，逐票记录并保留原批Qc；不以净销量替实物总量，不把发运再加Q。到农场运输及动物饲用是独立下游阶段，除非明确增加实际边界。 流UUID仍未决；绑定身份前须核实整份湿糟、真实路线、配方和接收规格。

- 选定流：整份麦芽大麦湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ilcd-2010-allocation

##### 废物流

###### 成品保管中弃置的麦芽大麦湿糟（`fg_discard`）

实际腐败湿糟库存按一个已记录处置路线移出，含接收后物理追溯的腐败客户退回。独立称整份湿质量，保留原批和真实新增服务负荷。不同废物去向需独立原子行；实际洒漏和取样出口分别用fg_spill和fg_sample。

- 选定流：成品保管中弃置的麦芽大麦湿糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ba-solid-2024

###### 成品搬运中洒漏的麦芽大麦湿糟（`fg_spill`）

独立量测原批搬运门真实湿糟洒漏，记录实际收集者和处置/返回去向。真实回收内返须配对，不再同时计弃置。

- 选定流：成品搬运中洒漏的麦芽大麦湿糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ba-solid-2024

###### 消耗的湿啤酒糟保管样品（`fg_sample`）

实际保管或发运破坏性检验样，单独称量并保留原Qc和负荷；不是第二次品质放行输出，不是不明库存损失。

- 选定流：消耗的湿啤酒糟保管样品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：kw-brewers-grains-2026; ba-solid-2024

##### 基本流

### 过程：原子公用工程清理维修及排放（`support`）

#### 输入

##### 产品流

###### 交流电（`electricity`）

仅记录实际外购交流电网电量。选定相容流UUID前记录供电电压、地域、组合、提供方及计量门。电量以MJ表达（kWh乘3.6），不引入热效率。计入输送、压榨、仪表、风机、自有空压机、空转、Q0、清理和原批服务，内部电量不重复购买。

- 选定流：交流电
- 流属性/单位：电能 / MJ
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; ilcd-2010-allocation

###### 自来水（`tap_water`）

仅真实市政处理/饮用自来水，用于清理、维修及有记录的物理添加。候选为市政处理水；实际提供方身份仍须核实。称量或用独立建立的同状态水密度和计量体积换算，数据库次级体积系数不是现场实测密度。原湿糟或回流液中的水不能再购为新水。失败及未授权作业后真实新增水F仍保留。

- 选定流：自来水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; ilcd-2010-allocation

###### 柴油（`diesel`）

仅实际搬运/装车设备用柴油，整份供货制剂采购一次。柴油语义候选未特指牌号、配方、密度、低位热值、炼制路线、地域或提供方；真实供给需采集，不编默认值。独立量测燃料质量，体积桥接须核真实密度/状态，并逐种追踪燃烧物种。购买机械服务时不得再重复其中燃料。

- 选定流：柴油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 外供压缩空气（`compressed_air`）

仅真实外供空气。记录组成、压力、温度以及质量，或独立实测同状态密度/体积。自有空压机电量及内部空气移交不是再外购。

- 选定流：外供压缩空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 外购蒸汽载热体（`steam_supply`）

仅真实外供蒸汽，不假定干燥器或锅炉。记录质量、压力、温度、干度、焓、供方水能约定、冷凝水返回及真实净热一次。载体质量闭合和热非叠加，不购买虚构锅炉燃料。

- 选定流：外购蒸汽载热体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 外购热水载热体（`hot_water_supply`）

仅真实外部热水供热，与市政清理水区分。记录两门质量/流量、温度、焓及真实回水；仅MJ标签不能证明净供热。

- 选定流：外购热水载热体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 管道天然气燃料混合物（`natural_gas`）

仅本门实际燃烧气体，例如有记录的热水制备。保留实际组成、压力、温度、质量/体积及实测热值基准；天然气混合物不能当作纯甲烷或不相干的工艺供气。本湿态终端无默认干燥燃料。

- 选定流：管道天然气燃料混合物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 氢氧化钠水性清洁制剂（`caustic_cleaner`）

仅实际购买的整份烧碱制剂，记录真实浓度、添加物、供方及接触控制。仅采购一次，活性NaOH和载水是非叠加检测子账。不同试剂浓度或配方不能确立清洗剂身份。

- 选定流：氢氧化钠水性清洁制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 矿物润滑油制剂（`mineral_lubricant`）

仅实际搬运设备完整矿物润滑剂；记录牌号、整份配方、存量、泄漏及排油去向。PAO全合成润滑油不能因同名润滑油而套用。实际其他润滑剂另设具体卡。

- 选定流：矿物润滑油制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### 不锈钢压榨筛网（`replacement_screen`）

仅真实完整更换筛网，记录合金、网目、质量及配件门；内含合金元素不再采购。失败或未授权维修的真实更换也保留；未核型钢名称不是筛网身份。

- 选定流：不锈钢压榨筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

##### 废物流

##### 基本流

###### 消耗的环境空气氧气（`oxygen_uptake`）

仅本所有者门内有记录燃烧、氧化或腐败实际消耗的氧气，须独立实测或经验证物种元素闭合支持。不默认空气质量，不由湿质量残差编反应水。未反应空气以独立实测组成作非叠加气体通过量闭合。

- 选定流：消耗的环境空气氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ilcd-2010-allocation

#### 输出

##### 产品流

###### 返回热供方的蒸汽冷凝水（`steam_condensate_return`）

仅所供蒸汽载体真实对外Product返回，记录实测质量、状态、焓及供方约定。不能仅凭名称套工艺蒸发冷凝液，也不同时算废水/新水信用；系统内冷凝水须配对。

- 选定流：返回热供方的蒸汽冷凝水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; ilcd-2010-allocation

###### 返回热供方的热水载体（`heat_water_return`）

仅热水供给真实外返，量测出口质量及热状态。对齐供回水提供方边界，真实水损、热和补水分别保留一次。

- 选定流：返回热供方的热水载体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ponndorf-wet-conveyors; ilcd-2010-allocation

##### 废物流

###### 湿糟设备清洗废水（`cleaning_effluent`）

真实送外部处理的整份废水；记录体积，需要质量时独立测密度，并以pH、COD/TOC及实测物质作非叠加表征。COD或总氮不是分子污染物质量。其他行业废水或未经处理直接排水不等同本外送处理流。真实处理所有者计处理排放一次。

- 选定流：湿糟设备清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liquid`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 废矿物润滑油（`drained_oil`）

实际单独收集的废矿物油，保留组成、污染、继承物料和真实废物处理者；不是未量测的油雾排放。

- 选定流：废矿物润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 废不锈钢压榨筛网（`removed_screen`）

实际移除筛网称量，明确附着物包含或分出量测。它不自动回收，不是原生替换件；报告所有者和去向。

- 选定流：废不锈钢压榨筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

###### 送处置的收集麦芽大麦谷物粉尘（`captured_dust`）

仅真实收集谷物粉尘，量测整份组成和湿态。它是废物移交流；未收集而逸出的颗粒物是独立出口。每个湿态厂不一定有粉尘，但发生时不得隐藏。

- 选定流：送处置的收集麦芽大麦谷物粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`
- 来源：ba-solid-2024; ponndorf-wet-conveyors

##### 基本流

###### 水蒸气（`water_vapour`）

实际独立确定排入指定空气介质的蒸发水；区分物料含水、蒸汽载体、冷凝水及反应水。简单收集/压榨不默认反应水；一个湿质量残差不能同时反推未知蒸发量和压榨液固形物。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 排入空气的麦芽大麦谷物颗粒物（`grain_particulate`）

真实排放的混合谷物颗粒，不是虚构单分子，也不是已收集废物。记录组成、空气动力学粒级、位置和介质；仅总粉尘监测不能绑定某化学粉尘流。

- 选定流：排入空气的麦芽大麦谷物颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 二氧化碳（化石源）（`fossil_co2`）

仅前景真实燃烧或其他已核来源；据实际燃料碳和氧化证据量测/计算，并核留存碳。不加上游电厂排放或默认干燥器排放。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：二氧化碳（化石源）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 二氧化碳（生物源）（`biogenic_co2`）

仅实测真实生物源释放，例如实际腐败；啤酒发酵不自动纳入分离湿糟前景。分清碳来源，无默认信用。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：二氧化碳（生物源）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 排入空气的甲烷（`methane_air`）

仅本门所有者承担的实际甲烷泄漏、腐败或处理排放，保留化石/生物来源及独立物种质量。不能把全部VOC、TOC或有机物当甲烷。

- 选定流：排入空气的甲烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 一氧化碳（化石源）（`carbon_monoxide`）

有记录燃烧事件、空气介质中的真实CO物种，以独立浓度乘正确积分的同状态气体体积，不把总碳标为CO。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：一氧化碳（化石源）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 排入空气的一氧化氮（`nitric_oxide`）

仅实际NO物种；以NO2计总NOx是指标，不能悄然同时推定NO和NO2。保留测量换算及排气边界。

- 选定流：排入空气的一氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 排入空气的二氧化氮（`nitrogen_dioxide`）

实际NO2物种须有独立物种分拆证据，不能把同一个总NOx结果同时复制到本卡和NO卡。

- 选定流：排入空气的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 一氧化二氮（`nitrous_oxide`）

实际N2O物种须实测或有经过验证的事件特定方法，不提供通用燃烧或处理因子。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：一氧化二氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

###### 二氧化硫（`sulfur_dioxide`）

实际燃料/操作产生的SO2物种，区分留存硫、其他硫物种及真实烟囱出口，不假定柴油硫含量或默认排放。 选定UUID前核实真实物种、适用的碳来源和最终空气细介质；保留实际量测排放，不设默认排放因子。

- 选定流：二氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：ba-solid-2024; ilcd-2010-allocation

### 过程：逐防护包装件保管（`packaging`）

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD）（`cover_purchase`）

仅实际新增供给：一件真实未增强、非泡沫、非自粘LDPE防护薄膜，不是复合膜或编织袋；实际质量、地域及供方须采集；无每张质量默认值。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：低密度聚乙烯薄膜（PE-LD）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 低密度聚乙烯薄膜（PE-LD）（`cover_return_in`）

仅实际外部退回接收：一件真实未增强、非泡沫、非自粘LDPE防护薄膜，不是复合膜或编织袋；实际质量、地域及供方须采集；无每张质量默认值。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：低密度聚乙烯薄膜（PE-LD）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 可重复使用HDPE湿糟运输箱（`bin_purchase`）

仅实际新增供给：一件真实完整HDPE箱，记录配件/组成并排除湿糟内容物；回收PE/PP容器路线不能证明所有原生或未知实际箱相容。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：可重复使用HDPE湿糟运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 可重复使用HDPE湿糟运输箱（`bin_return_in`）

仅实际外部退回接收：一件真实完整HDPE箱，记录配件/组成并排除湿糟内容物；回收PE/PP容器路线不能证明所有原生或未知实际箱相容。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：可重复使用HDPE湿糟运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD）（`cover_shipment`）

仅实际毛发运随附外出：一件真实未增强、非泡沫、非自粘LDPE防护薄膜，不是复合膜或编织袋；实际质量、地域及供方须采集；无每张质量默认值。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：低密度聚乙烯薄膜（PE-LD）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 低密度聚乙烯薄膜（PE-LD）（`cover_return_out`）

仅实际空件对外返回：一件真实未增强、非泡沫、非自粘LDPE防护薄膜，不是复合膜或编织袋；实际质量、地域及供方须采集；无每张质量默认值。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：低密度聚乙烯薄膜（PE-LD）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 可重复使用HDPE湿糟运输箱（`bin_shipment`）

仅实际毛发运随附外出：一件真实完整HDPE箱，记录配件/组成并排除湿糟内容物；回收PE/PP容器路线不能证明所有原生或未知实际箱相容。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：可重复使用HDPE湿糟运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 可重复使用HDPE湿糟运输箱（`bin_return_out`）

仅实际空件对外返回：一件真实完整HDPE箱，记录配件/组成并排除湿糟内容物；回收PE/PP容器路线不能证明所有原生或未知实际箱相容。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：可重复使用HDPE湿糟运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### 废物流

###### 废弃低密度聚乙烯薄膜（PE-LD）（`cover_waste`）

仅实际弃置件：一件真实未增强、非泡沫、非自粘LDPE防护薄膜，不是复合膜或编织袋；实际质量、地域及供方须采集；无每张质量默认值。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：废弃低密度聚乙烯薄膜（PE-LD）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### 废弃可重复使用HDPE湿糟运输箱（`bin_waste`）

仅实际弃置件：一件真实完整HDPE箱，记录配件/组成并排除湿糟内容物；回收PE/PP容器路线不能证明所有原生或未知实际箱相容。逐件维护完整账：期初空件/附着WIP/FG/可重复用存量加新增采购和外返接收，等于全部期末存量加随毛发运外出、对外返回及废物。内部复用相消；不重购返回件，不加入净湿糟Q，不自动算共产品。称量或核同件真实件数到质量桥接；无默认单件质量或周转次数。本卡仅记标题所述方向和状态。

- 选定流：废弃可重复使用HDPE湿糟运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：引用第8节对此原子交换的唯一归一化结果；物理g_i及关联环境n_i非叠加；保留raw记录，不再次除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### 基本流

## 7. 分配与共产品处理

以下层级仅用于研究属于归因且需要分配的场景。该条件约束全部下列规则；gross实物清单永不按分配份额缩减。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_framework | multifunctional upstream and foreground | 本方法适用于研究目标/框架确定后需要分配的归因核算，不把ILCD分配指导作为后果型替代豁免。先独立计量湿糟专属回收/压榨/供货，细分共同操作，包括有物理依据的virtual subdivision。糟专属处理直接归糟，不因啤酒约定为零。 | ilcd-2010-allocation |
| a_causality | remaining genuinely joint exchanges | 对剩余真正共同环境交换，在实际共同过程/门逐交换、逐共功能识别决定性物理因果。质量、干物质、能量或时间可量测不等于有因果。保留真实组分体现、水来源及服务功能，记录推理和独立量测，不任意套单一分配键。 | ilcd-2010-allocation |
| a_residual | unresolved common environmental burden | 仅细分/因果后真正剩余的共同环境负荷使用同期、真实状态、共同门市场价值，保留数量、价格、时期、单位和敏感性；价格回溯到共同门时仅据证据扣除后处理/运输。无固定比例。分配只改环境负荷A，不改实物grossV、真实废物、水分、交换实物数量或湿Q分母。 | ilcd-2010-allocation |
| a_beer_pef | upstream brewery provider | Beer PEFCR表21及脚注17将不分配给饲用共产品的约定限于该啤酒研究，明确不授权出厂糟零环境影响。必须核真实供方体系、已分配过程/门，并与本湿糟归因方法对齐；接口未决则hold该数据集。即使核过上游约定，也不能扩展至糟专属压榨/交付或全生命周期零负荷。附录4.2为旧敏感性证据，含假设啤酒干物质和特定日粮替代物，不能搬用比例或信用。 | brewers-europe-beer-pefcr-2025; ilcd-2010-allocation |
| a_status | products wastes and services | Product/Waste判定须真实规格、接收用途、法律/处置状态及提供方方法；低价、dregs名称、waste分类或饲用宣传单独都不能决定负荷或营养功能。无默认替代饲料、回水、热或回收信用；经授权情景另模，不改主物理清单。 | kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_upstream | grain_recovery | 真实供方交接 | 供方生产及负荷记录 | 酿造厂; 批次; 实际麦芽来源; 逐种谷物辅料物种和数量; 粉碎; 糖化水; 麦汁和湿糟湿质量; 独立干物质; 液体和杂质; 上游损失; 期初期末WIP; 原Qc; 分配方法及门; 逐交换继承向量; 实际提供方 | 独立核真实麦汁/湿糟共同过程及供方物理闭合，不从啤酒产出系数倒推。供方单位负荷仅一次还原为实际接收批向量。记录真实方法及相容性，保留失败和未知。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg; native burden units | 逐接收批及供方核对 | 声明H及全部原上游批群 | 真实酿造分离交接门 | 每 1 kg 参考流 | 供方原始记录; 秤; 配方; 分配底稿; 质量及向量闭合 |
| cp_mass | grain_recovery | 湿物料实物及移交 | 称量库存及分离记录 | 批次; 门; 流入流出毛湿质量; 水和干物质检测; 压榨状态; 可溶及悬浮固体; 原料WIP存量; 真新增F; 配对内流id; 返回; 废物去向; 事件所有者; 原Qc | 对齐门独立称量每份物理物流，取样检测水/干物质、真实配方及异物。核收集、压榨和筛分，不用一个残差拟合两个未知流。保留全部失败及空转事件。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg | 逐批移动和库存关闭 | 同H及全部受影响批群 | 真实回收及返工门 | 每 1 kg 参考流 | 校准秤; 配对移交单; 独立检测; 含不确定性的闭合残差 |
| cp_release | release | 首次合格湿输出Q | 品质放行登记及化验报告 | 批次; 净湿质量; 皮重; 干物质; 水分; 物种辅料追溯; 可溶物携带; 压榨; 异物; 真实饲料规格; 检测; 接收方用途; 放行时刻及唯一首次放行id; 已合格期末FG; 失败质量; 样品; 既放行及返工标记; 保存温度时间卫生 | 校准秤称同状态净产品并用明确分析方法取样。同一批和具名用途对齐首次饲用品质放行；失败、取样、待验库存及旧放行分别保留，不由来源宣传册推定现场饲料认证。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg | 每次取样及首次放行 | 同H及原放行历史 | 真实首次饲用品质放行门 | 每 1 kg 参考流 | 秤校准; 分析方法; 放行批准; 接收规格; 唯一批登记 |
| cp_fg | fg_service | 原批库存及供货服务 | 保管发运退回及服务账 | 原Qc; 期初FG及继承向量; 内部Q接收; 期末FG; 毛发运; 客户退回; 原交付冲回; 真实返工; 新增水物料和能耗F; 腐败; 取样; 实际物种; 服务所有者; H | 追踪真实仓储、搬运及散装供给到原放行批，含历史期初FG。称退回/损失并采集真实增量返工投入；保留原负荷/冲回。储存和复验不制造湿糟。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg; native service units | 每次移动服务及库存关闭 | H加原批历史 | 真实料仓和装车保管门 | 每 1 kg 参考流 | 地磅单; 原放行; 退回冲回凭证; 服务表计; 库存账 |
| cp_utilities | support | 逐项真实水电燃料载体 | 表计燃料单及热载体记录 | 阶段及批群; 表计起止; 真实能量或水; kWh; 燃料质量; 真实配方碳硫低位热值; 气体组成压力温度; 已积体积或速率及区间; 独立实测同物质状态密度; 蒸汽质量干度压力温度焓; 热水供回; 供方水热约定; 冷凝水返回; 空转和Q0负荷; 原Qc | 采原单位表计和真实供给文件。仅真实速率积分，区分已积体积。独立测换算输入，共用服务先细分及因果复核再分配；先记载体全供回再算热。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg; kWh; MJ; m3 | 逐表计区间及操作事件 | 同H含无产出时段 | 每个真实表计和提供方边界 | 每 1 kg 参考流 | 校准; 计量图; 发票; 密度焓证据; 同期分配数据 |
| cp_liquid | support | 逐项麦汁压榨液废水出口 | 液体表计取样及处理移交 | 来源门; 真实接收方和状态; 体积; 湿质量; 独立密度; 水分; 提取物; 干物质; 溶解悬浮固体; 实测物种; pH; COD TOC总氮指标基准; 处理所有者; 配对回流端点 | 逐一独立计量分析真实液体分流及其实际用途接收/处理门。指标表征整份流，不叠加为分子质量。处理由真实所有者计一次；回主线需配对接收。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg; m3; actual assay units | 逐分流批及代表性样品 | 同批H及服务批群 | 真实回收清理处理门 | 每 1 kg 参考流 | 取样方法; 液体计量校准; 独立固体水结果; 接收证明 |
| cp_maintenance | support | 逐整份化学品润滑剂维修件废物 | 采购领用维修移除记录 | 具体件或物质; 整份供货制剂; 活性分数子账; 供方; 浓度; 期初期末存量; 新F; 稀释水能耗; 泄漏; 移除件; 废油; 真实废物处理者; 接触控制; 阶段及Qc | 核每个真实完整采购、领用、维修及移除件。制剂组分不再购买；厂内配制逐一测真实采购及损失。失败和未授权作业仍入raw账。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg | 逐接收维修及库存关闭 | 同H及受影响批群 | 真实设备清理维修门 | 每 1 kg 参考流 | 供方配方; 秤; 领用账; 维修记录; 废物接收 |
| cp_species | support | 逐真实环境物种及颗粒 | 物种测量及事件闭合 | 真实化学物种或明确颗粒混合物; 来源; 化石生物碳; 介质; 浓度; 实测已积气液体积; 真正速率; 时间; 压温湿; 独立密度; 生成捕集回流排放; 反应及水证据; 留存C N S; 不确定性 | 用代表性物种量测或有独立输入的验证事件特定质量/元素法。已积体积不再乘时间。区分收集废物和逸出环境质量，区分总量指标及单独物种。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg; actual concentration and flow units | 逐真实排放事件及代表区间 | 同H含失败Q0及服务 | 真实排放操作及最终介质 | 每 1 kg 参考流 | 仪器校准; 取样; 燃料元素闭合; 物种分拆; 来源归属 |
| cp_packaging | packaging | 每种真实包装件保管 | 包装件库存领用发运返回账 | 件id及组成; 真实提供方; 核实同件质量; 期初空件; 期初附着WIP及FG; 期初重复用件; 新采购; 外返接收; 全部期末状态; 毛发运外出; 对外返回; 废物; 内复用; 原Qc | 独立称实际防护膜/箱，分别供给配件另列；允许已核同件件数/长度桥接。保留全部空件/附着/重复用状态及真实外部移交，内复用相消。 汇总语义：采集未除基准raw数量和继承向量，第8节normalize_once计算唯一最终结果，aggregation仅引用。 | kg | 逐件移动及库存关闭 | 全部生产及原批服务时期 | 真实散装防护包装件门 | 每 1 kg 参考流 | 供方材料规格; 称量; 库存账; 毛发运返回单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_total | released_wet_grain | Q = sum(q_lot)，按H内唯一首次饲用品质放行汇总同状态实测净湿质量，已合格期末FG仅计一次。期初既放行FG、复验、退回、内部保管及重发均不加新Q。 | q_lot; 唯一首次放行登记; cp_release | Q | kw-brewers-grains-2026 |
| wet_dry_bridge | raw_wet_grain; grain_to_release; released_wet_grain; press_liquor | 独立实测湿基含水分数w时，干质量 = 湿质量乘(1-w)。同门独立测干物质及溶解/悬浮物；核不确定性，不用一个残差解多未知。整份湿物料为主，组分视图不另加实物交换。 | 湿质量; w; 独立干物质; 实际样品状态; cp_mass; cp_liquid | 非叠加干物质及水桥接 | kw-brewers-grains-2026; ponndorf-wet-conveyors |
| raw_units | all inventory rows | 在分配前把raw观察换成该行单位：kWh乘3.6 = MJ；质量由称量或独立建立同物质状态密度乘实测体积得kg。实际速率仅积分一次，不对已积体积再乘时间。整份采购制剂计一次，检测组分作子账。 | raw表计称量观察; 真实换算证据; cp_utilities; cp_species | 声明原单位的raw V_i | ilcd-2010-allocation |
| upstream_handoff | raw_wet_grain | 保留供方整个共同过程gross物理账及原Qc；供给的单位环境数据仅一次还原为实际接收批向量，保留方法/门及前次分配。须有相容归糟向量，不对已分配向量再乘共同份额，不再购其内含麦芽/水/能耗。 | 供方raw闭合; 原Qc; 接收质量; 来源方法门; 继承向量; cp_upstream | 接收批继承向量及另列供方gross核对 | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| physical_manufacture | grain_recovery; release; support | 逐真实质量门：期初原料/WIP + 真新增外部F + 流入移交 + 真实环境摄入 = 期末原料/WIP + 首次放行Q + 毛返回麦汁/外部Product + 毛废物 + 实际基本流质量。仅合并门时消配对内流/返工。能量MJ不是质量。独立核总湿质量、水/干物质及相关实际C/N/S和物种，不按负荷份额缩小grossV。 | 原料WIP存量; F; 配对移交; Q; 独立物流及物种; cp_mass | 未分配制造物理闭合 | ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation |
| inherited_vectors | all inventory rows | 逐环境交换保留期初WIP继承A加真实新增已换算归属负荷减期末WIP继承A，核全部共产品/废物/去向向量。专属负荷直接归属，仅真正剩余共同负荷按第7节层级处理。失败/启停/空转/清理/返工/Q0负荷保留真实批归属。实物库存与A独立建账。 | 期初期末继承A; 真实新负荷; 分配证据; 全去向向量 | 含完整历史的归属A_i | ilcd-2010-allocation |
| physical_fg | fg_service | 期初FG + 内部首次放行Q + 毛客户真实退回 + 真新增维修返工物料或水F + 真实摄入 = 期末FG + 毛实物发运 + 其他对外返回 + 服务废物 + 实际服务环境质量。保留历史负荷和原交付冲回；复验不加质量或Q。 | FG存量; 内部Q; 毛退回发运; 真新F; 损失物种; 原交付; cp_fg | 未分配FG保管物理闭合 | kw-brewers-grains-2026; ilcd-2010-allocation |
| combined_gate | grain_recovery; release; fg_service; support | 合并制造与FG物理门，唯一抵消相同内部Q及全部配对内流端点。已合格期末FG留在库存侧，不再加作产量。全部毛水、湿糟、废物、更换件、载体返回和真实物种均保留，不受经济分配、净销量或负荷所有权缩减。 | 制造闭合; FG闭合; 配对移交id | 合并gross物理闭合 | ilcd-2010-allocation |
| heat_carriers | steam_supply; steam_condensate_return; hot_water_supply; heat_water_return | 据已记录供方门的实测载体质量及供回焓算真实净供热，按水能约定保留真实载体损失/补水一次。载体质量、其水及MJ是非叠加视图。不假定饱和状态、返回率、锅炉效率或锅炉燃料。 | 供回质量状态; 焓证据; 供方约定; cp_utilities | 净热及另列载体质量闭合 | ilcd-2010-allocation |
| duplicate_guard | all inventory rows | F是真新增事件。X仅去掉同一事件在同一账同一侧的已证实重复表示。新增返工维修水、物料、能耗及真实更换件是F，不能作X扣减。整份湿物料与组分采用一个主账及非叠加桥接。 | 事件身份; 同侧重复证据; 真新增接收 | 去重raw账 | ilcd-2010-allocation |
| normalize_once | all inventory rows | 实际Q为正时，唯一归一化为物理交换数量g_i = V_i / Q和另列关联环境向量n_i = A_i / Q。V_i是真实gross实物数量，不乘负荷份额；先形成已换算/分配/继承A_i。原批服务在同一操作中用原Qc；供方gross核对保留其自身Qc。卡片和汇总引用同一次结果，不再次除；H不作除数。Q0保留rawV/A及归属，不出单位结果。 | V_i; A_i; Q; 原Qc | g_i; n_i | ilcd-2010-allocation |
| package_balance | packaging | 逐包装件：期初空件 + 期初附着WIP/FG + 期初重复用件 + 新采购 + 外返接收 = 全部期末库存 + 随毛发运外出 + 对外返回 + 废物。内部复用相消，不作再采购、湿糟Q或自动共产品。包装实物质量与归属制造/清洗/服务负荷分开，原批Q/Qc仅用一次。 | 逐件库存及毛移交; 真实单位桥接; cp_packaging | 逐件闭合及另列负荷账 | kw-brewers-grains-2026; ilcd-2010-allocation |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all processes | 核真实酿造麦芽大麦/辅料来源、分离路线、压榨状态、整份湿残渣及单一饲用规格。来源综合不证明同厂数量、每个配方比例或现场饲料认证。 | 供方追溯; 配方; 工艺图; 批接收 |
| dq_native | UUID-bearing rows | 在可消费description逐项核完整原生限制和精确属性单位链。泛化副产品族不认证本窄终端；选定UUID前须核实相符的物理身份与供方适配。 | 相符的原始身份依据; 精确support行 |
| dq_measured | all physical gates | 物理门用独立校准湿质量、干物质/含水及真实液固/物种量测并带不确定性；来源典型组成、保质期、密度、得率或分配比例均非现场默认值。 | 校准; 取样; 独立分析; 残差复核 |
| dq_history | all ledgers | 按批及原Qc分别记实物库存和继承环境向量。核上游交接、原料WIP、首次放行、FG/退回/返工、Q0及逐包装，不删真实流。 | raw事件账; 负荷向量; gross闭合 |
| dq_gap | all dataset uses | 普通真实供方、数量或辅助UUID缺口需采集披露，不自动将核心方法判draft。真实核心湿糟身份/终端失败、共同上游负荷缺失、无据分配或物料闭合未决则hold受影响数据集；缺失值不作零或已覆盖。 | 明确缺口登记; 供方及实物证据 |
| dq_source | all source evidence | 工业原件仅约束产品/路线及反例；ILCD支持条件性归因方法；Beer PEF脚注17是限制性反例。须独立记录来源适用性和预期研究框架。 | 逐来源适用性; 原文页; 审查元数据 |

## 9. 校验规则

真实核心身份、上游负荷或物理闭合失败则hold该数据集；辅助身份/提供方缺口明确保留，不删实物流。以下规则须连同完整来源上下文检查。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | released_wet_grain | 要求实际麦芽大麦麦汁分离形成一整份湿糟，有辅料追溯、压榨状态，无酵母/trub/酒花混配及干燥/造粒/保存/青贮身份，符合真实单一牛饲料接收规格。不得悄换DDGS、麸皮、淀粉残渣、麦汁或啤酒。 | kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; vettertec-brewery; un-cpc3-2025 |
| v_handoff | raw_wet_grain | 核真实完整上游共同过程及归糟负荷向量一次，含供方体系/门和原Qc。Beer PEF不分配饲用共产品记录单独不足以支持出厂湿糟；接口未决则hold数据集，不作零。 | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| v_reference | released_wet_grain; fg_service | 显式参考链接仅选released_wet_grain。Q计首次合格净湿放行及已合格期末FG一次；期初既放行FG、退回和重发保留原Qc/负荷，不制造新Q。 | kw-brewers-grains-2026; ilcd-2010-allocation |
| v_balance | all physical gates | 独立核上游、制造、FG、合并gross物理门及逐包装。仅消实测配对内流含Q，不按经济份额缩grossV，不重加期末FG。水/干物质/元素及真实物种须独立证据，不以残差拟多未知。 | ponndorf-wet-conveyors; ilcd-2010-allocation |
| v_once | all inventory rows | 核raw采集未除分母，真实单位/速率仅转换一次，并在唯一normalize_once前形成合理归属/继承A。物理V/Q与关联A/Q非叠加，原服务用原Qc，不再除H。Q0保留真实事件，不出单位结果。 | ilcd-2010-allocation |
| v_atomic | all inventory rows | 要求每个真实原子原料、整份制剂、公用工程、载体返回、包装、更换件、废物及环境物种均有完整description和source_ids。辅助UUID缺失须披露，不删流；不能凭名称豁免原生硬冲突。 | ba-solid-2024; ilcd-2010-allocation |
| v_allocation | joint burden gates | 核专属/virtual subdivision优先，其次逐交换决定性物理因果，仅真正残余用同期真实状态共同门市场价值；核完整负荷向量及敏感性。无自动物理/经济比例或替代饲料信用。 | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| v_actuality | all processes | 未列或未授权却真实发生的操作、失败/空转/清理/返工、腐败库存及真实环境出口，即使终端资格失败也保留物理/负荷账。真实处理所有者和最终介质防重复；不虚构蒸汽锅炉、干燥废气或把总指标转成分子。 | ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 一种声明的整份湿态麦芽大麦酿造糟单一饲料原料，具有完整上游及回收负荷接口 |
| allowed_use | 真实配方、湿态/压榨状态、饲用接收用途及实测首次放行基准相容，原批供货服务另保留 |
| excluded_use | 覆盖整个CPC39160；DDGS/stillage；混酵母品；复合饲料；干燥/造粒/青贮品；1kg湿等于1kg干/蛋白/能量；零负荷或替代默认 |
| required_metadata | 全部参考限定；真实供方方法及门；Q及原Qc/H；原料/WIP/FG存量及继承向量；逐包装；每个真实处理所有者；原生限制 |
| required_quality_disclosure | 一级来源技术综合范围；独立量测；提供方及UUID缺口；上游分配相容性；失败/Q0/退回历史；不确定性和未决hold |
| update_trigger | 真实配方或辅料变化；分离/压榨/保存及饲用用途变化；上游方法/门；库存所有权；供方公用工程或包装变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kw-brewers-grains-2026 | handbook | KW Alternative Feeds. Brewers’ Grains, product datasheet 16 January 2026. https://kwfeeds.co.uk/wp-content/uploads/2026/01/Brewers-Grains-16.01.26.pdf | 完整四页原件：麦芽大麦淀粉提取残渣、湿态单一饲料及散装自卸供货、真实饲用、品质免责声明及鲜用/堆贮/混配反例。典型分析、密度、饲喂量和保存时长均未作默认。 |
| ba-solid-2024 | handbook | Brewers Association. Solid Waste Management Manual, 2024, section3.3 pp15–17 and brewery cases pp36–37. https://cdn.brewersassociation.org/wp-content/uploads/2024/12/12094233/BAtech24-Sustainability-Solid-Waste-Management-Manual.pdf | 糖化/lautering湿糟来源，酵母/滤材/trub区分、收集及实际饲用；相邻食品/堆肥/燃料去向反例。行业指南不是饲料认证、配方或LCA分配依据。 |
| ponndorf-wet-conveyors | handbook | Ponndorf Anlagenbau. Conveyors for wet spent grains – also with attached hopper, complete manufacturer page, accessed 2026-11-20. https://ponndorf-gmbh.de/plants/conveyors-silos/conveyors-for-wet-spent-grains-also-with-attached-hopper/?lang=en | 真实lauter-tub/mash-filter到筒仓输送、整份湿糟、排水清理及可选机械压榨筛；设备能力不是过程数量或必备工序。 |
| vettertec-brewery | handbook | VetterTec. Brewery Industries, complete two-page manufacturer brochure with 2015/2016 artwork labels. https://www.vettertec.com/files/Medien/Content-Done/Broschueren/Technologies/Brewery%20Equipment/vt_BreweryIndustries.pdf | 收集/输送/除水/筒仓/装车路线，明确干糟、混酵母干燥及造粒反例。本湿终端不由此假定干燥器、蒸汽供给、蛋白组成或能耗。 |
| ilcd-2010-allocation | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA — Detailed guidance, first edition March2010, sections7.9.1–7.9.3 pp255–268 (PDF275–288). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 条件性归因框架、细分/virtual subdivision、逐交换决定性物理因果以及仅残余使用真实状态共同出口门市场价值；不提供糟专属默认或后果型替代豁免。 |
| brewers-europe-beer-pefcr-2025 | standard | The Brewers of Europe. Revised PEFCR for Beer, 2025 revised draft approved by review panel, section5.7 Table21 footnote17 p55 and Annex4.2 pp93–98. https://brewersofeurope.eu/wp-content/uploads/2025/05/FINAL-Revised-draft-updated-PEFCR-as-approved-by-review-panel.pdf | 限制性反证：啤酒研究不分配饲用共产品不能搬为出厂糟零环境负荷；旧敏感性含假设啤酒干物质及荷兰奶牛日粮替代。未采用数值分配或替代参数。 |
| un-cpc3-2025 | standard | 联合国统计司。CPC 3.0，2025年6月30日规范化结构及完整说明，PDF第199–200页：39120/39130/39141/39149/39150/39160/39170。39160仅列标题，未附额外纳入或排除条文。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持分类及近邻边界；本方法范围更窄，不确立整叶覆盖、法律废物地位或零负荷。 |
