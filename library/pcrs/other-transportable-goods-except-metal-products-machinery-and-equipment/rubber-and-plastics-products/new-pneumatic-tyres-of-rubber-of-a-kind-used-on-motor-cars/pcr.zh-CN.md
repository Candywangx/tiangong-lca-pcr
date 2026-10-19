---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-pneumatic-tyres-of-rubber-of-a-kind-used-on-motor-cars
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 钢带径向乘用车轮胎制造至净发运

## 1. 范围与适用性

本方法覆盖具有纺织径向胎体、钢带束层、钢丝胎圈芯和合成橡胶气密层的全新乘用车充气橡胶轮胎，包含实际配混、部件制造、绿胎成型、模压硫化、冷却、终检、仓储、包装及声明工厂门的净发运。Continental资料给出相互一致的结构和过程路线，EPA独立支持橡胶及添加剂作用和过程排放测量。溴化丁基气密层是有供应商材料用途依据的选定路线，不是通用轮胎配方。各来源不代表同一工厂或同一SKU。

排除摩托车/自行车胎、卡客车/农业/航空胎、实心胎、单独内胎/胎面/衬带、翻新及轮胎回收；斜交结构以及缺气保用、自修复或泡沫内衬特殊结构须先明确扩展方法。上游E-SBR和坯帘子布方法止于不同中间产品，不能替代本成胎方法。分类叶或用途词本身不能建立方法身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-pneumatic-tyres-of-rubber-of-a-kind-used-on-motor-cars |
| classification_refs | CPC 3.0 36111; narrower |
| covered_products | 全新无内胎钢带径向乘用车充气橡胶胎 |
| excluded_products | 排除摩托车/自行车胎、卡客车/农业/航空胎、实心胎、单独内胎/胎面/衬带、翻新及轮胎回收；斜交结构以及缺气保用、自修复或泡沫内衬特殊结构须先明确扩展方法。上游E-SBR和坯帘子布方法止于不同中间产品，不能替代本成胎方法。分类叶或用途词本身不能建立方法身份。 |
| representative_product | 一种声明规格型号，聚酯径向胎体、尼龙冠带、钢带束层和胎圈芯、溴化丁基气密层 |
| production_route | 前景是一个合并的完整轮胎产线单元过程，不是购入成胎后包装。单元过程内部保留独立阶段台账：收料称量及各配方非生产段/终炼混炼；钢帘线、纺织帘线及气密层压延；胎面胎侧挤出/冷却/裁切及胎圈卷绕/覆胶/三角胶；胎体和带束层/胎面成型；硫化及冷却；外观/X射线/均匀性检验和实际修整/返工；成品仓储、包装、搬运与发运。内部保留各胶料、部件批次，内部交接不另作采购或最终产出。下列材料、能源、排放和库存采集责任保留这些阶段细节。 |
| market_state | 已硫化且终检合格、实际净发运的新胎；单胎净质量不含轮辋和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适配声明乘用车的一条全新合格充气胎，不声称车辆公里服务等效 |
| How much | 1 item 声明的成胎 |
| How well | 实际声明规格/负荷/速度、结构和工厂验收结果，不虚设通用性能门槛 |
| How long or cycle | 一次制造及净供货周期；使用寿命不在制造边界内 |
| reference_flow_link | finished_tyre |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef` |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 乘用车用途及钢带径向/无内胎结构; 规格型号及负荷/速度级别; 实际胎体/带束层/胎圈/气密层材料和供货状态; 各胶料配方版本和供货制剂基准; 工厂场址/期间及实际能源配置; 净发运门及唯一验收交付批群Q; 期初末在制品及成品数量和结转负荷; 退回/返工/复验归属及废物去向; 参考身份限制及native分类债务; 实际包装/搬运/仓储边界及实测单胎净质量 |

Q是同一产品/路线/状态批群实际跨越声明工厂发运门、经唯一身份去重后的正净交付合格新胎数量，不是新增质量放行产量。分别记录成品期初末库存及完整结转负荷、首次质量放行产量、出库交付、退回、报废及返工。未交付合格胎不进入Q。退回胎保留身份和原有负荷；复验不产生新产量。退回时冲回原交付归属，按唯一身份核对再次发运，避免单胎重复计数。工厂交付数据不能假定质量放行等于交付。

native身份为“轮胎”，Product flow，以物品数量计量，生产混合、在工厂。名称未固定径向结构、乘用车牌号、CAS、地理或locationOfSupply；备注描述宽泛的轮辋轮胎概念，包括金属和橡胶。叶分类写“其他新的充气轮胎”(36113)，与宽泛物理名称及此处明确限定的乘用车子集不一致；保留该分类债务，不据此推断正向映射。仅用于此处实物核实的全新橡胶乘用车径向胎，不用于金属胎、实心胎、翻新胎或中间物。native身份不提供供方配方、区域背景数据、寿命、单胎质量或环境影响数量；实际场址、结构、规格、供货状态和provider兼容性仍须独立记录。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | item即native参考单位Item(s)，参考因子1。计量真实单胎，不按车轴、对、套、轮辋或吨数计；Q由cp_delivery取得。 |
| net_mass | physical balance | Mass | kg | 按校准称重和配置实测单胎净质量，排除轮辋及所有包装；物理kg账独立于数量参考，不指定通用胎重，不从次级系数猜密度。 |
| one_normalization | all inventory rows | Declared row property | declared row unit | cp_recipe/cp_reinforcement/cp_utilities/cp_waste/cp_emissions/cp_delivery/cp_stock采集保留原始期间分子。仅calc_normalize将匹配A_i除以Q一次。卡片公式及aggregation_rule重述同一次报告操作，不顺序再除。 |
| formulation_basis | supplied formulations | Mass | kg | 每种外购制剂为一份完整供货投入，活性含量、水、油和涂层是子账；仅另行取得的稀释/配混组分列外部投入。厂内胶料不重复采购。 |
| integrated_volume | gas and liquid measurements | Volume | m3 | 流量读数按匹配时段积分；已积分表计体积不再次乘时间。转换前记录标准/实际温压及气体干湿基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确的外购干态弹性体、各填料/硫化制剂、预处理增强帘线/钢丝及实际能源进入完整轮胎产线 |
| starting_condition_role | foreground_start |
| product_classification_scope | 限定的钢带径向乘用车胎，比CPC 3.0 36111窄 |
| recursive_input_rule | 外购成胎不能替代此前景。自有退回胎带入原负荷并只计真实返工一次，不递归成为新原生生产，不重复内部胶料/部件交接。 |
| upstream_dataset_requirement | 逐一独立匹配实际供货聚合物/制剂/增强材料和能源的地理、路线、牌号、参考属性与取得边界；上游供货和运输只计一次。UUID身份本身不提供负荷。 |
| disclosure | 声明工厂期间、各阶段责任人、真实配方/BOM及购入处理、能源生成边界、成品/在制品结转负荷、交付/退回核对、包装和排除项。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | tyre_line | 前景是一个合并的完整轮胎产线单元过程，不是购入成胎后包装。单元过程内部保留独立阶段台账：收料称量及各配方非生产段/终炼混炼；钢帘线、纺织帘线及气密层压延；胎面胎侧挤出/冷却/裁切及胎圈卷绕/覆胶/三角胶；胎体和带束层/胎面成型；硫化及冷却；外观/X射线/均匀性检验和实际修整/返工；成品仓储、包装、搬运与发运。内部保留各胶料、部件批次，内部交接不另作采购或最终产出。下列材料、能源、排放和库存采集责任保留这些阶段细节。 | continental-tyre-production; continental-radial-components |
| boundary_delivery | tyre_line | Q是同一产品/路线/状态批群实际跨越声明工厂发运门、经唯一身份去重后的正净交付合格新胎数量，不是新增质量放行产量。分别记录成品期初末库存及完整结转负荷、首次质量放行产量、出库交付、退回、报废及返工。未交付合格胎不进入Q。退回胎保留身份和原有负荷；复验不产生新产量。退回时冲回原交付归属，按唯一身份核对再次发运，避免单胎重复计数。工厂交付数据不能假定质量放行等于交付。 | continental-tyre-production |
| boundary_integrity | tyre_line | 纳入真实失败/零产出运行、待机/清理、返工、污染控制及声明纳入的全部仓储/包装/搬运负荷。实际存在而示例未列的每种成分、燃料、制冷剂、废物及排放物种须扩展独立原子卡。条件不适用须有记录，不能默认零。 | continental-tyre-production; epa-rubber-process-2008 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tyre_line | 完整轮胎制造及净发运 | required | 声明钢带径向路线的合并边界全部阶段 | foreground | finished_tyre |

前景是一个合并的完整轮胎产线单元过程，不是购入成胎后包装。单元过程内部保留独立阶段台账：收料称量及各配方非生产段/终炼混炼；钢帘线、纺织帘线及气密层压延；胎面胎侧挤出/冷却/裁切及胎圈卷绕/覆胶/三角胶；胎体和带束层/胎面成型；硫化及冷却；外观/X射线/均匀性检验和实际修整/返工；成品仓储、包装、搬运与发运。内部保留各胶料、部件批次，内部交接不另作采购或最终产出。下列材料、能源、排放和库存采集责任保留这些阶段细节。

### 过程：完整轮胎产线（`tyre_line`）

#### 输入

##### 产品流

###### 天然橡胶干胶块 （`natural_rubber`）

实际干胶牌号和供货胶块质量独立于每种合成橡胶记录；水分实测只作组成账，不另列采购。

- 选定流：天然橡胶干胶块
- 流属性/单位：Mass / kg
- 数量规则：A_natural_rubber / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 丁苯橡胶干胶块 （`sbr`）

记录实际SBR聚合路线、结合苯乙烯、充油和各胶料用途；SBS、丁苯胶乳或密封盖记录不能替代此干态聚合物。

- 选定流：丁苯橡胶干胶块
- 流属性/单位：Mass / kg
- 数量规则：A_sbr / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 聚丁二烯橡胶干胶块 （`br`）

BR与SBR及天然橡胶分开；保留实际顺式含量/牌号、充油和供货质量，不设固定比例。

- 选定流：聚丁二烯橡胶干胶块
- 流属性/单位：Mass / kg
- 数量规则：A_br / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 溴化丁基橡胶干胶块 （`biir`）

选定气密层路线使用溴化丁基橡胶，核实实际牌号和供货配方。名为丁基胶却声明丁二烯/苯乙烯共聚的记录与此身份冲突，不采用。氯化丁基胶是不同材料，不自动视作同义词。

- 选定流：溴化丁基橡胶干胶块
- 流属性/单位：Mass / kg
- 数量规则：A_biir / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`exxon-innerliner-materials`

###### 补强级炭黑 （`carbon_black`）

各实际补强牌号及其配方数量须可区分；具体数据集中不同牌号拆卡。轮胎热解炭不能替代原生炭黑。

- 选定流：补强级炭黑
- 流属性/单位：Mass / kg
- 数量规则：A_carbon_black / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 沉淀法无定形二氧化硅 （`silica`）

记录实际使用部位、供货水分和牌号；不与炭黑或结晶石英互换，营销质量占比不作配方。

- 选定流：沉淀法无定形二氧化硅
- 流属性/单位：Mass / kg
- 数量规则：A_silica / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-radial-components`

