---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-the-industrial-preparation-or-manufacture-of-food-or-drink-includin-814cbc2e
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 未另列明的食品或饮料（包括动植物油脂）工业制备或制造用机械

## 1. 范围与适用性

本方法覆盖验收完整未另列机器制造，主要功能是工业制备制造食品饮料包括油脂。纳入专用机械油籽压榨及兼容提取设备、果汁液压压榨、糖果巧克力混合精炼精磨、专用食品成形切割以及非乳脂分离的食品均质。覆盖整个余项类别，各配置审查实际功能，不默认单个加工机器。本地制造外购组件表面加工装配真实工厂检查验收交付构成前景，正常客户食品生产配方寿命维护独立。

乳脂分离44511、谷类干豆碾磨44513、非电面包炉热饮烹饪加热44515、农产品干燥44518及独供零件44522独立审查。通用离心43931、独立过滤43914、温度处理43932、容器清洗灌装包装43921、称重43922、泵及清洗模块不能仅因食品线使用入类。整机须真实主要功能审查，内嵌外购组件属上游一次。非食品药物或饲料配置须其适用类别审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-the-industrial-preparation-or-manufacture-of-food-or-drink-includin-814cbc2e |
| classification_refs | CPC3.0:44516 |
| covered_products | 整个未另列工业食品饮料机器类别包括机械油脂制备 |
| excluded_products | 另列邻类机器独供零件客户加工食品非食品主要功能 |
| representative_product | 真实验收完整配置机械油压榨机或食品压榨成形均质糖果机械，不设平均示例质量 |
| production_route | 真实本地原料制造表面或有据完整外购组件，再配置装配真实验收 |
| market_state | 声明工厂交付门验收配置完整设备 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 余项类别验收完整配置工业食品饮料机器 |
| How much | 1 kg |
| How well | 声明主要功能订单物料，适用卫生接触批准真实验收标准 |
| How long or cycle | 一个声明完成制造验收期间，不采用寿命食品加工通量 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未另列明的食品或饮料（包括动植物油脂）工业制备或制造用机械 `d646385f-0b2b-4477-81f9-43b6f354ef55` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要余项食品饮料油脂功能机制型号序号订单配置，实际包含硬件选件备件填充食品接触范围，同期间验收数量校准净质量，原料合金纯度相态化学配方，自制外购完成状态本地作业验收介质不良返修，供应地域运输接收路线，原生单位化验状态返还库存分配不确定性身份缺口 |

必需限定信息须在前景数据包披露，缺失使其参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过cp_mass采集验收配置净质量，排除包装额外备件库存不良实耗试验介质，保留实际包含首套填充。 |
| native_amount | all inventory rows | actual native property | native unit | 保留各原生分子：缆Length米，液压油压缩气自来水Volume立方米，Energy千瓦时或兆焦，换算须自身同接口密度温压湿化验或缆千克每米，电每千瓦时3.6兆焦。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有据供货状态真实收到原料已识别化学品或完整兼容组件 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | 完整余项工业食品饮料机器包括油脂，实际邻类功能审查 |
| recursive_input_rule | 完整外购硬件内嵌上游制造计一次，本地制造改计真实原料作业，内部转移配对 |
| upstream_dataset_requirement | 兼容发布流类型原生单位牌号化学相食品接触角色供应地域完成运输接口 |
| disclosure | 声明订单配置净质量供货组件选件留存填充自制外购真实工厂试验客户边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| principal_function | CPC44516明确包含油脂。Sigma为卧螺离心机，尽管橄榄油用途仍按43931排除完整参考。Census84仅补充，HS8438排除油脂不能缩小CPC44516，内嵌模块独立于独供整机审查。 | cpc; sigma; census |
| source_architecture | Anderson区分机械压榨挤出预处理客户溶剂提取，整线非一个通用44516参考。Bucher液压果汁压榨须真实食品主要功能，不默认药物实验中试。Tetra区分泵传动均质装置，独立高压泵不自动完整食品均质机。Bühler精磨剪切混合巧克力料，五辊精炼不是通用谷物碾磨。 | anderson-expeller; anderson-oil; bucher-press; tetra-handbook; buhler-conche |
| supplied_configuration | Handtmann成形切割选配共挤出辊喷水及后续称重包装接口按真实订单，图示灌馅或包装连接不证明包含物料。Anderson选配轴水冷节流及闭路油冷须真实包含接口填充，示例空机毛质量通量压力节能食品产率不是Dnet工厂默认。 | handtmann-fs; anderson-expeller; sigma |
| manufacture_and_tests | 采集真实本地裁切成形机加工焊接表面装配及可归属检查工厂试验不良返修，来源不设通用牌号工厂路线验收配方。客户调试配方研发正常食品生产另定范围，仅真实验收记录证明归属才计工厂食物介质。 | anderson-expeller; bucher-press; buhler-conche; tetra-handbook |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 本地结构食品接触零件制造 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| assembly | 配置食品机械装配 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| finish | 真实本地连接清洗表面加工 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| test | 真实工厂检查验收试验 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| services | 共同期间未归属工厂公用 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| dispatch | 验收设备交付包装 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| residues | 实测废物交接直接排放 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |

