---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.bottled-waters-not-sweetened-or-flavoured
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 瓶装水，未加甜味剂或调味剂

## 1. 范围与适用性

本 PCR 适用于装入密封瓶或类似消费容器、未加入糖、甜味剂、调味剂或其他食品配料的饮用水。范围包括静态或含气预制饮用水、按来源定义的水、泉水以及符合适用法律身份的天然矿泉水。类别边界遵循 CPC 3.0 子类 24410 和 `fao-who-cxs-227-2001` 的产品说明。

本 PCR 不包括加甜或调味水、含热量或无热量软饮料、果汁、非动物源乳、酒精饮料、市政散装水、非以包装饮料销售的水、作为化学品销售的蒸馏水、冰和药用水。加入二氧化碳或允许的矿物质本身不使水成为加甜或调味水，但必须声明所有添加物及适用路线。

前景边界始于瓶装厂接收原水或从受保护水源转入原水，止于合格密封瓶装水在瓶装厂出厂。边界包括路线特定处理、条件性碳酸化、容器准备、灌装、封盖、贴标、二级包装、清洗消毒、前景废水和废物处理以及场址直接排放。天然矿泉水和泉水路线必须保持水源身份，并仅采用法律允许的处理；预制水处理必须基于实际危害分析和处理工艺链。配送、零售冷藏、消费者使用和包装寿命终结不属于默认前景数据包。

代表产品是一条具体路线：在瓶装厂出厂的 1.5 L 单次使用 PET 瓶装静态预制饮用水，未加甜味剂或调味剂，配聚丙烯瓶盖、纸标签、瓦楞纸箱和 LDPE 收缩膜。其他容器、水源、处理和碳酸化路线必须分别编制路线特定清单；未披露产量权重时不得与代表路线混合平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.bottled-waters-not-sweetened-or-flavoured |
| classification_refs | CPC 3.0：24410，瓶装水，未加甜味剂或调味剂；精确分类语境 |
| covered_products | 密封包装的静态或含气饮用水，不含糖、甜味剂、调味剂或其他食品配料；声明路线身份的预制水、按来源定义的水、泉水和依法认定的天然矿泉水 |
| excluded_products | 加甜或调味水；软饮料；果汁；非动物源乳；酒精饮料；非单独包装为饮料的散装水；工业或化学用途水；冰；药用水 |
| representative_product | 一瓶 1.5 L 单次使用 PET 瓶装静态预制饮用水，未加甜味剂或调味剂，配聚丙烯瓶盖并声明标签和配送包装 |
| production_route | 原水接收 -> 路线特定处理与监测 -> 可选碳酸化 -> PET 瓶坯吹塑或接收成品瓶 -> 容器准备 -> 灌装封盖 -> 贴标装箱 -> 工厂出厂；包括清洗、废水、废物和直接排放 |
| market_state | 在瓶装厂出厂的密封、带标签、可供消费者销售的瓶装水；包装单独计入清单，不计入参考水净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以一个已声明密封消费包装供应安全合格、未加甜味剂或调味剂的静态预制饮用水 |
| How much | 代表性 1.5 L 单次使用 PET 瓶装水产品中 1 kg 水净含量，不包括任何包装皮重 |
| How well | 符合适用的化学、微生物、放射性和感官要求；声明水源类型、处理链、含气状态和包装配置；包装密封且适销 |
| How long or cycle | 已声明生产批次的一次工厂出厂交付；不主张储存寿命或使用阶段服务 |
| reference_flow_link | 以下参考数量按瓶装水净质量实现功能单位；包装数量作为单独清单投入归一化至该输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 瓶装水净含量 |
| 参考产品流 | 在瓶装厂出厂的一瓶 1.5 L 单次使用 PET 瓶装静态预制饮用水，未加甜味剂或调味剂 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水身份：预制/按来源定义/泉水/天然矿泉水；水源名称和位置；供水类型；静态/含气状态；每个处理步骤；每种添加物；瓶标称容积；瓶材及再生含量；瓶盖材料；标签材料；纸箱与膜配置；包装皮重；可重复使用或单次使用状态；场址；地理范围；报告期；生产批次覆盖；质量放行规范 |