###### 含硫有机硅烷偶联剂供货制剂 （`silane`）

仅在实际白炭黑配方使用时记录。整份记录一种明确的供货商品制剂；活性硅烷和载体为组成子账，不重复采购。匹配UUID前核实实际物种。

- 选定流：含硫有机硅烷偶联剂供货制剂
- 流属性/单位：Mass / kg
- 数量规则：A_silane / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-radial-components`

###### 橡胶加工油 （`oil`）

采用实际供货油品级别和质量；已包含在外购充油橡胶或母炼胶内的油不在此重复采购。

- 选定流：橡胶加工油
- 流属性/单位：Mass / kg
- 数量规则：A_oil / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 烃类增粘树脂 （`resin`）

仅在明确实际配方采用时记录；核实树脂化学身份和固态供货状态，不从增塑剂总占比推断。

- 选定流：烃类增粘树脂
- 流属性/单位：Mass / kg
- 数量规则：A_resin / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-radial-components`

###### 氧化锌 （`zinc_oxide`）

记录硫化体系实际供货牌号、含量和称量值；其存在不确定固定用量或反应产水量。

- 选定流：氧化锌
- 流属性/单位：Mass / kg
- 数量规则：A_zinc_oxide / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 硬脂酸 （`stearic_acid`）

按实际硫化配方有无记录；采用provider前区分工业供货脂肪酸制剂与纯物种身份。

