---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.printing-ink
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# PY12甲苯基出版凹印油墨

## 1. 范围与适用性

本PCR仅覆盖一种有界液体油墨体系：C.I.颜料黄12干粉制剂现场珠磨分散于外购松香改性酚醛树脂甲苯溶液，经调配、过滤、质量放行、钢桶灌装、仓储及工厂门实际交付，用于纸张出版物凹版印刷。支持的供电配置为中国工厂低于1千伏电网供电；不声称油墨native记录指定中国。参考门为实际净交付，不是新增质量放行产量。[wipo-py12-gravure-2004; epa-eiip-ink-manufacture-2005]

排除水性、UV/EB固化、胶印、柔印、孔版、喷墨和墨粉体系；其他颜料、染料/醇基色基路线、硝化纤维素或聚氨酯连结料、现场树脂合成/熬制、颜料合成/冲淡转相，以及纯外购分散体调配。外购完整颜料分散体属于另一声明路线的上游制剂输入，不证明现场发生研磨。35110涂料/清漆及35120艺术颜料维持独立方法，不授权任意色料/连结料全集。印刷、下游干燥/固化及印刷厂溶剂回收均在本制造交付系统之外。

专利对比例支持具体颜料/树脂/溶剂/珠磨组合，其实验室配方不是工业默认值、用量区间、收率、释放比例、单位电耗或获批性能基准；必须采集真实商品配方及属性。1千克湿态交付油墨不表示印刷服务等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.printing-ink |
| classification_refs | CPC3.0：35130印刷油墨；仅有界子集，分类接受另行判断 |
| covered_products | PY12甲苯基出版凹印油墨 |
| excluded_products | 第1节排除的所有路线、颜料及形态；涂料、艺术颜料及印刷服务 |
| representative_product | 外购松香改性酚醛/甲苯连结料中的液态PY12颜料油墨，钢桶交付 |
| production_route | 接收及湿制剂计量；预混与珠磨；调配和过滤；质控/返工；钢桶灌装；库存/发运核对；清洗及真实废物/空气排放管理 |
| market_state | 工厂门实际交接的净湿态液体油墨；声明颜料牌号、固含、溶剂和黏度状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | PY12甲苯基出版凹印油墨 |
| How much | 1千克实际净交付油墨，不含桶及其他包装质量 |
| How well | 一种声明PY12牌号及外购树脂连结料配方满足场址放行和交付规格：颜料含量、不挥发物、溶剂组成、试验温度下黏度、色强/色相和分散细度；需真实测试，不施加专利数值限值 |
| How long or cycle | 声明实际报告期间及可追溯交付/生产批群，不代表使用寿命 |
| reference_flow_link | dp_delivered |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 凹版油墨 c2ed843f-16bf-462a-8ff7-ae78e95e5c4c |
| 参考流属性 | 质量 93a60a56-a3c8-11da-a746-0800200b9a66 |
| 参考单位组 | 质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66 |
| 参考单位 | kg |
| 必需限定信息 | 实际交付门和期间; 净Q及退货口径; 批群; PY12的CAS/牌号/表面处理; 连结料树脂化学与供货固含; 溶剂/杂质组成; 黏度及温度; 颜料/不挥发物质量分数; 纸张出版凹印用途; 工厂及地理; CN低于1千伏供电; 桶规格; 在制/成品库存及结转负荷记录; 捕集/处理接收方 |

