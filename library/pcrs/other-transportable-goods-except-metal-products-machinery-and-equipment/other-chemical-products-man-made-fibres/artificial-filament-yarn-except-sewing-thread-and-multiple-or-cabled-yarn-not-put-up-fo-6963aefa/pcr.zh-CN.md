---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-filament-yarn-except-sewing-thread-and-multiple-or-cabled-yarn-not-put-up-fo-6963aefa
language: zh-CN
status: candidate
translation_status: aligned
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 未染色有光单股粘胶连续长丝纱工业交付

## 1. 范围与适用性

本方法只覆盖一个工业黄原酸酯路线产品边界，不等于整条分类叶。JRC 描述连续粘胶长丝制造，ENKA 独立证明真实商业连续长丝供货。上述来源构成边界清楚的技术综合，不表示一个 SKU 或工厂提供每个工序参数。终端参考为实际净验收纱交付。零售复绕、多股缆线制造、短纤纺纱及成品织物方法对应不同转化。[来源：`jrc-polymers-2007`；`enka-filament-products`；`enka-industrial-recovery`。]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-filament-yarn-except-sewing-thread-and-multiple-or-cabled-yarn-not-put-up-fo-6963aefa |
| classification_refs | CPC 3.0 35550；本方法仅覆盖其中特定路线，映射验收另行完成 |
| covered_products | 木溶解浆经 NaOH/CS2 黄化及连续酸浴湿纺制成并以工业卷装交付的未染色有光单股粘胶连续长丝纱 |
| excluded_products | 切短再纺纱；含 CPC 35540 的丝束及短纤原料；莱赛尔 NMMO、醋酸酯、铜氨及合成聚合物纱路线；原液染色或消光等级；缝纫线；多股缆线；零售包装；轮胎帘线；以聚合物树脂或未纺粘胶液作为终态 |
| representative_product | 洗涤、上油、干燥、卷绕后的有光粘胶单股连续长丝纺织纱，供后续织造或针织；声明实际线密度及长丝数，不以目录示例固定 |
| production_route | 木浆接收→碱化压榨及碱液返回→老成黄化→溶解过滤脱泡→连续酸浴湿纺→洗涤上油干燥卷绕→质量放行 P→调湿成品库存、包装及搬运→实际验收发运 Q；保留气液回收及处理 |
| market_state | 生产场址发运门实际验收工业纱净交付，包含声明的库存历史；不含门后外部分销及织物加工 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应未染色有光单股粘胶连续长丝纱，供后续纺织加工 |
| How much | 1 kg 实际验收工业净交付 |
| How well | 声明线密度、长丝数、强度、捻度及一种核实调湿水分留油基准，不假定标准回潮率 |
| How long or cycle | 一个声明交付批群及完整生产、在制品、库存历史，不假定纱线使用寿命 |
| reference_flow_link | delivered_yarn |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 人造长丝纱（不包括缝纫线及多股线或缆线），不供零售 `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 粘胶 NaOH/CS2 黄原酸酯连续湿纺路线; 未染色有光单股连续长丝工业纱，排除缝纫线、多股缆线及零售包装; 声明线密度 dtex、长丝数、截面、强度及捻度状态; 一种声明调湿温度、相对湿度、时长及实际交付水分和油剂基准; 实测纱线净质量，排除纸管、纸箱和薄膜皮重; 实际净交付门 Q、唯一验收批群及报告期间，P 另行追踪; 期初末在制品及成品数量和结转交换向量，失败运行及退回返工; 实际工厂地理、供货溶液含量、回收系统、联产品形态及废水接收方 |

具体数据集必须逐项声明限定信息。原生参考为已制造成品 Product flow、生产混合、在工厂，未规定 CAS、地理供货地点、固定路线等级、线密度、调湿制度或供应商。它仅作为兼容通用参考身份，不能证明 ENKA 来源或数量。限制保留于每张有 UUID 的清单卡片。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用一种声明调湿、水分及留油基准的 1 kg 净交付纱，排除纸管和全部包装皮重。记录实际水分及留油，不得将干纤维素静默标作调湿纱。 |
| `titre_check` | 参考产品 | 质量 | kg | dtex 表示每 10000 m 的克数；仅在相同且已核实调湿、留油及纱线净质量基准下使用 mass_kg = dtex * length_m / 10000000。长丝数不得再次乘整纱线密度；净交付以称重为控制记录，缺乏依据的长度换算保留缺口。 |
| `supplied_form` | 所有清单行 | 质量；能量 | kg; kWh; MJ | 商业溶液、乳液和浆粕按实际整份供货质量跨界，活性溶质、纤维素和水仅为子账。原始单位换算先于唯一 normalize_delivery 操作。速率按时长积分，已积分体积不得再乘时长。密度、热值及含量须有独立实际条件证据，不能使用无关原生属性系数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从木溶解浆和完整商业化学制剂接收门起，接入实际上游从摇篮至供货及进厂运输负荷，明确携带历史期初在制品和库存 |
| starting_condition_role | 前景转化及成品库存发运，上游供货保持关联背景 |
| product_classification_scope | 仅限人造连续长丝单股纱，不扩展至 CPC 35550 所有路线或 CPC 35540 丝束短纤 |
| recursive_input_rule | 同类退回返工纱保留原过程历史与实测剩余负荷，仅计新增外部采购；抵消内部交接，复验不得再造验收产量 |
| upstream_dataset_requirement | 匹配实际供货浆粕、溶液、油剂及公用工程形态、浓度、地理、技术、年代和供应商，通用参考身份不足以证明供应商匹配 |
| disclosure | 声明分配、库存批群方法、调湿基准、纳入辅助系统、外部废水处理及实质性排除，不设默认收率或回收系数 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_route` | 纳入发运前全部实际操作，包括制浆准备、NaOH/CS2 化学过程、浴液洗涤上油、蒸发干燥卷绕、失败运行、冷却、回收、处理、调湿、仓储停留、包装搬运及发运。实际使用但未列的辅助剂、燃料、制冷剂泄漏或包装须增列独立原子交换，不得静默遗漏负荷。 | `jrc-polymers-2007`; `enka-filament-products`; `enka-industrial-recovery` |
| `boundary_recovery` | 测量二硫化碳冷凝及实际硫化氢洗涤、二硫化碳吸附、压榨碱液回收、浴液浓缩、洗水与冷凝水内部循环，保留真实能材负荷、进出口组成、损失及库存变化；内部回收不产生新采购或对外信用。氧化制酸治理不在所选回收配置内，采用时须另有物种、氧及水证据。 | `jrc-polymers-2007` |
| `boundary_delivery` | 终端门为实际净验收交付 Q，而非生产放行 P；成品库存另账，保留期初末成品及历史负荷，未交付库存不进入 Q。生产放行 P 只记一次，不得再把同批期末成品库存加作生产输出。合并时抵消 released_yarn/stock_yarn 及其他内部交接，同时保留全部真实仓储返工发运负荷。 | `enka-filament-products` |
| `boundary_species` | 在未归一的实际生产与仓储账上独立核对完整物理质量及 C/S/Na/Zn 平衡，不与 LCA 负荷分配混同。使用实测进出口物种和独立证实的反应程度，仅在有证据时计实际中和反应水；不得从 COD、总硫、假定收率或闭合残差推断实际物种或反应水。区分游离水、保留水、结构水和相变与化学生成消耗。 | `jrc-polymers-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `viscose_line` | 一体化粘胶长丝生产及回收 | required | 所选连续黄原酸酯湿纺路线，声明实际辅助配置 | 制造；内部 P 交接 | 原始 P kg 新放行量，非终端 Q |
| `dispatch` | 调湿库存包装及实际发运 | required | 同路线、等级及批群，含完整期初末库存历史 | 终端供货门 | 1 kg 净交付参考流 |

### 过程：一体化粘胶长丝生产及回收 (`viscose_line`)

#### 输入

##### 产品流

###### 溶解木浆供货 (`wood_pulp`)

记录采购木浆板整份供货质量、干物质、纤维素含量、水分及运输。干纤维素和水只是组成子账，不另列重复采购；不得以聚合物树脂或外购短纤纱替代。

- 选定流: 溶解木浆
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`; `enka-filament-products`