产品流 UUID 仍未解决。特意保留此单数且具体的可读产品身份；不得替换为通用饮料、自来水、仅限天然矿泉水、调味水或仅包装 UUID。Tiangong 直接读取已核验公开的质量流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 和质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`，两者均为版本 03.00.003、状态码 100；参考单位为 kg。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_water_mass` | 参考瓶装水输出 | 质量 | kg | 由经校准灌装机或检重秤记录确定水净质量，扣除瓶、瓶盖、标签和全部其他包装皮重；所有清单归一化至 1 kg 合格水净量。 |
| `volume_mass_conversion` | 由体积换算的水量 | 体积和密度 | L 或 m3；kg/L | 使用实测产品温度和密度或有文件依据的水密度约定；保留原始体积、温度、密度和换算过程。 |
| `packaging_tare` | 初级、二级和三级包装 | 质量和件数 | kg；件 | 按材料分别记录每个包装组件；以批次特定的抽样单件质量将件数换算为质量，并保留样本量与变异。 |
| `treatment_chemical_mass` | 每种处理和清洗化学品 | 质量 | kg | 每种化学品或配制品按实际使用质量作为独立原子交换记录；溶液购入时还须保留有效成分浓度。 |
| `utility_energy` | 电力、蒸汽和每种燃料 | 能量、质量或体积 | kWh；MJ；kg；m3 | 保留发票或计量单位，分别识别电力、蒸汽、天然气、LPG 和柴油，并披露热值及换算基准。 |
| `water_stream_separation` | 产品水、工艺水和清洗水 | 质量或体积 | kg 或 m3 | 分别计量或计算原水/产品水、处理工艺水和清洗消毒水；不得把场址全部用水视为产品水。 |
| `emission_load` | 直接空气和水排放 | 质量 | kg | 以同一期间的浓度和对应流量计算每种物质，或使用披露的源特定方法；不得把 COD、BOD、TSS、氮或磷合并为一种排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在瓶装厂进水口接收或从已声明受保护水源转入的原水，并记录水源身份、法定水类别、数量、质量放行证据和上游数据集引用 |
| starting_condition_role | 瓶装水前景生产的起始产品投入；水源开发、集水区管理和场外市政处理留在关联上游数据集中，除非由报告组织运营并有意纳入 |
| product_classification_scope | CPC 3.0 子类 24410 中未加甜味剂或调味剂的瓶装水；预制、按来源定义、泉水和天然矿泉水路线保持分开 |
| recursive_input_rule | 外购同类瓶装水用于重新包装时，仅作为带上游数据集的具体产品投入记录一次；不得递归重建其生产，也不得把内部处理水转移计为新的外部投入 |
| upstream_dataset_requirement | 为原水供应、外购电力、蒸汽和燃料、每种化学品、PET 瓶坯或其他瓶体、瓶盖、标签、纸箱、膜、外部废物处理及纳入的进厂运输关联具有代表性的数据集 |
| disclosure | 声明水源类型和位置、法定产品身份、处理及碳酸化路线、水源至灌装机转移、生产线和场址、报告期、包装配置和皮重、纳入的条件过程、分配、省略、上游数据集、废物与废水路线以及所有未解决身份或数据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_raw_water_to_gate` | 默认前景系统 | 包括原水接收、每项实际处理、条件性碳酸化、瓶子准备、灌装、封盖、贴标、装箱、清洗、归属废水和废物处理以及场址直接排放，直至合格产品出厂。 | `fao-who-cxc-48-2001`; `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `sb_route_specific_treatment` | 水处理 | 仅采用基于实际危害分析的处理链；将预制水、按来源定义的水、泉水和天然矿泉水路线分开；零处理声明须有水源和放行证据。 | `fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `who-gdwq-2026`; `eu-2009-54-ec` |
| `sb_natural_mineral_restrictions` | 天然矿泉水和泉水 | 保持水源身份；适用法律路线禁止时，排除消毒或改变组成的处理；声明每项允许的分离、富臭氧空气处理和二氧化碳添加或去除。 | `eu-2009-54-ec` |
| `sb_packaging_components` | 包装系统 | 将实际瓶体或瓶坯转换、瓶盖、标签、纸箱、膜及其生产线损失作为独立材料交换纳入；包装皮重不计入参考水净质量。 | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `sb_downstream_exclusion` | 下游生命周期阶段 | 配送、零售储存或冷藏、消费者使用和包装寿命终结不属于本前景数据包；仅可在不改变工厂门前景量的已声明生命周期模型中加入。 | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_water_receipt` | 原水接收与水源控制 | required | 每条覆盖路线；必须声明水源和法定水身份 | 建立受控原水投入并转入处理或灌装 | kg 已接收原水 |
| `water_treatment` | 路线特定水处理与调质 | required | 每条路线均设置过程记录；仅在实际运行时使用各处理交换，无处理路线须有文件证据 | 生产可放行静态水 | kg 处理水 |
| `carbonation` | 二氧化碳加注 | conditional | 仅在场址加入或重新加入二氧化碳时纳入 | 生产已声明含气水，不与静态水混合 | kg 含气水 |
| `filling_packaging` | 瓶子准备、灌装、封盖、贴标和装箱 | required | 每种覆盖产品；采用实际包装配置 | 生产密封合格的工厂门瓶装水 | 1 kg 合格水净量 |
| `cleaning_sanitation` | 设备和容器清洗消毒 | required | 每条生产线均分配清洗；实际执行或要求时纳入容器清洗 | 保持卫生生产并采集归属清洗废水 | 归属于已声明输出的清洗批次 |
| `wastewater_handling` | 废水和残余物处理 | required | 核算每条前景废水和残余物路线；仅在运行时纳入场内处理交换 | 核对废水、污泥、筛渣和直接水排放 | 归属于已声明输出的 m3 废水 |

### 过程：原水接收与水源控制（`raw_water_receipt`）

#### 输入

##### 产品流

###### 接收用于瓶装的原水（`raw_water_input`）

原水在水源批准后、任何场内处理或直接灌装前跨越前景边界。

- 选定流：用于瓶装饮用水生产的已接收原水
- 流属性/单位：质量 / kg
- 数量规则：通过水源和接收质量控制后的经校准进水表接收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_water`
- 来源：`fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `who-gdwq-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入生产的原水（`raw_water_transfer`）

已接收原水作为一个计量中间流转入处理，或在法律和技术上有依据时直接转入灌装。

- 选定流：转入瓶装水生产的已接收原水
- 流属性/单位：质量 / kg
- 数量规则：匹配进水表与转移表，或采用罐体质量平衡量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收原水转移量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_water`
- 来源：`fao-who-cxc-48-2001`

##### 废物流

##### 基本流

### 过程：路线特定水处理与调质（`water_treatment`）

#### 输入

##### 产品流

###### 已接收原水进料（`treatment_raw_water`）

该流是进入已声明处理链的计量原水中间流。

- 选定流：转入瓶装水生产的已接收原水
- 流属性/单位：质量 / kg
- 数量规则：与原水转移记录匹配的处理进料表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 处理用电（`treatment_electricity`）

电力驱动实际运行的泵送、过滤、紫外、臭氧发生、反渗透和控制设备。