必需限定信息应出现在数据集元数据、参考流备注或等效前景文档；缺失则适用性不完整。native凹版油墨仅支持低黏度甲苯基工厂生产混合，未指定地理、CAS、具体颜料牌号或配方；这些额外限定须由所引路线证据与真实前景记录支持。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_gate | dp_delivered | Mass | kg | Q为同产品/路线/状态批群的唯一正实际净交付量，不是生产放行P。以皮重核算净油墨并追踪发运/退货事件；未交付成品不计入Q。 |
| mu_wet | mf_vehicle; mf_py12; mf_toluene | Mass | kg | 采用整份供货制剂质量；活性颜料/树脂、载体溶剂和水为亚账。体积换质量须真实配方及温度对应密度和不确定性，不把native次级系数当密度。 |
| mu_energy | mf_electricity | Energy | MJ | 保留电表原始千瓦时，按1千瓦时=3.6兆焦在唯一报告归一前换算一次。native净热值参考属性经能量单位组指向兆焦，表示能量维度，不规定燃料燃烧。 |
| mu_integrals | all inventory rows | Measured physical quantity | kg; MJ; m3 | 实测速率可乘观测时长；已积分体积不得再乘一次时间。按适用性保留原始体积、时长、温压及校准。 |
| mu_mass_species | all inventory rows | Mass and species | kg | 总物理质量及相关元素与真实测定物种分开核对。本物理混合路线不假定化学反应或反应水项，不为闭合残差捏造反应水、总VOC或其他出口，不从COD反推物种。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购PY12干粉制剂、整份树脂/甲苯连结料、另购甲苯、包装和公用工程进厂；在制品及成品期初携带可追溯物理量和上游/前景结转负荷 |
| starting_condition_role | 前景接收到实际工厂门交付；从摇篮到门结果另接上游生产、入厂运输及实际处理 |
| product_classification_scope | CPC35130中有界的PY12甲苯出版凹印油墨子集，不表示全部印刷油墨覆盖 |
| recursive_input_rule | 外购连结料或分散体不递归复制本油墨过程，应使用实际独立上游制剂数据集；内部交接P配对抵消，不作再次采购 |
| upstream_dataset_requirement | 逐项匹配真实输入牌号、干湿形态、浓度、路线、交付点、地理和期间。身份UUID不建立供应商或数值负荷；未解辅助匹配显式保留 |
| disclosure | 披露实际纳入的仓储、包装、搬运/发运、返工、共用工程、真实捕集/废物接收方、库存和结转负荷、排除项及不确定性。工厂门交接后的外运为单独声明扩展 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | manufacture | 纳入计量、现场颜料润湿/珠磨、调配、冷却/抽排、过滤、测试、失败批和返工。整份外购连结料上游生产仍须衔接，其溶剂/树脂亚账不作重复输入。 | epa-eiip-ink-manufacture-2005, wipo-py12-gravure-2004 |
| sb_delivery | delivery | 纳入至实际工厂门交付的真实灌装、包装、成品仓储、搬运、发运及损失。保留成品期初末及负荷，合并时内部P交接只抵消一次。印刷干燥/固化不进入此边界。 | epa-eiip-ink-manufacture-2005 |
| sb_releases | manufacture; cleaning | 分开产品滞留溶剂、收集液/固体废物、捕集物、真实控制后排放和库存变化。每种实际VOC/高影响物种及介质单列，不默认释放、捕集率或回收信用。实际另有高影响物种、燃料、热、包装或处理交换须增设原子行；保留实测零值及有据缺项。 | epa-eiip-ink-manufacture-2005 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 预混、珠磨和调配 | required | 选定现场PY12分散路线 | 制造内部质量放行散装P；共用电耗只采一次 | P千克内部交接，按每1千克参考流报告 |
| delivery | 灌装、库存及工厂门交付 | required | 全部交付批次 | 终端实际净交付Q | 1 kg reference flow |
| cleaning | 清洗与收集废物管理 | required | 实际运行；未用流须有零值/缺项依据 | 保留真实清洗输入、捕集废物及排放 | per 1 kg reference flow |

### 过程：预混、珠磨和调配（`manufacture`）

#### 输入

##### 产品流

###### 松香改性酚醛树脂甲苯溶液（`mf_vehicle`）

外购整份液体连结料，包含树脂和甲苯；固含、溶剂组成及杂质化验只作亚账，不重复列购其中组分。本路线不在现场合成或熬制树脂。

- 选定流：松香改性酚醛树脂甲苯溶液
- 流属性/单位：质量 / kg
- 数量规则：A_mf_vehicle / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`wipo-py12-gravure-2004`

###### C.I.颜料黄12干粉颜料制剂（`mf_py12`）

一个声明的PY12商品牌号；保留CAS、表面处理、活性颜料及水分。不是染料、任意色料混合物或外购颜料分散体。专利对比牌号证明路线，不规定供应商或用量。

- 选定流：C.I.颜料黄12干粉颜料制剂
- 流属性/单位：质量 / kg
- 数量规则：A_mf_py12 / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`wipo-py12-gravure-2004`

###### 甲苯（`mf_toluene`）