###### 新鲜烧碱供货 (`caustic_solution`)

按整份采购溶液质量及实际氢氧化钠含量记录碱化、溶解与气体洗涤用量。回收压榨碱液是内部循环流；保留其实测质量、组成、库存及回收负荷，不重复计为新鲜采购。

- 选定流: 氢氧化钠水溶液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 新鲜黄化试剂 (`carbon_disulphide`)

将新购二硫化碳与回用于黄化的回收二硫化碳分开；记录液体质量、纯度、罐存变化和路线。内部回收不作为避免原生产物的信用。

- 选定流: 液态二硫化碳
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 纺丝浴补充酸 (`sulphuric_acid`)

记录整份供货硫酸溶液、含量及载体水。实际浴液组成和中和程度须有独立分析证据；不得用厂商比较表中含混的 Hydrogene Sulphate 标签确定酸的化学身份。

- 选定流: 硫酸水溶液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`; `enka-consumption-context`

###### 浴盐补充 (`sodium_sulphate`)

仅记录实际外购无水硫酸钠补充量及纯度。内部生成或回收硫酸钠保留在循环子账，不重复计作采购盐，不设通用产率；其他供货水合物须另列明确行。

- 选定流: 无水硫酸钠
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 锌浴添加剂 (`zinc_sulphate`)

记录整份采购溶液、硫酸锌及锌含量、水分和供货形态；不得以元素锌质量代替采购制剂。若场内配制，应改列实际分别购入的各原料并保留混配能耗和损失。

- 选定流: 硫酸锌水溶液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`; `enka-consumption-context`