- 选定流：供应瓶装水处理设备的电网电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量，或由匹配总表形成有文件依据的工程分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_treatment`
- 来源：`us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### 次氯酸钠处理化学品（`sodium_hypochlorite`）

仅在已声明预制水处理路线实际加注时记录次氯酸钠。

- 选定流：水处理用次氯酸钠溶液
- 流属性/单位：质量 / kg
- 数量规则：由批次加药和浓度记录得到实际使用溶液质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 臭氧处理化学品（`ozone_treatment`）

供应给水的臭氧是独立条件交换，不与氯或紫外处理合并。

- 选定流：供应瓶装水处理的臭氧
- 流属性/单位：质量 / kg
- 数量规则：臭氧发生器输出，或由经验证浓度与处理水流量计算的投加量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`; `us-epa-awg-lca-2019`

###### 颗粒活性炭（`granular_activated_carbon`）

实际处理链更换或补充颗粒活性炭时单独记录。

- 选定流：饮用水处理用颗粒活性炭
- 流属性/单位：质量 / kg
- 数量规则：按两次更换间匹配的处理水量摊分领用质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 六偏磷酸钠阻垢剂（`sodium_hexametaphosphate`）

仅当六偏磷酸钠是实际反渗透阻垢剂时记录；其他配方须另设原子卡片。

- 选定流：反渗透阻垢用六偏磷酸钠
- 流属性/单位：质量 / kg
- 数量规则：由溶液领用、有效浓度和加药记录计算实际使用质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 反渗透产水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 处理调节 pH 用氢氧化钠（`sodium_hydroxide_treatment`）

仅在用于 pH 调节或分配至本过程的膜清洗时记录处理级氢氧化钠。

- 选定流：瓶装水处理用氢氧化钠溶液
- 流属性/单位：质量 / kg
- 数量规则：由领用和加药记录得到实际使用溶液质量，并保留有效浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 处理调节 pH 用盐酸（`hydrochloric_acid_treatment`）

盐酸用于处理 pH 调节或分配至本过程的膜维护时作为独立条件交换。

- 选定流：瓶装水处理用盐酸溶液
- 流属性/单位：质量 / kg
- 数量规则：由领用和加药记录得到实际使用溶液质量，并保留有效浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 处理工艺水（`treatment_process_water`）

未留在瓶装产品中的反洗、冲洗或补充水须与原料水和清洗水分开计量。

- 选定流：瓶装水处理用工艺水
- 流属性/单位：体积 / m3
- 数量规则：专用水表或经验证的循环体积计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后静态水（`treated_water`）

可放行静态水是供应碳酸化或灌装的计量中间流。

- 选定流：用于瓶装的处理后静态饮用水
- 流属性/单位：质量 / kg
- 数量规则：符合已声明放行规范的经校准转移表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后静态水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxs-227-2001`; `who-gdwq-2026`

##### 废物流

###### 水处理废水（`treatment_wastewater`）

过滤器反洗水、反渗透浓水及其他处理废水仅在进入同一计量合并处理流时汇总。

- 选定流：瓶装水处理合并废水
- 流属性/单位：体积 / m3
- 数量规则：合并处理废水总管计量，或采用经验证的水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 水处理污泥（`treatment_sludge`）

处理链产生的沉淀或脱水固体作为单独称量废物离开。

- 选定流：瓶装水处理产生的脱水污泥
- 流属性/单位：质量 / kg
- 数量规则：称量湿质量并保留干固体比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

###### 废过滤滤芯（`spent_filter_cartridge`）

每个废过滤滤芯按质量记录，不与污泥或废活性炭合并。

- 选定流：废饮用水过滤滤芯
- 流属性/单位：质量 / kg
- 数量规则：按匹配处理水量摊分称量的废滤芯质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_treatment`
- 来源：`fao-who-cxc-48-2001`

##### 基本流
### 过程：二氧化碳加注（`carbonation`）

#### 输入

##### 产品流

###### 碳酸化用处理后静态水（`carbonation_water`）

处理水仅在已声明含气路线进入本过程。

- 选定流：用于瓶装的处理后静态饮用水
- 流属性/单位：质量 / kg
- 数量规则：经校准的碳酸化进料表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含气水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonation`
- 来源：`fao-who-cxs-227-2001`

###### 食品级二氧化碳（`carbonation_co2`）

加注水中的外购或回收食品级二氧化碳是独立产品交换。

- 选定流：瓶装水碳酸化用食品级二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：供应商质量平衡或经校准质量流量计的加注量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含气水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonation`
- 来源：`fao-who-cxs-227-2001`; `eu-2009-54-ec`

###### 碳酸化用电（`carbonation_electricity`）

冷却、泵送和加注用电与灌装线用电分开记录。

- 选定流：供应瓶装水碳酸化设备的电网电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量，或由匹配公用工程总表形成有文件依据的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含气水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonation`
- 来源：`fao-who-cxc-48-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 含气水（`carbonated_water`）

含气水作为计量中间流转入灌装，不与静态水合并。

- 选定流：用于瓶装的含气饮用水
- 流属性/单位：质量 / kg
- 数量规则：符合已声明二氧化碳规范的经校准转移表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含气水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonation`
- 来源：`fao-who-cxs-227-2001`

##### 废物流

##### 基本流

###### 碳酸化释放的二氧化碳（`carbonation_co2_air`）

未保留在产品中的二氧化碳作为一种直接空气排放报告，并披露其来源。

