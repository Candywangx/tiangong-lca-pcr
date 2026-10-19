---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.medicaments-for-therapeutic-or-prophylactic-uses
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 干混直接压片的50mg阿卡波糖素片，100片瓶装

## 1. 范围与适用性

本PCR仅覆盖一种成品制剂子集：外购原料药及辅料经干混、直接压片制成的50mg规格阿卡波糖口服素片，装入每瓶100片的密闭药瓶并经质量放行。本方法用于环境活动数据采集及清单建模。50mg规格识别活性含量，不代表治疗剂量、片重、功能等效或患者结局。（`fda-precose-label-2015`；`huadong-acarbose-direct-compression-2007`）

2015年FDA PRECOSE标签记录了真实的50mg片剂和100片瓶装形态（NDC50419-861-51）；仅用作历史身份依据，不声明当前标签。华东专利独立记录了可行的干混/直接压片路线，但不能证明PRECOSE或任何当前SKU的处方及路线。具体数据集必须独立追溯实际完整处方、路线、原料供货及完整包装；不得拼接两份来源制造虚构的厂商处方。不默认采用专利处方、混合时间、收率、用量、湿度、货架期或排放数值。

排除把原料药发酵/纯化当作本前景成品、其他活性成分/规格、固定复方、湿法或干法制粒、包衣/缓释片、胶囊、液体、注射剂、中成药、泡罩或散装片剂供货及既有成品的再包装。保留相容的上游原料药/辅料负荷。生产画像止于完整包装片剂唯一一次新增质量放行；放行后仓储/发运另设成品账，在纳入该扩展时须保持可见。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.medicaments-for-therapeutic-or-prophylactic-uses |
| classification_refs | CPC3.0:35260; narrower |
| covered_products | 干混/直接压片、100片密闭瓶装的50mg阿卡波糖素片 |
| excluded_products | 其他药品、以原料药为最终产品、其他路线、规格、剂型和包装形态 |
| representative_product | 实际符合边界的50mg片剂SKU；历史PRECOSE100片瓶装仅支持实物形态，不推断其专有制造路线 |
| production_route | 收货/称量 → 干混/润滑 → 直接压片/除尘 → 装瓶/封口/贴标 → 检测/唯一新增放行 |
| market_state | 完整密闭100片瓶装，含实际瓶盖、标签及有证据的封片/说明书/外包装；片剂净质量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给所限定的阿卡波糖片成品 |
| How much | 新增质量放行门处100片瓶装验收成品片剂净质量1kg |
| How well | 实际批准产品规范及批次验收：身份、50mg标示含量、含量/均匀度、水分、物理完整性、溶出/崩解及包装完整性；不声明临床等效 |
| How long or cycle | 一个声明的代表性制造/放行批群及期间；不是疗程或患者寿命 |
| reference_flow_link | finished_tablets |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 阿卡波糖片 `e0ae1660-e0d6-4830-aadd-126c4c1a6aa4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商/场址/国家/期间; 实际SKU/批次及批准规范; 完整处方及各采购成分的等级/状态/含量/水分; 直接压片路线证据; 50mg素片规格; 整片实测净质量; 100片/瓶及完整包装清单; 唯一新增放行门及批群; 失败/返工/退回批次; 期初末WIP及结转负荷; 成品库存/发运账; 公用工程/地理/供应商; 废物及排放去向 |

所有限定信息须在具体数据包元数据或等效字段中声明。原生片剂记录除工厂生产混合外，未限定地理、规格、包装或路线。其35240分类是已披露的元数据不一致，不能据此把明确的成品片剂当作纯糖。身份匹配不构成科学或映射批准。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 使用唯一新增瓶装成品质量放行门处的1kg整片净质量。cp_release测量Q；包括原料药、辅料及实际水分，排除全部包装和销毁样品。 |
| count_mass | finished_tablets | Mass | kg | 按同SKU/批群以校准去皮称量或有代表性的已计数片样测整片净质量。Q=sum(N_lot×实测每片平均质量_lot，单位kg)。100片/瓶仅用于件量转换；每片50mg活性绝不替代整片质量。不得混合不相容配置。 |
| electricity_conversion | electricity | Net calorific value | MJ | 记录原始表计kWh或MJ。依据精确原生能量单位链1kWh=3.6MJ；保留CN、<1kV、电网平均到用户限制，不把NCV解释为燃料用量。 |
| raw_units | all inventory rows | Actual declared property | kg; MJ | 原始数量先换算，再执行唯一normalize_period。速率乘匹配时长得到总量；已积分液体/气体体积不再乘时间。体积转质量须有实际状态独立测得密度，不得把原生次级属性系数默认为密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已收货的合格原料药/辅料及完整外购包装物品；本前景不含上游原料药反应器 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | 仅为CPC35260较窄的成品片剂子集 |
| recursive_input_rule | 同批内部退回/返工保留身份和负荷，不造新产量。外购成品片/再包装不属本路线；外购预混料整份作为一个投入且携带相容上游负荷，不重复采购其成分。 |
| upstream_dataset_requirement | 原料药发酵/纯化、辅料制造、实际包装制造、运输及公用工程须匹配供货商/状态/地理/期间；废物转移须对应实际处理接收方 |
| disclosure | 放行门、上游起始状态、完整处方/包装、实际放行前后仓储边界、阶段计量、WIP/结转负荷、退回/返工、支持系统及去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | formulation | 纳入收货、实际称量/过筛、混合/润滑、压片、除尘、装瓶/封口/贴标、实际放行前仓储/搬运、质量检测、清洁/换线、HVAC/除湿、治理、失败/零产出运行及返工。在一个聚合前景过程中保留阶段记录。 | `huadong-acarbose-direct-compression-2007`; `ifc-pharma-biotech-2007` |
| b_release_gate | finished_tablets | Q是唯一正值的新增质量放行瓶装片剂净质量，不是实际交付量。生产账不得再把同一Q形成的期末成品库存加为输出。成品仓储/发运另账，保留其期初末质量和结转负荷、真实包装/搬运/发运负荷、退回及交付。合并时内部放行交接抵消一次，不把Q与交付量视为相等。已放行产品退回再验收不产生新Q。其实物退回/恢复交接、历史负荷及新增复验/返工负荷保留于独立链接的成品恢复子账，既不计入无关新增放行批群，也不遗漏负荷。未曾放行的WIP返工仍归生产批群，仅首次验收放行时进入Q。 | `ifc-pharma-biotech-2007` |
| b_completion | all inventory rows | 卡片是明确的初始流图，不是截断清单。具体场址声明完整前，须将实际清洁制剂、燃料、制冷剂、过滤件、干燥剂、二级包装、废包装及直接物种各列独立原子交换。外购制剂整份记录一次，成分/载体水仅作分析子账。保留所有真实负荷；零值须有证据。 | `ifc-pharma-biotech-2007` |
| b_outlets | formulation | 基准画像将废水和固废外送至有证据接收方，不含厂内原料药合成、燃烧或废水处理。若实际纳入声明边界，须扩展全部相应投入及按物种/介质区分的输出，不得遗漏。处理排放归入声明的处理边界，不再在废物转移行重复排放。 | `ifc-pharma-biotech-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulation | 干法制剂至包装成品质量放行 | required | 全部适用产品批群 | foreground | finished_tablets |