### 过程：本地结构食品接触零件制造 (`fabrication`)

#### 输入

##### 产品流

###### 食品接触AISI304不锈钢板 (`ss304`)

真实供货食品接触AISI304不锈钢板，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 食品接触AISI304不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 食品接触AISI316L不锈钢板 (`ss316`)

真实供货食品接触AISI316L不锈钢板，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 食品接触AISI316L不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 非接触碳钢机架板 (`ssteel`)

真实供货非接触碳钢机架板，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 非接触碳钢机架板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 铸铁曲轴箱铸件 (`castiron`)

真实供货铸铁曲轴箱铸件，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 铸铁曲轴箱铸件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 铝结构板 (`aluminium`)

真实厚度大于0.2毫米板材，自身合金状态表面供应本地裁切成形库存返还，不从板材身份推断食品接触认证。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 本地导体制造T2铜杆 (`copper`)

真实T2铜杆自身牌号化验尺寸供应本地导体，称量收货裁切留存返还，排除完整电机内含铜。

- 选定流: 铜杆 `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 食品接触316L卫生管 (`sanitarytube`)

真实供货食品接触316L卫生管，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 食品接触316L卫生管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

###### 食品级HDPE成形板 (`peplate`)

真实供货食品级HDPE成形板，自身牌号形态尺寸化验食品接触范围供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 食品级HDPE成形板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: anderson-expeller; bucher-press; buhler-conche

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置食品机械装配 (`assembly`)

#### 输入

##### 产品流

###### 外购完整工业食品机械 (`boughtmachine`)

仅真实完成兼容食品机器外购集成接口，记录交付配置净硬件余下本地工序，上游制造计一次，不得外购已完成参考机器又重复其材料。

- 选定流: 未另列明的食品或饮料（包括动植物油脂）工业制备或制造用机械 `d646385f-0b2b-4477-81f9-43b6f354ef55`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 食品接触PTFE密封件 (`ptfe`)

真实供货食品接触PTFE密封件自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 食品接触PTFE密封件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 食品接触EPDM密封垫 (`epdm`)

真实供货食品接触EPDM密封垫自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 食品接触EPDM密封垫
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 食品接触丁腈橡胶密封件 (`nitrile`)

真实供货食品接触丁腈橡胶密封件自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 食品接触丁腈橡胶密封件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 食品接触聚氨酯输送带 (`pu`)

真实供货食品接触聚氨酯输送带自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 食品接触聚氨酯输送带
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 供货果汁压榨滤布 (`filter`)

真实供货供货果汁压榨滤布自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 供货果汁压榨滤布
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 供货低压电力缆 (`cable`)

真实不超过1000伏电力缆兼容结构供应供货标准，保留原生Length米收货安装裁切返还，实物核对才用自身同结构千克每米。

- 选定流: 低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位: Length / m
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 供货滚动轴承 (`bearing`)

真实完成滚动轴承子型尺寸表面供应，称量独立供货返还，排除完整外购驱动内含轴承。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 供货钢装配螺钉 (`screw`)

真实完成钢装配螺钉自身尺寸牌号表面供应安装返还库存，非默认螺钉数量或不锈钢食品接触牌号。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购交流电驱动机 (`motor`)

真实完成兼容交流电机专用机械装配匹配中国供货接口，称量独立收货安装返还；额定IE5营销不证明工厂能量。

- 选定流: 电动机 `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购工业齿轮箱 (`gearbox`)