仅现场另购用于配料/调配的甲苯；CAS108-88-3，工厂生产混合，native地理未指定。其残余CPC35499分类作为元数据债务披露，物理身份一致。连结料内含甲苯不再次列入。

- 选定流：甲苯 33ac34b7-d691-4eda-8563-daef49a05157
- 流属性/单位：质量 / kg
- 数量规则：A_mf_toluene / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`wipo-py12-gravure-2004`

###### 玻璃研磨珠（`mf_beads`）

珠磨机实际消耗的补充/更换研磨珠；核对初装和期末留存量，不按每批新投入整份珠装量。

- 选定流：玻璃研磨珠
- 流属性/单位：质量 / kg
- 数量规则：A_mf_beads / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 聚丙烯过滤袋（`mf_filter`）

一种过滤介质；称量实际更换消耗。捕集油墨计入残余物，不作为额外聚合物采购。

- 选定流：聚丙烯过滤袋
- 流属性/单位：质量 / kg
- 数量规则：A_mf_filter / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 交流电（`mf_electricity`）

native身份为CN、到用户的电网平均消费组合、低于1千伏；不是中压电或通用供电者。研磨、混合、抽排、冷却、过滤、灌装、仓储搬运、清洗及分配共用服务电耗只纳入一次；内部制压缩空气不是第二次采购。

- 选定流：交流电 50657322-939c-4829-a87b-47c093bfa6a7
- 流属性/单位：能量 / MJ
- 数量规则：A_mf_electricity / Q 兆焦
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`epa-eiip-ink-manufacture-2005`

#### 输出

##### 产品流

###### 凹版油墨（`mf_bulk`）

内部质量放行散装交接量P，不是终端参考输出。保留native甲苯基低黏度工厂生产混合限定；native未指定地理或CAS。纸张用途及树脂/颜料限定来自本PCR和前景记录，不声称native有更具体牌号。

- 选定流：凹版油墨 c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- 流属性/单位：质量 / kg
- 数量规则：A_mf_bulk / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`wipo-py12-gravure-2004`

##### 废物流

###### 不合格PY12甲苯凹印油墨（`mf_reject`）

仅实际废弃湿油墨，保留真实接收处理方及质量/组成；保留返工的回流油墨属内部流，不作废物输出或新增验收产量。

- 选定流：不合格PY12甲苯凹印油墨
- 流属性/单位：质量 / kg
- 数量规则：A_mf_reject / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 废玻璃研磨珠（`mf_beads_waste`）

实际分离的废研磨介质及接收方；区分附着油墨与干珠质量，不在过滤废物中重复计同一残余物。

- 选定流：废玻璃研磨珠
- 流属性/单位：质量 / kg
- 数量规则：A_mf_beads_waste / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manufacture`
- 来源：`epa-eiip-ink-manufacture-2005`

##### 基本流

###### 排入空气的甲苯（`mf_toluene_air`）

实际控制后有组织加无组织甲苯排放，以独立实测/分物种核算支持，不由总物料闭合反推；记录介质、捕集路径及控制效果，不默认全部输入溶剂挥发。

- 选定流：排入空气的甲苯
- 流属性/单位：质量 / kg
- 数量规则：A_mf_toluene_air / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 排入空气的C.I.颜料黄12粉尘（`mf_pigment_air`）

控制后未捕集的含颜料空气粉尘。记录实际组成和粒径证据，不默认PM2.5，不把过滤捕集物作基本排放。

- 选定流：排入空气的C.I.颜料黄12粉尘
- 流属性/单位：质量 / kg
- 数量规则：A_mf_pigment_air / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-eiip-ink-manufacture-2005`

### 过程：灌装、库存及工厂门交付（`delivery`）

#### 输入

##### 产品流

###### 凹版油墨（`dp_bulk`）

与mf_bulk为同一物理交接P，保留相同native限制。按批号与结转负荷配对，合并时抵消内部交接；cp_delivery另核对成品期初末及其结转负荷。

- 选定流：凹版油墨 c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- 流属性/单位：质量 / kg
- 数量规则：A_dp_bulk / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`wipo-py12-gravure-2004`

###### 带封口组件的钢桶（`dp_drum`）

一个配套封口、与溶剂相容的完整钢桶。空桶质量与净油墨分开称量，保留实际重复使用/返还及清洗史。完整钢桶相容的质量/千克身份尚待核实。实际非一体包装组件另列。