一个聚合过程保留全部阶段原始记录。内部混合粉、压片返料及未包装片剂不增加最终输出。初始流图未列的实际辅助化学品/包装组件或排放须各自补充身份和协议；未匹配不能许可遗漏消耗。

### 过程：干法制剂至包装成品放行（`formulation`）

#### 输入

##### 产品流

###### 阿卡波糖原料药粉末（`acarbose_api`）

称量整份外购粉末，包括实际残余水分和杂质。原生CAS56180-94-0及无定形粉末身份支持发酵来源阿卡波糖；英文产菌描述措辞含混，不能作为收率或纯度系数。保留供货商、含量测定基准、残留溶剂、路线、等级及上游发酵/纯化负荷。活性成分质量仅为子账，绝不重复采购。

- 选定流：阿卡波糖 `4f6cb86c-01e5-46a5-85ff-a546e3f38bce`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### 微晶纤维素填充剂（`mcc`）

记录实际整份供货填充剂质量、药用等级、粒径分布和水分。宽泛原生记录未固定等级或供货商；植物纤维70%/30%的说明不能作为本投入的组成、用量或结晶度默认值。

- 选定流：微晶纤维素 `b4f87810-9ef0-44c8-a735-e696c40653e9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### 原淀粉填充剂（`native_starch`）

仅在实际单独购入原淀粉时纳入。记录植物来源、等级、水分及整份供货质量。宽泛植物颗粒淀粉物理身份相容，但不能证明药用资格，也不代表预胶化淀粉或外购共加工辅料混合物。

- 选定流：淀粉 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### 可压性淀粉辅料（`compressible_starch`）

仅纳入实际单独购入的可压性淀粉。确认改性/预胶化状态、植物来源、组成、水分及SKU；不得用原淀粉流默默替代物理改性等级。外购混合物整份记录一次，成分仅作分析子账。

- 选定流：可压性淀粉辅料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`huadong-acarbose-direct-compression-2007`

###### 胶态二氧化硅助流剂（`colloidal_silica`）

仅为实际药用助流剂等级；记录表面处理、形态、水分及整份采购质量。不得默认石英砂、晶态二氧化硅、硅酸盐或普通工业路线等同。

- 选定流：胶态无水二氧化硅
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### 硬脂酸镁润滑剂（`magnesium_stearate`）

原生CAS557-04-0粉末及直接压片用途物理身份相容。记录实际药用等级、脂肪酸组成、植物/动物来源、水分及供货商。不规定理想纯硬脂酸盐含量或润滑剂配比。

- 选定流：硬脂酸镁 `569f27cc-2b97-4005-a20b-00b68d70ede3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ingredients`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### 制剂及包装用电（`electricity`）

保留混合、压片、除尘、HVAC/除湿、清洁、质量控制、放行前暂存及包装用电，包括应归属的待机/失败运行。原生身份明确为CN、<1kV、电网平均消费组合到用户。仅适用于这一实际供电；其他地理、电压或发电方式须审查替换，但所有实测用电仍保留在清单中。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`ifc-pharma-biotech-2007`

###### 清洁用经处理工艺水（`cleaning_water`）

记录设备/厂房清洁所供经处理水；若厂内纯化纳入，保留实际损耗及能源。原生地理、等级和处理路线均未指定；不能证明无菌水、注射用水、自来水处理或供货商。直接压片路线不默认投入制粒用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`ifc-pharma-biotech-2007`

###### 100片装初级药瓶瓶体（`bottle_body`）

对一个实际瓶体称量，排除瓶盖和内容物。确认材质、层结构、尺寸、供货商及药品接触规范；标签只说明瓶装，不能据此推断HDPE或玻璃。

- 选定流：100片装初级药瓶瓶体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### 药瓶瓶盖（`bottle_closure`）

实际单独供货的瓶盖；记录聚合物/金属、内衬构造和质量。若以不可分组件供货，则保留组件质量，不重复计入内衬。

- 选定流：药瓶瓶盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### 瓶口防拆封片（`bottle_seal`）

仅纳入实际单独供货的封片，保留完整复合层/涂层组成和质量。历史标签未说明普遍必需；实际未使用须有包装证据。

- 选定流：瓶口防拆封片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### 药瓶印刷标签（`bottle_label`）

实际供货的印刷标签为一个物品；记录基材、供应商已计入的胶黏剂/油墨、质量及废标。该物品已包含的成分不得重复采购。

- 选定流：药瓶印刷标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### 纸质印刷产品说明书（`leaflet`）

仅纳入实际说明书，测量质量并记录纸张及印刷供应边界。电子信息不得默认为纸质说明书的质量或影响。

- 选定流：纸质印刷产品说明书
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### 瓦楞运输纸箱（`shipping_carton`）

仅纳入选定放行门前实际使用的单个瓦楞纸箱；记录实测质量、组成及装瓶数量。放行后运输包装在声明该扩展边界时仍保留于成品账，不能删除或重复计入。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-precose-label-2015`; `ifc-pharma-biotech-2007`