###### 脱硫溶液 (`sodium_sulphide`)

仅在长丝洗涤脱硫实际使用时纳入；保留整份供货质量、含量及浴液损失。短纤示例不能证明每条长丝线均使用该试剂；零值须有实际未用证据。

- 选定流: 硫化钠水溶液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 长丝上油剂 (`spinfinish_emulsion`)

对应一种实际采购商业上油乳液，记录供应商身份、完整制剂质量、活性含量、载体水、成品留油及洗脱记录。组成物只作子账，不重复采购；场内配制则分别记录购入原料和实际混配负荷。

- 选定流: 粘胶长丝上油水乳液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`; `enka-consumption-context`

###### 条件性长丝漂白 (`hypochlorite_solution`)

仅在所声明未染色有光纱实际使用时纳入，保留采购溶液质量及有效氯含量；ENKA 比较表不能据以强加正用量，其 BREF 比较项为零。

- 选定流: 次氯酸钠水溶液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`; `enka-consumption-context`

###### 外购工艺水 (`process_water`)

新鲜外部工艺水仅计量一次；制剂载体水、浆粕水分、冷凝水及回收洗水分别进入组成或循环记录；已积分体积不得再乘时长。

- 选定流: 工艺水
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_utilities。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_utilities`
- 来源: `jrc-polymers-2007`

###### 生产及回收电力 (`electricity_line`)

纳入实际制胶、过滤真空、连续纺丝、洗涤、干燥、卷绕、气液回收、冷却及废水预处理电力，含同批群失败运行和应归属待机；保留分表交接，不与公用工程总表重复。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_utilities。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_utilities`
- 来源: `jrc-polymers-2007`; `enka-industrial-recovery`

###### 外购生产及回收蒸汽 (`steam_line`)

按实际温压及凝结水返回记录净供蒸汽能量，与电力分开；若使用蒸发、干燥或吸附剂再生，应纳入其负荷。ENKA Obernburg 热电联产只是特定来源示例，并非通用供应商。

- 选定流: 工艺蒸汽
- 流属性/单位: Energy / MJ
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_utilities。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_utilities`
- 来源: `jrc-polymers-2007`; `enka-industrial-recovery`

###### 气体回收吸附剂更换 (`activated_carbon`)

仅在适当去除硫化氢后实际设有二硫化碳吸附精处理装置时纳入；记录购入更换炭、再生蒸汽及损失。不强设回收效率或假定所有工厂均有吸附装置。

- 选定流: 活性炭
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 条件性锌沉淀试剂 (`lime_slurry`)

仅在废水转出前实际场内沉锌时纳入。记录整份采购浆液及固体含量；场内分别购入的配料应替代浆液采购行。不套用参考厂 pH、去除率或污泥率。

- 选定流: 氢氧化钙浆液
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_materials。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `jrc-polymers-2007`

###### 条件性盐干燥燃料 (`dryer_natural_gas`)

若回收盐在场内直接燃气干燥，则纳入实际燃气用量。保留已积分体积、参考温压及有独立证据的热值；流属性系数不是气体密度。不得与外购蒸汽重复计入同一燃料。

- 选定流: 天然气
- 流属性/单位: Energy / MJ
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_utilities。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_utilities`
- 来源: `jrc-polymers-2007`

#### 输出

##### 产品流

###### 新放行纱内部交接 P (`released_yarn`)

实际新增质量放行的单股连续粘胶纱转入成品库存，保留 P 及其完整携带交换向量，不当作交付 Q；退回纱复验不产生新 P。原生身份为成品、已制造、生产混合、在工厂，未给出 CAS、地理或供货地点、固定牌号、线密度及供应商，不能证明 ENKA 来源。仅用于所声明未染色有光黄原酸酯路线长丝，不得用于短纤纱、树脂、缝纫线、多股缆线或零售纱。