- 选定流：瓶装水碳酸化过程排入空气的二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：同一期间二氧化碳投入减去产品保留量和单独回收量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含气水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carbonation`
- 来源：`fao-who-cxs-227-2001`

### 过程：瓶子准备、灌装、封盖、贴标和装箱（`filling_packaging`）

#### 输入

##### 产品流

###### 灌装用静态水（`filling_water`）

该进料仅用于静态水路线，不与含气水进料重复。

- 选定流：用于瓶装的处理后静态饮用水
- 流属性/单位：质量 / kg
- 数量规则：静态水批次经校准的灌装机入口表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`fao-who-cxc-48-2001`

###### 灌装用含气水（`filling_carbonated_water`）

该替代进料仅用于含气批次，不与静态水进料重复。

- 选定流：用于瓶装的含气饮用水
- 流属性/单位：质量 / kg
- 数量规则：含气水批次经校准的灌装机入口表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`fao-who-cxs-227-2001`

###### PET 瓶坯（`pet_preform`）

代表路线在场内拉伸吹塑前单独记录 PET 瓶坯。

- 选定流：1.5 L 水瓶用瓶级聚对苯二甲酸乙二醇酯瓶坯
- 流属性/单位：质量 / kg
- 数量规则：领用瓶坯件数乘以批次特定平均瓶坯质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### 聚丙烯瓶盖（`polypropylene_cap`）

每个防拆聚丙烯封盖与瓶体分开记录。

- 选定流：瓶装水用聚丙烯防拆瓶盖
- 流属性/单位：质量 / kg
- 数量规则：领用瓶盖件数乘以批次特定平均瓶盖质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`

###### 纸质瓶身标签（`paper_label`）

代表纸标签是原子包装投入，不与黏合剂或薄膜合并。

- 选定流：1.5 L 瓶装水瓶用印刷纸标签
- 流属性/单位：质量 / kg
- 数量规则：领用标签件数乘以批次特定平均干标签质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`garfi-et-al-2016`

###### 瓦楞纸箱（`corrugated_carton`）

配送用瓦楞纸箱与标签和聚合物膜分开计量。

- 选定流：瓶装水配送用瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：纸箱领用件数乘以批次特定平均干纸箱质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：

###### LDPE 收缩膜（`ldpe_shrink_film`）

低密度聚乙烯收缩膜作为一种配送包装材料记录。

- 选定流：瓶装水组合包装用低密度聚乙烯收缩膜
- 流属性/单位：质量 / kg
- 数量规则：分配至合格包装的薄膜领用或卷材质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`

###### 灌装与包装用电（`filling_electricity`）

瓶坯加热、吹塑、输送、灌装、封盖、贴标和装箱用电作为本过程的一项计量公用工程交换。

- 选定流：供应瓶装水灌装与包装设备的电网电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量，或由匹配场址总表形成有文件依据的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### 灌装线压缩空气（`filling_compressed_air`）

供应吹塑和气动设备的压缩空气与电力分开记录。

- 选定流：供应瓶装水灌装与包装设备的压缩空气
- 流属性/单位：体积 / Nm3
- 数量规则：分表标准体积，或声明标准状态的压缩机工程分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格瓶装水输出（`bottled_water_output`）

该单数参考产品以水净质量计量，并以密封 1.5 L PET 瓶出厂。

- 选定流：在瓶装厂出厂的一瓶 1.5 L 单次使用 PET 瓶装静态预制饮用水，未加甜味剂或调味剂
- 流属性/单位：质量 / kg
- 数量规则：通过质量和包装检查后放行的合格水净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`un-cpc-3-0-2023`; `fao-who-cxs-227-2001`

##### 废物流

###### 不合格瓶装水（`offspec_bottled_water`）

被拒灌装单元内的水与可回收包装废料分开计量。

- 选定流：不合格的未加甜味剂或调味剂瓶装水
- 流属性/单位：质量 / kg
- 数量规则：由拒收件数和核验灌装质量计算拒收单元内水净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`fao-who-cxc-48-2001`

###### PET 瓶坯和瓶体废料（`pet_scrap`）

拒收瓶坯和 PET 瓶体作为独立 PET 废物流离开。

- 选定流：瓶装水包装产生的废瓶级聚对苯二甲酸乙二醇酯
- 流属性/单位：质量 / kg
- 数量规则：称量离线 PET 废料，扣除有文件记录的过程内回用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### 聚丙烯瓶盖废料（`cap_scrap`）

拒收聚丙烯瓶盖不与 PET 或混合包装废物合并。

- 选定流：瓶装水包装产生的废聚丙烯瓶盖
- 流属性/单位：质量 / kg
- 数量规则：称量，或由瓶盖废料件数换算质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`

###### 纸标签废料（`label_scrap`）

废纸标签与纸箱和聚合物膜分开计量。

- 选定流：瓶装水包装产生的废印刷纸标签
- 流属性/单位：质量 / kg
- 数量规则：称量标签废料，或拒收标签件数乘以平均干标签质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`garfi-et-al-2016`

###### 瓦楞纸箱废料（`carton_scrap`）

破损或裁切瓦楞纸板作为一种纸基废物流离开。

- 选定流：瓶装水包装产生的废瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：称量离开装箱线的干纸箱废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：

###### LDPE 收缩膜废料（`film_scrap`）

裁切或拒收 LDPE 膜与 PET 和聚丙烯废料分开。

- 选定流：瓶装水包装产生的废低密度聚乙烯收缩膜
- 流属性/单位：质量 / kg
- 数量规则：称量离开装箱线的薄膜废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_packaging`
- 来源：`us-epa-awg-lca-2019`

###### 灌装线废水（`filling_wastewater`）

灌装机溢水、容器冲洗水和生产线排水作为一条计量灌装区废水流记录。

- 选定流：瓶装水灌装线废水
- 流属性/单位：体积 / m3
- 数量规则：灌装区专用排水表或经验证的水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filling_packaging`
- 来源：`fao-who-cxc-48-2001`

##### 基本流