##### 废物流

不预设交换；实际发生须独立列原子行。

##### 基本流

不预设交换；实际发生须独立列原子行。

#### 输出

##### 产品流

###### 瓶装放行的50mg规格阿卡波糖片（`finished_tablets`）

唯一终端Product输出：1kg成品片剂净质量，包括全部辅料和实际水分，排除所有包装。每密闭瓶100片是供货配置；50mg是每片标示活性含量，不是片重。原生记录为工厂生产混合，未指定地理/路线/规格/包装；其CPC35240分类与明确的片剂名称及说明不一致。保留此分类债务；制剂无CAS，不把原料药CAS复制给混合物。以实际批次及包装记录限定这一更窄的成品。

- 选定流：阿卡波糖片 `e0ae1660-e0d6-4830-aadd-126c4c1a6aa4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

##### 废物流

###### 废弃阿卡波糖片（`rejected_tablets`）

实际废弃不合格片及销毁的质控样品；保留活性含量、辅料、湿质量、去向及处理验收。仍在本门内可返工的片剂为内部流，既非本项废物，也非新产量。

- 选定流：废弃阿卡波糖片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：`ifc-pharma-biotech-2007`

###### 废弃制剂粉尘（`collected_dust`）

称量、混合、压片及除尘环节实际收集后废弃的粉末；测量组成/水分并记录接收方。合法内部回用粉按批跟踪，不增加采购或产量，也不等于排入空气的粉尘。

- 选定流：废弃阿卡波糖制剂粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：`ifc-pharma-biotech-2007`

###### 外送的片剂线清洁废水（`cleaning_effluent`）

实际外送处理的整份废水，分别测量水、悬浮固体、阿卡波糖及清洁成分、COD/TOC并记录去向。COD/BOD是需氧量分析指标，不是废水质量、活性质量测量或基本排放身份。

- 选定流：阿卡波糖片剂线清洁废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：`ifc-pharma-biotech-2007`

##### 基本流

###### 排入空气的残余制剂颗粒物（`dust_air`）

排放至声明空气介质的实际治理后颗粒物，包括无组织排放。保留粒径基准、活性/物种组成、气体条件及治理记录。不再加入已收集滤尘，也不假定全部颗粒为纯原料药。未匹配原生UUID不得成为遗漏理由。

- 选定流：排入空气的阿卡波糖制剂颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-pharma-biotech-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single_product | formulation | 本画像只有一个参考产品。分开其他产品/规格/路线；共享HVAC、清洁、设备及质控采用分项计量或有文件的物理因果驱动，保留共享原始总量及分配比例。不按临床药效、剂量或患者结局分配。 | ifc-pharma-biotech-2007; jrc-ilcd-2010-allocation |
| a_rework | all inventory rows | 同一匹配批群内真实内部回收/返工负荷和失败运行负荷仅计一次。废物转移不自动获得避免产品信用。销售第二产品或本单输出画像外的溶剂/材料回收须明确审查多输出扩展，不能将联产品改名为废物。 | `ifc-pharma-biotech-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