- 选定流: 人造长丝纱（不包括缝纫线及多股线或缆线），不供零售 `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `jrc-polymers-2007`; `enka-filament-products`

###### 条件性可售回收盐 (`recovered_salt`)

仅用于实际回收干燥后对外供应的无水硫酸钠，实测水分、纯度及全部分离干燥负荷。芒硝结晶不能证明最终为无水形态。若以十水合物销售，须改列正确水合物行并记录结构水，不能使用本行或猜测换算。

- 选定流: 回收无水硫酸钠
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

##### 废物流

###### 送外部处理废水 (`wastewater_transfer`)

记录实际转出水流质量、水分、溶解硫酸盐、锌、残留二硫化碳与硫化氢及实测有机物，连同接收方处理负荷。COD 是水质指标，不是排放化学物质量；不得又把外部污水厂最终排放计为本厂直接排放。

- 选定流: 粘胶生产废水
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 条件性场内含锌污泥 (`zinc_sludge`)

仅在场内实际产生时纳入，保留湿质量、干固体、锌形态和接收方。该混合污泥是一条物理废物流，不是采购硫酸锌或可售锌；纳入脱水及实际处理。

- 选定流: 废水预处理含锌污泥
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 纤维素过滤残渣 (`pulp_filter_residue`)

记录一种实际粘胶液过滤残渣及其纤维素、夹带液和污染物含量与处理；不得用残差虚构质量以闭合。

- 选定流: 粘胶液过滤残渣
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 废弃粘胶纱 (`waste_yarn`)

纳入断头、不可回收不合格产物及失败运行废纱，使用相同调湿质量基准；返工另行追踪，保留早先负荷，不同时计作废物外送和回收产品。

- 选定流: 废弃粘胶长丝纱
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `jrc-polymers-2007`

###### 废回收吸附剂 (`spent_carbon`)

仅记录实际更换废物，保留吸附硫化物、水分、去向及处理；内部蒸汽再生不算新炭采购或废物外送。

- 选定流: 废二硫化碳回收活性炭
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

##### 基本流

###### 残余二硫化碳排气 (`cs2_air`)

按浓度与匹配实际气量或速率随时间积分测量控制后及逸散二硫化碳；被捕集内部回用气体不算大气排放。二硫化碳质量与以硫计质量须区分。

- 选定流: 二硫化碳，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 残余硫化氢排气 (`h2s_air`)

使用独立实测残余硫化氢，不得根据总硫、COD、二硫化碳进料损失或质量闭合残差反推；保留治理入口出口及洗涤转移子账。

- 选定流: 硫化氢，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 实际蒸发水 (`water_vapour`)

将实际蒸发水与纤维保留水分、供货载体水、冷凝水、盐结构水和有独立证据的化学反应水分开；不得把未知反应水和未知蒸发量同时拟合于同一残差。

- 选定流: 水蒸气，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 化石二氧化碳，排放至空气 (`dryer_co2`)

仅在实际场内燃烧时纳入；以气体分析或经验证的燃料专属平衡独立采集此实际物种，保留单位及治理信息。无换算或物种分配证据时，不得把总氮氧化物或总硫测量标成本物种。

- 选定流: 化石二氧化碳，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 二氧化硫，排放至空气 (`dryer_so2`)

仅在实际场内燃烧时纳入；以气体分析或经验证的燃料专属平衡独立采集此实际物种，保留单位及治理信息。无换算或物种分配证据时，不得把总氮氧化物或总硫测量标成本物种。

- 选定流: 二氧化硫，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 一氧化氮，排放至空气 (`dryer_no`)

仅在实际场内燃烧时纳入；以气体分析或经验证的燃料专属平衡独立采集此实际物种，保留单位及治理信息。无换算或物种分配证据时，不得把总氮氧化物或总硫测量标成本物种。

- 选定流: 一氧化氮，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

###### 二氧化氮，排放至空气 (`dryer_no2`)

仅在实际场内燃烧时纳入；以气体分析或经验证的燃料专属平衡独立采集此实际物种，保留单位及治理信息。无换算或物种分配证据时，不得把总氮氧化物或总硫测量标成本物种。

- 选定流: 二氧化氮，排放至空气
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `jrc-polymers-2007`

### 过程：调湿库存包装及实际发运 (`dispatch`)

#### 输入

##### 产品流

###### 成品库存接收放行纱 (`stock_yarn`)

接收 released_yarn 同一物理 P 交接及完整携带负荷，合并时抵消内部交接两侧。期初成品具有实际历史且路线、等级和状态一致的交换向量，不是零负荷。原生身份是通用成品、已制造、生产混合、在工厂，未规定 CAS、地理或供货地点、固定牌号、线密度及供应商，不能确定供应商或 ENKA 地理来源。

- 选定流: 人造长丝纱（不包括缝纫线及多股线或缆线），不供零售 `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_delivery`
- 来源: `enka-filament-products`; `jrc-polymers-2007`

###### 工业卷绕纸管 (`paper_tube`)

记录实际纸管质量及复用次数与退回；筒皮重不进入纱线 Q，但纸管制造和分摊更换负荷仍纳入。

- 选定流: 纸板卷绕管
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 运输纸箱 (`carton`)

一种实际工业运输纸箱，单独称量并与纱线及其他包装分开；运输纸箱并不使纱线变成零售包装。

- 选定流: 瓦楞纸板运输纸箱
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 防护薄膜 (`polyethylene_film`)

分别记录实际聚乙烯薄膜质量及损失；包装质量不得进入纱线净交付量。

- 选定流: 聚乙烯包装薄膜
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 调湿仓储搬运电力 (`electricity_dispatch`)

纳入实际调湿、仓储停留、本段卷绕包装、内部电动搬运、检验、退回返工及发运电力；核对生产与仓储表计边界，不得遗漏或重复。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`; `enka-industrial-recovery`