- 选定流：硬脂酸
- 流属性/单位：Mass / kg
- 数量规则：A_stearic_acid / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 硫黄硫化剂供货制剂 （`sulfur`）

记录一种实际供货硫黄牌号/制剂，含其包覆油或载体。硫/活性含量是内部含量账，不另投料；不施加通用硫黄产水计量式。

- 选定流：硫黄硫化剂供货制剂
- 流属性/单位：Mass / kg
- 数量规则：A_sulfur / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 苯并噻唑次磺酰胺促进剂供货制剂 （`accelerator`）

按实际硫化配方记录；明确具体促进剂和整份供货制剂。额外促进剂物种须拆卡，不规定固定配方。

- 选定流：苯并噻唑次磺酰胺促进剂供货制剂
- 流属性/单位：Mass / kg
- 数量规则：A_accelerator / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 胺类橡胶防老剂供货制剂 （`antioxidant`）

按配方记录一种实际供方制剂；区分其组成/活性含量及每种另行供货防老剂。

- 选定流：胺类橡胶防老剂供货制剂
- 流属性/单位：Mass / kg
- 数量规则：A_antioxidant / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 石蜡防臭氧蜡 （`wax`）

仅在实际配混采用时纳入；供货蜡牌号与加工油、胺类防老剂分开计量。