真实供货外购工业齿轮箱自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购工业齿轮箱
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 食品压榨机外购液压动力单元 (`hydpump`)

真实供货食品压榨机外购液压动力单元自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 食品压榨机外购液压动力单元
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购液压缸 (`actuator`)

真实完成线性液压缸自身行程缸径密封供应接口，称量供货模块区分本地充注工厂行程试验公用。

- 选定流: 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购完整油籽螺旋压榨模块 (`screwpress`)

真实供货外购完整油籽螺旋压榨模块自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完整油籽螺旋压榨模块
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购离心机旋转转鼓组件 (`bowl`)

真实供货外购离心机旋转转鼓组件自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购离心机旋转转鼓组件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购食品均质阀组件 (`homvalve`)

真实供货外购食品均质阀组件自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购食品均质阀组件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购完整食品机械控制柜 (`hmi`)

真实供货外购完整食品机械控制柜自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完整食品机械控制柜
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购钢制隔离阀 (`valve`)

真实外购完整钢制隔离阀供应合金压力表面，此通用身份不证明卫生食品接触或均质阀。

- 选定流: 钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 外购完整压力仪表 (`sensor`)

真实供货外购完整压力仪表自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完整压力仪表
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 本地食品级润滑油 (`luboil`)

真实供货本地食品级润滑油自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地食品级润滑油
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 本地石油液压油充注 (`hydfluid`)

仅非食品接触驱动回路实际兼容石油油含量不少于70%的液压制剂，按真实温度原生Volume立方米实测自身组成密度收货库存返还留存充注，不推断食品级批准。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 本地食品级润滑脂 (`grease`)

真实供货本地食品级润滑脂自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地食品级润滑脂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 工厂处理工艺水 (`water`)

真实处理工业工艺水供应品质自身水分温度密度收货返还反应水库存，独立于去离子自来水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 留存供货工厂试验去离子水 (`retained_di`)

真实去离子水兼容离子交换反渗透供货接口，自身电导水分温度密度实测工厂试验收货库存返还，客户用水率不是工厂默认。 仅记录验收随货机器内实测留存充注，独立于试验实耗返还，空回路目录选件不证明包含填充。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### 留存供货本地石油液压油充注 (`retained_hydfluid`)

仅非食品接触驱动回路实际兼容石油油含量不少于70%的液压制剂，按真实温度原生Volume立方米实测自身组成密度收货库存返还留存充注，不推断食品级批准。 仅记录验收随货机器内实测留存充注，独立于试验实耗返还，空回路目录选件不证明包含填充。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实本地连接清洗表面加工 (`finish`)

#### 输入

##### 产品流

###### 本地设备清洗异丙醇 (`ipa`)

本地设备清洗实际兼容中国厂内异丙醇，自身纯度水密度供应实测配制库存返还反应留存，不是光学装配或假定70%消毒供应。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

###### 本地表面加工50%硝酸 (`nitric`)

真实50%硝酸水溶液工业表面清洗试剂CAS7697-37-2，自身浓度供应密度反应稀释，计量实物溶液非无水酸，无通用卫生钝化配方。