- 选定流：带封口组件的钢桶
- 流属性/单位：质量 / kg
- 数量规则：A_dp_drum / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`epa-eiip-ink-manufacture-2005`

#### 输出

##### 产品流

###### 凹版油墨（`dp_delivered`）

终端产品输出：恰为1千克实际净交付的PY12甲苯出版凹印液体油墨，不含包装质量。native身份仍为低黏度甲苯基工厂生产混合、地理未指定；不提供配方、损失、能耗、供应商或印刷应用因子。

- 选定流：凹版油墨 c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`wipo-py12-gravure-2004`

##### 废物流

###### 灌装与仓储废弃的PY12凹印油墨（`dp_loss`）

实际湿损耗或报废过期油墨及去向；未交付合格库存作结转，不计入交付Q，也不默认废弃。

- 选定流：灌装与仓储废弃的PY12凹印油墨
- 流属性/单位：质量 / kg
- 数量规则：A_dp_loss / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`epa-eiip-ink-manufacture-2005`

##### 基本流

###### 排入空气的甲苯（`dp_toluene_air`）

独立证据支持的灌装、成品储存和发运实际控制后甲苯排放；环境监测主管向发运负责人提供物种证据，不与制造或清洗已计源重叠。

- 选定流：排入空气的甲苯
- 流属性/单位：质量 / kg
- 数量规则：A_dp_toluene_air / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`epa-eiip-ink-manufacture-2005`

### 过程：清洗与收集废物管理（`cleaning`）

#### 输入

##### 产品流

###### 甲苯（`cl_toluene`）

仅另购新鲜清洗甲苯；CAS及native限制与mf_toluene一致。发票/领用在配方和清洗间互斥分配；内部循环不重复外购。

- 选定流：甲苯 33ac34b7-d691-4eda-8563-daef49a05157
- 流属性/单位：质量 / kg
- 数量规则：A_cl_toluene / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 自来水（`cl_water`）

经过处理的市政自来水、工厂生产混合；native地理未指定，处理方式随水源变化。仅实际使用的辅助水洗/冷却补水，不是水性油墨载体。参考属性为质量，native次级体积系数不是场址实测密度。

- 选定流：自来水 d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36
- 流属性/单位：质量 / kg
- 数量规则：A_cl_water / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 聚丙烯清洁擦拭布（`cl_wipe`）

具体干擦拭材料；单独测定废擦拭物滞留溶剂，不重复采购该溶剂。

- 选定流：聚丙烯清洁擦拭布
- 流属性/单位：质量 / kg
- 数量规则：A_cl_wipe / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

#### 输出

##### 废物流

###### 废甲苯清洗液（`cl_spent_solvent`）

整份收集液，保留树脂/颜料含量、水分及真实接收处理方；不是空气排放，无独立核验回收系统时不予溶剂回收信用。

- 选定流：废甲苯清洗液
- 流属性/单位：质量 / kg
- 数量规则：A_cl_spent_solvent / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 受油墨污染的清洗废水（`cl_washwater`）

实际整份含水废液及其接收方，污染物独立测定。收集/转运为废物交换，不等于直接排放；实际处理及经核实的排放另建模。

- 选定流：受油墨污染的清洗废水
- 流属性/单位：质量 / kg
- 数量规则：A_cl_washwater / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 带滞留油墨的废聚丙烯过滤袋（`cl_used_filter`）

整份捕集固体，包含滤袋聚合物和滞留油墨；记录组成、高影响成分、去向及接收设施。不重复计已排入废清洗液的油墨。

- 选定流：带滞留油墨的废聚丙烯过滤袋
- 流属性/单位：质量 / kg
- 数量规则：A_cl_used_filter / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

###### 带滞留油墨的废聚丙烯擦拭布（`cl_used_wipe`）

一种实际固体废物流及接收设施；保留水/溶剂亚账，同一捕集材料不再作基本流计。

- 选定流：带滞留油墨的废聚丙烯擦拭布
- 流属性/单位：质量 / kg
- 数量规则：A_cl_used_wipe / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

##### 基本流

###### 排入空气的甲苯（`cl_toluene_air`）

独立量化清洗/储罐控制后无组织甲苯，且未在cp_air内计入；核对废物、产品和库存内滞留溶剂，残余不确定性显式保留。