- 选定流：石蜡防臭氧蜡
- 流属性/单位：Mass / kg
- 数量规则：A_wax / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-radial-components`

###### 预处理高强度轮胎钢帘线 （`steel_cord`）

记录带束层钢帘线结构、镀层、接收状态和质量。外购预处理帘线已含上游处理，不重复计算其金属/镀层。

- 选定流：预处理高强度轮胎钢帘线
- 流属性/单位：Mass / kg
- 数量规则：A_steel_cord / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_reinforcement`
- 来源：`continental-tyre-production`; `continental-radial-components`

###### 轮胎胎圈钢丝 （`bead_wire`）

胎圈芯钢丝独立于带束层钢帘线；保留实际镀层、尺寸及卷绕/覆胶记录。

- 选定流：轮胎胎圈钢丝
- 流属性/单位：Mass / kg
- 数量规则：A_bead_wire / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_reinforcement`
- 来源：`continental-tyre-production`; `continental-radial-components`

###### 粘合处理聚酯轮胎帘子布 （`polyester_cord`）

选定纺织胎体材料；记录确切处理和织物结构。供方粘合处理属于上游，覆胶压延仍在前景；不能因同属帘子布而以尼龙坯布替代。

- 选定流：粘合处理聚酯轮胎帘子布
- 流属性/单位：Mass / kg
- 数量规则：A_polyester_cord / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_reinforcement`
- 来源：`continental-tyre-production`; `continental-radial-components`

###### 粘合处理尼龙轮胎帘线 （`nylon_cord`）

选定冠带缠绕增强材料，独立于聚酯胎体帘线；保留聚合物类型、处理、线密度和供货质量。

- 选定流：粘合处理尼龙轮胎帘线
- 流属性/单位：Mass / kg
- 数量规则：A_nylon_cord / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_reinforcement`
- 来源：`continental-radial-components`

###### 水性有机硅轮胎脱模乳液 （`release_emulsion`）

按实际脱模剂有无记录。整份记录明确的外购乳液，实际稀释水另计；乳液已有水分不重复购入。工厂如使用不同化学体系须换成独立核实的原子制剂。

- 选定流：水性有机硅轮胎脱模乳液
- 流属性/单位：Mass / kg
- 数量规则：A_release_emulsion / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`

###### 橡胶粘合胶浆供货制剂 （`cement`）

按实际成型/修补用途有无记录，不强制使用溶剂。记录一种整份供货胶浆、固体/溶剂实测及回收；仅在实际厂内配制时另列各自采购组分。

- 选定流：橡胶粘合胶浆供货制剂
- 流属性/单位：Mass / kg
- 数量规则：A_cement / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_recipe`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 工艺用水 （`water`）

计量实际冷却补水、清洗及稀释新水；循环水是内部账，不反复算外部取水。记录实际供水来源。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：A_water / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：`continental-tyre-production`

###### 电力 （`electricity`）

计量完整产线，含混炼、开炼、压延、挤出、胎圈制备、成型、硫化机、冷却、检验、空压/冷机、污染控制、仓储和电动搬运。保留阶段读数，主表分表不得重复求和。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A_electricity / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 工业蒸汽 （`steam`）

记录声明硫化加热路线实际外供蒸汽，含压力温度及凝结水返还边界。自产蒸汽属内部交接：须用实际各燃料、锅炉给水及排放卡替代外购蒸汽并纳入锅炉损失，不得两者都计外购。

- 选定流：工业蒸汽
- 流属性/单位：Mass / kg
- 数量规则：A_steam / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：`epa-rubber-process-2008`

###### 氮气 （`nitrogen`）

仅在实际硫化/充气使用时记录供货气体质量、泄漏和回收。若用厂内压缩空气，则记录实际电力和空压账，不虚造氮气投入。

- 选定流：氮气
- 流属性/单位：Mass / kg
- 数量规则：A_nitrogen / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：`continental-tyre-production`

###### 柴油 （`diesel`）

仅在门内搬运/发运车辆实际耗柴油时记录实耗和燃烧排放，不对电动叉车加柴油。

- 选定流：柴油
- 流属性/单位：Mass / kg
- 数量规则：A_diesel / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：

###### 聚乙烯包装薄膜 （`film`）

仅记录实际发运包装；净使用膜和废膜分开计量，无包装须有发运证据，不得静默省略。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：A_film / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_delivery`
- 来源：

###### 不干胶纸质轮胎标签 （`label`）

记录含胶层的一种供货标签及实际底纸损失，不另作内部组分采购。

- 选定流：不干胶纸质轮胎标签
- 流属性/单位：Mass / kg
- 数量规则：A_label / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_delivery`
- 来源：

###### 木质运输托盘 （`pallet`）

按实际托盘发运有无记录，保留回收/复用次数及应分摊制造/修理负荷，寿命须有实测，不假设复用次数。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：A_pallet / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_delivery`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 蒸汽凝结水 （`condensate`）

若返回边界外，保留实际质量、焓和供方返还约定；不属轮胎产品或反应产水，内部循环抵消。