- 选定流: 硝酸，50%水溶液 `db613797-10b0-4252-b818-659b99ce85dd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

###### 本地清洗30%氢氧化钠 (`alkali`)

真实30%氢氧化钠水溶液CAS1310-73-2供应化验密度有据本地清洗，实物溶液稀释反应返还独立，非自动客户CIP消耗。

- 选定流: 氢氧化钠（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

###### 本地过氧乙酸消毒液 (`peracid`)

真实供货本地过氧乙酸消毒液自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地过氧乙酸消毒液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

###### 本地不锈钢焊接填充丝 (`weld`)

真实供货本地不锈钢焊接填充丝自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地不锈钢焊接填充丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

###### 本地气态氩焊接保护气 (`argon`)

真实供货本地气态氩焊接保护气自身完成配置材料食品接触批准供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地气态氩焊接保护气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: buhler-conche; tetra-handbook

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实工厂检查验收试验 (`test`)

#### 输入

##### 产品流

###### 工厂试验去离子水 (`di`)

真实去离子水兼容离子交换反渗透供货接口，自身电导水分温度密度实测工厂试验收货库存返还，客户用水率不是工厂默认。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: anderson-expeller; bucher-press; tetra-handbook

###### 工厂保护气氛氮气 (`nitrogen`)

仅真实工厂保护气氛氮气匹配纯度供应气相容器实测气瓶管路库存返还，食品包装寿命气及电子级供货独立。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: anderson-expeller; bucher-press; tetra-handbook

###### 真实工厂试验巴氏杀菌液体奶 (`milk`)

仅有据可归属工厂验收试验真实购入巴氏杀菌加工液体奶，自身供应组成水密度库存返还可销售或丢弃试验输出，无客户乳品产出配方。

- 选定流: 经加工的液体牛奶 `02cfe33a-6f85-4477-bfde-c8057d01cfa1`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: anderson-expeller; bucher-press; tetra-handbook

###### 真实工厂试验绵白糖 (`sugar`)

仅有据工厂试验真实供货绵白糖匹配供应形态自身蔗糖转化糖水分化验，砂糖或配方总固体不自动属于此交换。

- 选定流: 绵白糖 `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: anderson-expeller; bucher-press; tetra-handbook

###### 真实工厂试验精制葵花籽油 (`oil`)

仅有据工厂试验真实供货精制葵花籽油兼容精制葵花红花油类接口，自身物种精炼品质水组成供应，粗油种籽料正常客户制油输出独立。

- 选定流: 精制葵花籽油和红花籽油 `1b88e515-861e-4552-b494-67bb3d645aa7`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: anderson-expeller; bucher-press; tetra-handbook

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：共同期间未归属工厂公用 (`services`)

#### 输入

##### 产品流

###### 工厂低压电力 (`electricity`)

仅真实兼容中国用户侧电网平均低压交流小于1千伏，保留表计Energy千瓦时及每千瓦时3.6兆焦，归属本地作业试验表计优先，共享公用仅共同期间未归属剩余。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 工厂压缩空气 (`air`)

真实压缩气供应压力纯度原生Volume立方米声明温压干湿状态，仅真实表计密度修正，共享剩余计一次排除客户成形寿命气需求。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 外购天然气工业热 (`heat`)

仅实际兼容中国天然气工业供热表计原生Energy兆焦，声明毛净表计基准，毛热同基准独立实测返还扣一次，净供应不重复扣。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 公用自来水 (`tap`)

仅真实兼容香港处理水生产供应接口，保留原生Volume立方米，质量核对采用自身温度密度水分，未归属公用剩余排除已实测清洗试验水。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收设备交付包装 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞包装纸板 (`board`)

真实C/E/F瓦楞板纤维不少于80%供应再生含量水分称重交付材料返还，包装排除设备净质量。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; handtmann-fs

###### LDPE包装薄膜 (`film`)

真实非泡沫非增强非粘合LDPE薄膜供应厚度水分交付返还质量，非PVA PET或HDPE成形原料。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; handtmann-fs

###### 交付木托盘 (`pallet`)

真实交付木托盘自身结构水分收货复用返还台账，属于Dnet外包装，不假定欧标或每机一托质量。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; handtmann-fs

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收配置工业食品机械 (`finished`)

仅主要功能为未另列工业食品饮料制备制造包括机械油脂压榨的验收完整配置机器，校准净质量实际包含硬件填充按cp_mass；离心机包装机不能仅凭食品用途入类。

- 选定流: 未另列明的食品或饮料（包括动植物油脂）工业制备或制造用机械 `d646385f-0b2b-4477-81f9-43b6f354ef55`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_mass
- 来源: cpc; handtmann-fs

##### 废物流

##### 基本流

### 过程：实测废物交接直接排放 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送钢机加工废料 (`wsteel`)