### 过程：设备和容器清洗消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 清洗消毒水（`cleaning_water`）

设备清洗、容器洗涤和消毒用水与产品水和处理工艺水分开计量。

- 选定流：瓶装水设备和容器用可饮用清洗水
- 流属性/单位：体积 / m3
- 数量规则：清洗总管水表或归属于报告期的经验证循环体积合计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`; `who-gdwq-2026`

###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide`）

CIP 或洗瓶使用的氢氧化钠与酸和消毒剂分开记录。

- 选定流：瓶装水设备清洗用氢氧化钠溶液
- 流属性/单位：质量 / kg
- 数量规则：由领用、浓度和循环记录计算实际使用溶液质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid`）

批准清洗方案含过氧乙酸时，将其作为独立消毒化学品。

- 选定流：瓶装水设备消毒用过氧乙酸溶液
- 流属性/单位：质量 / kg
- 数量规则：由领用、浓度和循环记录计算实际使用溶液质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

###### 清洗用电（`cleaning_electricity`）

泵、洗瓶机和消毒系统用电与生产线用电分开。

- 选定流：供应瓶装水清洗消毒设备的电网电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量，或由设备功率和循环时间形成有文件依据的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

###### 外购清洗蒸汽（`cleaning_steam`）

输送到清洗设备的外购蒸汽是一项热产品交换，不与燃料合并。

- 选定流：瓶装水设备清洗用外购饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送蒸汽，并保留压力和冷凝水处理信息。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

###### 场内清洗供热用天然气（`cleaning_natural_gas`）

仅在场内燃烧供清洗热量时纳入天然气，不与 LPG 或柴油合并。

- 选定流：瓶装水清洗供热燃烧的天然气
- 流属性/单位：能量 / MJ
- 数量规则：按有文件依据的锅炉效率将燃气表量分配至清洗供热。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：

###### 场内清洗供热用液化石油气（`cleaning_lpg`）

LPG 是仅用于实际 LPG 供热路线的替代燃料卡片。

- 选定流：瓶装水清洗供热燃烧的液化石油气
- 流属性/单位：质量 / kg
- 数量规则：按有文件依据的锅炉效率将储罐或发票质量分配至清洗供热。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：

###### 应急清洗供热用柴油（`cleaning_diesel`）

柴油仅在实际用于清洗供热时记录，不与其他燃料合并。

- 选定流：瓶装水清洗供热燃烧的柴油
- 流属性/单位：质量 / kg
- 数量规则：按有文件依据的锅炉效率将储罐或发票质量分配至清洗供热。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：归属于已声明输出的每个清洗批次
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

废冲洗水和稀释清洗排水作为一条计量清洗废水流离开。

- 选定流：瓶装水设备清洗废水
- 流属性/单位：体积 / m3
- 数量规则：清洗排水表或经验证的循环水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

###### 废浓缩清洗液（`spent_cleaning_solution`）

送外处理的浓缩清洗液与稀释清洗废水分开记录。

- 选定流：瓶装水设备产生的废氢氧化钠清洗液
- 流属性/单位：质量 / kg
- 数量规则：称量或罐量计量送外的浓缩溶液。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格瓶装水净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-who-cxc-48-2001`

##### 基本流

###### 清洗供热产生的化石二氧化碳（`combustion_co2_air`）

场内燃料燃烧产生的化石二氧化碳与氮氧化物分开报告。

- 选定流：瓶装水清洗供热排入空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：由匹配的天然气、LPG 或柴油记录进行燃料特定碳平衡，排除生物碳。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：归属于清洗供热的每项燃料清单
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：

###### 清洗供热产生的氮氧化物（`combustion_nox_air`）

场内燃料燃烧产生的氮氧化物作为一种物质特定空气排放报告。

- 选定流：瓶装水清洗供热排入空气的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或将披露的燃料和设备特定因子用于匹配燃料用量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：归属于清洗供热的每项燃料清单
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：

### 过程：废水和残余物处理（`wastewater_handling`）

#### 输入

##### 产品流

###### 合并工艺废水（`wastewater_input`）

计量的处理、灌装和清洗废水进入场内处理，同时保留其源流记录。

- 选定流：瓶装水厂合并工艺废水
- 流属性/单位：体积 / m3
- 数量规则：进水流量计与三类产废水流核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`fao-who-cxc-48-2001`

###### 废水处理用电（`wastewater_electricity`）

泵送、曝气、加药和脱水用电与生产用电分开。

- 选定流：供应瓶装水废水处理的电网电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量或有文件依据的设备分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：

###### 三氯化铁混凝剂（`ferric_chloride`）

仅在实际废水处理路线加注时记录三氯化铁。

- 选定流：瓶装水废水处理用三氯化铁溶液
- 流属性/单位：质量 / kg
- 数量规则：由领用、浓度和加药记录计算实际使用溶液质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后出水（`treated_effluent`）

处理后出水在回用、转入下水道或排放前于处理出口计量。

- 选定流：处理后的瓶装水厂出水
- 流属性/单位：体积 / m3
- 数量规则：按去向记录经校准出水流量计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

场内废水处理污泥与原水处理污泥分开称量。

- 选定流：瓶装水厂废水处理产生的脱水污泥
- 流属性/单位：质量 / kg
- 数量规则：称量湿质量，并保留干固体比例和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：

###### 废水筛渣（`wastewater_screenings`）

废水中去除的粗固体作为独立废物流记录。

- 选定流：瓶装水厂废水处理产生的筛渣
- 流属性/单位：质量 / kg
- 数量规则：称量筛渣并保留含水基准和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：

##### 基本流

###### 排入水体的化学需氧量（`cod_to_water`）

处理后排放 COD 与 BOD 和悬浮物分开报告。