- 选定流：排入空气的甲苯
- 流属性/单位：质量 / kg
- 数量规则：A_cl_toluene_air / Q 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：`epa-eiip-ink-manufacture-2005`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_trace | all inventory rows | 先按物理批次及服务因果追踪再分配。保留归属于选定产品批群的全部失败/零产出批、试验、清洗及返工负荷。共用服务按实测机时/负载或其他有据物理驱动分配，不以其他色号或路线稀释；不假定专利产出率。 | epa-eiip-ink-manufacture-2005 |
| al_stock | manufacture; delivery | 按批维护在制、生产交接及成品库存与结转负荷向量独立账。生产交接P与接收配对后在合并时抵消，不把P加期末库存作两次产出。Q始终为实际净交付，期末未交付库存及负荷结转，不进入Q也不获避免生产信用。本期交付的期初存货携带历史负荷。 | epa-eiip-ink-manufacture-2005 |
| al_returns | delivery; cleaning | 每次退货/再验收/返工须连原批次和交付。退货冲回对应交付贡献并恢复可追溯库存和结转负荷，后续交接须经该冲回后才可进入净交付Q，不作为第二次唯一交付。退回再验收不是新产量。披露跨期核对，Q非正不能归一。捕集残余物或溶剂均为废物，除非另证真实共产品功能和接收系统，不默认替代信用。 | epa-eiip-ink-manufacture-2005 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