实测外送未处理钢机加工成形废料，自身合金金属含量水分库存回收返还真实接收路线，无假定避免负荷。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送铜机加工废料 (`wcu`)

实测外送铜废料自身含铜污染水分库存接收；选定接口要求真实湿法冶金回收路线，直接重熔外送须另一身份。

- 选定流: 废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送HDPE成形板加工废物 (`wplastic`)

仅真实清洗聚乙烯加工废物在兼容机械回收接口交接，自身聚合物添加物水污染库存返还接收路线，未处理食品污染混合物独立。

- 选定流: 废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送废异丙醇溶液 (`spentipa`)

独立计量真实交接外送废异丙醇溶液，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送废异丙醇溶液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送工厂工业废水 (`wastewater`)

独立计量真实交接外送工厂工业废水，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送工厂工业废水
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送金属氢氧化物表面加工污泥 (`sludge`)

独立计量真实交接外送金属氢氧化物表面加工污泥，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送金属氢氧化物表面加工污泥
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送人类食品工厂试验残渣 (`wtestfood`)

仅真实工厂验收试验实测丢弃人类食品残渣，自身成分组成水库存返还食品废物接收路线，可销售客户返还试验食物不能默认为废物。

- 选定流: 食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送机加工润滑油废物 (`wasteoil`)

兼容供货范围本地机加工设备维护试验实测废润滑切削油，自身油水金属化验库存返还处理接收，废食用油独立。

- 选定流: 废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 交接捕集金属磨削粉尘 (`dust`)

独立计量真实交接交接捕集金属磨削粉尘，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 交接捕集金属磨削粉尘
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送LDPE包装废物 (`wfilm`)

仅真实清洗LDPE包装废物兼容机械回收接口，独立称量交付边料返还组成水库存接收，无自动回收率。

- 选定流: 废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

##### 基本流

###### 化石二氧化碳向空气 (`co2`)

仅真实独立实测化石二氧化碳向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 化石来源须自身燃料碳证据，试验食物生物源碳独立。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 异丙醇向空气 (`ipair`)

仅真实独立实测异丙醇向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 水蒸气向空气 (`vapor`)

仅真实独立实测水蒸气向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 分子二氧化氮向空气 (`no2`)

仅真实独立实测分子二氧化氮向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 分子NO2不同以NO2当量报告的NOx。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### PM10向空气 (`pm10`)

仅真实独立实测PM10向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 PM10含细粒径，避免组分元素颗粒重叠报告。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 铜向空气 (`copperair`)

仅真实独立实测铜向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 自身所含元素不同氧化物盐合金毛量，通用金属离子流要求实际LCIA方法区分时优先独立匹配个别物种。

- 选定流: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 六价铬向空气 (`chromiumair`)

仅真实独立实测六价铬向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 须自身六价铬化验，非总铬合金质量。