- 选定流：蒸汽凝结水
- 流属性/单位：Mass / kg
- 数量规则：A_condensate / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_utilities`
- 来源：`epa-rubber-process-2008`

###### 净交付合格乘用车径向轮胎 （`finished_tyre`）

native身份为“轮胎”，Product flow，以物品数量计量，生产混合、在工厂。名称未固定径向结构、乘用车牌号、CAS、地理或locationOfSupply；备注描述宽泛的轮辋轮胎概念，包括金属和橡胶。叶分类写“其他新的充气轮胎”(36113)，与宽泛物理名称及此处明确限定的乘用车子集不一致；保留该分类债务，不据此推断正向映射。仅用于此处实物核实的全新橡胶乘用车径向胎，不用于金属胎、实心胎、翻新胎或中间物。native身份不提供供方配方、区域背景数据、寿命、单胎质量或环境影响数量；实际场址、结构、规格、供货状态和provider兼容性仍须独立记录。

- 选定流：轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：`cp_delivery`
- 来源：`continental-tyre-production`; `continental-radial-components`

##### 废物流

###### 未硫化轮胎胶料废料 （`uncured_scrap`）

仅列外送未硫化废料；内部边料回用携原有组分和新增返炼负荷，不变成第二次采购。

- 选定流：未硫化轮胎胶料废料
- 流属性/单位：Mass / kg
- 数量规则：A_uncured_scrap / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 报废硫化橡胶轮胎 （`cured_reject`）

按身份和质量记录实际不合格胎、破坏性检测胎及报废退胎，不进入合格交付Q。

- 选定流：报废硫化橡胶轮胎
- 流属性/单位：Mass / kg
- 数量规则：A_cured_reject / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 轮胎钢帘线废料 （`steel_scrap`）

称量外送带束层钢帘线裁切废料；如另有胎圈钢丝废料，须独立拆卡。

- 选定流：轮胎钢帘线废料
- 流属性/单位：Mass / kg
- 数量规则：A_steel_scrap / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 聚酯轮胎帘子布边料 （`textile_scrap`）

聚酯裁切废料单独称量；实际尼龙边料须另作原子流。

- 选定流：聚酯轮胎帘子布边料
- 流属性/单位：Mass / kg
- 数量规则：A_textile_scrap / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 轮胎配混捕集过滤粉尘 （`filter_dust`）

记录一种实际混合捕集粉尘废物及实测组成去向；不与未捕集炭黑或二氧化硅排放混为同一交换。

- 选定流：轮胎配混捕集过滤粉尘
- 流属性/单位：Mass / kg
- 数量规则：A_filter_dust / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 轮胎加工废水 （`effluent`）

记录实际外送处理废水的体积/质量及污染物分析，COD不等于排放化学物种，也不能确定缺失反应水。

- 选定流：轮胎加工废水
- 流属性/单位：Mass / kg
- 数量规则：A_effluent / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 废聚乙烯薄膜 （`film_waste`）

记录实际包装废膜及去向，不与随胎交付净薄膜重复。

- 选定流：废聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：A_film_waste / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 废硅油涂层标签底纸 （`backing_waste`）

实际标签底纸废物与贴附供货标签分开。

- 选定流：废硅油涂层标签底纸
- 流属性/单位：Mass / kg
- 数量规则：A_backing_waste / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`; `epa-rubber-process-2008`

###### 尼龙轮胎帘线边料 （`nylon_scrap`）

实际缠绕/裁切尼龙废料独立于聚酯废料，保留处理及接收去向。