#### 输出

##### 产品流

###### 实际验收工业交付 Q (`delivered_yarn`)

终端参考为发运门实际唯一正验收净交付的未染色有光单股粘胶连续长丝纱，排除筒皮包装和未交付库存。Q 不等于新增放行 P；同一物理数量退回再交付在验收后只计一次。原生名称分量为成品、已制造、生产混合、在工厂，未给 CAS、地理或供货地点、固定路线或等级、线密度及供应商。通用身份本身不能证明供应商、ENKA 来源或具体调湿制度。必须声明黄原酸酯湿纺路线、单股工业非零售形态、实测线密度与长丝数、油剂及水分。

- 选定流: 人造长丝纱（不包括缝纫线及多股线或缆线），不供零售 `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `identity_reference`
- 采集协议: `cp_delivery`
- 来源: `jrc-polymers-2007`; `enka-filament-products`

##### 废物流

###### 仓储废弃纱 (`dispatch_waste_yarn`)

实际仓储或发运损坏不合格纱送处理量，与可回收退回返工和期末库存分开，保留结转负荷及处理。

- 选定流: 废弃粘胶长丝纱
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 废包装膜 (`waste_film`)

记录实际裁边及损坏薄膜和接收方处理，不与废纸合并。

- 选定流: 废弃聚乙烯包装薄膜
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 废纸板 (`waste_paperboard`)

纸箱废物单列；若另产废纸管流，须另列独立行。

- 选定流: 废弃瓦楞纸板
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

###### 废卷绕纸管 (`waste_tube`)

实际不可返回的损坏纸管，记录复用历史及接收方；与纸箱和退回可复用纸管分开。

- 选定流: 废弃纸板卷绕管
- 流属性/单位: Mass / kg
- 数量规则: 原始数量归属于本交付批群后，仅除以一次实际正验收纱线净交付千克数；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dispatch`
- 来源: `enka-filament-products`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_internal` | 边界内回用二硫化碳、碱液和洗水不获取避免生产信用；保留回收全部负荷，合并时抵消内部交换。 | `jrc-polymers-2007` |
| `allocation_salt` | 先分离实际回收盐精制及其他独立联产物的专属负荷；剩余共用负荷应说明可辩护的物理关系，无法建立时使用实际可售输出同一工序门同期市场价值比例并做敏感性分析。不设固定分配比例，不声称替代信用，不向内部循环分配，也不将未处理废物标作联产品。 | `jrc-polymers-2007`; `enka-industrial-recovery`; `ilcd-attributional-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | viscose_line | 整份供货材料及内部回收子账 | 收货、地磅、罐存及含量记录 | 批号；供应商；供货质量；含量；载体水；浆粕干物质；化学品罐期初末；内部回收量及组成；失败运行；在制品质量及历史交换向量 | 责任人：生产物料核算员，实验室核验。采集每个匹配生产批群未归一的实际期间收货、消耗、库存变化及完整制剂质量，包括失败零放行运行和返工。含量和水作为组成子账，另采内部流和在制品结转负荷。采集时不除以 P 或 Q。 | kg | 逐批并核对报告期间 | 完整匹配生产批群及期初在制品历史 | 实际生产工厂及分别识别的供应商 | 每 1 kg 参考流 | 校准称重、发票、检验单、罐存核对及批次谱系 |
| cp_utilities | viscose_line | 生产及辅助系统实际公用工程负荷 | 表计及运行记录 | 工序分表；原始电量；蒸汽流量焓值；凝结水；积分气量或速率序列；参考温压；独立密度热值；时间戳；失败运行待机负荷；在制品负荷向量 | 责任人：公用工程工程师。保留生产、真空、洗涤干燥、冷却、回收、废水预处理及实际联产品干燥各自未归一能量或体积分子。保留供给返回及分表核对，采集实际失败零产出和返工能耗及期初末在制品结转；采集端不归一。 | kWh; MJ; m3 | 连续表计及完整匹配生产期 | 与 cp_materials 相同生产及在制品期间 | 实际公用工程边界及供应商，不默认 ENKA 热电联产 | 每 1 kg 参考流 | 表计校准、能源发票、温压、凝结水及公用工程平衡 |
| cp_release | viscose_line | 新增验收 P 及生产在制品谱系 | 质量放行及拒收批次账 | 唯一批号卷装；实际 P 净 kg；失败拒收运行；退回返工来源；调湿温度相对湿度时长；水分；油剂；线密度；长丝数；筒皮重；期初末在制品数量及交换向量 | 责任人：质量放行员。按声明调湿基准扣皮称量新增验收纱，保留完整失败及不合格记录。回收返工材料沿原始 ID 追踪，退回纱复验不算新增 P。采集未归一 P、全部在制品质量、原始结转负荷及内部交接单，不将期末成品加至 P，也不除以 Q。 | kg; dtex | 逐次放行拒收并核对期间 | 完整生产批群，包括零正验收产出期间 | 同一生产线及物理卷装 ID | 每 1 kg 参考流 | 签字质量放行单、校准净称重、水分油剂测试及完整拒收谱系 |
| cp_recovery | viscose_line | 回收联产物实际物种及环境出口 | 流分析、气体监测及转移联单 | 流 ID；原始质量体积；气流量及物种浓度；分别计 CS2/H2S；C/S/Na/Zn 含量；废水组成；仅作指标的 COD；盐水合形态纯度；污泥固体；游离及结构水；独立证实反应程度及反应水；回收流期初末库存；接收方 | 责任人：环境回收工程师及分析实验室。独立采集未归一的进出循环质量、实际物种及水证据，包括治理耗材、能量、废物及外部处理负荷。使用浓度乘匹配积分体积或按声明气体条件作速率积分，积分体积不再乘时长。不用另一个未知闭合量反推反应水或未知出口。 | kg; m3; mg/m3 | 匹配采样连续监测及每次转移 | 全部匹配生产期、异常期间及回收库存历史 | 实际收集回收装置及废水接收方 | 每 1 kg 参考流 | 采样质控、校准、实际反应物种证据、元素水闭合及接收方处理凭证 |
| cp_delivery | dispatch | 实际唯一供货 Q 及成品库存结转 | 发运验收及成品库存谱系 | 物理批号卷装；P 接收；发运总量 G；验收退回 R；唯一净验收交付 Q；期初末成品 kg；结转交换向量；库存转出报废；调湿水分油剂；包装皮重 | 责任人：发运主管及库存核算员，核对客户验收记录。采集未归一实际交付退回、期初末库存质量及与本路线等级状态匹配的历史交换向量。扣除全部皮重称纱净质量，区分发运事件与唯一验收物理产物，不重复计退回后再发。P 另存，不假定 P 等于 Q，不将未交付库存计为交付。已计入交付的退回恢复原始结转负荷并更正原验收供货批群，后续复验再发不得作为第二次正产出；采集端不做除法。 | kg | 逐次发运验收退回及期初末盘点 | 声明实际交付批群及其前序结转生产库存期间 | 生产场址发运门，路线等级状态匹配库存 | 每 1 kg 参考流 | 发运验收、校准皮净重、退回库存核对及历史负荷溯源 |
| cp_dispatch | dispatch | 仓储包装搬运退回及发运负荷 | 表计包装收据及停留搬运日志 | 实际纸箱纸管薄膜质量；纸管复用退回；库存停留；调湿能耗；搬运能耗；发运能耗；失败发运返工；包装废物及接收方；期初末负荷向量; 按制品分别记录期初末空包装及附着于在制品／成品库存的包装 kg；随实物发运总量外出的包装 kg；外部复用包装接收退回及对外返还 kg | 责任人：仓储运行工程师。为匹配库存历史采集完整未归一实际包装、仓储、调湿、搬运、退回返工和发运负荷，含失败交付。逐一拆分每项物料燃料废物及实际供应商。明确分配至交付与期末库存的负荷，不删已发生负荷，采集时不做除法。 按每种包装制品另建实物子账：期初空包装／附着包装库存加外部收料及接收退回，等于期末空包装／附着包装库存加随实物发运总量外出的包装、对外返还复用包装及实际废物；内部复用转移抵消。采用独立实测制品／皮重质量及可追踪包装标识；随纱外出的包装既不是新增纱 Q，也不自动成为联产品。实物数量与已分配负荷向量分开。 | kg; kWh; MJ | 每次操作及完整库存期间 | 与 cp_delivery 相同交付及期末库存批群 | 实际仓储及发运设备，不含门后外部分销 | 每 1 kg 参考流 | 包装称重、能耗停留记录、分配核对及废物处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `match_cohort` | 所有清单行 | 归一前建立原始可归属交换向量：放行生产负荷承接期初在制品和完整实际期间投入负荷，包括失败及返工运行，扣除结转后续生产的期末在制品，并作实际联产品分配。交付负荷承接期初成品交换向量、新放行向量及实际仓储包装搬运退回发运负荷，扣除期末成品结转向量及独立追踪其他去向。抵消内部 P 和循环交接，不重复累加同一继承向量。原始物理库存另核对：期初成品质量 + 新 P + 实物退回接收 + 独立实测水分或油剂增加 = 实物发运总量 + 期末成品质量 + 实际报废及其他出口 + 独立实测水分或油剂减少。全部项按声明组成及调湿基准核对，保留不确定性而不虚构残差水交换；Q 是这些事件中唯一正验收净供货，不自动等于发运总量或 P。 | opening_wip_vectors; raw_period_vectors; closing_wip_vectors; opening_finished_vectors; new_released_vectors; dispatch_vectors; closing_finished_vectors; other_destinations; cp_release; cp_delivery | attributable_raw_vectors | `jrc-polymers-2007`; `enka-filament-products`; `enka-industrial-recovery` |
| `normalize_delivery` | 所有清单行 | 每项外部交换先完成原始单位换算，再将 match_cohort 匹配的原始可归属数量除以实际正验收净交付纱质量 Q（kg），仅一次。清单数量表达式和采集汇总都指向同一次报告操作，不是顺序重复除法。终端 delivered_yarn 为 Q/Q = 1 kg；released_yarn 与 stock_yarn 保持以同一 Q 报告的相等实测 P 交接量，合并时抵消。Q 为零时报告失败或建库存期间，并将负荷结转到符合条件批群，不得除零或静默删除。 | attributable_raw_vectors; Q; cp_delivery | exchange amount per 1 kg reference flow | `enka-filament-products` |
| `physical_species_water` | viscose_line; dispatch | 在 LCA 分配之外核对完整未归一流质量及 C/S/Na/Zn。追踪纤维素固体、溶质、水分、油剂、回收流、废水、残渣、实际气体物种及库存。游离水、凝结水、蒸发和硫酸钠水合物结晶水与净化学反应水分开。反应水生成消耗须有独立实际化学、含量及反应程度证据，不强设数值，不以闭合推出物种。分析不确定性保留缺口，不虚构汇。 | raw_stream_masses; elemental_assays; actual_species; independently_evidenced_reaction_extents; cp_recovery; cp_release; cp_delivery | raw physical reconciliation and unresolved uncertainty | `jrc-polymers-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_basis | 参考流及全部库存 | 双语及每个验收批群均保持同一粘胶路线、未染色有光等级、单股连续长丝结构、调湿水分油剂及供货门；不得替换短纤纱、聚合物或混合路线。 | 检验单、路线声明、净称重及卡片原生限制 |
| complete_carry | 所有清单行 | 保留原始实际期间、失败零产出、在制品及成品质量与交换向量结转、退回返工、正唯一 Q，并单列 P；无法证明历史库存负荷时不能形成完整交付数据集。 | cp_materials; cp_utilities; cp_release; cp_delivery; cp_dispatch |
| source_limits | 证据及供应商 | JRC 2007 工序示例及 ENKA 产品和 2023 比较仅建立有限技术背景，不是当前清单值或同一 SKU 完整数据集。声明当前工厂、供应商、地理及全部偏差；BREF 批次或一体化洗涤范围、ENKA 勾号或假设环境宣传均不得变成实测交换。 | 原始来源范围、当前前景记录及供应商匹配 |
| species_closure | 回收及物理账 | 核验全部气液环境出口、独立实际物种和反应水证据、元素平衡及处理去向；不得以 COD 换有机物或拟合残差，不重复外部废水处理排放。 | cp_recovery；分析质控及处理凭证 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 核对单股连续粘胶黄原酸酯纱及声明实际交付门，拒绝排除路线形态及缺失限定信息；通用原生身份不建立工厂或供应商兼容性。 | `jrc-polymers-2007`; `enka-filament-products` |
| `validate_mass_stock` | 核对 P/Q 区别、完整在制品和成品结转向量、失败返工全部负荷、唯一正验收交付及皮重水分留油一致性。复验再发不产生新生产或重复 Q，不将期末成品加作生产输出。 | `enka-filament-products` |
| `validate_normalization` | 核对原始单位换算、match_cohort 及仅一次 normalize_delivery。拒绝二次除法、无依据密度热值、重复制剂组成、套用收率及无依据气量积分；数据集使用前必须补齐全部适用实测量及实际条件性辅助交换。 | `jrc-polymers-2007` |
| `validate_physical` | 独立于分配归一核对未归一质量、元素、物种及水平衡，采用真实出口及独立回收库存。未知反应水和未知出口不得共享拟合残差，保留并解决实质性不确定性。 | `jrc-polymers-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产及发运清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 完成完整性核对后用于供应商匹配的净交付单股粘胶连续长丝纱后续纺织建模 |
| excluded_use | 零售复绕、合股缆线、缝纫线、丝束短纤、莱赛尔醋酸酯铜氨、合成纱、轮胎帘线或所有人工纱通用均值；不声称方法已获批准 |
| required_metadata | 实际工厂地理、路线等级线密度长丝数、调湿水分留油、净交付 Q 及独立放行 P、库存和在制品谱系、报告批群、供应商、分配及来源日期 |
| required_quality_disclosure | 测量不确定性、历史结转负荷、辅助 UUID 或供应商匹配缺口、证据限制、实际条件性操作、物理平衡缺口及未完成范围 |
| update_trigger | 路线产品状态、调湿、供应商、回收处理、供货门、库存归属或来源证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `jrc-polymers-2007` | official_guidance | European Commission, August 2007, Reference Document on Best Available Techniques in the Production of Polymers, §§11.2.1/11.2.3/11.3, Figure 11.1, §§12.7.2–12.7.7. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 工业黄原酸酯长丝路线、不得替代短纤切断路线、浴液化学品、回收、气液出口、盐及锌处理。历史示例浓度、用量、回收效率及洗涤范围不作默认值，实际物种和水须有独立证据。 |
| `enka-filament-products` | literature | ENKA, Viscose filament yarns, manufacturer product page. https://www.enka.de/en/products/ | 原始商业连续长丝产品、线密度长丝数区别及纺织用途。产品家族不是实测 SKU、完整配方或调湿水分留油皮重规范，目录示例不作数值约束。 |
| `enka-industrial-recovery` | literature | ENKA, Sustainability, production and recovery sections. https://www.enka.de/en/sustainability/ | 原始木浆转化、物料循环、盐联产物、废水处理及能源背景。瑞典木浆 Domsjö 供货和 Obernburg 热电联产仅描述该供应链，不是通用工厂地理、供应商或零碳证明，不设通用回收系数、分配或反应水率。 |
| `enka-consumption-context` | literature | ENKA, Consumption & emission values, 24 October 2024; data 2023, one-page table and footnotes 1–3. https://www.enka.de/wp-content/uploads/2024/10/ENK_1825_20241024_Consumption-Emission-values.pdf | 工业上油剂、锌及洗涤反证。BREF 比较项为批次洗涤，ENKA 单元格是定性勾号，并有高用锌和专有洗涤例外。含混 Hydrogene Sulphate 不作酸身份依据，不将表中数值或勾号复制为前景量、收率或 QA 范围。 |
| `ilcd-attributional-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp.257-258 (PDF pp.277-278). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅归因分配方法：先分离专属负荷，以决定性物理因果关系优先，剩余负荷才用同一工序门市场价值；无粘胶因子、固定比例、替代信用、废物截断或配方。 |