协议汇总栏仅声明报告结果基准。采集保留未除原始分子；各卡A_r/Q及汇总基准均指计算规则中同一次cr_report_once操作，绝非顺序重复相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_manufacture | manufacture | 物料、在制、P和废弃物 | batch ledger | 批号; 产品/路线/状态; 期间; 整份供货连结料/颜料/甲苯领用与退库; 活性/溶剂/水化验; 在制期初末质量及结转负荷; P交接; 失败/零产出; 返工链接; 珠/滤袋消耗; 废弃物及接收方 | 负责人：生产/物料核算主管。经校准称重、领退料单、批次/质控表及在制期初末盘点；P按批与交付工序接收配对。保留全部运行，包括失败和零产出批。保留未除的原始期间分子、换算及在制/成品结转负荷向量，采集端不执行A/Q。 | kg | 逐批及盘存结账 | 完整实际期间及历史结转记录 | 选定油墨线及因果共用服务 | 每 1 kg 参考流 | 秤校准; 批次身份; 化验; 库存/负荷账; 验收及处置单 |
| cp_delivery | delivery | 成品库存、桶、Q和退货 | delivery stock ledger | 批号; P接收; 成品期初末质量及结转负荷; 桶皮重/封口; 灌装毛净重; 验收发运事件; 退货/原事件; 再验收; 仓储驻留/搬运/灌装负荷; 泄漏/过期及接收方; 正净Q; 控制后灌装/储存甲苯浓度及实测积分气量 | 负责人：仓储/发运主管。采用经校准毛重减皮重、签认工厂门交接/退货单、唯一事件ID及实物盘点核对；质量放行本身不是交付。跨期追踪退货及恢复负荷，再验收不造产出。保留真实纳入的仓储、包装、搬运和发运负荷。环境监测主管提供灌装/储存/发运含无组织源的独立物种/空气介质及控制证据，不以闭合残差代替测定。保留未除的原始期间分子、换算及在制/成品结转负荷向量，采集端不执行A/Q。 | kg; event; residence time | 每次交接/退货及盘存结账 | 完整实际期间及退回批次历史 | 声明工厂门交接点，仅选定批次 | 每 1 kg 参考流 | 净重/皮重; 签认单; 唯一ID; 实物库存; 历史负荷向量 |
| cp_energy | manufacture | 整个声明系统的外购电力 | meter record | 期间; 电表期初末千瓦时; 子表; 电压; CN供应者/电网期间; 机时/负载; 研磨/冷却/抽排/灌装/仓储/搬运/清洗分配; 历史库存电力负荷 | 负责人：场址能源工程师。全部纳入运行电耗只测一次，核对共用电表分配且不再在下游行重复采购；保留原始千瓦时，按mu_energy换成兆焦。不同电压或国家需相容身份，不得静默复用CN低于1千伏native行。保留未除的原始期间分子、换算及在制/成品结转负荷向量，采集端不执行A/Q。 | kWh; MJ | 连续计量及每次报告结账 | 相同完整期间，加库存结转电力 | 选定场址全部纳入运行 | 每 1 kg 参考流 | 表校准; 电压; 账单; 因果分配及不重复计量 |
| cp_air | manufacture | 制造甲苯和PY12粉尘空气排放 | species monitoring | 物种/CAS; 介质; 排放源; 采样浓度; 实测流率及时长或积分体积; 标况; 有组织/无组织划分; 捕集; 控制进出口; 油墨/库存/废物中滞留溶剂; 粉尘组成/粒径; 检出限 | 负责人：环境监测主管。用实测浓度与适当积分气量，或包含全部滞留路径的经核实分物种模型，保留有独立支持的物种质量。捕集废物与空气释放分开，不从总质量或COD残差推出污染物质量。实际存在的高影响杂质物种须另设独立行。保留未除的原始期间分子、换算及在制/成品结转负荷向量，采集端不执行A/Q。 | kg; concentration; gas volume | 具代表性源监测并连实际批次及期间 | 整个实际期间，含启动/失败/清洗界面 | 仅制造源；cp_cleaning负责互斥清洗源 | 每 1 kg 参考流 | 实验室报告; 物种/介质; 检出限; 气量积分; 不确定性 |
| cp_cleaning | cleaning | 清洗输入、液/固废物与清洗排放 | cleaning and transfer record | 事件/批号; 新鲜甲苯; 水质量或体积/密度/温度; 干擦拭物; 回流; 废清洗液/水洗液/滤袋/擦拭物整份质量及组成; 滞留溶剂/水; 储罐期初末; 接收方/处理; 真实控制后清洗甲苯排放证据 | 负责人：清洗与废物协调员。称量新鲜供料及每种独立捕集液/固体，记录接收设施和真实处理。保留独立物种化验与清洗源测量，不与cp_air重叠。封闭循环为内部流，不自动给回收率或替代信用。保留未除的原始期间分子、换算及在制/成品结转负荷向量，采集端不执行A/Q。 | kg; m3 if measured | 逐次清洗/转运及储罐结账 | 同一完整实际期间，包含失败/返工清洗 | 选定生产线及因果分配共用清洗 | 每 1 kg 参考流 | 称量; 组成; 储存; 转运联单/接收方; 物种监测 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_match_ledgers | all inventory rows | 归一前，以真实供料和服务、在制/成品期初负荷向量及历史记录，扣除真实留存于在制/成品期末的数量/负荷，构建交付批群的未除原始归属A_r。追踪真实退货及失败/返工因果，不抹除失败或捏造负负荷。物理生产账和库存账分别闭合，按P配对mf_bulk与dp_bulk并在合并时抵消内部交接。未解库存/负荷归属是数据缺口，不能置零。 | raw supplies; raw services; WIP records; finished-stock records; carried burden vectors; P; delivery events | A_r; positive Q | epa-eiip-ink-manufacture-2005 |
| cr_report_once | all inventory rows | 每项交换r在原始单位换算及批次/负荷匹配后，仅报告一次x_r=A_r/Q。Q为声明批群经关联退货冲回后的唯一正实际净交付千克，dp_delivered为1千克。清单卡数量规则及协议汇总指同一次操作，不再执行额外相除。不对失败批单独归一，不以P替换Q。 | A_r; Q | x_r per 1 kg reference flow | epa-eiip-ink-manufacture-2005 |
| cr_physical_balances | manufacture; delivery | 归属或归一前先闭合物理千克账：制造期初在制加实际湿物料输入等于P加期末在制及真实废物、空气/水体出口。另账核对交付期初散装缓冲/灌装在制/成品库存加P及真实退货等于毛向外交接加期末散装缓冲/灌装在制/成品库存及实测灌装/储存废物与空气出口。库存负荷随相同批次结转。P为内部放行而非第二个终端输出，不能因此把同批期末库存再加作生产输出。净交付Q按cp_delivery关联退货口径，排除全部未交付期末存货。包装在净油墨质量外独立物理记账。物种/元素检查使用独立化验及监测，不以未知出口拟合任一残差。 | raw wet masses; P; WIP masses; finished stocks; gross handovers; linked returns; independent assays | separate physical mass balances | epa-eiip-ink-manufacture-2005 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核验全部native名称/路线/形态/牌号/地理/参考量纲，真实供应者独立确认。显式保留甲苯残余分类债务、CN低于1千伏供电限制及油墨/水未指定地理。未解辅助UUID待匹配，不捏造替代。 | 直读native记录; 供应商文件; 可追溯精确支持链 |
| dq_complete | all inventory rows | 保留真实完整报告期间、匹配产品/路线/状态、失败及零产出批、返工/退货、在制及成品期初末和结转负荷。有据记录零值/缺项并独立测定真实物种，调查质量/元素残差而不拟合。 | 原始账; 历史负荷向量; 质控; 监测及不确定性 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_gate | dp_delivered | 要求唯一终端产品输出与参考UUID一致且恰1千克；双语均选dp_delivered。P交接与库存不得替代Q，接受数据集数量前须具正匹配净交付、退货事件冲回及库存/负荷闭合。 | epa-eiip-ink-manufacture-2005 |
| val_quantities | all inventory rows | 核验完整原始分子覆盖、一次原始换算及一次cr_report_once、内部交接配对抵消、不重复采购整份制剂组分、不把退回算新增产量、不遗漏仓储/发运/清洗/失败负荷。未交付库存及历史负荷另保留。 | epa-eiip-ink-manufacture-2005 |
| val_species | manufacture; cleaning | 物理质量/元素与真实物种证据独立核验。要求控制后介质、采样/模型依据、捕集液/固体接收方，不假定全部溶剂释放或回收信用。有害微量成分不得因通用质量截断消失，未测适用路径仍是显式缺口。 | epa-eiip-ink-manufacture-2005 |
| val_route | all inventory rows | 拒绝不相容色料/连结料/研磨形态、水性/UV/墨粉路线、native硬CAS/牌号/介质或参考量纲。包装参考量纲须支持实测质量及声明封口组件范围。UUID或Schema通过本身不建立科学或供应者适用性。 | wipo-py12-gravure-2004 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 同配方/状态及真实交付门的纸张出版凹印油墨输入 |
| allowed_use | 完成上游、场址、供应者、库存结转及废物处理匹配后的前景研究或有条件背景使用 |
| excluded_use | 通用印刷油墨; 其他色号/连结料/路线; 印刷面积等效; 法律/食品接触适合性; 默认回收信用; 从技术检查推出科学批准 |
| required_metadata | 实际交付门和期间; 净Q及退货口径; 批群; PY12的CAS/牌号/表面处理; 连结料树脂化学与供货固含; 溶剂/杂质组成; 黏度及温度; 颜料/不挥发物质量分数; 纸张出版凹印用途; 工厂及地理; CN低于1千伏供电; 桶规格; 在制/成品库存及结转负荷记录; 捕集/处理接收方 |
| required_quality_disclosure | 真实期间、配方、供应者/电压/地理、期初末库存及负荷向量、失败/零产出/返工/退货处理、纳入仓储/包装/发运、物种证据、废物接收方、UUID缺口、不确定性及显式排除项 |
| update_trigger | 颜料/连结料/溶剂/形态/路线或交付门变化; native身份修正; 重大库存/负荷或控制系统变化; 新代表性前景证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-eiip-ink-manufacture-2005 | official_guidance | US EPA, EIIP Volume II Chapter 8, February 2005, sections 2.1-2.3 and 4-5. https://www.epa.gov/sites/production/files/2015-08/documents/ii08_feb2005.pdf | 制造运行、灌装、清洗、分源/分物种排放评估与物料衡算注意事项。美国历史技术指南；未采用数值排放/默认损失/控制因子、配方或通用LCA库存分配公式。原始库存/归一协议为本PCR显式要求。 |
| wipo-py12-gravure-2004 | literature | Ciba Specialty Chemicals, WO2004013237A1, Organic solvent-based printing inks, 12 February 2004, printed p15 (PDF p16), Comparative Examples A and B. https://patents.google.com/patent/WO2004013237A1/en | 经Google Patents PDF镜像取得的原始专利扫描出版物，目视核验PDF第16页。支持PY12干粉颜料在松香改性酚醛树脂甲苯溶液中加另购甲苯珠磨。仅为实验室对比例，不建立工厂用量、收率、排放、能耗、当代供应商覆盖或批准；排除染料/醇基色基实施方式。 |