- 选定流：尼龙轮胎帘线边料
- 流属性/单位：Mass / kg
- 数量规则：A_nylon_scrap / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-radial-components`

###### 轮胎胎圈钢丝废料 （`bead_scrap`）

实际外送胎圈钢丝废料独立于带束层钢帘线废料。

- 选定流：轮胎胎圈钢丝废料
- 流属性/单位：Mass / kg
- 数量规则：A_bead_scrap / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：`continental-tyre-production`

##### 基本流

###### 炭黑 （`carbon_black_air`）

实际搬运/混炼未捕集炭黑排入空气，采用物种/粒径和捕集数据；捕集粉尘是废物而非空气排放。

- 选定流：炭黑
- 流属性/单位：Mass / kg
- 数量规则：A_carbon_black_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 无定形二氧化硅 （`silica_air`）

实际白炭黑搬运的二氧化硅空气排放，独立于炭黑及总颗粒物指标总量。

- 选定流：无定形二氧化硅
- 流属性/单位：Mass / kg
- 数量规则：A_silica_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 二硫化碳 （`cs2_air`）

仅记录实际橡胶化学过程实测空气排放；配方含硫不确定其产率，不采用通用EPA系数。

- 选定流：二硫化碳
- 流属性/单位：Mass / kg
- 数量规则：A_cs2_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 甲苯 （`toluene_air`）

仅在实际胶浆/溶剂含该物种且排放测得时记录，其余真实溶剂物种逐一拆行，不以VOC总量替代物种。

- 选定流：甲苯
- 流属性/单位：Mass / kg
- 数量规则：A_toluene_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 水蒸气 （`water_air`）

实际蒸发/放空入空气，区分进料/载体水、冷却/蒸汽损失及有独立证据的反应变化；硫交联本身不是产水方程。

- 选定流：水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_water_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 二氧化碳，化石 （`co2_air`）

仅记录边界内实际柴油燃烧空气排放，数量须监测或独立碳平衡并有完整燃料碳证据；不重复上游电力/蒸汽provider排放。

- 选定流：二氧化碳，化石
- 流属性/单位：Mass / kg
- 数量规则：A_co2_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

###### 二氧化氮 （`nox_air`）

按实际燃烧空气排放记录；以NO2当量表示的NOx是需明确物种分解的指标，不自动等于纯二氧化氮质量。

- 选定流：二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：A_nox_air / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-process-2008`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | tyre_line | 优先按实际产品/配方/工段批次和能源实测拆分，保留质量关联成分归属和有因果证据的共享服务。无法拆分共享设备采用实测机时/负载并记录待机和废品归属，不单凭成品质量跨不同轮胎路线分配全厂负荷。 | continental-tyre-production; epa-rubber-process-2008; ilcd-attributional-allocation-2010 |
| allocation_loss | tyre_line | 废品/失败运行不作正轮胎产出，其负荷保留在匹配批群。废料收入不自动形成共产品或避免原生生产抵扣。真实共产品/回收分配须另有证据及披露，不自动替代抵扣；内部回收带原负荷且新增处理仅计一次。 | epa-rubber-process-2008; ilcd-attributional-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