每个collection_method仅保留未归一化的原始期间分子及完整库存/WIP结转负荷。aggregation_rule基准与清单卡片数量标注唯一normalize_period报告操作的结果，不要求采集端单独或顺序再执行A/Q。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | formulation | 质量部门owner：分母及放行身份 | foreground_record | SKU；批次；路线；规格；包装；片剂净质量；实测平均片重；片/瓶计数；首次放行ID/时间；历史放行/退回ID；销毁样片数；Q；成品期初末；交付 | 以校准去皮称量及批次特定计数核查记录唯一新增验收完整包装片剂。放行账与制造/包装记录匹配；排除废品、销毁样片及曾放行的退回品。保留原始Q、件量及质量记录，不在采集端除投入。 | kg; tablet; bottle | 每批及报告期间 | 完整匹配制造/放行期间，含起止截点 | 质量部门及最终包装工位 | 每 1 kg 参考流 | 校准/皮重记录；批次放行/包装核对；重复放行审计 |
| cp_ingredients | formulation | 物料及制造owner：成分投入 | foreground_record | 成分身份/SKU/批次；完整供货形态；供货路线/等级；完整处方；采购毛/皮/净重；退料；原料期初末；领用量；含量测定基准；水分；预混料组成 | 由收货、领用及库存账核对实际消耗的整份商业供货；供货退料保留确切去向。活性/水分/成分分析与采购分开。保留失败运行、返工及匹配批次全部已换算原始质量；此处不执行A/Q。 | kg | 每次收货/领用/批次 | 完整代表期间及关联批次 | 收货/称量/混合；物料owner | 每 1 kg 参考流 | 发票；批准批处方；CoA；秤；库存及领用记录 |
| cp_utilities | formulation | 工程owner：公用工程及支持系统 | foreground_record | 表计ID/读数；kWh/MJ；水质量或体积/密度/状态；起止；电压；国家；供货商；HVAC/除湿/待机时长；原始共享负荷及分配驱动 | 采集每个实际阶段及归属支持运行的完整原始表计差额总量，含失败/零产出运行、清洁及暂存。无分表时仅以有文件的因果依据分摊，并保留总量。速率须匹配时长，积分总量不再乘时长。明确分子单位及供应边界，不除以产量。 | MJ; kWh; kg; m3 | 连续计量；期间/批次核对 | 同产品/路线/状态批群及完整期间 | 门内公用工程/HVAC/清洁/质控/包装 | 每 1 kg 参考流 | 表计校准；账单；供货合同；分配底表；密度证据 |
| cp_packaging | formulation | 包装owner：完整包装供货 | foreground_record | SKU；100片瓶装配置；瓶体/瓶盖/封片/标签/说明书/纸箱ID；层结构/材质；供货组件质量/件量；废品；库存变化；供应边界 | 称量各实际购入物品/组件，将领用、损耗和期初末库存与装瓶量核对。供货已含涂层/油墨/内衬仅计一次；不得从历史标签猜材质或包装质量。分开放行前包装及后续发运包装账，两者均不删除。仅采集原始总量。 | kg; item | 每组件批及包装运行 | 匹配制造及包装批群 | 包装线及包材仓 | 每 1 kg 参考流 | 供应商规范/物料清单；组件称量；包装记录；废品 |
| cp_wip | formulation | 制造核算owner：WIP/返工及结转负荷 | foreground_record | 分阶段/批次期初末WIP；质量/组成；分交换期初结转负荷；原始期间新增负荷；分交换期末结转负荷；失败/零产出运行；内部退回ID；放行交接ID | 按同产品/路线/状态批群保留未归一化质量及分交换负荷账。依据可追溯工序进度/物理驱动保留完整期初及完整期末结转负荷，包括仍留在期末WIP中的未消耗期初结转。报告方程加完整期初、减完整期末各一次，不再另行扣减未消耗期初结转。失败运行和返工负荷各留一次；内部循环不新增外购/输出。保留全部原始分录，不除以Q。 | kg; MJ and each original exchange unit | 每批转移及期间截点 | 完整期间及前期WIP结入/后期结出链接 | 制造、质量及核算联合签认 | 每 1 kg 参考流 | 批次谱系；签认WIP盘点；工序完成及负荷底表 |
| cp_wastes | formulation | 环境owner：废弃物流 | foreground_record | 流/批次；湿质量；水分；API及其他组成；质控销毁；收集粉尘；废水；COD/TOC；接收方/处理；转移及退回废物 | 必要时在混合前测量各实际废物流及去向；区分留存/返工固体、收集废物及真实排放。废水是整份湿转移，分析物种为子账。保留原始期间总量、失败运行及处理链引用，不除以产量或默认信用。 | kg; analytical units retained | 每次转移及代表性采样 | 完整匹配期间，含清场及拒收批次 | 废物/废水门及实际接收方 | 每 1 kg 参考流 | 称重单；转移联单；分析方法；接收验收；零产出运行日志 |
| cp_emissions | formulation | 环境监测owner：空气排放 | foreground_record | 实际空气介质；排口/无组织ID；颗粒/活性组成；粒径；浓度；气体状态；流率/时长或积分体积；治理性能；检出限；监测覆盖 | 采用校准治理后测量或独立论证的物种特定模型，覆盖完整期间及异常。浓度乘匹配积分气量得原始质量，速率仅积分一次。不以COD、库存残差或指南限值推断物种、API比例、反应水或排放质量。保留原始质量及不确定性，不执行A/Q。 | kg; raw concentration/volume units retained | 适用时代表性正常/异常采样及连续记录 | 完整匹配期间及有文件的外推覆盖 | 全部实际纳入排气口及无组织源 | 每 1 kg 参考流 | 校准；采样协议；检出限；完整组成及治理证据 |
| cp_finished_goods | formulation | 物流/核算owner：独立放行后账 | foreground_record | 成品期初末及结转负荷；放行接收；交付；退回；再验收ID；实际仓储能源；存放时长；新增包装；搬运/发运负荷；目的地 | 在独立账记录全部真实放行后运行。保留库存负荷及批群链接；未放行WIP另列。若报告扩展交付系统，仅在内部交接抵消且声明带自身期初末库存负荷的交付分母后与生产合并。不得默默用交付量替换生产Q，也不得遗漏纳入负荷。 | kg; item; MJ; duration; transport units | 每次转移及期间截点 | 真实成品库存/发运期间及结转负荷链接 | 独立owner负责的放行后仓储/发运 | 每 1 kg 参考流 | 仓库盘点；分交换库存负荷；发运/退回记录；账单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对每个交换e先换算原始单位并核对完整匹配批群：A_e = 原始期间归属负荷_e + 完整期初WIP结转负荷_e - 完整期末WIP结转负荷_e。失败/零产出及返工负荷各计一次。Q是唯一正值新增质量放行瓶装片剂净质量。仅一次报告a_e=A_e/Q，基准为每1kg参考流。卡片公式及协议汇总标签描述同一次报告操作，绝不顺序再除一次。Q=0时保留原始负荷/结转账，不生成有限单位数据集。 | cp_release; cp_ingredients; cp_utilities; cp_packaging; cp_wip; cp_wastes; cp_emissions | 每1kg净放行片剂的一份归一化清单 | `ifc-pharma-biotech-2007` |
| physical_balance | formulation | 未分配物理质量、干固体、水、活性及相关元素守恒与负荷分配分开。期初WIP + 实际入料 = 唯一新增放行片剂 + 期末WIP + 实际废弃/空气/水出口，并保留有证据转移；包装另作守恒，同Q形成的成品库存不再是第二个生产输出。干混/压片不规定化学反应水。独立测量水分/蒸发/清洁用水并核查实际降解物种；不得从同一残差同时求未知反应水及未知出口。 | cp_ingredients; cp_release; cp_wip; cp_wastes; cp_emissions | 独立原始质量/组成闭合及解释的不确定性 | `ifc-pharma-biotech-2007` |
| finished_goods_reconcile | finished_tablets | 生产Q仅作为内部接收进入成品库存一次；交付采用自身期初库存 + 放行接收 + 实物退回 - 期末库存 - 实际损失账。曾放行退回品保留历史负荷，不造新Q。若报告实际交付，将成品期初末负荷及全部纳入仓储/包装/搬运/发运负荷归属该交付批群，并抵消内部放行转移；未交付货物不计入交付Q。此为独立扩展，不是对基准生产清单再归一化一次。 | cp_finished_goods; cp_release; cp_wip | 放行与交付分账及内部抵消 | `ifc-pharma-biotech-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 确认完整原生名称各分量、存在的CAS、形态/路线/等级/地理/类型、全部属性及精确引用属性/单位组版本。流身份与供应商/背景及数量相容性分开。片剂35240分类债务保持明确，不自动映射。 | 原生原件及供应商/批次证据 |
| dq_completeness | formulation | 保留完整处方、采购供货状态、完整包装、全部期间原始投入/负荷、失败及零产出运行、返工、WIP及结转负荷。核对全部纳入支持系统/出口；缺失数量须采集，不得补零。 | 签认物料/能源/库存核对及阶段记录 |
| dq_temporal | formulation | 分子/分母匹配场址、产品、直接压片路线、规格、包装、放行门及批群。记录代表性、不确定性及外推；保留全部限制。 | 表计日期；批次谱系；采样/校准及不确定性记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_tablets | 参考身份缺失、剂型/规格/路线/包装不符或缺少片剂净重/件量转换时拒绝。确认显式链接在双语中唯一选择与参考UUID一致的终端Product输出。不得隐藏共用UUID的中间物/联产品。 | `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007` |
| v_gate_stock | formulation | 核查唯一新增放行ID、原始Q>0及准确批群。退回/再验收重复造产量、遗漏失败/返工负荷、缺少WIP/成品结转账、生产Q再加同Q期末成品输出、无依据放行等于交付或重复A/Q均不通过。 | `ifc-pharma-biotech-2007` |
| v_mass_species | all inventory rows | 独立于分配及实际物种证据核查未分配质量/水/活性及相关元素守恒。把纯活性当整片、重复制剂成分、积分体积再乘时间、COD充当物种/质量、假定反应水凑闭合或废物转移及排放重复均拒绝。 | `ifc-pharma-biotech-2007` |
| v_provider | all inventory rows | 审查原生及供应商限制、完整实际处方/包装记录、原始字段/协议owner及全部条件发生。辅助UUID空缺须在具体数据集使用前匹配，不得虚构证据。方法/格式检查不授予临床、科学、GMP或映射批准。 | `ifc-pharma-biotech-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 对同一限定片剂成品、精确门及质量基准进行可追溯环境建模 |
| allowed_use | 明确范围/质量披露的供货商/场址特定二级制剂清单及背景链接 |
| excluded_use | 临床选药/给药、疗效比较、默认医学等效、制造配方/操作设定、所有药品代理、原料药/其他剂型替代及自动法规/科学批准 |
| required_metadata | 全部参考限定信息；来源/投影身份；实际完整处方及供货/包装清单证据；阶段边界、放行/批群及独立成品账；分配；供应/接收方；原始协议记录 |
| required_quality_disclosure | 历史FDA供货形态及独立专利路线不能识别同一专有SKU处方；原生片剂分类债务；原生成分等级/地理未指定；明确CN<1kV电力限制；未决辅助身份；场址数据/覆盖/不确定性及审查状态 |
| update_trigger | 活性/规格/处方、路线、剂型、净质量/件量基准、包装配置、放行/交付门、公用工程/供货商/地理、库存处理或废物/排放边界变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fda-precose-label-2015 | official_guidance | FDA，PRECOSE标签，2015年3月，NDA020482补充027，Reference ID3713301，第1、12–13页。https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/020482s027lbl.pdf | 仅为历史阿卡波糖50mg片剂身份、辅料名称、100片瓶装及防潮/储存形态。不验证当前标签、片重、专有路线、完整包装组成、临床等效或处方/操作默认值。 |
| huadong-acarbose-direct-compression-2007 | literature | 杭州中美华东制药，CN101019874A，2007-08-22公开，说明书第3–4/5页、PDF第6–7页；保留中文扫描原件。https://patents.google.com/patent/CN101019874A/zh | 申请人证据支持可行的阿卡波糖干混/直接压片路线及分立填充剂/助流剂/润滑剂角色。不采用专利用量、混合顺序/时间处方、收率、环境系数，也不认定与历史FDA产品的关联。 |
| ifc-pharma-biotech-2007 | official_guidance | IFC/世界银行集团，《制药和生物技术制造业环境、健康与安全指南》，2007-04-30，第1.1、2.1节及附录A二次制造，第1–5、12、19页。https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf | 定性制剂/包装、HVAC、粉尘、清洁废水、废物及监测覆盖；场址采集设计。行业指南不等于排放测量、普遍必需工序、法规合规结论或临床证据。放行/WIP/库存核算方程是明确的PCR作者建模规则，不是引用IFC方程。 |
| jrc-ilcd-2010-allocation | handbook | 欧盟委员会JRC，ILCD Handbook General guide Detailed guidance，2010年3月第一版，第7.9.3节，PDF第277–278页／印刷第257–258页；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持归属型共用服务负荷归集中的虚拟拆分及决定性物理因果。不提供产品特定路线、组成、收率、排放或公用工程因子、固定分配份额、替代信用或完整PEF符合性。库存与归一化规则仍属本PCR的一致性推理。 |