- 选定流: 六价铬 `08a91e70-3ddc-11dd-950b-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 镍向空气 (`nickelair`)

仅真实独立实测镍向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 自身所含元素不同氧化物盐合金毛量，通用金属离子流要求实际LCIA方法区分时优先独立匹配个别物种。

- 选定流: 镍 `08a91e70-3ddc-11dd-96c8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_configuration | 先分真实配置场址过程表计，共同期间剩余按实测因果公用需求作业分配，不用目录食品通量。可归属失败试验返修不良计入验收机器负荷，内部转移配对抵销，披露复用返还试验食物可销售共产品接收分配处理，无虚构避免负荷。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收机器 | foreground_record | 型号配置序号净质量Naccepted Dnet包含硬件填充排除包装备件 | 校准可追溯称重核对同配置期间验收完整机器真实订单物料，合计验收净质量排除包装备件库存不良实耗试验，只纳入实际留存随货填充。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_materials | fabrication | 本地原料化学成分 | foreground_record | Qattr自身毛量化验水密度合金配方库存返还反应留存零件真实本地路线 | 称量真实原料各本地表面连接清洗成分，自身各流元素水化学含量核对留存硬件反应产物槽回收废物库存返还。真实表面合金卫生批准仅对应接触零件，不代表所有机架，完整模块内含材料上游计一次。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_modules | assembly | 完整硬件留存填充 | foreground_record | Qattr物料完成选件硬件质量长度独立填充配方化验温压密度收货安装返还库存 | 硬件分支称量真实完成收货安装返还组件缆长，声明余下本地工序。化学分支按自身原生单位独立计量本地填充润滑气及自身组成水温压密度库存反应留存返还。完整外购模块内含化学属上游一次，硬件毛量不能替代化学量。首套留存供货填充独立于试验实耗客户维护。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_tests | test | 观察工厂试验介质 | foreground_record | Qattr真实验收订单试验重复不良水食物气收货自身组成状态返还复用出售丢弃库存 | 表计真实归属工厂试验重复失败，各食物化学水气自身实测数量组成，返还复用回收可销售食物独立记录不能消失；排除正常客户生产目录配方能力研发演示客户调试，除非明确声明制造归属有证。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_utilities | services | 各未归属公用 | foreground_record | Qattr共同期间场址输入自产输出库存归属表计毛净热基准独立返还温压湿密度 | 各公用共同期间输入真实自产扣输出库存核对归属本地试验表计，仅剩余分配一次，缆能量体积保留原生单位。毛热同基准独立实测返还扣一次，净热不重复。工艺DI公用水内部循环冷却流各接口独立，返还配对抵销。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 各包装件 | foreground_record | Qattr包装牌号水尺寸交付收货返还复用库存包装排除Dnet | 独立称量真实纸板薄膜托盘，同验收配置期间核对交付返还复用库存，不设通用包装比目录运输毛重作设备净质量。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_wastes | residues | 各外送废物流 | foreground_record | Qattr交接重量自身组成化验水密度库存返还回收接收运输处理路线 | 各外送废物按真实交接状态独立实测，保留自身流干湿组成化学金属含量返还库存接收路线，废水污泥废溶剂捕集粉尘食物油独立，处理不同直接环境释放，捕集料非空气，缺兼容身份保留缺口不作错误来源废物替代。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_emissions | residues | 各直接释放物种 | foreground_record | Qattr CAS物种来源区室治理后浓度同时流量时间温压干湿氧修正无组织取样捕集反应副产 | 采用独立观察治理后浓度乘匹配真实流量时间单位状态修正并独立取样无组织，按自身化验核对输入留存回收销毁污泥废水库存，捕集非销毁，非空气未解释残差不能推空气。分子NO2不同NOx当量，所含六价铬镍铜不同总金属氧化物盐合金并防PM重叠。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 同真实配置期间可归属原生单位合计除以校准验收完整机器净质量合计，保留单机数量真实分母证据。 | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | 同配置期间Qattr包含可归属制造装配试验不良返修负荷，Naccepted为验收机器数，Dnet为校准净质量合计，M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet，目录空机毛重食品通量不是分母。 | 校准配置特定验收台账 |
| quality_physical | all inventory rows | 各元素化学项采用自身毛量化验水干湿基反应库存返还留存，合金污泥溶液质量不同所含元素活性化学量，各水流须自身水分真实温度密度独立反应留存填充蒸发排出库存，内部返还配对抵销。 | 自身各流化验状态库存反应记录 |
| quality_solvent | ipa; spentipa; ipair; wastewater | 逐溶剂自身化验库存反应留存回收捕集销毁废水废介质项核对独立实测空气，捕集非销毁，非空气未解释残差不能变成释放异丙醇。 | 独立实测去向空气记录 |
| quality_scope | reference product | 保留整个食品饮料油脂余项类别真实主要功能配置审查，食品接触牌号批准属组件特定非整个机架，目录选件空机毛重客户配方产率公用需求营销节能维护耗材非工厂制造默认。 | 真实订单物料验收原始技术正文 |
| quality_identity | all inventory rows | 匹配真实发布100类型原生基准内部ID属性单位组官方双语名完整化学CAS牌号相供应完成区室，各真实未列材料原料燃料填充模块试验食物运输废物释放物种新增独立查询原子实测交换，未解决身份保留缺口，缺失不同零，不适用须实物证据。 | 自身完整直读供应接口审查 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须完整验收余项工业食品饮料油脂机器功能双语等效每千克净参考，拒通用离心独立泵过滤包装零件客户食物作整设备替代。 | cpc; census; sigma |
| validate_makebuy | 须真实完整供货订单物料食品接触组件批准本地自制外购试验边界，拒重复内嵌上游模块假定选件填充目录工厂配方寿命客户耗材，纳入可归属失败试验返修不良。 | cpc; anderson-expeller; anderson-oil; bucher-press; buhler-conche; tetra-handbook; handtmann-fs; sigma; census |
| validate_balances | 须各流自身实物化学水溶剂平衡治理后物种浓度乘匹配流量时间状态及独立无组织，共同期间公用输入真实自产输出库存核对归属表计仅剩余，毛热返还独立扣一次。 |  |
| validate_species | 须实测分子NO2真实六价铬所含镍铜及不重叠PM，实际LCIA方法区分时优先个别镍铜物种，化石CO2须来源证据区分食物生物源碳，捕集溶解料属非空气，报告执行跳过检查发现真实完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 真实验收配置余项工业食品饮料油脂机器制造 |
| excluded_use | 邻类机器组件客户食品替代目录质量工艺配方通用工厂假定 |
| required_metadata | 全部参考限定Qattr/Naccepted/Dnet原生单位自身化验状态订单物料自制外购真实试验供应接收分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性残差身份范围缺口执行跳过检查完整性 |
| update_trigger | 主要功能订单配置接触合金化学相供应自制外购场址期间验收处理变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | 联合国CPC3.0完整食品饮料油脂机器及相邻类别 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整44516包括油脂，邻类4451/44522及43931/43914/43921/43932审查。 |
| anderson-expeller | handbook | Anderson机械油籽压榨结构与实际选件 | https://www.andersonintl.com/wp-content/uploads/2026/04/260238_Anderson-International_Expeller-Press-Brochure-updates-compressed.pdf | 机械螺旋压榨真实双压榨轴承联轴冷却选配水节流，空机质量非验收配置Dnet。 |
| anderson-oil | handbook | Anderson油籽设备机械压榨与预处理边界 | https://www.andersonintl.com/oilseed-equipment/ | 油籽压榨挤出预处理接口，客户溶剂提取整厂不自动完整参考。 |
| bucher-press | handbook | Bucher液压果汁压榨机及工业实验用途 | https://www.bucherunipektin.com/en/bucher-hpx-presses | 液压活塞排水转筒食品压榨，真实食品药物实验中试功能及空机毛供货审查。 |
| buhler-conche | handbook | Bühler巧克力五辊精炼与单轴精磨设备 | https://www.buhlergroup.com/global/en/media/media-releases/finer-s-ed-26-and-elk-s-ed-26.html | 食品级组件机架驱动及五辊单轴机械巧克力加工，不设合金营销节能配方默认。 |
| tetra-handbook | handbook | Tetra Pak乳品加工手册均质机 | https://dairyprocessinghandbook.tetrapak.com/chapter/homogenizers | 泵传动活塞密封精磨均质装置，客户乳压力流量蒸汽非工厂试验用量。 |
| handtmann-fs | handbook | Handtmann FS525食品成形切割系统 | https://www.us.processing.handtmann.com/_Resources/Persistent/3/7/4/4/3744f681e461d09e41db8449cb7f5bfa216a4eb2/Produktdatenblatt_FS%20525_EN.pdf | 食品成形切割选配共挤出辊喷水后续称重包装，真实订单确定包含接口。 |
| sigma | handbook | Alfa Laval Sigma油提取卧螺离心机反例 | https://www.alfalaval.fr/globalassets/documents/products/separation/centrifugal-separators/decanters/alfa-laval-sigma-range-olive-oil-decanter-centrifuge.pdf | 完整参考排除反例，卧螺离心43931即使橄榄油专用，真实包含可选组件毛重不可普遍化。 |
| census | official_guidance | 美国Census2022章84补充机器边界 | https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | 仅补充HS优先通用离心边界，HS8438油脂排除不能缩小明确CPC44516范围。 |