下列各协议均归属tyre_line，并指定负责职能。原始采集绝不执行A_i/Q。aggregation_rule仅表示calc_normalize使用的一次最终报告基准。转换前保留原单位、完整范围和实测不确定性；协议不声称已取得工厂数据。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_recipe | tyre_line | 配混工程师：组分及配方台账 | 称量及供方含量记录 | 批次/配方版本; 各供货投入质量; 活性/水分/油含量; 原料期初末; 内部返料; 失败批次; 母炼胶收料 | 归一前采集校准批秤和库存/收料/领用记录。逐种聚合物/填料/制剂核对；外购母炼胶整份采购，其组成子账替代而非重复该部分内部组分采购。 | kg | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 秤校准; 配方授权; COA及核对 |
| cp_reinforcement | tyre_line | 部件工程师：帘线及胎圈钢丝 | 接收及裁切/称量记录 | 帘线聚合物/结构/镀层; 供方处理; 卷轴质量; 领退长度及线质量; 压延覆胶; 裁切废料; 在制品交接 | 保留接收处理状态；钢带帘线、胎圈钢丝、聚酯胎体与尼龙冠带分开。厂内覆胶从配方账取得，不重复购入帘线组成。 | kg; m; kg/m | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 供方结构; 处理证明; 校准秤 |
| cp_operations | tyre_line | 生产工程师：阶段/运行记录 | 批次及机台日志 | 混炼段次; 温度/时间/负载; 挤出/压延设置; 部件批次; 成型身份; 硫化机/周期; 冷却; 检验结果; 失败/零产出/返工; 清理/待机 | 记录完整实际路线、全部运行批群及纳入的放行后阶段；不得把历史试验温度、营销配比或名义产能复制为场址值。 | stage-specific measured units | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 机台日志; 检验及停机记录 |
| cp_utilities | tyre_line | 公用工程师：各载能流及用水 | 表计及燃料/蒸汽记录 | 载能表起止; 工段/分表关联; 实际负载/时长; 蒸汽温压质量; 凝结水; 补水/循环水; 压缩空气; 燃料库存; 仓储/搬运; provider边界 | 采集原始各载能量，含开机、失败、返工、通风/控制、仓储与发运。区分外供和厂内转换，避免一次燃料/电力与内部蒸汽/空气重复。保留蒸汽焓及凝结水返还证据，仅在需要时对体积流率积分。 | kWh; kg; MJ; m3 | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 校准; 表计拓扑; 账单; 能源平衡 |
| cp_waste | tyre_line | 环保负责人：各外部废物 | 地磅及转运记录 | 废物流; 湿/干质量; 组成; 来源工段; 内部回用; 外部去向; 废水体积/分析; 废胎身份 | 逐一采集实际外部流，区分循环边料与处置、捕集尘与空气排放；保留声明责任内的处理和运输负荷。 | kg; m3 | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 转运单; 接收处理记录; 实验报告 |
| cp_emissions | tyre_line | 环保负责人：物种及介质 | 采样及监测平衡 | 物种; 空气/水介质; 浓度; 流率或积分体积; 时长; 干湿及标准/实际状态; 捕集/去除; 未检出限; 工段; 燃料碳 | 分别采集混炼、挤出、成型溶剂使用、硫化放空/冷却及实际燃烧的原始结果。浓度乘已积分且同基准体积即可，不再乘时间。未测物种保留缺口，不作零。实际物种/反应路径须有独立于总量闭合的证据。 | kg; mg/m3; m3; h | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 采样方法; 检出限; 气体基准; 物种分析 |
| cp_delivery | tyre_line | 质量及发运控制员：终端门 | 验收身份及发运台账 | 产品/路线/状态; 首次放行身份; 单胎净质量; 发运身份/数量; 退回/再次发运; 破坏性检验; 包装及搬运; 成品库存数量 | 保留声明门、配置、批群的唯一合格发运及退回原始数，按退回核对取得正Q。单独复验不产生新产量。净胎与包装/轮辋分开称量，保留真实仓储时长/搬运及各包装组件数量；此处不作相除。 | item; kg; day | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 验收及身份记录; 发运/退回凭据; 校准秤 |
| cp_stock | tyre_line | 库存会计：在制品/成品结转负荷 | 库存及负荷核对 | 按胶料/部件/绿胎/硫化状态的在制品期初末; 合格成品期初末; 数量/质量; 批次身份; 材料/能源/排放结转负荷; 生产放行; 报废和退回 | 归一前保留原始物理库存和完整负荷向量。逐段核对内部交接；未完工/未交付负荷结转，不删除或重复分派。本期交付期初库存须带入原负荷，失败/零产出与返工负荷均归属其实际批群。 | item; kg; original exchange units | 逐批/运行及期间核对 | 含期初末负荷及失败的完整匹配期间 | 声明工厂、产品、路线和发运批群，不合并未核实场址 | 每参考流 | 盘点; 上期负荷结转凭据; 批群关联 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_stock | all inventory rows | 归一前重建归属原始交换向量A_i = 本匹配期间负荷 + 期初在制品/成品结转负荷 - 期末在制品/成品保留负荷，仅消除重复内部交接。保留实际失败、零产出、返工、退回、废物处理及纳入的放行后仓储/发运负荷于其批群。共享负荷按allocation_trace分配。部件库存及往期交付冲回须有批次关联，不作残差抵扣。 | cp_recipe; cp_reinforcement; cp_operations; cp_utilities; cp_waste; cp_emissions; cp_delivery; cp_stock | A_i | continental-tyre-production; epa-rubber-process-2008 |
| calc_normalize | all inventory rows | 完成原始转换和calc_stock归属后，只执行一次q_i = A_i / Q。Q取cp_delivery的正唯一合格净交付胎数，不是质量放行产量或期末成品库存。finished_tyre固定参考为Q/Q = 1 item。采集方法不作除法，清单公式及协议aggregation_rule描述同一次最终操作。 | A_i; Q; cp_delivery; cp_stock | q_i | continental-tyre-production |
| calc_physical_balance | tyre_line | 分别保留物理账：期初在制品 + 实际工艺材料投入 + 实际退回库存 = 新放行/其他工段交接 + 期末在制品 + 实测废物/排放；期初成品 + 首次合格放行 + 实际退回 = 实物出库 + 期末成品 + 实际报废/返工交接。合并时抵消内部交接，包括放行入仓。实物出库数和净Q通过身份及退回归属核对。胎kg、包装、水及各守恒元素独立记账；反应/相态/游离水变化须有独立物种和计量证据。不得用同一闭合残差拟合未知反应水和另一未知出口。 | cp_recipe; cp_reinforcement; cp_stock; cp_delivery; cp_waste; cp_emissions | physical stock and species balances | continental-tyre-production; epa-rubber-process-2008 |
| calc_emission | tyre_line | 对各实测物种采用同状态浓度与体积流率随时间积分；匹配体积已积分时仅浓度乘体积。记录真实捕集/去除及去向。VOC总量、COD或NOx当量指标不作额外独立物种质量。 | cp_emissions; cp_utilities | species raw mass | epa-rubber-process-2008 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | tyre_line | 核实规格级别、径向层结构、配方版本及各供货状态，采用实际配方而非营销占比。 | BOM; 断面/成型规格; COA; 批次记录 |
| quality_coverage | tyre_line | 不遗漏失败/返工/库存负荷，不假设成品库存或虚造损耗/能耗/配方/排放系数。各实际原子流补齐数据或显式缺口。 | 完整期间/批群核对及责任人签核 |
| quality_native | finished_tyre | native身份为“轮胎”，Product flow，以物品数量计量，生产混合、在工厂。名称未固定径向结构、乘用车牌号、CAS、地理或locationOfSupply；备注描述宽泛的轮辋轮胎概念，包括金属和橡胶。叶分类写“其他新的充气轮胎”(36113)，与宽泛物理名称及此处明确限定的乘用车子集不一致；保留该分类债务，不据此推断正向映射。仅用于此处实物核实的全新橡胶乘用车径向胎，不用于金属胎、实心胎、翻新胎或中间物。native身份不提供供方配方、区域背景数据、寿命、单胎质量或环境影响数量；实际场址、结构、规格、供货状态和provider兼容性仍须独立记录。 | 直读身份、精确参考属性/单位链及实际前景兼容证据 |
| quality_uncertainty | tyre_line | 保留校准、不确定性、检出限、缺失物种、实际地理/时间/provider限制及因果分配证据。真实数据集仍须取得工厂实测及辅助UUID匹配。 | 测量、库存结转凭据、来源适用性及缺口账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_tyre | 要求两语言同一个声明Product输出finished_tyre、相同轮胎UUID及数量基准；native数量单位不代表质量。核实全部限定信息、原始交付身份及Q > 0。 | continental-tyre-production |
| validate_inventory | tyre_line | 核实原始至最终归属和唯一归一、独立于真实物种/反应水证据的物理/元素闭合、外购制剂/部件无重计、全部失败/返工/在制品/成品结转负荷及实际纳入的交付作业。未知项作发现，不以残差平衡或假定零掩盖。 | continental-tyre-production; epa-rubber-process-2008 |
| validate_applicability | tyre_line | 拒绝物理身份/牌号/路线/CAS矛盾及无依据区域/provider假设。区分已披露native分类债务、物理身份与科学批准；UUID或Schema检查不自动形成映射或方法批准。 | continental-radial-components |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于确切限定轮胎的制造及声明工厂净供货负荷，连接独立使用/报废模型 |
| allowed_use | 相同实际路线、材料、供货状态、地理/期间且前景证据验收通过 |
| excluded_use | 不得只从胎数比较寿命/车辆公里；不用作所有轮胎、非乘用车、斜交、翻新、实心、内胎或买成胎包装的通用代理 |
| required_metadata | 乘用车用途及钢带径向/无内胎结构; 规格型号及负荷/速度级别; 实际胎体/带束层/胎圈/气密层材料和供货状态; 各胶料配方版本和供货制剂基准; 工厂场址/期间及实际能源配置; 净发运门及唯一验收交付批群Q; 期初末在制品及成品数量和结转负荷; 退回/返工/复验归属及废物去向; 参考身份限制及native分类债务; 实际包装/搬运/仓储边界及实测单胎净质量 |
| required_quality_disclosure | 完整原始/库存/结转归属、唯一归一、实际配方、能源及交付边界、排放覆盖、辅助UUID/provider缺口和完整参考native限制 |
| update_trigger | 结构、胶料/供货状态、能源路线、场址、工艺、交付门、库存核算变化，新增测量或矛盾身份元数据解决 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| continental-tyre-production | literature | Continental, Tire production, undated technical overview, https://www.continental-tires.com/tire-knowledge/tire-production/ | 五阶段路线、原料作用、部件制造、硫化、终检及仓库发运。仅定性范围，不提供工厂配方、产率、能耗、温度或损耗默认值。 |
| continental-radial-components | literature | Continental, Tire components, undated technical overview, https://www.continental-tires.com/tire-knowledge/tire-components/ | 钢带径向乘用车胎结构、尼龙冠带、钢带/胎圈、纺织胎体和合成气密层及填料/增塑/硫化作用。示例质量占比与性能宣传不作定量配方或LCA证据。 |
| epa-rubber-process-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12, Manufacture of Rubber Products, Final Report, November 2008, sections 2.1-2.3 and 3.1-3.3, https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | 独立历史过程/材料及排放采样背景，支持天然橡胶/SBR/BR、添加剂及硫化机/冷却区；不从所测案例采用通用配方、硫产水量、场址温度、工艺能耗或排放系数。 |
| exxon-innerliner-materials | literature | ExxonMobil Product Solutions, Tires, overview paragraph on conventional innerliners, https://www.exxonmobilchemical.com/en/industries/automotive/tires | 通过工具呈现的原站段落读取，不是本地取得的出版方PDF。仅支持溴化/氯化丁基气密层材料用途；选定溴化丁基属作者限定路线。不采用牌号、配方、数量、能耗、性能或寿命宣称。 |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp. 257-258 (PDF 277-278), https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 限定的归因型细分及因果共享服务分配方法，支持有记录的驱动关系且不自动给予避代信用。不提供轮胎配方、固定比例、废物切断、工业因子、经济默认值、性能或寿命宣称；实际批群和场址证据仍须取得。 |