- 选定流：处理后出水中排入水体的化学需氧量
- 流属性/单位：质量 / kg
- 数量规则：流量加权 COD 浓度乘以匹配出水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

###### 排入水体的生化需氧量（`bod_to_water`）

处理后排放 BOD 是独立计量水排放。

- 选定流：处理后出水中排入水体的生化需氧量
- 流属性/单位：质量 / kg
- 数量规则：流量加权 BOD 浓度乘以匹配出水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

###### 排入水体的总悬浮固体（`tss_to_water`）

处理后总悬浮固体与需氧量指标分开报告。

- 选定流：处理后出水中排入水体的总悬浮固体
- 流属性/单位：质量 / kg
- 数量规则：流量加权 TSS 浓度乘以匹配出水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

###### 排入水体的总氮（`total_nitrogen_to_water`）

处理后出水总氮是一种物质特定直接排放。

- 选定流：处理后出水中排入水体的总氮
- 流属性/单位：质量 / kg
- 数量规则：流量加权总氮浓度乘以匹配出水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

###### 排入水体的总磷（`total_phosphorus_to_water`）

处理后出水总磷不与氮或悬浮物合并。

- 选定流：处理后出水中排入水体的总磷
- 流属性/单位：质量 / kg
- 数量规则：流量加权总磷浓度乘以匹配出水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享场址作业 | 只要计量表或生产记录允许，先按水源、处理链、含气状态、包装线和清洗批次细分；仅在无法实际细分后使用分配。 | `who-gdwq-2026` |
| `allocation_mass_balance` | 水处理和灌装损失 | 通过核对的质量或体积平衡分配原水、处理水、产品、拒收物和废水；不得通过分配消除未解释损失。 | `fao-who-cxc-48-2001` |
| `allocation_shared_utilities` | 共用电力、压缩空气、蒸汽和燃料 | 共享公用工程优先按分表使用量分配，否则采用有文件依据的设备功率与运行时间、交付热量或其他因果工程驱动因素；仅在证明因果等效时可按产量质量分配。 |  |
| `allocation_cleaning` | 生产线和容器清洗 | 产品专用清洗直接归属；共享批次按清洗设备时间、内表面积、循环体积或其他因果驱动因素分配，并披露换线和可重复使用容器清洗。 | `fao-who-cxc-48-2001` |
| `allocation_internal_recovery` | 回收水、二氧化碳或包装材料 | 内部回收仅作为减少原生投入或废物输出的一次转移记录；不得在前景清单内建立避免产品信用。 |  |
| `allocation_waste_outputs` | PET、瓶盖、标签、纸箱、膜、污泥和其他残余物 | 报告实物废物量和处理去向；任何回收或避免负担信用属于另行声明的生命周期模型情景，不得减少工厂门废物质量。 | `us-epa-awg-lca-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_water` | `raw_water_receipt` | 原水接收与转移 | 计量表、罐体、水源批准和质量放行记录 | 水源身份；法定水类型；期初/期末表数；罐液位；接收和拒收体积；检测结果；转移量 | 校准进水和转移表，与罐体变化和放行状态核对 | kg；m3 | 每批或每日，按月核对 | 至少连续 12 个代表性月份或完整生产期 | 范围内每个水源和瓶装场址 | 汇总水源特定接收量；拒收水和未解释差额分开 | 计量校准；水源许可；实验室放行记录；平衡核对 |
| `cp_water_treatment` | `water_treatment` | 处理投入、输出和残余物 | 分表、加药、批次、更换和排放记录 | 进/出水；电力；每种化学品名称、浓度和剂量；工艺水；废水；污泥；滤芯件数和质量 | 直接计量和领用记录；仅由采集字段计算有效或摊销质量 | kg；m3；kWh | 每批或每日；更换按事件 | 与参考生产同期间 | 每条处理链 | 保留路线合计，按放行处理水归一化并核对水量 | 校准；化学品证书；批记录；维护更换日志；实验室放行结果 |
| `cp_carbonation` | `carbonation` | 碳酸化投入、产品和损失 | 水和 CO2 质量流量、电力和产品检测记录 | 水进料；CO2 投入；电力；产品 CO2；回收和排放 CO2 | 校准质量流量和匹配产品检测 | kg；kWh | 每批，按月汇总 | 与含气水生产同期间 | 每条碳酸化线 | 按批次做碳平衡；不得混合静态和含气生产 | 计量校准；气体证书；产品放行检测；平衡核对 |
| `cp_filling_packaging` | `filling_packaging` | 灌装、包装和线损 | 灌装表、产量件数、包装领用、抽样质量、电力、压缩空气和拒收记录 | 水进料；合格和拒收件；净灌装量；瓶坯、瓶盖、标签、纸箱和膜领用；组件质量；各包装废料；电力；压缩空气；废水 | 校准灌装和公用工程表、ERP 领用、件数和代表性称量 | kg；件；kWh；Nm3；m3 | 每批或班次，按月汇总 | 至少 12 个代表性月份或完整生产期 | 每种包装规格和灌装线 | 以合格水净量为分母；每个组件和废物流保持分开 | 检重验证；秤和表校准；材料核对；拒收日志；包装规范 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | 清洗水、化学品、能源、燃料和排水 | CIP/洗瓶循环、公用工程、化学品领用、燃料和排水记录 | 清洗水；NaOH；过氧乙酸；电力；蒸汽；天然气；LPG；柴油；废水；废浓缩液；循环和生产线 | 自动循环日志和计量；领用记录；由采集量计算有效质量和燃料排放 | m3；kg；kWh；MJ | 每次清洗循环，按月汇总 | 与生产同期间 | 范围内每条线、罐体、灌装机和可重复容器洗瓶机 | 专用循环直接归属，共享循环按有文件依据的因果驱动因素分配 | 批准消毒方案；浓度验证；计量校准；燃料发票；排放记录 |
| `cp_wastewater` | `wastewater_handling` | 进水、处理投入、出水、污泥和排放 | 流量、实验室、化学品领用、电力、污泥和去向记录 | 源流和进水体积；电力；三氯化铁；出水体积；污泥；筛渣；COD；BOD；TSS；总氮；总磷 | 校准流量计、代表性混合采样、实验室分析、秤和领用记录 | m3；kg；kWh；mg/L | 连续流量；按许可或风险频率采样；按月平衡 | 与生产同期间 | 每个处理设施和排放去向 | 匹配浓度与流量期间，分别计算各负荷并核对进水/出水/残余物 | 采样方案；实验室 QA/QC；表秤校准；样品流转；排放合规记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_product` | 参考输出 | 汇总合格单元净灌装量，或以灌装单元毛质量减实测包装皮重；排除拒收单元 | 合格件数；灌装质量；瓶、盖和标签皮重 | kg 合格瓶装水净量 |  |
| `calc_water_balance` | 原水、处理、灌装和清洗过程 | 投入水 = 产品净水 + 废水 + 废物含水 + 实测蒸发或排气损失 + 库存变化 + 未解决差额；报告未解决差额而非强制闭合 | 匹配水表、罐体、产品和废水 | 各过程核对后的 kg 或 m3 | `fao-who-cxc-48-2001` |
| `calc_chemical_active_mass` | 每种处理和清洗溶液 | 实际使用溶液质量 = 领用体积 x 实测密度；有效质量 = 溶液质量 x 核验有效比例 | 领用、密度、浓度 | kg 溶液和 kg 有效物质 |  |
| `calc_packaging_mass` | 每个包装组件 | 组件质量 = 领用件数 x 批次特定抽样平均质量；与库存变化、废料和合格件数核对 | 件数、抽样质量、库存和废料 | PET 瓶坯、瓶盖、标签、纸箱和膜各自 kg | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `calc_shared_energy` | 共享电力、蒸汽或燃料 | 分配量 = 匹配总量 x 已声明生产线因果驱动量 / 匹配因果驱动量合计；保留驱动因素和分母 | 计量或发票、运行时间、额定负荷或交付热量 | 分配的 kWh、kg 蒸汽、MJ 或 kg 燃料 |  |
| `calc_emission_load` | 每种直接水排放 | 负荷 = 流量加权浓度 x 匹配出水体积并换算单位；分别计算 COD、BOD、TSS、总氮和总磷 | 浓度、出水量和采样覆盖 | kg 排入水体的物质 |  |
| `calc_combustion_emissions` | 场内燃料燃烧 | 对每种燃料分别应用经核验的碳平衡和源特定烟气数据或披露因子；不得合并燃料量 | 天然气、LPG 或柴油量；含碳量；烟气结果或因子 | kg 化石 CO2 和 kg NOx 排入空气 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和每批产品 | 保留水源类型、法定水身份、静态/含气状态、完整处理链、添加物、瓶规格和所有包装材料；证明无甜味剂和调味剂。 | 产品规范、水源许可、配方或无添加声明、标签和放行记录 |
| `dq_route_separation` | 水源、处理和包装路线 | 在透明加权前，将预制、按来源定义、泉水和天然矿泉水路线以及各包装规格分开；不得把天然矿泉水限制用于预制水路线，反之亦然。 | 路线图、生产台账和加权工作簿 |
| `dq_temporal` | 前景记录 | 连续生产至少采用连续 12 个代表性月份，或采用完整生产期；披露停机、异常事件和不完整覆盖。 | 带日期计量、批次、维护和生产记录 |
| `dq_completeness` | 清单 | 覆盖原水、每种实际化学品、电力、每项热量或燃料、PET 瓶坯、瓶盖、标签、纸箱、膜、工艺水、清洗水、每条废物流和每种直接排放。 | 原子流核对清单和过程平衡 |
| `dq_measurement` | 计量表、秤和实验室 | 使用在校准期内的仪器和匹配时间基准；保留放行及排放数据的实验室 QA/QC 和检出限处理。 | 校准证书、采样方案、样品流转和实验室 QA/QC |
| `dq_uuid_identity` | Tiangong 引用 | 仅在直读确认准确物理或化学身份、流类型、属性和单位支持后赋 UUID；有正式中文 baseName 时使用该名称。 | 保留在 PCR 内容之外的 Tiangong 直读证据 |
| `dq_range_evidence` | 重要流 QA 范围 | 不得由单一案例或孤立点推导范围；可迁移经验范围至少须有两份独立、边界兼容原文，并评审推导与适用性。 | 证据评审记录和所引原文 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | 产品身份 | 数据包含糖、甜味剂、调味剂或其他食品配料，或不能建立覆盖的瓶装水身份和密封包装时拒绝。 | `un-cpc-3-0-2023`; `fao-who-cxs-227-2001` |
| `val_reference_flow` | 参考流 | 要求 1 kg 合格瓶装水净量、排除包装皮重并具备全部必需限定信息；在核验前标记 Tiangong 参考身份未解决。 |  |
| `val_treatment_route` | 处理清单 | 要求实际水源特定处理链、所用化学品和放行控制；对天然矿泉水或泉水，拒绝已声明法律路线禁止的消毒或改变组成处理。 | `fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `eu-2009-54-ec` |
| `val_atomic_inventory` | 过程清单 | 拒绝化学品、电力、蒸汽、燃料、包装、废物或排放的合并选定流；PET 瓶坯、瓶盖、标签、纸箱、膜、废水、污泥、废物和每种排放均须独立成行。 |  |
| `val_water_balance` | 水过程 | 要求从原水至产品净水、废水、废物、库存变化和已识别损失的同期间平衡，并报告未解决差额。 | `fao-who-cxc-48-2001` |
| `val_hygienic_filling` | 容器准备和灌装 | 要求容器准备、灌装和封口防止污染的证据；可能接触产品的清洗水必须可饮用。 | `fao-who-cxc-48-2001`; `who-gdwq-2026` |
| `val_packaging_balance` | 包装 | 要求 PET 瓶坯、瓶盖、标签、纸箱和膜分别进行投入、合格件耗用和废料核对；包装皮重不得进入参考水质量。 | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `val_emission_loads` | 直接排放 | 每种直接空气或水排放须采用匹配活动和测量期间、正确单位换算及披露的计算方法；不接受合并废水污染物行。 |  |
| `val_no_unsupported_range` | 所有数量范围 | 拒绝由单一案例、摘要、孤立点或不兼容边界推导的经验范围；须有两份独立兼容原文，否则省略范围并保留前景数量规则。 |  |
| `val_dataset_profile` | 发布候选 | 下游发布前要求完整元数据、质量披露、未解决 UUID 披露、分配、上游数据集引用、条件路线决定和更新触发条件。 | `who-gdwq-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅在独立评审、Tiangong 身份解决并声明代表性后可作为 `background_dataset` 使用 |
| downstream_use | 瓶装水生产前景过程数据包，并作为包装饮用水 process 或 lifecyclemodel 投影的输入 |
| allowed_use | 用于已声明的水源、法定水身份、处理链、含气状态、包装规格、地理范围、场址技术和期间；仅可透明按产量加权汇总 |
| excluded_use | 不得代理加甜或调味水、软饮料、市政散装水、药用水、未声明天然矿泉水路线、其他瓶材或规格、配送、冷藏、消费者使用或寿命终结 |
| required_metadata | PCR id 和成熟度；水源和法定水身份；水源位置；静态/含气状态；处理和添加物；参考流限定信息；瓶、盖、标签、纸箱和膜规范与皮重；再生含量；场址和生产线；地理范围；期间；批次覆盖；分配；上游数据集；废物和废水去向；未解决 UUID |
| required_quality_disclosure | 表秤校准；水源和产品放行检测；实验室 QA/QC；记录覆盖；水和包装平衡；分配驱动因素；排除；异常事件；未解决差额；缺失 UUID；缺少证据支持范围 |
| update_trigger | 水源或法定身份、处理或消毒链、碳酸化、瓶规格/材料/再生含量、瓶盖/标签/纸箱/膜、生产线技术、电力或燃料供应、废水路线、分配、场址、代表期、放行规范、Tiangong 身份或独立评审范围证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2023` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，子类 24410，2023。https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf（检索于 2026-08-23）。 | 正式分类范围和类别名称；不作为定量证据 |
| `fao-who-cxs-227-2001` | standard | FAO/WHO，《瓶装/包装饮用水通用标准（天然矿泉水除外）》，CXS 227-2001，2019 年修订。https://workspace.fao.org/sites/codex/Standards/CXS%20227-2001/CXS_227e.pdf（检索于 2026-08-23）。 | 产品纳入/排除、预制水和按来源定义的水身份、允许添加物及处理路线控制 |
| `fao-who-cxc-48-2001` | standard | FAO/WHO，《瓶装/包装饮用水卫生操作规范（天然矿泉水除外）》，CXC 48-2001。https://workspace.fao.org/sites/codex/Standards/CXC%2048-2001/CXC_048e.pdf（检索于 2026-08-23）。 | 水源控制、处理链分解、化学/物理处理、可饮用清洗水、容器洗涤、卫生灌装封口、采集和校验规则 |
| `who-gdwq-2026` | official_guidance | 世界卫生组织，《饮用水水质准则》第四版（纳入第一、第二和第三增补），2026，ISBN 978-92-4-012122-5。https://www.who.int/publications/i/item/9789240121225（检索于 2026-08-23）。 | 从水源到消费者的风险管理、系统评估、运行监测、评审和饮用水质量控制 |
| `eu-2009-54-ec` | standard | 欧洲议会和理事会，《关于天然矿泉水开发和销售的第 2009/54/EC 号指令》。https://eur-lex.europa.eu/eli/dir/2009/54/oj（检索于 2026-08-23）。 | 天然矿泉水和泉水的水源身份、允许处理、禁止消毒、瓶装和封口路线限制 |
| `us-epa-awg-lca-2019` | official_guidance | 美国环境保护署，《大气制水技术及替代应急饮用水方案的生命周期与成本评估》，2019，DOI 10.23719/1503094。https://pasteur.epa.gov/uploads/10.23719/1503094/AWG_LCA_Report_Final_1.29.19.pdf（检索于 2026-08-23）。 | 瓶装水系统与过程分解；超滤、臭氧和紫外实例；PET 瓶坯与瓶体转换；瓶盖、标签和膜组件；未据此推导 PCR 范围 |
| `garfi-et-al-2016` | literature | Garfí, M.; Cadena, E.; Sanchez-Ramos, D.; Ferrer, I. Life cycle assessment of drinking water: Comparing conventional water treatment, reverse osmosis and mineral water in glass and plastic bottles. Journal of Cleaner Production 137 (2016) 997-1003. DOI 10.1016/j.jclepro.2016.07.218。开放全文：https://upcommons.upc.edu/bitstream/2117/102090/1/LCA%20water_v7_Revised2_POST%20PRINT.pdf（检索于 2026-08-23）。 | 全文核验瓶装水取水、厂内能源、PET 瓶、瓶盖、标签、包装和废物为重要清单要素；单案例数值不用于范围 |
